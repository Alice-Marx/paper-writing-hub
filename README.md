# paper-writing-hub

**一个命令装齐 9 个开源学术技能项目，写论文从选题到 rebuttal 全流程覆盖。** 统一路由、统一安装，并在 Claude Code / Codex 里原生暴露 30+ 个技能（junction/symlink 指向本地副本，零重复占用）。

> One command installs 8 open-source academic skill collections (paper writing, polishing,
> peer review, rebuttal, literature review, citation verification, thesis PPT, scientific
> computing...) and exposes selected skills natively to Claude Code & Codex.

## 它聚合了什么

| 项目 | 是什么 | 许可 |
|---|---|---|
| [Supervisor-Skills](https://github.com/HKUSTDial/Supervisor-Skills)（HKUSTDial） | 「AI 科研副导师」：12 技能 + 六章方法论手册，写作纪律与思考模板 | CC BY-NC-SA 4.0 |
| [academic-research-skills](https://github.com/Imbad0202/academic-research-skills)（ARS） | 多 agent 学术流水线，5 技能 35 模式：全流程编排、引用逐条核验（Semantic Scholar）、PRISMA 系统综述、模拟评审 | CC BY-NC 4.0 |
| [academic-research-skills-codex](https://github.com/Imbad0202/academic-research-skills-codex) | ARS 的 Codex 原生单体版（含 experiment-agent 实验环节） | CC BY-NC 4.0 |
| [codex-claude-academic-skills](https://github.com/zLanqing/codex-claude-academic-skills)（CCAS） | 中文优先三件套：论文写作、学术 Office（答辩 PPT / Word 阅读报告）、MATLAB/Python 科研计算 | MIT |
| [nature-skills](https://github.com/Yuan1z0825/nature-skills) | Nature 标准 22 技能：中文→Nature 风格英文润色、起草、模拟互盲审稿、逐点 rebuttal、统计审查、文献精读、汇报 PPT | Apache-2.0 |
| [claude-scholar](https://github.com/Galaxy-Dawn/claude-scholar) | 科研全流程 45 技能：ML 论文起草、引用核查、投稿自查、Obsidian 文献知识库 | MIT |
| [scientific-agent-skills](https://github.com/k-dense-ai/scientific-agent-skills)（K-Dense） | 177 个学科技能 + 100+ 科学数据库（生/化/医/药/材），1100 万篇全文论文虚拟文件系统 | MIT |
| [AI-Research-SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs) | AI/ML 研究工程 30+ 技能：训练/推理/评测/MLOps，idea→paper 的实验半边 | MIT |
| [research-writing-skill](https://github.com/norman-bury/research-writing-skill) | 新手全流程写作系统 19 模块：头脑风暴→章节规划→逐章写作→质量门控→LaTeX | MIT |

按场景怎么选（写 Intro / 系统综述 / 答辩 PPT / Nature 润色 / 学科分析……）见 [README_ALL.md](README_ALL.md) 的「场景 → 用哪套」速查表。

## 安装

### 前置要求

- **Node.js ≥ 18**（`npx` 方式需要；git clone 方式可只用脚本）
- **git**（克隆上游项目）
- 网络能访问 GitHub；中国大陆网络建议先配代理：`export HTTPS_PROXY=http://127.0.0.1:7890`（或安装时 `--proxy`）
- 磁盘：全量安装约 **600MB+**（8 个上游项目全量副本）；可用 `--select` 按需安装

### 方式一：npx 一键安装（推荐）

```bash
npx paper-writing-hub
```

这一条命令会：

1. 把本技能（SKILL.md + 8 份使用指南 + README_ALL）安装到 `~/.agents/skills/paper-writing-hub/`
2. 浅克隆（`--depth 1`）8 个上游项目到该目录 `references/` 下
3. 在 Claude Code（`~/.claude/skills/`）和 Codex（`~/.codex/skills/`）技能目录创建 junction（Windows）/ symlink（macOS/Linux），原生暴露：
   - **Claude Code 32 个**：ARS 5（academic-paper、academic-paper-reviewer、academic-pipeline、deep-research、sr-screener）+ CCAS 3（research-writing-skill、office-academic-skill、scientific-toolkit-skill）+ Nature 23（nature-*）+ RWS（research-writing-assistant）
   - **Codex 28 个**：academic-research-suite + CCAS 3 + Nature 23 + RWS（research-writing-assistant）

### 方式二：npm 全局安装

```bash
npm install -g paper-writing-hub
paper-writing-hub            # 同 npx，参数一致
```

> 说明：仓库与 npm 包的 `references/` 下，9 个技能目录是**占位链接页**（各含一个指向上游仓库的 README）。运行安装器后，这些目录会被替换为对应上游项目的全量副本。

### 方式三：git clone

```bash
git clone https://github.com/Alice-Marx/paper-writing-hub.git
node paper-writing-hub/scripts/install.mjs        # 参数同下
# 或 POSIX shell 版（clone + symlink）
bash paper-writing-hub/scripts/install.sh
```

### 安装选项

| 选项 | 说明 |
|---|---|
| `--target <dir>` | 自定义安装目录（默认 `~/.agents/skills/paper-writing-hub`） |
| `--select a,b,...` | 只装部分上游。可用全名或别名：`ss`(Supervisor-Skills) `ars` `arsc`(ARS-Codex) `ccas` `nature` `scholar` `sas`(Scientific-Agent-Skills) `airs`(AI-Research-SKILLs) `rws`(Research-Writing-Skill) |
| `--no-upstreams` | 只装技能文件，不克隆上游（体积 KB 级） |
| `--no-links` | 不创建 Claude Code / Codex 原生链接 |
| `--proxy <url>` | git 克隆走指定代理（如 `http://127.0.0.1:7890`） |
| `--remove` | 移除原生链接（保留安装目录） |
| `--remove --purge` | 连安装目录一起删除 |

示例——只要 ARS 流水线和 Nature 润色：

```bash
npx paper-writing-hub --select ars,nature
```

## 使用

### Claude Code

安装后**新开会话**即可，原生技能按触发词自动命中：

- `帮我写这篇论文的 Introduction` → intro 相关技能（ARS academic-paper / nature-writing）
- `review this paper` / `模拟三位审稿人评审我的稿件` → academic-paper-reviewer / nature-reviewer
- `把中文稿润色成 Nature 风格英文` → nature-polishing
- `按审稿意见逐点写回复` → nature-response / academic-paper revision 模式
- `check my citations` → ARS citation-check（Semantic Scholar 核验）

### Codex

新开会话后 `$academic-research-suite` 调用 ARS 六工作流（也认 `ars-plan` 等别名）；nature-* / CCAS 技能同理原生触发。

### 其他 agent（ZCode / Cursor / 任意能读文件的 coding agent）

把 agent 指向安装目录的 `SKILL.md`（总路由），或直接读 `README_ALL.md` 了解全貌后按指南使用。

### 公共写作纪律（所有技能一致）

- **绝不编造引用与数据**：事实性声明只来自用户材料 / 当次核验检索 / 领域常识
- **零占位符**：没来源的声明靠检索、改写或删除解决，不打 `[TODO]` 标签
- 声明强度不超过证据强度；真实结果与预期结果严格区分措辞

## 更新与卸载

```bash
npx paper-writing-hub              # 已存在的上游会跳过；删掉 references/<名> 后重跑即取最新
cd ~/.agents/skills/paper-writing-hub/references/Academic-Research-Skills && git pull   # 单独更新某一个
npx paper-writing-hub --remove --purge   # 卸载
```

## 许可

- 本仓库的原创内容（SKILL.md 路由、8 份指南、README_ALL、安装器）：**MIT**
- 上游 8 个项目的内容**不在本包内再分发**——安装器直接从各官方仓库克隆，用户获得的是上游原版，遵循各自许可（见上表与 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)）
- 注意：Supervisor-Skills（CC BY-NC-SA 4.0）与 ARS 两套（CC BY-NC 4.0）为**非商业许可**，商用需另行确认上游授权

## 致谢

本项目的全部价值来自上游作者的工作，特别感谢 HKUSTDial（骆昱宇团队）、Imbad0202（Cheng-I Wu）、zLanqing、Yuan1z0825、Galaxy-Dawn、K-Dense、Orchestra-Research。上游项目若有更新请以官方仓库为准。
