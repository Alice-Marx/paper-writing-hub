# paper-writing-hub — 学术论文写作技能总览（README_ALL）

> 学术写作与科研参考库：8 份上游开源项目的**全量离线副本**（仅排除 .git，不裁剪任何内容），
> 集中存放在本技能安装目录 `references\` 下，任何能读文件+跑 shell 的 coding agent 都可用。
> 上游副本由安装器（`npx paper-writing-hub`）从各官方仓库克隆，随上游保持最新。

## 目录结构

```
paper-writing-hub\
├── SKILL.md             技能入口：八副本总表 + 平台路由规则（agent 从这里进）
├── README.md            安装与使用说明（人读）
├── README_ALL.md        本文件：来源与介绍总览
├── scripts/install.mjs  安装器（克隆上游 + 建原生技能链接）
└── references\
    ├── supervisor-skills.md                ┐
    ├── academic-research-skills.md         │
    ├── academic-research-skills-codex.md   │ 8 份使用指南
    ├── codex-claude-academic-skills.md     │ （任务速查表/技能清单/更新方法）
    ├── nature-skills.md                    │
    ├── claude-scholar.md                   │
    ├── scientific-agent-skills.md          │
    ├── ai-research-skills.md               ┘
    ├── Supervisor-Skills\                  ┐
    ├── Academic-Research-Skills\           │
    ├── Academic-Research-Skills-Codex\     │ 8 份全量副本
    ├── Codex-Claude-Academic-Skills\       │ （技能本体，共 ~558MB）
    ├── Nature-Skills\                      │
    ├── Claude-Scholar\                     │
    ├── Scientific-Agent-Skills\            │
    └── AI-Research-SKILLs\                 ┘
```

---

## 八份副本的来源与介绍

### 1. Supervisor-Skills — 博导方法论（写作纪律与思考模板）

- **来源**：<https://github.com/HKUSTDial/Supervisor-Skills>（香港科技大学（广州）骆昱宇团队，「你的 AI 科研副导师」）
- **版本**：v2.1.0（上游 2026-07-10 发布）｜52MB / 186 文件｜**CC BY-NC-SA 4.0**（drawio-reconstruction 子技能为 MIT）
- **是什么**：把资深博导的科研经验"蒸馏"成 12 个可执行技能 + 六章系统性方法论手册（中英双语 `handbook/`、`handbook-en/`），覆盖从 Idea 构思到论文投稿的完整生命周期。手册含顶会案例剖析（Alpha-SQL ICML'25、AFlow ICLR'25、LEAD VLDB'26）。
- **12 个技能**：idea-evaluator（五维框架评估 idea）、tech-paper-template / benchmark-paper-template（两类论文逻辑骨架）、intro-drafter（六段式 Introduction，引用经核验）、paper-writer（证据门控正文写作）、paper-polish（忠于原意的润色/去 AI 腔/中译英）、deep-research（综述级文献调研）、pre-submission-reviewer（投稿前终审）、rebuttal-guidance、figure-designer（三张承重图设计）、drawio-reconstruction（参考图重建可编辑 .drawio）、vibe-research-workflow（AI 辅助科研行为规则）。
- **什么时候用**：写单段/单节/Intro、润色、方法论指导、思考模板——轻、快、纪律清晰。
- **指南**：`references/supervisor-skills.md`

### 2. Academic-Research-Skills（ARS）— 工程化流水线

- **来源**：<https://github.com/Imbad0202/academic-research-skills>（作者 Cheng-I Wu / Imbad0202，DOI 10.5281/zenodo.20696614）
- **版本**：v3.23.1（上游 2026-10-16 发布，更新极活跃）｜46MB / 2845 文件｜**CC BY-NC 4.0**
- **是什么**：多 agent 学术流水线，"AI 是副驾驶不是机长"的人机协作理念。5 个技能共 **35 种模式**：deep-research（8 模式，含 PRISMA 系统综述）、academic-paper（11 模式，从规划到 rebuttal 审计）、academic-paper-reviewer（6 模式，含 Devil's Advocate 反谄媚审稿人）、academic-pipeline（10 阶段全流程编排 + 诚信闸门）、sr-screener（8 模式，系统综述文献双盲筛选）。特色是**引用防幻觉工程**：Semantic Scholar API 逐条核验 + claim 级审计 + HIGH-WARN 阻断输出；支持 5 种引用格式、6 类论文结构、Style Calibration（学习用户文风）。
- **什么时候用**：整篇论文全流程、按审稿意见修订、模拟评审、引用逐条核验、系统综述——重、工程化、核验强。
- **指南**：`references/academic-research-skills.md`

### 3. Academic-Research-Skills-Codex（ARS-Codex）— ARS 的 Codex 原生版

- **来源**：<https://github.com/Imbad0202/academic-research-skills-codex>（ARS 主仓库的 Codex 原生姊妹版，独立分发）
- **版本**：v3.23.1（与上游同 tag 同步）｜88MB / 5304 文件｜**CC BY-NC 4.0**
- **是什么**：同一套 ARS 内容的 Codex 交付形态——**单一技能 `academic-research-suite`** 内部路由到六个工作流（deep-research、academic-paper、academic-paper-reviewer、academic-pipeline、sr-screener，外加主仓库没有的 **experiment-agent** 实验环节）。`/ars-*` 命令改为别名模拟，hooks 不执行，默认用 Codex 原生子代理。仓库另附完整插件打包 `plugins/ars-codex/`（44MB），可供 `codex plugin add` 使用。
- **什么时候用**：Codex 会话里的论文重任务直接调 `$academic-research-suite`。
- **指南**：`references/academic-research-skills-codex.md`

### 4. Codex-Claude-Academic-Skills（CCAS）— 中文优先三件套

- **来源**：<https://github.com/zLanqing/codex-claude-academic-skills>（面向中国科研工作者，Claude Code / Codex 双平台原生设计）
- **快照**：2026-10-17（无版本号发布）｜8.3MB / 389 文件｜**MIT**
- **是什么**：三个互补技能，默认中文产出：**research-writing-skill**（论文章节撰写/修改/润色/回复审稿人，保留公式、英文术语、引用）、**office-academic-skill**（PDF 论文转 Word 阅读报告、组会/开题/中期/答辩 PPT，OOXML 级编辑，"每页一个核心观点"）、**scientific-toolkit-skill**（MATLAB/Python 科研计算、仿真、信号/图像处理、期刊级配图、文献查找，光电信息领域最深）。按"出图 → 写正文 → 答辩 PPT"联动设计。
- **什么时候用**：中文学位论文/中文稿件、答辩 PPT、文献阅读报告、科研计算出图。
- **指南**：`references/codex-claude-academic-skills.md`

### 5. Nature-Skills — Nature 标准工具链

- **来源**：<https://github.com/Yuan1z0825/nature-skills>（让 AI Agent 按 Nature 期刊标准工作）
- **快照**：2026-10-17（无版本号发布）｜46MB｜**Apache-2.0**
- **是什么**：22 个 `nature-*` 技能 + nature-shared 共享包，主打"中文输入 → Nature 风格英文产出"：nature-polishing（润色翻译）、nature-writing（起草章节）、nature-reviewer（模拟三份互盲审稿报告）、nature-response（逐点回复 + cover letter + 标红修改稿）、nature-statistics（统计审查）、nature-reader / nature-paper-xray / nature-paper-card（精读三件套）、nature-paper2ppt（文献汇报 PPT）、nature-image2ppt（图片转可编辑 PPT）、nature-paper-to-patent（论文转专利）、nature-figure（投稿级绘图）、nature-citation / nature-academic-search / nature-ref-verifier / nature-downloader（文献四件套）、nature-literature-pipeline（每日文献推送）等。
- **什么时候用**：中文稿改 Nature 英文、模拟互盲审稿、统计审查、文献精读与汇报。
- **指南**：`references/nature-skills.md`

### 6. Claude-Scholar — 科研全流程助手

- **来源**：<https://github.com/Galaxy-Dawn/claude-scholar>（半自动学术研究助手，CS/AI 研究者向；另有 Codex / Kimi / OpenCode 分支，本副本为 main 即 Claude 版）
- **快照**：2026-10-17（无版本号发布）｜9.4MB｜**MIT**（obsidian-* 技能另有上游许可文件随附）
- **是什么**：45 个技能覆盖科研全流程（ideation → 实验 → 报告 → 写作 → 发表 → post-acceptance）：ml-paper-writing（从代码库/实验证据起草 ML 论文）、citation-verification（引用核查）、paper-self-review（投稿前自查）、writing-anti-ai（去 AI 腔）、publication-chart-skill（出版级图表）、latex-conference-template-organizer、review-response（/rebuttal）等；特色是 **Obsidian 文献知识库三件套**与**写作模式挖掘**（paper-miner agent 从优秀论文提取可复用写作模式）。注意：其 nature-* 四技能是 Nature-Skills 的子集，完整版以第 5 份副本为准。
- **什么时候用**：从代码与实验证据起草 ML 论文、投稿前自查、维护文献知识库。整套启用走其自带 `scripts/setup.sh`（Windows 需 Git Bash）。
- **指南**：`references/claude-scholar.md`

### 7. Scientific-Agent-Skills — 学科纵深（177 技能）

- **来源**：<https://github.com/k-dense-ai/scientific-agent-skills>（K-Dense Inc. 维护，"Turn any AI agent into an AI Scientist"，配套 arXiv 论文 2609.00065）
- **快照**：2026-10-17｜285MB（本技能最大副本）｜仓库 **MIT**（个别技能 SKILL.md 内可另声明许可）
- **是什么**：**177 个学科技能 + 100+ 科学数据库接入**，覆盖生物、化学、医学、药物发现、材料等领域（scanpy、rdkit、diffdock、cellprofiler、pybamm、cantera……）。与论文直接相关的：scientific-writing（证据可追溯写作）、peer-review（本地保密评审）、literature-review / paper-lookup、**paperzilla / paperclip**（约 1100 万篇全文论文只读虚拟文件系统，引用可定位到行号）、citation-management（Zotero）、scientific-slides / latex-posters / pptx-posters、research-grants（基金申请）、venue-templates、hypothesis-generation。查技能先看 `docs/skills.md` 总索引。
- **什么时候用**：学科分析任务、海量全文检索、基金申请、学术海报。
- **指南**：`references/scientific-agent-skills.md`

### 8. AI-Research-SKILLs — AI/ML 研究工程

- **来源**：<https://github.com/Orchestra-Research/AI-Research-SKILLs>（AI Research Skills Library，"from idea to paper"；原 zechenzhangAGI 个人账号已迁至该组织，以 org 版为准）
- **快照**：2026-10-17｜25MB｜**MIT**
- **是什么**：AI/ML 研究的**实验工程半边**——技能目录直接在仓库根、按编号编排（`0-autoresearch-skill`、`01-model-architecture`、`02-tokenization`、`03-fine-tuning`、`04-mechanistic-interpretability`、`05-data-processing`、`06-post-training`、`07-safety-alignment`、`08-distributed-training`、`09-infrastructure` 等 30+ 目录，README 称含子技能共 98 项）：模型训练、推理、评测、MLOps。最贴近论文流程的是 `0-autoresearch-skill`（idea 到 paper 的自主研究主技能）。
- **什么时候用**：论文的实验怎么跑、怎么评、怎么加速——写作用前几套，实验工程用这套。
- **指南**：`references/ai-research-skills.md`

---

## 场景 → 用哪套（速查）

| 场景 | 用哪套 |
|---|---|
| 写 Intro/单段/单节、润色去 AI 腔、中译英、方法论与思考模板 | Supervisor-Skills |
| 整篇论文全流程、修订、模拟评审、引用逐条核验、系统综述/PRISMA、AI 披露 | ARS（Codex 上用 ARS-Codex） |
| 中文学位论文/中文稿件、组会/开题/答辩 PPT、PDF→Word 阅读报告 | CCAS |
| MATLAB/Python 科研计算与期刊级配图（光电信息领域最深） | CCAS scientific-toolkit |
| 中文稿 → Nature 风格英文、模拟互盲审稿、逐点 rebuttal、统计审查 | Nature-Skills |
| 文献精读/汇报 PPT/论文转专利/每日文献推送 | Nature-Skills |
| 从代码库起草 ML 论文、投稿前自查、Obsidian 文献知识库 | Claude-Scholar |
| 生/化/医/药/材学科分析、1100 万篇全文检索、基金申请、学术海报 | Scientific-Agent-Skills |
| AI/ML 实验工程：训练/推理/评测/MLOps、idea→paper | AI-Research-SKILLs |
| CS 顶会技术类/Benchmark 论文 | 先 Supervisor-Skills 模板锁骨架，需要时再进 ARS 流程 |

完整分工表与平台交付说明见 `references/academic-research-skills.md` 末尾「参考分工总表」。

## 原生安装矩阵（junction 指向本技能副本，随重跑安装器即更新）

| 平台 | 原生可用技能 | 说明 |
|---|---|---|
| Claude Code（`~/.claude/skills/`） | ARS 5 技能 + CCAS 3 技能 + nature 23 个 = 31 个 | 直接触发；ARS 要 `/ars-*` 命令与 hooks 需另装插件版 |
| Codex（`~/.codex/skills/`） | academic-research-suite + CCAS 3 技能 + nature 23 个 = 27 个 | `$academic-research-suite` 调用 |
| 其他 agent（ZCode/DSH/Cursor 等） | 读本技能副本按指南路由 | Supervisor-Skills、Claude-Scholar、Scientific-Agent-Skills、AI-Research-SKILLs 各平台均走参考路由（原因与按需安装方式见各自指南） |

## 公共写作纪律（八套一致）

- **绝不编造引用与数据**：事实性声明只来自用户材料 / 当次核验检索 / 不含数字人名对比的领域常识（ARS 另有引用核验阶梯；CCAS 加不编造 DOI/期刊信息；ARS 有 claim 级审计）。
- **零占位符**：产出不允许 `[占位]` 标签，没来源的声明靠检索、改写或删除解决。
- **声明强度不超过证据强度**；真实结果与预期结果措辞严格区分。
- ARS/Supervisor-Skills 均为人机协作理念：AI 起草、人类决策，每阶段可停下确认。

## 维护

- **更新**：重跑 `npx paper-writing-hub`（已存在的上游目录会跳过，删除后重跑即重新克隆最新版）；或进入 `references/<副本名>` 直接 `git pull`。
- **卸载**：`npx paper-writing-hub --remove` 移除原生链接；`--remove --purge` 连技能目录一起删除。
- **上游更新**：各指南末尾有对应仓库的克隆命令；ARS 与 ARS-Codex 同 tag 发布，需同步核对版本号。
