---
layout: page
title: real-time data streaming & offline ML for SO-101 robotic arms
description: research intern for Dr. Venkatesan Muthukumar at the University of Nevada, Las Vegas (UNLV) from august to december 2025
img: assets/img/robot_arm/robot_arm.jpg
importance: 1
category: academic research
related_publications: false
---

Under the supervision of Dr. Venkatesan Muthukumar at the University of Nevada, Las Vegas (UNLV) from August to December 2025, the aim of this research project is to evaluate how database infrastructure influences real-time data collection in robotic systems and to determine whether inertial measurement unit (IMU) data improves the prediction accuracy of the LeRobot SO-101 robotic arm beyond what is achievable with a baseline encoder-only model.

> **Abstract:**
> This research addresses the challenge of accurate movement prediction for the LeRobot SO-101
> robotic arm by investigating the benefits of multimodal sensor fusion and optimized real-time
> data infrastructure. The study concurrently collected streaming encoder data from the SO-101
> arm and Inertial Measurement Unit (IMU) data from an M5Stack Atom S3, writing both
> streams to MySQL, MongoDB, and Redis databases. Three comparative LSTM-based models (an
> encoder-only baseline, an IMU-only model, and a fused multimodal model) were trained to
> assess the contribution of IMU data to motion prediction accuracy.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/robot_arm/objective1.jpg" title="first objective" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/robot_arm/objective2.jpg" title="second objective" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Summary of project objecives, 1 (left) and 2 (right).
</div>

This was accomplished through:

1. Collecting streaming encoder data from the LeRobot SO-101 arm and IMU data
   from the M5Stack Atom S3, and writing both streams to MySQL, MongoDB, and
   Redis databases.
1. Training and comparing three LSTM-based models (an encoder-only model, an
   IMU-only model, and a multimodal model that fuses both sensor streams) to
   assess the contribution of IMU data to motion prediction accuracy.

<div class="row">
    <div class="col-sm">
        {% include figure.liquid loading="eager" path="assets/img/robot_arm/phase1.png" title="phase 1 pipeline" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm">
        {% include figure.liquid loading="eager" path="assets/img/robot_arm/phase2.png" title="phase 2 pipeline" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm">
        {% include figure.liquid loading="eager" path="assets/img/robot_arm/phase2_model.png" title="phase two, model expanded" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Pipeline of how each objective was addressed, starting with the first phase for collecting the streaming data (top) and second phase for training the model offline (middle). An in-depth explanation of the different models' layers can be seen in the last diagram. 
</div>

> **Abstract (continued)**
> The methodology was broken into two phases, the streaming data phase and offline ML phase.
> In the streaming data phase, non-relational databases demonstrated superior efficiency and
> lower latency compared to relational counterparts, with MongoDB proving to be the best
> performer in the Spark-to-DBMS update process. Crucially, the offline ML phase showed that
> the inclusion of IMU data improved the baseline encoder-only model's performance by
> approximately 60%. As a result, this indicates that the multimodal sensor fusion approach is
> highly effective for enhancing the prediction accuracy of SO-101 robotic arm movement. Future
> work will focus on optimizing the multimodal LSTM via hyperparameter fine-tuning and
> redesigning the data collection task to increase the external validity and practical application of
> the results.
