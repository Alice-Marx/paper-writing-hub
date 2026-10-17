#!/usr/bin/env node
/**
 * paper-writing-hub installer
 *
 * Clones 8 open-source academic skill collections into <target>/references/,
 * copies the hub skill files (SKILL.md + guides), and exposes selected skills
 * natively to Claude Code (~/.claude/skills) and Codex (~/.codex/skills)
 * via junctions (Windows) or symlinks (POSIX).
 *
 * Usage:
 *   npx paper-writing-hub                       # install everything, defaults
 *   npx paper-writing-hub --select ars,ccas     # only some sources (see ALIASES)
 *   npx paper-writing-hub --no-upstreams        # skill files only, no clones
 *   npx paper-writing-hub --no-links            # clones only, no native exposure
 *   npx paper-writing-hub --target <dir>        # custom install dir
 *   npx paper-writing-hub --proxy http://127.0.0.1:7890
 *   npx paper-writing-hub --remove [--purge]    # remove links [and the install dir]
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PKG_ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const IS_WIN = process.platform === 'win32';
const HOME = os.homedir();

const SOURCES = {
  'Supervisor-Skills': 'https://github.com/HKUSTDial/Supervisor-Skills.git',
  'Academic-Research-Skills': 'https://github.com/Imbad0202/academic-research-skills.git',
  'Academic-Research-Skills-Codex': 'https://github.com/Imbad0202/academic-research-skills-codex.git',
  'Codex-Claude-Academic-Skills': 'https://github.com/zLanqing/codex-claude-academic-skills.git',
  'Nature-Skills': 'https://github.com/Yuan1z0825/nature-skills.git',
  'Claude-Scholar': 'https://github.com/Galaxy-Dawn/claude-scholar.git',
  'Scientific-Agent-Skills': 'https://github.com/k-dense-ai/scientific-agent-skills.git',
  'AI-Research-SKILLs': 'https://github.com/Orchestra-Research/AI-Research-SKILLs.git',
};

const ALIASES = {
  ss: 'Supervisor-Skills', supervisor: 'Supervisor-Skills',
  ars: 'Academic-Research-Skills',
  arsc: 'Academic-Research-Skills-Codex', 'ars-codex': 'Academic-Research-Skills-Codex',
  ccas: 'Codex-Claude-Academic-Skills',
  nature: 'Nature-Skills',
  scholar: 'Claude-Scholar',
  sas: 'Scientific-Agent-Skills', scientific: 'Scientific-Agent-Skills',
  airs: 'AI-Research-SKILLs', ai: 'AI-Research-SKILLs',
};

const SKILL_FILES = ['SKILL.md', 'README.md', 'README_ALL.md', 'LICENSE', 'THIRD_PARTY_NOTICES.md'];

/** Native exposure sets: [linkName, [sourceKey, relPathInsideSource]] */
function claudeLinks() {
  const ars = ['academic-paper', 'academic-paper-reviewer', 'academic-pipeline', 'deep-research', 'sr-screener']
    .map((n) => [n, ['Academic-Research-Skills', n]]);
  const ccas = ['research-writing-skill', 'office-academic-skill', 'scientific-toolkit-skill']
    .map((n) => [n, ['Codex-Claude-Academic-Skills', n]]);
  return [...ars, ...ccas, ...natureLinks()];
}
function codexLinks() {
  const suite = [['academic-research-suite', ['Academic-Research-Skills-Codex', 'skills/academic-research-suite']]];
  const ccas = ['research-writing-skill', 'office-academic-skill', 'scientific-toolkit-skill']
    .map((n) => [n, ['Codex-Claude-Academic-Skills', n]]);
  return [...suite, ...ccas, ...natureLinks()];
}
function natureLinks() {
  const root = path.join(target, 'references', 'Nature-Skills', 'skills');
  if (!fs.existsSync(root)) return [];
  return fs.readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => [d.name, ['Nature-Skills', `skills/${d.name}`]]);
}

let target = path.join(HOME, '.agents', 'skills', 'paper-writing-hub');
let select = null, noUpstreams = false, noLinks = false, remove = false, purge = false, proxy = null;

const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--target') target = path.resolve(argv[++i]);
  else if (a === '--select') select = argv[++i].split(',').map((s) => s.trim()).filter(Boolean);
  else if (a === '--no-upstreams') noUpstreams = true;
  else if (a === '--no-links') noLinks = true;
  else if (a === '--remove') remove = true;
  else if (a === '--purge') purge = true;
  else if (a === '--proxy') proxy = argv[++i];
  else if (a === '-h' || a === '--help') { console.log(USAGE); process.exit(0); }
  else { console.error(`unknown option: ${a}\n\n${USAGE}`); process.exit(1); }
}

const USAGE = 'npx paper-writing-hub [--target <dir>] [--select a,b] [--no-upstreams] [--no-links] [--proxy <url>] [--remove [--purge]]';

const log = (msg) => console.log(msg);
const die = (msg) => { console.error(`ERROR: ${msg}`); process.exit(1); };

function selectedSources() {
  if (!select) return Object.keys(SOURCES);
  const out = [];
  for (const s of select) {
    const key = SOURCES[s] ? s : ALIASES[s.toLowerCase()];
    if (!key) die(`unknown source "${s}" (valid: ${Object.keys(SOURCES).join(', ')} / aliases: ${Object.keys(ALIASES).join(', ')})`);
    out.push(key);
  }
  return out;
}

function gitClone(url, dest) {
  const args = ['clone', '--depth', '1'];
  if (proxy) args.push('-c', `http.proxy=${proxy}`);
  args.push(url, dest);
  const r = spawnSync('git', args, { stdio: 'inherit' });
  return r.status === 0;
}

function makeLink(linkPath, destPath) {
  if (fs.existsSync(linkPath)) { log(`  [skip] link exists: ${linkPath}`); return; }
  fs.mkdirSync(path.dirname(linkPath), { recursive: true });
  try {
    if (IS_WIN) fs.symlinkSync(destPath, linkPath, 'junction');
    else fs.symlinkSync(destPath, linkPath, 'dir');
    log(`  [link] ${linkPath} -> ${destPath}`);
  } catch (e) {
    log(`  [warn] cannot create link ${linkPath}: ${e.message}`);
  }
}

function isLinkTo(p, dest) {
  try { return fs.realpathSync(p) === fs.realpathSync(dest); } catch { return false; }
}

function removeLinks() {
  const platforms = [
    ['claude-code', path.join(HOME, '.claude', 'skills'), claudeLinksAll()],
    ['codex', path.join(HOME, '.codex', 'skills'), codexLinksAll()],
  ];
  for (const [, dir, links] of platforms) {
    for (const [name, [src, rel]] of links) {
      const linkPath = path.join(dir, name);
      const dest = path.join(target, 'references', src, rel);
      if (fs.existsSync(linkPath) && isLinkTo(linkPath, dest)) {
        if (IS_WIN) fs.rmdirSync(linkPath);
        else fs.unlinkSync(linkPath);
        log(`  [removed] ${linkPath}`);
      }
    }
  }
}
function claudeLinksAll() { return claudeLinks(); }
function codexLinksAll() { return codexLinks(); }

function main() {
  if (remove) {
    log('Removing native links...');
    removeLinks();
    if (purge) {
      fs.rmSync(target, { recursive: true, force: true });
      log(`Removed install dir: ${target}`);
    } else log(`Install dir kept (use --purge to delete): ${target}`);
    return;
  }

  log(`paper-writing-hub -> ${target}`);
  fs.mkdirSync(target, { recursive: true });

  // 1. copy hub skill files
  for (const f of SKILL_FILES) {
    const src = path.join(PKG_ROOT, f);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(target, f));
  }
  const refDst = path.join(target, 'references');
  fs.mkdirSync(refDst, { recursive: true });
  const refSrc = path.join(PKG_ROOT, 'references');
  for (const f of fs.readdirSync(refSrc)) {
    if (f.endsWith('.md')) fs.copyFileSync(path.join(refSrc, f), path.join(refDst, f));
  }
  log('Hub skill files copied (SKILL.md, guides, README_ALL).');

  // 2. clone upstream collections
  const sel = selectedSources();
  if (!noUpstreams) {
    for (const key of sel) {
      const dest = path.join(refDst, key);
      if (fs.existsSync(dest)) {
        // a placeholder dir (only README.md) is replaced by the real clone
        const real = fs.readdirSync(dest).filter((f) => f !== 'README.md');
        if (real.length === 0) fs.rmSync(dest, { recursive: true, force: true });
      }
      if (fs.existsSync(dest)) { log(`[skip] ${key} already present`); continue; }
      log(`[clone] ${key} from ${SOURCES[key]} (depth 1)...`);
      if (!gitClone(SOURCES[key], dest)) {
        log(`[warn] failed to clone ${key}; run again later or configure --proxy. Hub skill still installed.`);
      }
    }
  } else log('Skipping upstream clones (--no-upstreams).');

  // 3. native exposure
  if (!noLinks) {
    const platforms = [
      ['Claude Code', path.join(HOME, '.claude', 'skills'), claudeLinks()],
      ['Codex', path.join(HOME, '.codex', 'skills'), codexLinks()],
    ];
    for (const [name, dir, links] of platforms) {
      log(`Native skills for ${name} (${dir}):`);
      let made = 0;
      for (const [linkName, [src, rel]] of links) {
        if (!sel.includes(src)) continue;
        const dest = path.join(refDst, src, rel);
        if (!fs.existsSync(dest)) continue;
        makeLink(path.join(dir, linkName), dest);
        made++;
      }
      if (!made) log('  (nothing to link for the selected sources)');
    }
  } else log('Skipping native links (--no-links).');

  log('\nDone. Next steps:');
  log('  - Claude Code / Codex: restart the session, paper-related skills now trigger natively.');
  log(`  - Other agents: point them at ${path.join(target, 'SKILL.md')}`);
  log(`  - Human overview: ${path.join(target, 'README_ALL.md')}`);
}

main();
