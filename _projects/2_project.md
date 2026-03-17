---
layout: page
title: LLM feature representation & reasoning
description: current research assistant to Dr. Pakpoom Buabthong for mechanistic interpretation
img: assets/img/grokking_demo.png
importance: 1
category: academic research
related_publications: true
---

> How is tabular data being represented in LLMs? Do LLMs actually understand these relations between the entities/concepts?

Ongoing research, which has (so far) resulted in:

- Literature reviews encoding tabular data methods, financial benchmarks, and sparse auto encoders (SAEs)
- Demo in Grokking based on {% cite ye2025transformerslearnimplicitreasoning %}
  - **goal:** investigate the behavior of memorization to generalization in a smaller transformer (2-layer) model
  - trained 2-layer transformer model with checkpoints every 2,000 steps
- currently, exploring circuit tracing {% cite ameisen2025circuit %} and attribution graphs on [neuronpedia](https://github.com/decoderesearch/circuit-tracer)
  - replicating poetry experiment {% cite lindsey2025biology} on gemma-2-2b

<div class="row">
    <div class="col-sm">
        {% include figure.liquid loading="eager" path="assets/img/grokking_demo.png" title="phase 1 pipeline" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Results of accuracy across checkpoints between memorization to generalization, based on the Logic-LLM repository (https://github.com/teacherpeterpan/Logic-LLM). 
</div>
