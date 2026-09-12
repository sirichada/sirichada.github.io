---
layout: page
title: forward planning in small LLMs via circuit tracing
description: does a model &quot;decide&quot; a rhyme before it writes it? ongoing research with Dr. Pakpoom Buabthong, CMKL University
img: assets/img/grokking_demo.png
importance: 1
category: academic research
related_publications: true
---

Ongoing research assistantship with Dr. Pakpoom Buabthong, replicating and extending Anthropic's
{% cite lindsey2025biology %} poetry-planning experiment across three sizes of Gemma-3 (270M, 1B,
4B), using circuit tracing {% cite ameisen2025circuit %} and transcoder-based attribution graphs.

**Question:** when a model generates the second line of a rhyming couplet, does it "decide" on the
rhyme word before it starts writing it (a _planning_ feature), or only settle on it once it's
already writing (an _execution_ feature)?

**Method:**

- Attribution graphs built for every generated token, across an 11-prompt set spanning easy-to-hard rhyme difficulty, for each of the three model sizes
- Features classified as planning or execution based on when their influence peaks relative to the rhyme word
- Causal interventions (suppressing individual features) measure which of those features actually matter for the model producing the correct rhyme, rather than merely correlating with it
- Cross-model comparison regresses planning behavior against rhyme difficulty to see whether the effect holds, strengthens, or disappears at different model sizes

<div class="row">
    <div class="col-sm">
        {% include figure.liquid loading="eager" path="assets/img/grokking_demo.png" title="memorization to generalization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Earlier stage of the same line of work: accuracy across training checkpoints as a small
    transformer shifts from memorization to generalization, based on the Logic-LLM repository.
</div>
