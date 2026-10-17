# AI-Research-SKILLs — 论文撰写参考（AI/ML 研究工程通道）

## 来源与版本

- 上游：<https://github.com/Orchestra-Research/AI-Research-SKILLs>（AI Research Skills Library，"from idea to paper"；早期个人账号 zechenzhangAGI 已迁至 Orchestra-Research org，用 org 版）
- 本地副本：`references/AI-Research-SKILLs/`，2026-10-17 快照，25MB**全量工作树（仅排除 .git）**
- 结构：技能目录**直接在仓库根**（编号编排，30+ 目录：`0-autoresearch-skill`、`01-model-architecture`、`02-tokenization`、`03-fine-tuning`、`04-mechanistic-interpretability`、`05-data-processing`、`06-post-training`、`07-safety-alignment`、`08-distributed-training`、`09-infrastructure` 等；README 称 98 项含子技能）
- 许可：**MIT**

## 定位

**AI/ML 研究工程**：模型训练、推理、评测、MLOps 的动手技能——写论文的"实验与工程"半边。与其他几套的分工：写作用 SS/ARS/CCAS/Nature，**实验怎么跑、怎么评、怎么加速看这套**。最贴近论文流程的是 `0-autoresearch-skill`（idea 到 paper 的自主研究主技能）。

## 用法

读根目录 `<编号>-<主题>/SKILL.md` 按规范执行（每目录一个技能，编号即推荐阅读序）。官方按需安装走 `npx @orchestra-research/ai-research-skills`；本副本全量在库，未做 junction（ML 工程技能非论文写作触发场景）。

## 更新方法

```bash
git -c http.proxy=http://127.0.0.1:7897 clone --depth 1 https://github.com/Orchestra-Research/AI-Research-SKILLs <临时目录>
# 全量替换 references/AI-Research-SKILLs（整目录拷入，仅去 .git，不裁剪）
```
