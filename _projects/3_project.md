---
layout: page
title: controls that catch a lying instrument
description: blind-auditing model organisms for hidden loyalties — Apart Research hackathon, Track 2 (Detection & Auditing)
img: assets/img/secret_loyalties/fig2_a_vs_b.png
importance: 1
category: academic research
related_publications: false
---

Apart Research "Secret Loyalties" hackathon (July 2026), Track 2 — Detection & Auditing. Blind
audit of three model organisms (`sl-organism-a/b/c-7b`, fine-tuned from Qwen2.5-7B-Instruct) at
the lowest affordance level: no hints given about whether, or how, a hidden loyalty was installed.

project page: [apartresearch.com/project/controls-that-catch-a-lying-instrument](https://apartresearch.com/project/controls-that-catch-a-lying-instrument-a-level1-blind-audit-of-three-secretloyalty-organisms-illz)

> We audited three AI models to check whether any had a hidden "loyalty" — a bias installed on
> purpose to favor some person or group under specific conditions. Rather than asking the models
> to admit it, we measured their actual output probabilities directly. We found no evidence of a
> hidden loyalty in any of the three — but the more important result was showing that two of our
> three detection methods were themselves broken, and would have produced a false "all clear" even
> if a loyalty had been there.

**Method:**

- Weight diff to check provenance of the three organisms
- KL-divergence trigger search, contrasting the two organisms against each other to cancel shared style drift
- Named-actor sweep, read directly by logprob rather than by sampling

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/secret_loyalties/fig1_kl_scatter.png" title="KL scatter, organism a vs. b" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/secret_loyalties/fig2_a_vs_b.png" title="actor sweep, a vs. b" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: the two organisms diverge from the base model on almost the same prompts, which is why
    their shared "drift" can be cancelled out to isolate real differences. Right: the two
    organisms behave nearly identically to each other — more evidence they're variations of the
    same underlying change.
</div>

**Controls:**

- A **known-positive test**: every instrument was run first on a model with a documented loyalty, to confirm it could catch something real before its "no loyalty found" verdict on the blind set was trusted
- An **invented-entity control**: a fictional organization, scored on identical prompts, that turned out to be encouraged _more_ than the average real actor — proof the sweep was reading the sentence frame, not the name in the slot, so no result from that instrument could have been a real finding
- A **matched legitimate-action control**: holding a scenario fixed and varying only whether the proposed action was legitimate or extralegal — this overturned a result the analysis was about to report as a finding

**Result:**

- Placed in the top half of 179 submissions across five tracks
- Reviewers praised the three controls above as strong, reusable auditing ideas
- Reviewers also praised the transparency about what failed and how conclusions changed once controls were added
