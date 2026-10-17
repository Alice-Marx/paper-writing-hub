# Supervisor-Skills — 论文撰写参考（核心通道）

> 本技能共 8 份副本：[[academic-research-skills]]（ARS 流水线）、[[academic-research-skills-codex]]（ARS 的 Codex 版）、[[codex-claude-academic-skills]]（CCAS 中文/Office/计算）、[[nature-skills]]（Nature 风格）、[[claude-scholar]]（科研全流程）、[[scientific-agent-skills]]（177 学科技能）、[[ai-research-skills]]（AI/ML 研究工程）。「参考分工总表」在 ARS 指南末尾。

## 来源与版本

- 上游：<https://github.com/HKUSTDial/Supervisor-Skills>（港科大广州 骆昱宇团队，「AI 科研副导师」）
- 本地副本：`references/Supervisor-Skills/`，**v2.1.0**（上游 2026-07-10 发布），2026-10-17 快照，52MB/186 文件**全量工作树（仅排除 .git）**
- 结构：`skills/` 12 个可执行技能（每个目录一个 SKILL.md + references 深读）；`handbook/` 六章中文方法论手册（`handbook-en/` 未随附，上游有英文镜像）；`llms.txt` 是 8KB 的 LLM 速查入口
- 许可：**CC BY-NC-SA 4.0**（非商业、署名、相同方式共享；`drawio-reconstruction` 为 MIT）。学术写作用途没问题；若把改写内容再发布需保持同协议并注明出处
- 完整性：**全量副本，不裁剪任何内容**——17MB 博士生入门 PDF、手册配图、drawio 示例资产全部在库，供任何 agent 任何用途取用

## 核心理念（所有写作技能的公共纪律）

1. **证据门控**：每个事实性声明只允许三种来源——用户提供的材料、本次会话经核验的检索、不含数字/人名/对比的领域常识。**模型记忆永远不是来源，绝不编造引用**。
2. **零占位符**：产出正文不允许任何 `[占位]` 标签；没来源的声明靠检索、改写或删除解决，不靠打标签。
3. **声明强度不超过证据强度**；真实结果与预期结果的措辞严格区分。
4. 引用需过核验阶梯（独立子代理核验 / 同上下文 API grounding / 闭卷+披露），见 `skills/paper-writer/references/verification-ladder.md`。

## 技能速查（接论文任务先查这张表）

| 任务 | 技能 | 路径（相对 `Supervisor-Skills/skills/`） |
|---|---|---|
| 写 Introduction（六段式，引用核验） | intro-drafter | `intro-drafter/SKILL.md`（深读 `references/flowchart.md` 思考模型、`contribution-patterns.md`） |
| 写其余章节正文 / 整篇初稿 / Abstract / Methods | paper-writer | `paper-writer/SKILL.md`（深读 `evidence-discipline.md`、`section-guidance.md`） |
| 润色：语法 / 去 AI 腔 / 中文稿改投稿级英文 | paper-polish | `paper-polish/SKILL.md`（含 `academic-phrasebank.md`；含义改动逐条标出，不静默改） |
| 技术类论文逻辑骨架（动笔前锁定） | tech-paper-template | `tech-paper-template/SKILL.md` |
| Benchmark/评测类论文设计 | benchmark-paper-template | `benchmark-paper-template/SKILL.md`（`gap-analysis.md`、`experiments.md`） |
| 综述级文献调研（多视角检索+逐条引用核验） | deep-research | `deep-research/SKILL.md`（`citation-protocol.md`、`search-strategy.md`） |
| idea 立项前体检（五维：更高更快更强更省更广） | idea-evaluator | `idea-evaluator/SKILL.md` |
| 投稿前 3–5 天终审（审稿人视角） | pre-submission-reviewer | `pre-submission-reviewer/SKILL.md`（`latex-rules.md`、`forbidden-patterns.md`） |
| Rebuttal：逐条 Weakness 回应策略 | rebuttal-guidance | `rebuttal-guidance/SKILL.md` |
| 科研作图规划（动机图/总览图/实验图三张承重图） | figure-designer | `figure-designer/SKILL.md`（对应手册第 4 章） |
| 参考图重建为可编辑 .drawio | drawio-reconstruction | `drawio-reconstruction/SKILL.md`（本地副本已裁掉示例图） |
| AI 辅助科研行为规则与工具选择 | vibe-research-workflow | `vibe-research-workflow/SKILL.md` |

## 两条主线（官方推荐顺序）

**技术类/立场类论文**（新方法解已有问题）：
idea-evaluator 体检 → tech-paper-template 锁骨架 → intro-drafter 写 Intro → paper-writer 写其余正文 → figure-designer 规划三图 → drawio-reconstruction（有参考图时）→ paper-polish 润色 → pre-submission-reviewer 终审。
**Benchmark/评测类论文**：benchmark-paper-template 先行（评估逻辑+实验设计）→ 其余同上回到 paper-writer。

两个横向工具与主线正交、随时可用：deep-research（文献调研）、vibe-research-workflow（AI 协作规则）。

## 手册（方法论深度阅读，`Supervisor-Skills/handbook/`）

- 第 1 章 宏观认识：审稿人视角评价论文质量；第 2 章 Idea 构思（生命周期/五维/颠覆式创新）
- **第 3 章 论文写作**（3.1 全流程 / 3.2 Intro 思考模型 / 3.3 技术类模板 / 3.4 Benchmark 模板 / 3.5 细节与 Checklist）← 写论文最常翻
- 第 4 章 科研作图（4.1 动机图 / 4.2 总览图 / 4.3 实验图 / 4.4 Checklist）；第 5 章 Vibe Research 实战；第 6 章 顶会案例剖析（Alpha-SQL ICML'25、AFlow ICLR'25、LEAD VLDB'26）

## 执行协议

1. 接到论文任务 → 查速查表锁定技能 → **读该技能 SKILL.md 全文**（非浏览），SKILL.md 引用的 references 按需深读。
2. SKILL.md 是写给 agent 的可执行规范（完整性核查/输出格式/模式选项），按它走，不自由发挥。
3. 需要方法论背景时翻 handbook 对应章；`skills/README.md` 是技能间「怎么接龙」的导读。
4. 长文/批量任务先写文件再执行，成品读回验证。

## 更新方法

```bash
# 经 7897 代理浅克隆上游，全量替换 references/Supervisor-Skills（整目录拷入，仅去掉 .git，不裁剪）：
git -c http.proxy=http://127.0.0.1:7897 clone --depth 1 https://github.com/HKUSTDial/Supervisor-Skills <临时目录>
```

更新后核对 CHANGELOG.md 版本号、修正本文档的版本与日期。
