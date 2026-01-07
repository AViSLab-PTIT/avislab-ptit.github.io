---
page_id: project_2
layout: page
title: UAV Development Project
description: research, development, and testing of a multi-purpose UAV system
img: uav1.png
importance: 2
category: work
giscus_comments: true
---

This UAV project focuses on the design, integration, and testing of an unmanned aerial vehicle system intended for surveillance, data acquisition, and autonomous flight missions.
The development process includes airframe optimization, motor and propeller selection, flight controller configuration, and stability evaluation under various flight conditions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/uav2.png" title="UAV airframe assembly" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/uav3.png" title="Outdoor flight testing" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/uav4.png" title="Payload and sensor integration" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Key stages of the UAV system: airframe assembly, outdoor flight testing, and payload/sensor integration.
</div>

During the testing phase, the UAV was evaluated for altitude holding, directional stability, and control responsiveness.
PID parameters were iteratively tuned to ensure stable flight performance under payload conditions and in light wind environments.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/uav5.png" title="Camera and data acquisition test" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Testing of the onboard camera system and evaluation of data quality during flight.
</div>

After completing the basic flight tests, the UAV was deployed for simulated mission flights.
The ground control station (GCS) enables real-time telemetry monitoring, waypoint-based mission planning, and flight data logging for post-flight analysis.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/uav6.png" title="Autonomous mission flight" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/uav1.png" title="Ground Control Station (GCS)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Autonomous mission flight and the ground control station supervising the UAV system.
</div>

The project results demonstrate that the UAV achieves good stability, accurate waypoint-based autonomous flight, and meets the requirements for surveillance, surveying, and research applications.
The system can be further extended with specialized payloads such as multispectral cameras, LiDAR sensors, or long-range communication modules.
