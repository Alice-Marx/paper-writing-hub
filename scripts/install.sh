#!/usr/bin/env bash
# paper-writing-hub installer (POSIX). The Node installer (install.mjs) is the
# canonical one; this shell version clones the upstream collections and creates
# symlinks for Claude Code / Codex without requiring Node.
set -euo pipefail

TARGET="${1:-$HOME/.agents/skills/paper-writing-hub}"
HERE="$(cd "$(dirname "$0")/.." && pwd)"

declare -A SOURCES=(
  [Supervisor-Skills]="https://github.com/HKUSTDial/Supervisor-Skills.git"
  [Academic-Research-Skills]="https://github.com/Imbad0202/academic-research-skills.git"
  [Academic-Research-Skills-Codex]="https://github.com/Imbad0202/academic-research-skills-codex.git"
  [Codex-Claude-Academic-Skills]="https://github.com/zLanqing/codex-claude-academic-skills.git"
  [Nature-Skills]="https://github.com/Yuan1z0825/nature-skills.git"
  [Claude-Scholar]="https://github.com/Galaxy-Dawn/claude-scholar.git"
  [Scientific-Agent-Skills]="https://github.com/k-dense-ai/scientific-agent-skills.git"
  [AI-Research-SKILLs]="https://github.com/Orchestra-Research/AI-Research-SKILLs.git"
)

mkdir -p "$TARGET/references"
cp "$HERE"/SKILL.md "$HERE"/README.md "$HERE"/README_ALL.md "$HERE"/LICENSE "$HERE"/THIRD_PARTY_NOTICES.md "$TARGET"/ 2>/dev/null || true
cp "$HERE"/references/*.md "$TARGET/references/"

for key in "${!SOURCES[@]}"; do
  dest="$TARGET/references/$key"
  if [ -d "$dest" ]; then echo "[skip] $key"; continue; fi
  echo "[clone] $key"
  git clone --depth 1 "${SOURCES[$key]}" "$dest"
done

link() { # link <skills-dir> <name> <dest>
  [ -d "$1" ] || return 0
  [ -e "$1/$2" ] && { echo "  [skip] $1/$2"; return 0; }
  ln -s "$3" "$1/$2" && echo "  [link] $1/$2 -> $3"
}

CC="$TARGET/references/Codex-Claude-Academic-Skills"
for s in research-writing-skill office-academic-skill scientific-toolkit-skill; do
  link "$HOME/.claude/skills" "$s" "$CC/$s"
  link "$HOME/.codex/skills" "$s" "$CC/$s"
done
for s in academic-paper academic-paper-reviewer academic-pipeline deep-research sr-screener; do
  link "$HOME/.claude/skills" "$s" "$TARGET/references/Academic-Research-Skills/$s"
done
link "$HOME/.codex/skills" academic-research-suite "$TARGET/references/Academic-Research-Skills-Codex/skills/academic-research-suite"
if [ -d "$TARGET/references/Nature-Skills/skills" ]; then
  for d in "$TARGET"/references/Nature-Skills/skills/*/; do
    n="$(basename "$d")"
    link "$HOME/.claude/skills" "$n" "$d"
    link "$HOME/.codex/skills" "$n" "$d"
  done
fi

echo "Done. Claude Code / Codex: restart the session. Other agents: point them at $TARGET/SKILL.md"
