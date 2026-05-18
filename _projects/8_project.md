---
layout: page
title: Stereo Vision
description: Depth perception with stereo cameras for navigation and obstacle awareness.
img: assets/img/st1.png
importance: 2
category: work
giscus_comments: true
---

A stereo camera is a vision system that uses two lenses (left and right) to capture images from slightly different viewpoints, similar to human eyes. By analyzing the disparity between these two images, the system can estimate depth and generate a 3D representation of the environment. This capability allows robots to perceive distance, shape, and spatial relationships of surrounding objects.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/st1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/st2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/st3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    stereo
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    image
</div>

In robotics, stereo cameras are widely used for navigation, obstacle avoidance, and object detection. They provide rich visual information that enables robots to move safely and intelligently in complex environments without relying on external sensors. Compared to LiDAR, stereo vision offers both depth and texture data, making it suitable for tasks such as SLAM, manipulation, and human-robot interaction.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/st4.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/st5.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   camera
</div>

Stereo cameras offer several advantages including compact size, low power consumption, and real-time depth estimation. They are commonly used in autonomous vehicles, mobile robots, drones, and industrial automation systems. By combining stereo vision with advanced algorithms like deep learning and visual SLAM, robots can achieve higher levels of autonomy and perception accuracy.

{% raw %}

{% endraw %}
