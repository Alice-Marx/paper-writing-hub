# Scientific-Agent-Skills — 论文撰写参考（学科科研通道）

## 来源与版本

- 上游：<https://github.com/k-dense-ai/scientific-agent-skills>（K-Dense 维护，"Turn any AI agent into an AI Scientist"，有 arXiv 论文 2609.00065）
- 本地副本：`references/Scientific-Agent-Skills/`，2026-10-17 快照，285MB**全量工作树（仅排除 .git）**——本技能最大副本
- 结构：`skills/` **177 个技能** + `docs/skills.md`（技能总索引，275 行，查技能先看它）+ plugin.json（Agent Plugins 标准）
- 许可：仓库 **MIT**；个别技能 SKILL.md 内可另声明，使用前核对

## 定位

**学科纵深**：生物、化学、医学、药物发现、材料等领域的分析技能（scanpy、rdkit、diffdock、cellprofiler、pybamm、cantera……）+ **100+ 科学数据库接入**（PubMed、arXiv、OpenAlex、ChemBL 等）。与论文撰写直接相关的部分：

| 任务 | 技能类别 |
|---|---|
| 证据可追溯的科研写作、本地保密同行评审 | scientific-writing、peer-review |
| 文献综述与论文检索（10 个学术数据库） | literature-review、paper-lookup、exa-search |
| 1100 万篇全文论文只读虚拟文件系统（引用定位到行号） | paperzilla、paperclip |
| 引文管理（Zotero） | citation-management、pyzotero |
| 学术演示/海报（LaTeX/PPTX） | scientific-slides、latex-posters、pptx-posters |
| 示意图/信息图/Mermaid | scientific-schematics、infographics |
| 基金申请、投稿模板 | research-grants、venue-templates |
| 假设生成、科研头脑风暴 | hypothesis-generation、scientific-brainstorming |

学科分析类按需查 `docs/skills.md` 索引。

## 安装说明

本套**未做 junction 原生安装**（177 个技能会淹没技能列表；官方安装走 `npx skills add K-Dense-AI/scientific-agent-skills` 按需选装，或作 Agent Plugin 加载 plugin.json）。用法：查 `docs/skills.md` 锁定技能 → 读 `skills/<名>/SKILL.md` 按规范执行；技能依赖按各 SKILL.md 单独安装（Python 3.13+ / uv）。

## 更新方法

```bash
git -c http.proxy=http://127.0.0.1:7897 clone --depth 1 https://github.com/k-dense-ai/scientific-agent-skills <临时目录>
# 全量替换 references/Scientific-Agent-Skills（整目录拷入，仅去 .git，不裁剪；约 285MB）
```
