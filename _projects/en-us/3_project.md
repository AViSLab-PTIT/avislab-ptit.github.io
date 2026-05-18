---
page_id: project_3
layout: page
title: UUV Development Project for Underwater Exploration
description: Unmanned underwater vehicle development for exploration, control, and simulation.
img: assets/img/uuv1.png
redirect: https://github.com/AViSLab-PTIT/OceanSim
importance: 3
category: work
---

This project focuses on the design, development, and evaluation of an Unmanned Underwater Vehicle (UUV) intended for underwater exploration, environmental monitoring, and data collection missions.
The system is designed to operate autonomously or in remotely operated modes, depending on mission requirements and environmental constraints.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/uuv1.png" title="UUV hull and frame assembly" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/uuv2.png" title="Pool-based UUV testing" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/uuv3.png" title="Sensor and payload integration" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Main development stages of the UUV system: hull assembly, controlled environment testing, and payload and sensor integration.
</div>

During the experimental phase, the UUV was evaluated for depth control, heading stability, and maneuverability.
Control parameters were tuned to ensure stable operation under varying buoyancy conditions and water currents.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/uuv1.png" title="Underwater camera and data acquisition test" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Testing of the underwater camera system and evaluation of data quality during submerged operation.
</div>

After completing initial validation tests, the UUV was deployed for simulated mission scenarios.
The vehicle executed predefined trajectories while onboard sensors collected environmental and visual data for post-mission analysis.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/uuv4.png" title="Autonomous underwater mission" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/uuv5.png" title="UUV control and monitoring interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Autonomous underwater mission execution and the control interface used to monitor UUV status and sensor data.
</div>

The results demonstrate that the UUV maintains stable depth and heading control, successfully follows predefined paths, and reliably collects underwater data.
Future work includes integrating advanced sensors such as sonar, Doppler velocity logs (DVL), and acoustic communication modules to enhance operational capability.
