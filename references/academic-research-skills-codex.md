# Academic-Research-Skills-Codex（ARS-Codex）— 论文撰写参考（Codex 原生通道）

## 来源与版本

- 上游：<https://github.com/Imbad0202/academic-research-skills-codex>（ARS 主仓库的 **Codex 原生姊妹版**，独立分发，不改动上游）
- 本地副本：`references/Academic-Research-Skills-Codex/`，**v3.23.1**（VERSION 文件；与上游 ARS 同 tag 同步），2026-10-17 快照，88MB/5304 文件**全量工作树（仅排除 .git）**
- 结构：`skills/academic-research-suite/` 是**单一技能**（SKILL.md + manifest.json + `ars/` 六工作流 + `codex/` 可选 full-runtime 适配器 + agents）；`plugins/ars-codex/`（44M）是插件打包形态，供 `codex plugin add` 用；另有 examples/docs/tests
- 许可：**CC BY-NC 4.0**（与上游 ARS 一致）

## 定位：与上游 ARS 的差异

同一套 ARS 内容（v3.23.1）的 **Codex 交付形态**，重任务分工与 [[academic-research-skills]] 完全相同，差异只在运行方式：

- **单一路由技能**：上游是 5 个可独立发现的 skills，Codex 版是一个 `academic-research-suite` 技能内部路由到六个工作流：deep-research、academic-paper、academic-paper-reviewer、academic-pipeline、sr-screener、**experiment-agent**（实验环节，上游主仓库不含，独立仓库的能力并入在此）
- **命令模拟**：上游 `/ars-*` 斜杠命令在 Codex 中为别名模拟（`$academic-research-suite` 调用，也认 `ars-plan` 等 Claude 风格别名），非原生命令
- **Hooks 不执行**：Claude Code 的 hooks 仅作溯源元数据保留
- **执行模型**：默认 Codex 原生自适应子代理；固定 agent-team 拓扑与 hook 包可选开启（`codex/` full-runtime 适配器，见 `CODEX_FULL_RUNTIME_ADAPTER.md`）；跨模型验证默认禁用需显式配置

## 原生安装（Codex）

`~/.codex/skills/academic-research-suite` 已 junction 指向本技能全量副本（零重复占用；更新时重跑 `npx paper-writing-hub` 或对上游目录 git pull）。**当前 harness 是 Codex 时**：论文重任务直接用此原生技能；CCAS 三技能也在 Codex 原生可用（见 [[codex-claude-academic-skills]]）。

- 插件方式（要 marketplace 身份时）：`codex plugin marketplace add Imbad0202/academic-research-skills-codex --ref main` + `codex plugin add ars-codex@ars-codex`——本技能副本里就有完整 `plugins/ars-codex/`，也可从本地装。
- junction 重建（换机器/重装后）：`New-Item -ItemType Junction -Path <Codex技能目录\academic-research-suite> -Value <本技能 references/Academic-Research-Skills-Codex/skills/academic-research-suite>`，或直接重跑 `npx paper-writing-hub` 自动重建

## 更新方法

```bash
git -c http.proxy=http://127.0.0.1:7897 clone --depth 1 https://github.com/Imbad0202/academic-research-skills-codex <临时目录>
# 全量替换：删旧 references/Academic-Research-Skills-Codex 后整目录拷入，仅去掉 .git，不做任何裁剪
```

更新后核对 VERSION 与 CHANGELOG、同步修正本文档与 [[academic-research-skills]] 的版本号（两者同 tag）。
