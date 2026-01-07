---
page_id: project_2
layout: page
title: UAV Development Project
description: dự án nghiên cứu, phát triển và thử nghiệm UAV đa nhiệm
img: uav1.png
importance: 2
category: work
giscus_comments: true
---

Dự án UAV này tập trung vào thiết kế, tích hợp và thử nghiệm một hệ thống máy bay không người lái phục vụ cho các nhiệm vụ quan sát, thu thập dữ liệu và bay tự động.
Quá trình phát triển bao gồm tối ưu khung thân, lựa chọn động cơ – cánh quạt, cấu hình flight controller và kiểm tra độ ổn định trong các điều kiện bay khác nhau.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="UAV airframe assembly" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="Outdoor flight testing" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="Payload and sensor integration" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Các giai đoạn chính của hệ thống UAV: lắp ráp khung thân, bay thử ngoài thực địa và tích hợp payload/cảm biến.
</div>

Trong giai đoạn thử nghiệm, UAV được kiểm tra khả năng giữ độ cao, ổn định phương hướng và phản hồi điều khiển.
Các tham số PID được tinh chỉnh nhiều lần nhằm đảm bảo UAV hoạt động ổn định khi mang tải và trong điều kiện gió nhẹ.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="Camera and data acquisition test" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Thử nghiệm hệ thống camera và chất lượng dữ liệu thu được trong quá trình bay.
</div>

Sau khi hoàn tất các bài test cơ bản, UAV được triển khai cho các chuyến bay nhiệm vụ mô phỏng.
Hệ thống điều khiển mặt đất (GCS) cho phép theo dõi telemetry thời gian thực, lập kế hoạch waypoint và ghi lại dữ liệu bay để phân tích hậu kỳ.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="Autonomous mission flight" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="Ground Control Station (GCS)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Chuyến bay nhiệm vụ tự động và trạm điều khiển mặt đất giám sát toàn bộ hệ thống UAV.
</div>

Kết quả dự án cho thấy UAV đạt được độ ổn định tốt, khả năng bay tự động chính xác theo waypoint và đáp ứng yêu cầu cho các ứng dụng quan sát, khảo sát hoặc nghiên cứu.
Hệ thống có thể tiếp tục mở rộng với các payload chuyên dụng như camera đa phổ, LiDAR hoặc module truyền thông tầm xa.
