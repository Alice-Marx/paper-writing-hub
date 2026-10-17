# Nature-Skills — 论文撰写参考（Nature 风格通道）

## 来源与版本

- 上游：<https://github.com/Yuan1z0825/nature-skills>（按 Nature 期刊标准工作的中文向技能集）
- 本地副本：`references/Nature-Skills/`，2026-10-17 快照，46MB**全量工作树（仅排除 .git）**；无版本号发布，以快照日期为准
- 结构：`skills/` 下 22 个 `nature-*` 技能 + `nature-shared` 共享支持包（非独立技能）；每技能含 SKILL.md + manifest.yaml + references + scripts + static
- 许可：**Apache-2.0**

## 定位

**中文科研人员的 Nature 标准工具链**，与另几套的差异：主打"中文输入 → Nature 风格英文产出"，且覆盖论文之外的科研日常（精读、汇报 PPT、文献推送、转专利）。claude-scholar 里的 nature-* 技能源出于此（那边是子集），以本副本为准。

## 技能速查（22 个）

| 任务 | 技能 |
|---|---|
| 中文稿润色为简洁 Nature 风格英文（保数值/结论边界） | nature-polishing |
| 起草 Nature 风格摘要/引言/讨论章节 | nature-writing |
| proposal 写作状态机 | nature-proposal-writer |
| 社科写作 | nature-social-science |
| 模拟三份互盲审稿报告 | nature-reviewer |
| 逐点回复审稿意见 + cover letter + 标红修改稿 | nature-response |
| 统计审查（p 值/多重比较/样本量） | nature-statistics |
| 数据可用性声明 | nature-data |
| 中英对照读论文 | nature-reader |
| 推理式精读 | nature-paper-xray |
| PDF 翻译 | nature-paper-trans |
| 精读卡片 | nature-paper-card |
| 文献汇报 PPT | nature-paper2ppt |
| 图片转可编辑 PPT | nature-image2ppt |
| 论文转专利 | nature-paper-to-patent |
| 投稿级科研绘图 | nature-figure |
| 文献引用/检索/核验/下载 | nature-citation / nature-academic-search / nature-ref-verifier / nature-downloader |
| 每日文献推送流水线 | nature-literature-pipeline |
| 实验日志 | nature-experiment-log |

## 原生安装（Claude Code 与 Codex）

两平台均已 junction 安装全部 23 个目录（含 nature-shared；指向已安装的全量副本 `references/Nature-Skills/skills/<名>`，随重跑安装器即更新）。**当前 harness 是 Claude Code 或 Codex 时直接用原生技能**；其他 agent 读本技能副本。部分技能需额外依赖（Python 库、Playwright 或 MCP 服务），见各 SKILL.md。

## 更新方法

```bash
git -c http.proxy=http://127.0.0.1:7897 clone --depth 1 https://github.com/Yuan1z0825/nature-skills <临时目录>
# 全量替换 references/Nature-Skills（整目录拷入，仅去 .git，不裁剪）
```
