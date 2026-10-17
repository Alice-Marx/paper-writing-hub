# Research-Writing-Skill（RWS / norman-bury）— 论文撰写参考（新手全流程通道）

## 来源与版本

- 上游：<https://github.com/norman-bury/research-writing-skill>（科研写作助手，工程化写作协作系统）
- 本地副本：`references/Research-Writing-Skill/`，**v3.1.0**（上游 2026-05-10 发布），2026-10-17 快照，12MB/77 文件**全量工作树（仅排除 .git）**
- 结构：根 `SKILL.md`（入口技能 `research-writing-assistant`）+ `skills/` **19 个模块** + `latex-templates/` + `plan-template/` + `hooks/` + `scripts/`；多平台配置（Claude / Codex / Cursor / OpenCode / Gemini 各有安装说明）
- 许可：**MIT**
- 注意：与 CCAS 里的 `research-writing-skill`（zLanqing）**同名不同源**——那边是单技能规范文档，这边是多模块编排系统；原生安装名用其自有技能名 `research-writing-assistant`，无冲突。

## 定位

**面向本科/研究生/科研新手的工程化写作流程**：不是单轮润色，而是"可追踪、可恢复、可复用"的项目级协作——头脑风暴 → 确认章节结构 → 逐章写作 → 质量门控 → LaTeX 输出。默认产出 Markdown/LaTeX（非 Word）；**不编造文献，高风险结论需用户二次核验**。与另几套的分工：论文学术深度/顶会向用 SS/ARS，中文 Office 产出用 CCAS，**从零开始被引导着写完一篇论文（尤其学位论文）用这套**。

## 技能速查（19 模块）

| 任务 | 模块（`skills/` 下） |
|---|---|
| 写论文入口（说"我要写论文"触发全流程） | using-research-writing / paper-orchestration |
| 选题头脑风暴 | brainstorming-research |
| 证据驱动写作（每个论断可溯源） | evidence-driven-writing / writing-core |
| 逐章写作 | writing-chapters |
| 实验结果规划 | experiment-results-planning |
| 文献综述 | literature-review |
| 统计分析 | statistical-analysis |
| Python 图表 / 流程图 | figures-python / figures-diagram |
| LaTeX 输出（含用户模板 latex-templates/） | latex-output |
| 投稿前自审 / 核验 | peer-review / verification |
| 学科规范：人文社科 / 法学 / 医学 | writing-humanities / writing-law / writing-medical |
| 环境安装 / 提示词集 | environment-setup / prompts-collection |

## 原生安装（Claude Code 与 Codex）

两平台均已 junction：`~/.claude/skills/research-writing-assistant` 与 `~/.codex/skills/research-writing-assistant` → 指向本技能全量副本（随副本更新自动跟进）。**当前 harness 是 Claude Code 或 Codex 时**：说"我要写论文/帮我写学位论文"即触发入口技能。其他 agent 读本副本根 `SKILL.md` 按其流程执行。项目级用法（其官方推荐）：把整个副本目录放入论文项目根目录，按各平台 INSTALL 说明接线。

## 更新方法

```bash
git -c http.proxy=http://127.0.0.1:7897 clone --depth 1 https://github.com/norman-bury/research-writing-skill <临时目录>
# 全量替换 references/Research-Writing-Skill（整目录拷入，仅去 .git，不裁剪）
```

更新后核对 CHANGELOG 版本号、修正本文档版本与日期。参考分工总表见 [[academic-research-skills]] 末尾。
