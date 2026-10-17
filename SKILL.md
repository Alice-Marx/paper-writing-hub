---
name: paper-writing-hub
description: 学术论文写作总路由（paper-writing-hub）：聚合 8 个开源学术技能项目（Supervisor-Skills 博导方法论、ARS 学术流水线及其 Codex 版、CCAS 中文写作+学术Office+科研计算、Nature-Skills、Claude-Scholar、Scientific-Agent-Skills 177 学科技能、AI-Research-SKILLs），按任务场景路由到对应技能集，并在 Claude Code / Codex 原生暴露精选技能。用于写论文（write paper / 论文 / academic paper）、润色（polish / 润色 / 中译英）、Introduction、审稿回复（rebuttal / review response）、文献综述（literature review / 系统综述）、引用核验（citation check）、模拟评审（peer review）、答辩 PPT、科研作图、基金申请等任务。
license: MIT
---

# paper-writing-hub — 学术论文写作总路由

一个 skill 聚合 **8 个开源学术技能项目**：统一安装（`npx paper-writing-hub`）、统一路由（按任务选技能集）、统一原生暴露（Claude Code 31 个 / Codex 27 个 junction 技能）。适合任何能读文件 + 跑 shell 的 coding agent（Claude Code、Codex、ZCode、Cursor、DSH 等）。

路径约定：`<skill>` = 本 SKILL.md 所在目录（默认 `~/.agents/skills/paper-writing-hub`）；8 份上游副本在 `<skill>/references/<副本名>/`（由安装器克隆，全量工作树、不裁剪；仓库/包内同位置是**占位链接页**——一个指向上游仓库的 README，安装器会自动替换为全量副本）。

## 安装 / 更新 / 卸载

```bash
npx paper-writing-hub                      # 全装：技能文件 + 8 上游 + 原生链接
npx paper-writing-hub --select ars,nature  # 只装部分（别名见 install.mjs）
npx paper-writing-hub --no-upstreams       # 只装技能文件不克隆
npx paper-writing-hub --proxy http://127.0.0.1:7890   # 需要代理时
npx paper-writing-hub --remove --purge     # 卸载
```

上游更新：删 `references/<副本名>` 重跑安装器，或进目录 `git pull`。

## 八份副本总表

| 副本 | 是什么 | 许可 | 指南 |
|---|---|---|---|
| Supervisor-Skills（v2.1.0） | 博导方法论：12 技能+六章手册，轻任务/写作纪律 | CC BY-NC-SA 4.0 | `references/supervisor-skills.md` |
| Academic-Research-Skills（ARS v3.23.1） | 多 agent 流水线：5 技能 35 模式，重任务/引用核验/系统综述 | CC BY-NC 4.0 | `references/academic-research-skills.md` |
| Academic-Research-Skills-Codex（v3.23.1） | ARS 的 Codex 原生单体版 academic-research-suite（含 experiment-agent） | CC BY-NC 4.0 | `references/academic-research-skills-codex.md` |
| Codex-Claude-Academic-Skills（CCAS） | 中文优先三件套：中文稿件/学位论文、答辩 PPT、Word 阅读报告、MATLAB/Python 科研计算 | MIT | `references/codex-claude-academic-skills.md` |
| Nature-Skills | Nature 标准 22 技能：中文→Nature 英文润色/写作/模拟审稿/rebuttal/精读/汇报PPT/绘图 | Apache-2.0 | `references/nature-skills.md` |
| Claude-Scholar | 科研全流程 45 技能：ML 论文起草/引用核查/投稿自查/Obsidian 知识库 | MIT | `references/claude-scholar.md` |
| Scientific-Agent-Skills | 学科纵深：177 技能+100 科学数据库（生/化/医/药/材） | MIT（个别技能另声明） | `references/scientific-agent-skills.md` |
| AI-Research-SKILLs | AI/ML 研究工程 30+ 技能：训练/推理/评测/MLOps | MIT | `references/ai-research-skills.md` |

## 用法（路由规则）

1. **原生安装平台**：若当前 harness 是 **Claude Code**——ARS 五技能（academic-paper / academic-paper-reviewer / academic-pipeline / deep-research / sr-screener）、CCAS 三技能、Nature-Skills 全部 23 个已原生装在 `~/.claude/skills/`；**Codex**——academic-research-suite、CCAS 三技能、Nature-Skills 全部在 `~/.codex/skills/`（均由安装器建 junction/symlink 指向 `<skill>/references/` 内副本）。原生技能直接按各自 SKILL.md 触发执行。
2. **参考路由**（未 junction 的套件与其他 agent）：读 `references/academic-research-skills.md` 末尾「参考分工总表」选通道 → 读该套指南速查表 → 读对应 SKILL.md 按其规范执行。
3. **公共写作纪律**（八套一致，必须遵守）：事实性声明只来自用户材料/当次核验检索/领域常识，**绝不编造引用与数据**，产出**零占位符**，声明强度不超过证据强度。

## 文档

- `README.md` — 安装与使用说明（人读）
- `README_ALL.md` — 八套技能来源与介绍总览
- `THIRD_PARTY_NOTICES.md` — 上游项目署名与许可
