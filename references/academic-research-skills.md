# Academic Research Skills（ARS）— 论文撰写参考（第二通道）

## 来源与版本

- 上游：<https://github.com/Imbad0202/academic-research-skills>（Claude Code 学术研究技能包，DOI 10.5281/zenodo.20696614，更新极活跃）
- 本地副本：`references/Academic-Research-Skills/`，**v3.23.1**（上游 2026-10-16 发布），2026-10-17 快照，46MB/2845 文件**全量工作树（仅排除 .git）**
- 结构：根目录 5 个技能目录（各含 SKILL.md + agents + references + templates + examples）+ `shared/`（跨技能协议）+ `scripts/` + `docs/`、`tests/`、`evals/`、插件层（`commands/`、`hooks/`、根 `agents/`）+ `MODE_REGISTRY.md`（35 模式总表，速查入口）
- 许可：**CC BY-NC 4.0**（署名 + 非商业）。学术用途没问题
- 完整性：**全量副本，不裁剪任何内容**；`skills/` 下的指针文件（内容为 `../<目录名>`）是仓库自带的技能暴露机制，真身是根目录那 5 个技能目录

## 定位与理念

**人机协作（human-in-the-loop），AI 是副驾驶不是机长**：full 模式可起草整篇论文，但 pipeline 每阶段停下来等用户确认；AI 做繁琐工作（搜文献、排格式、验引用、查逻辑一致性），研究者保留决策权。它的立论基础是 The AI Scientist（Nature 2026）暴露的全自动失败模式（幻觉实验、引用幻觉、方法论伪造），针对性建了阻断式检查。

与 [[supervisor-skills]] 的关键差异：**ARS 是工程化流水线**（多 agent、模式路由、引用核验走 Semantic Scholar API、claim 级审计、防谄媚机制），繁中/英文向、覆盖全学科；Supervisor-Skills 是博导方法论（中文写作纪律与思考模板），轻量、CS 顶会向。

## 技能×模式速查（完整 35 模式表见 `Academic-Research-Skills/MODE_REGISTRY.md`）

| 任务 | 技能/模式 | 路径（相对 `Academic-Research-Skills/`） |
|---|---|---|
| 从零写整篇论文（IMRaD 等 6 类文型） | academic-paper `full` | `academic-paper/SKILL.md` |
| 苏格拉底式论文规划（逐章引导） | academic-paper `plan` | 同上 |
| 只要大纲 + 证据地图 | academic-paper `outline-only` | 同上 |
| 按审稿意见修订 + 逐条 R&R 回应 | academic-paper `revision` / `revision-coach` | 同上 |
| 写摘要（繁中+英双语） | academic-paper `abstract-only` | 同上 |
| 文献综述（论文格式） | academic-paper `lit-review` | 同上 |
| 格式转换 LaTeX/DOCX/PDF、引用格式 APA/Chicago/MLA/IEEE/Vancouver | academic-paper `format-convert` | 同上 |
| **逐条引用核验（查幻觉引用）** | academic-paper `citation-check`（可选 `ARS_CLAIM_AUDIT=1` claim 级审计） | 同上 |
| AI 使用披露声明 | academic-paper `disclosure` | 同上 |
| Rebuttal 质检（只审不写） | academic-paper `rebuttal-audit` | 同上 |
| 深度文献调研（8 模式：full/quick/lit-review/fact-check/socratic/three-way-scan/systematic-review/review） | deep-research | `deep-research/SKILL.md` |
| **PRISMA 2020 系统综述/meta 分析** | deep-research `systematic-review` | 同上 |
| 模拟同行评审（5 份审稿报告+编辑决定+修订路线图；含 Devil's Advocate 反谄媚审稿人） | academic-paper-reviewer `full`（另有 quick/methodology-focus/re-review/guided/calibration） | `academic-paper-reviewer/SKILL.md` |
| research→write→review→revise→finalize 全流程编排（10 阶段 + 诚信闸门） | academic-pipeline | `academic-pipeline/SKILL.md` |
| 系统综述文献筛选（双盲 AI 筛查+仲裁，8 模式，对接 Rayyan） | sr-screener | `sr-screener/SKILL.md` |

## 核心特色（选用时想这些）

- **引用防幻觉工程**：Semantic Scholar API 核验 + 三层引用 anchor + claim-source 对齐审计；HIGH-WARN（claim-not-supported / fabricated-reference 等）直接阻断输出。基于 Zhao 等人 2026 对 250 万篇论文 1.11 亿条引用的幻觉引用研究。
- **学术诚信闸门**：pipeline Stage 2.5/4.5 跑 7 类阻断式检查（防 The AI Scientist 式失败模式），见 `academic-pipeline/references/ai_research_failure_modes.md`。
- **Style Calibration**：喂 3 篇以上过往论文，学习用户文风（句式节奏/词汇偏好/引用整合），起草时作软性引导。
- **Writing Quality Check**：识别机器味文风（空泛词、清嗓子式开头、打断论证的标点）。
- 语言：繁中 + 英文双语（触发词为繁中/英/韩/西；**简中任务直接描述需求即可**，agent 读 SKILL.md 按模式路由，不依赖触发词）。

## Claude Code 专属（完整版原生安装）

Claude Code 技能目录已原生安装 5 个技能，**junction 指向本技能全量副本，重跑安装器即更新、零重复占用**：

`~/.claude/skills/` → `academic-paper`、`academic-paper-reviewer`、`academic-pipeline`、`deep-research`、`sr-screener`

- **当前 harness 是 Claude Code 时**：论文任务直接用这些原生技能（触发词或斜杠命令均可），按各自 SKILL.md 全功能执行（agents/scripts/shared 相对引用经 junction 均可解析），不必走本文档的速查路由。
- 需要 `/ars-*` 命令与 hooks（插件运行时）时：Claude Code 里 `/plugin marketplace add Imbad0202/academic-research-skills` + `/plugin install academic-research-skills`。
- junction 重建（换机器/重装后）：`New-Item -ItemType Junction -Path <Claude技能目录\<技能名>> -Value <本技能 references/Academic-Research-Skills\<技能名>>`，或直接重跑 `npx paper-writing-hub` 自动重建。

## 执行协议

1. 接到任务 → 查上面速查表或 MODE_REGISTRY.md → **读对应技能 SKILL.md 全文**，按其模式规范执行；SKILL.md 引用的 `shared/references/*` 协议与技能内 references 按需深读。
2. `scripts/` 已随附可直接 python 跑（引用核验、ledger、一致性检查等）；**为插件环境设计的部分（hook 标记、缓存失效、CI lint）失败就跳过**，按文档规范人工执行，不硬磕（失败换路不硬磕，同一路线重试不超过 2 次）。
3. 可选依赖：Pandoc（DOCX 输出）、tectonic（PDF 编译）、联网（Semantic Scholar 核验）；纯 Markdown 产出零依赖。
4. 长文/批量任务先写文件再执行，成品读回验证。

## 参考分工总表（本技能九份副本）

| 场景 | 用哪套 |
|---|---|
| 写 Intro/单段/单节、润色去 AI 腔、中译英、方法论指导与思考模板 | Supervisor-Skills（轻、快、纪律清晰） |
| 整篇论文全流程、按审稿意见修订、模拟评审、系统综述/PRISMA、引用逐条核验、AI 披露 | ARS（重、工程化、核验强） |
| 中文学位论文/中文稿件撰写与润色、组会/开题/答辩 PPT、PDF→Word 文献阅读报告 | CCAS research-writing / office-academic（中文优先，独有 Office 学术文档能力） |
| 科研计算与出图：MATLAB/Python 仿真、信号/图像处理、统计、期刊级配图（光电信息领域最深） | CCAS scientific-toolkit |
| 中文稿 → Nature 风格英文润色/写作、模拟互盲审稿、逐点 rebuttal、统计审查 | Nature-Skills（nature-polishing/writing/reviewer/response/statistics） |
| 文献精读（中英对照/推理精读/卡片）、文献汇报 PPT、论文转专利、每日文献推送 | Nature-Skills（nature-reader/xray/card/paper2ppt/paper-to-patent/literature-pipeline） |
| 从代码库与实验证据起草 ML 论文、投稿前自查、Obsidian 文献知识库、写作模式挖掘 | Claude-Scholar（ml-paper-writing/paper-self-review/citation-verification/obsidian-*） |
| 生/化/医/药/材学科分析（scanpy/rdkit/diffdock…）、1100 万篇全文虚拟文件系统、基金申请、LaTeX/PPTX 海报 | Scientific-Agent-Skills（先查其 docs/skills.md 索引） |
| AI/ML 实验工程：训练/推理/评测/MLOps、idea→paper 自主研究 | AI-Research-SKILLs（0-autoresearch-skill 起按编号） |
| 新手从零写完一篇论文/学位论文：头脑风暴→章节规划→逐章写作→质量门控→LaTeX（人文/法学/医学有专属规范） | Research-Writing-Skill（入口 research-writing-assistant，19 模块） |
| CS 顶会技术类/Benchmark 论文 | 先 Supervisor-Skills 的 tech/benchmark 模板锁骨架，需要时再进 ARS 流程 |
| 公共纪律一致：绝不编造引用与数据（各套各有细化）、零占位符、声明强度不超过证据强度 | 任选其一都成立 |

**平台交付形态**：junction 原生安装的——Claude Code：ARS 5 + CCAS 3 + Nature 全部 + RWS 入口；Codex：academic-research-suite + CCAS 3 + Nature 全部 + RWS 入口。其余（Claude-Scholar、Scientific-Agent-Skills、AI-Research-SKILLs）读本技能副本，安装方式见各自指南。分工逻辑与平台无关，按上表选内容、按平台选入口。

各套细节与联动链见 [[supervisor-skills]]、[[codex-claude-academic-skills]]、[[nature-skills]]、[[claude-scholar]]、[[scientific-agent-skills]]、[[ai-research-skills]]、[[research-writing-skill]]。

## 更新方法

```bash
git -c http.proxy=http://127.0.0.1:7897 clone --depth 1 https://github.com/Imbad0202/academic-research-skills <临时目录>
# 全量替换：删旧 references/Academic-Research-Skills 后整目录拷入，仅去掉 .git，不做任何裁剪
```

更新后核对 CHANGELOG.md / package.json 版本号、修正本文档版本与日期。
