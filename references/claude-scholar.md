# Claude-Scholar — 论文撰写参考（科研全流程通道）

## 来源与版本

- 上游：<https://github.com/Galaxy-Dawn/claude-scholar>（半自动学术研究助手，CS/AI 研究者向，human-in-the-loop）
- 本地副本：`references/Claude-Scholar/`，2026-10-17 快照，9.4MB**全量工作树（仅排除 .git）**；支持 Claude Code（主）/ Codex / Kimi / OpenCode（各有分支，本副本是 main 即 Claude 版）
- 结构：`skills/` 45 个技能 + `agents/` + `commands/` + `hooks/` + `rules/` + `scripts/`（setup.sh 安装器）+ `templates/` + Obsidian 知识库三件套；中英日三语文档
- 许可：**MIT**（obsidian-* 技能另有 UPSTREAM 许可文件随附）

## 定位

覆盖**科研全流程**（ideation → 实验 → 报告 → 写作 → 发表 → post-acceptance），特色是 Obsidian 知识库工作流与写作模式挖掘（paper-miner agent 从优秀论文提取可复用写作模式）。nature-* 四技能是其子集，完整版以 [[nature-skills]] 副本为准。

## 论文相关技能速查（45 个中的重点）

| 任务 | 技能 |
|---|---|
| 从代码库/实验证据/文献起草 ML 论文 | ml-paper-writing |
| 选题与研究构思 | research-ideation |
| 实验结果分析/报告 | results-analysis / results-report |
| 逐点审稿回复（/rebuttal 命令） | review-response |
| 引用核查（claim-引用对齐） | citation-verification |
| 投稿前自查（结构/逻辑/引用/图表/合规） | paper-self-review |
| 去 AI 腔 | writing-anti-ai |
| 出版级图表（pubfig/pubtab） | publication-chart-skill |
| LaTeX 会议模板整理 | latex-conference-template-organizer |
| 接收后事务 | post-acceptance |
| Obsidian 文献知识库 | obsidian-project-kb-core / obsidian-source-ingestion / obsidian-literature-workflow |

（其余为通用开发/规划/技能自进化类：architecture-design、git-workflow、skill-improver 等，全量在库。）

## 安装说明

本套**未做 junction 原生安装**：nature-* 四技能与 [[nature-skills]] 重名冲突，且其推荐安装方式是整套 setup.sh（含 agents/commands/hooks/rules，Windows 需 Git Bash）。要在 Claude Code 里整套启用时：克隆/引用本技能副本后跑 `bash <副本>/scripts/setup.sh`（支持备份/增量/卸载）；只想用个别技能时读 `skills/<名>/SKILL.md` 按规范执行即可。

## 更新方法

```bash
git -c http.proxy=http://127.0.0.1:7897 clone --depth 1 https://github.com/Galaxy-Dawn/claude-scholar <临时目录>
# 全量替换 references/Claude-Scholar（整目录拷入，仅去 .git，不裁剪）
```
