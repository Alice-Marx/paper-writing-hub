# Codex-Claude-Academic-Skills（CCAS）— 论文撰写参考（第三通道）

## 来源与版本

- 上游：<https://github.com/zLanqing/codex-claude-academic-skills>（面向中国科研工作者的学术三件套，Claude Code / Codex 双平台原生设计）
- 本地副本：`references/Codex-Claude-Academic-Skills/`，2026-10-17 快照，8.3MB/389 文件**全量工作树（仅排除 .git）**
- 结构：3 个技能目录（各含 SKILL.md + agents + references）；无版本号发布，以快照日期为准
- 许可：**MIT**（三套参考中最宽松，商用亦可，保留版权声明即可）

## 定位

**中文优先**的科研工作流，与同模块另两套的差异：Supervisor-Skills 是中文方法论但产出面向英文顶会；ARS 是繁中/英工程化流水线；CCAS 默认中文产出，且补齐了两块另两套没有的能力——**学术 Office 文档**（Word 阅读报告、组会/答辩 PPT）与**科研计算工具箱**（MATLAB/Python 仿真出图）。三技能按互补联动设计（README 原文）：

```
论文写作：scientific-toolkit（数据分析出图）→ research-writing（写正文）→ office-academic（答辩 PPT）
文献阅读：office-academic（PDF → Word 阅读报告）→ office-academic（组会 PPT）
仿真研究：scientific-toolkit（MATLAB/Python 仿真+配图）→ research-writing（方法+实验章节）
```

## 技能速查

| 任务 | 技能 | 路径（相对 `Codex-Claude-Academic-Skills/`） |
|---|---|---|
| 论文各章节撰写/修改/润色：摘要、引言、相关工作、方法、实验、讨论、结论；回复审稿人；LaTeX/Overleaf 文稿；学位论文 | research-writing-skill | `research-writing-skill/SKILL.md`（深读 `references/paper-writing/`：修辞结构指南、写作清单、图表模板、头脑风暴） |
| PDF 论文 → Word 阅读报告；组会/开题/中期/答辩 PPT；DOCX/PPTX 编辑与检查（OOXML 级；每页一个核心观点、行动式标题、演讲者备注） | office-academic-skill | `office-academic-skill/SKILL.md`（`references/office-docx/`、`office-pptx/`、`thesis-defense-pptx/`） |
| MATLAB/Python 科研计算：仿真、信号/图像处理、统计、优化、机器学习、期刊级配图、文献查找与引用管理（arXiv/CrossRef）；光电信息领域最深 | scientific-toolkit-skill | `scientific-toolkit-skill/SKILL.md`（`references/scientific-skills/`） |

## 原生安装（Claude Code 与 Codex）

两平台技能目录均已 junction 安装（指向本技能全量副本，零重复占用；更新时重跑 `npx paper-writing-hub` 或对上游目录 git pull）：

- `~/.claude/skills/` → `research-writing-skill`、`office-academic-skill`、`scientific-toolkit-skill`
- `~/.codex/skills/` → 同名 3 个

**当前 harness 是 Claude Code 或 Codex 时**：论文/Office/科研计算任务直接用这些原生技能，按各自 SKILL.md 触发执行；其他 agent走参考路由。junction 重建（换机器/模块迁移后）：`New-Item -ItemType Junction -Path <平台技能目录>\<技能名>> -Value <本技能 references/Codex-Claude-Academic-Skills\<技能名>>`。

## 写作纪律（与前两套公共部分 + CCAS 特有）

- **不编造数据、DOI、期刊信息、实验结果**（与 SS/ARS 的"绝不编造引用"同源）
- **四类信息分级**：原文 / 用户确认 / 推断 / 建议扩展，产出中明确标注来源类别
- 避免"显著""先进"等模糊措辞；保留英文论文标题、公式、变量名、软件命令与引用格式
- 默认中文产出（英文术语不硬翻）

三套分工总表见 [[academic-research-skills]] 末尾「三套参考的分工」。

## 更新方法

```bash
git -c http.proxy=http://127.0.0.1:7897 clone --depth 1 https://github.com/zLanqing/codex-claude-academic-skills <临时目录>
# 全量替换：删旧 references/Codex-Claude-Academic-Skills 后整目录拷入，仅去掉 .git，不做任何裁剪
```

更新后核对 README 变化、修正本文档日期。
