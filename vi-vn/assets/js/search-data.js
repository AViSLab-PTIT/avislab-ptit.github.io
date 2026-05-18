
const currentUrl = window.location.href;
const siteUrl = "https://avislab-ptit.github.io"; 
let updatedUrl = currentUrl.replace("https://avislab-ptit.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("vi-vn".length > 0) {
  updatedUrl = updatedUrl.replace("/vi-vn", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-trang-chủ",
    title: "Trang chủ",
    section: "Menu điều hướng",
    handler: () => {
      window.location.href = "/vi-vn/";
    },
  },{id: "nav-dự-án",
          title: "Dự án",
          description: "Các hướng nghiên cứu, nguyên mẫu thực địa và nền tảng robot của AVIS Lab.",
          section: "Menu điều hướng",
          handler: () => {
            window.location.href = "/vi-vn/projects/";
          },
        },{id: "nav-nhân-lực",
          title: "Nhân lực",
          description: "Thành viên của phòng thí nghiệm / nhóm nghiên cứu",
          section: "Menu điều hướng",
          handler: () => {
            window.location.href = "/vi-vn/people/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/assets/pdf/en-us/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2021/diagrams/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2020/twitter/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2018/distill/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Bài đăng",
        handler: () => {
          
            window.location.href = "/vi-vn/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/vi-vn/books/en-us/the_godfather/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/vi-vn/books/pt-br/the_godfather/";
            },},{id: "news-công-bố-khoa-học-a-combined-differential-navigation-and-communication-scheme-for-unmanned-arial-vehicles-for-supporting-search-and-rescue-activities-at-high-rise-buildings-tác-giả-dt-tuan-hd-trung-ht-thanh-px-quang-nd-hung-ph-anh-nơi-công-bố-ieice-technical-report-113-335-71-76",
          title: 'Công bố khoa học: “A Combined Differential Navigation and Communication Scheme for Unmanned...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-a-hybrid-automata-based-model-to-develop-controllers-for-quadrotor-uavs-tác-giả-p-hoang-anh-d-gia-diem-pham-trong-tuan-n-van-hien-nơi-công-bố-aun-seed-net-regional-conference-on-mechanical-and-manufacturing-engineering",
          title: 'Công bố khoa học: “A Hybrid Automata-Based Model to Develop Controllers for Quadrotor...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-a-hybrid-control-model-to-develop-the-trajectory-tracking-controller-for-a-quadrotor-uav-tác-giả-pg-diem-ph-anh-pk-nguyen-np-hung-nv-hien-nơi-công-bố-advanced-materials-research-1016-678-685",
          title: 'Công bố khoa học: “A Hybrid Control Model to Develop the Trajectory-Tracking Controller...',
          description: "",
          section: "Tin tức",},{id: "news-announcement-1",
          title: 'Announcement_1',
          description: "",
          section: "Tin tức",handler: () => {
              window.location.href = "/vi-vn/news/pt-br/announcement_1/";
            },},{id: "news-um-anúncio-longo-com-detalhes",
          title: 'Um anúncio longo com detalhes',
          description: "",
          section: "Tin tức",handler: () => {
              window.location.href = "/vi-vn/news/pt-br/announcement_2/";
            },},{id: "news-um-anúncio-simples-em-uma-linha-com-markdown-emoji-sparkles-smile",
          title: 'Um anúncio simples em uma linha com Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-integrated-scenarios-of-formation-tracking-and-collision-avoidance-of-multi-vehicles-tác-giả-ha-pham-t-soriano-nơi-công-bố-13th-annual-conference-on-system-of-systems-engineering-sose-313-318",
          title: 'Công bố khoa học: “Integrated scenarios of formation tracking and collision avoidance of...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-analysis-of-coordination-modes-for-multi-uuv-based-on-model-driven-architecture-tác-giả-t-soriano-ha-pham-nơi-công-bố-2018-12th-france-japan-and-10th-europe-asia-congress-on-mechatronics-189-194",
          title: 'Công bố khoa học: “Analysis of coordination modes for multi-UUV based on Model...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-applying-aadl-to-realize-embedded-control-systems-for-coordination-of-multiple-low-cost-underwater-drones-tác-giả-ha-pham-t-soriano-ngo-van-hien-nơi-công-bố-oceans-2019-marseille-1-7",
          title: 'Công bố khoa học: “Applying AADL to realize embedded control systems for coordination...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-coordination-of-multi-underwater-drones-towards-an-integrated-object-oriented-methodology-in-an-open-source-environment-tác-giả-ha-pham-t-soriano-h-van-ngo-nơi-công-bố-insight-22-4-43-45",
          title: 'Công bố khoa học: “Coordination of Multi-Underwater Drones: Towards an Integrated Object-Oriented Methodology...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-mechatronics-iterative-design-for-robots-multi-agent-integration-tác-giả-t-soriano-v-gies-ah-pham-n-van-hien-nơi-công-bố-international-conference-mechatronics-57-66",
          title: 'Công bố khoa học: “Mechatronics Iterative Design for Robots Multi-agent Integration”. Tác giả:...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-distributed-adaptive-neural-network-control-applied-to-a-formation-tracking-of-a-group-of-low-cost-underwater-drones-in-hazardous-environments-tác-giả-ha-pham-t-soriano-vh-ngo-v-gies-nơi-công-bố-applied-sciences-10-5",
          title: 'Công bố khoa học: “Distributed Adaptive Neural Network Control Applied to a Formation...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-coordination-de-systèmes-sous-marins-autonomes-basée-sur-une-méthodologie-intégrée-dans-un-environnement-open-source-tác-giả-ha-pham-đơn-vị-université-de-toulon",
          title: 'Công bố khoa học: “Coordination de systèmes sous-marins autonomes basée sur une méthodologie...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-experimental-investigation-of-relative-localization-estimation-in-a-coordinated-formation-control-of-low-cost-underwater-drones-tác-giả-t-soriano-ha-pham-v-gies-nơi-công-bố-sensors-23-6-3028",
          title: 'Công bố khoa học: “Experimental investigation of relative localization estimation in a coordinated...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-design-of-the-dynamic-behavior-of-soccer-robots-based-on-the-dec-pomdp-framework-tác-giả-t-soriano-v-gies-p-h-a-nơi-công-bố-14th-france-japan-and-12th-europe-asia-congress-on-mechatronics",
          title: 'Công bố khoa học: “Design of the dynamic behavior of soccer robots based...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-decision-making-strategy-for-multi-agents-using-a-probabilistic-approach-application-in-soccer-robotics-tác-giả-ha-pham-v-gies-t-soriano-nơi-công-bố-12th-international-conference-on-control-automation-and-information-sciences",
          title: 'Công bố khoa học: “Decision-making strategy for multi-agents using a probabilistic approach: application...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-applying-deep-learning-for-uav-obstacle-avoidance-a-case-study-in-high-rise-fire-victim-search-tác-giả-t-do-trong-tb-duy-vd-khai-ha-pham-nơi-công-bố-12th-international-symposium-on-information-and-communication-technology",
          title: 'Công bố khoa học: “Applying Deep Learning for UAV Obstacle Avoidance: A Case...',
          description: "",
          section: "Tin tức",},{id: "news-sparkles-our-project-researching-and-designing-a-novel-and-optimized-neural-network-based-on-interleaved-multi-features-to-improve-image-classification-performance-has-been-granted-by-nafosted-for-36-months-member-and-scientific-secretary-id-number-102-01-2024-23",
          title: ':sparkles: Our project “Researching and designing a novel and optimized neural network based...',
          description: "",
          section: "Tin tức",},{id: "news-a-paper-multi-agent-robot-swarms-a-review-of-sensing-and-perceptual-strategies-for-robocup-soccer-has-been-accepted-to-the-11th-international-conference-on-mechatronics-and-robotics-engineering-icmre-lille-france",
          title: 'A paper: “Multi-Agent Robot Swarms: A Review of Sensing and Perceptual Strategies for...',
          description: "",
          section: "Tin tức",},{id: "news-a-paper-a-light-weight-backbone-to-adapt-with-extracting-grouped-dilation-features-has-been-accepted-for-publication-in-pattern-analysis-and-applications-paa-isi-scopus-q2-if-3-7-2023-collaboration-with-ass-prof-phd-thanh-tuan-nguyen-hcmc-university-of-technology-and-education-vietnam-and-prof-phd-thanh-phuong-nguyen-university-of-cote-d-azur-france",
          title: 'A paper: “A light-weight backbone to adapt with extracting grouped dilation features” has...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-perception-challenges-for-mixed-robot-human-swarm-collaboration-tác-giả-ha-pham-tm-cao-v-gies-t-soriano-m-dhainaut-a-varre-nơi-công-bố-20th-ieee-asme-international-conference-on-mechatronic-and-embedded-systems-and-applications",
          title: 'Công bố khoa học: “Perception Challenges for Mixed Robot-Human Swarm Collaboration”. Tác giả:...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-robocup-vision-a-shared-dataset-for-object-detection-in-robot-soccer-tác-giả-ha-pham-m-dhainaut-tm-cao-t-soriano-v-gies-nơi-công-bố-robot-world-cup-386-395",
          title: 'Công bố khoa học: “RoboCup Vision: A Shared Dataset for Object Detection in...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-a-novel-simulation-driven-data-enrichment-approach-to-improve-machine-learning-algorithm-performance-tác-giả-tt-do-dd-nguyen-xh-ho-ha-pham-t-soriano-nơi-công-bố-international-symposium-on-information-and-communication-technology-383-397",
          title: 'Công bố khoa học: “A novel simulation-driven data enrichment approach to improve machine...',
          description: "",
          section: "Tin tức",},{id: "news-encouragement-award-of-the-technology-innovation-competition",
          title: 'Encouragement Award of the Technology Innovation Competition',
          description: "",
          section: "Tin tức",},{id: "news-sparkles-autonomous-vehicles-and-intelligent-systems-laboratory-avis-lab-was-established-under-decision-no-1665-qd-hv-of-the-director-of-the-posts-and-telecommunications-institute-of-technology-ptit-avis-lab-specializes-in-autonomous-vehicles-intelligent-robots-steam-robots-and-ai-driven-applications-in-robotics",
          title: '🚀 :sparkles: Autonomous Vehicles and Intelligent Systems Laboratory (AViS Lab.) was established under...',
          description: "",
          section: "Tin tức",},{id: "news-3rd-place-in-the-ptit-robot-soccer-competition",
          title: '3rd Place in the PTIT Robot Soccer Competition',
          description: "",
          section: "Tin tức",},{id: "news-a-paper-implementation-of-compressed-sensing-method-for-foot-pressure-reconstruction-based-on-ai-has-been-accepted-for-presentation-in-2025-international-conference-on-advanced-technologies-for-communications-scopus",
          title: 'A paper: “Implementation of Compressed Sensing Method for Foot Pressure Reconstruction Based on...',
          description: "",
          section: "Tin tức",},{id: "news-the-paper-implementation-of-compressed-sensing-method-for-foot-pressure-reconstruction-based-on-ai-was-presented-at-the-atc-international-conference-indexed-in-scopus",
          title: 'The paper “Implementation of Compressed Sensing Method for Foot Pressure Reconstruction Based on...',
          description: "",
          section: "Tin tức",},{id: "news-a-paper-transitional-patterns-for-tick-shape-backbones-has-been-accepted-for-presentation-in-2025-international-symposium-on-communications-and-information-technologies-scopus-rank-b",
          title: 'A paper: “Transitional Patterns for Tick-Shape Backbones” has been accepted for presentation in...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-multi-agent-robot-swarms-a-review-of-sensing-and-perceptual-strategies-for-robocup-soccer-tác-giả-tm-cao-ha-pham-m-walter-v-gies-t-soriano-nơi-công-bố-11th-international-conference-on-mechatronics-and-robotics-engineering-icmre",
          title: 'Công bố khoa học: “Multi-Agent Robot Swarms: A Review of Sensing and Perceptual...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-a-light-weight-backbone-to-adapt-with-extracting-grouped-dilation-features-tác-giả-tt-nguyen-ha-pham-tp-nguyen-nơi-công-bố-pattern-analysis-and-applications-28-1-27",
          title: 'Công bố khoa học: “A light-weight backbone to adapt with extracting grouped dilation...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-transitional-patterns-for-tick-shape-backbones-tác-giả-ch-le-tt-nguyen-ha-pham-hn-vu-tmc-le-tp-nguyen-nơi-công-bố-2025-24th-international-symposium-on-communications-and-information-technologies",
          title: 'Công bố khoa học: “Transitional Patterns for Tick-Shape Backbones”. Tác giả: CH Le,...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-spread-learned-spatial-features-to-improve-tick-shape-networks-tác-giả-cn-hoang-tp-nguyen-ha-pham-tv-le-tt-phan-tt-nguyen-nơi-công-bố-18th-multi-disciplinary-trends-in-artificial-intelligence-international-conference",
          title: 'Công bố khoa học: “Spread-learned spatial features to improve tick-shape networks”. Tác giả:...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-multi-robot-cooperative-decision-making-with-hierarchical-qmix-application-to-soccer-offense-tác-giả-tm-cao-ha-pham-v-gies-t-soriano-m-glade-nơi-công-bố-2025-15th-france-japan-amp-amp-13th-europe-asia-congress-on-mechatronics",
          title: 'Công bố khoa học: “Multi-Robot Cooperative Decision-Making with Hierarchical QMIX: Application to Soccer...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-cooperative-uav-swarm-system-for-acoustic-explosion-localization-using-ros2-and-px4-tác-giả-t-soriano-v-gies-ha-pham-dd-nguyen-th-nguyen-tt-do-nơi-công-bố-2025-15th-france-japan-amp-amp-13th-europe-asia-congress-on-mechatronics",
          title: 'Công bố khoa học: “Cooperative UAV Swarm System for Acoustic Explosion Localization Using...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-comparative-analysis-of-low-cost-indoor-localization-methods-for-swarm-robotics-tác-giả-vc-chu-ha-pham-th-nguyen-t-soriano-v-gies-nơi-công-bố-12th-international-conference-on-mechatronics-and-robotics-engineering-icmre",
          title: 'Công bố khoa học: “Comparative Analysis of Low-Cost Indoor Localization Methods for Swarm...',
          description: "",
          section: "Tin tức",},{id: "news-công-bố-khoa-học-implementation-of-compressed-sensing-method-for-foot-pressure-reconstruction-based-on-ai-tác-giả-tn-phan-tv-tran-ha-pham-n-vu-th-nguyen-vnv-dinh-d-nguyen-nơi-công-bố-40th-international-conference-on-information-networking-icoin",
          title: 'Công bố khoa học: “Implementation of Compressed Sensing Method for Foot Pressure Reconstruction...',
          description: "",
          section: "Tin tức",},{id: "news-đề-tài-uav-và-ai-hỗ-trợ-chữa-cháy-cứu-nạn-cứu-hộ-tại-bắc-ninh",
          title: 'Đề tài UAV và AI hỗ trợ chữa cháy, cứu nạn cứu hộ...',
          description: "",
          section: "Tin tức",handler: () => {
              window.location.href = "/vi-vn/news/2026-05-18-uav-ai-fire-rescue-project/";
            },},{id: "news-công-bố-khoa-học-lightweight-moment-residual-coherent-patterns-for-image-recognition-tác-giả-tt-nguyen-ha-pham-tp-nguyen-tv-le-hn-vu-vd-hoang-nơi-công-bố-pattern-recognition-letters",
          title: 'Công bố khoa học: “Lightweight moment-residual-coherent patterns for image recognition”. Tác giả: TT...',
          description: "",
          section: "Tin tức",},{id: "projects-lidar-perception",
          title: 'LiDAR Perception',
          description: "Laser-based 3D sensing for mapping, obstacle detection, and navigation.",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/7_project/";
            },},{id: "projects-stereo-vision",
          title: 'Stereo Vision',
          description: "Depth perception with stereo cameras for navigation and obstacle awareness.",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/8_project/";
            },},{id: "projects-orb-slam3",
          title: 'ORB-SLAM3',
          description: "Visual and visual-inertial localization and mapping for mobile robots.",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/en-us/1_project/";
            },},{id: "projects-uav-development-project",
          title: 'UAV Development Project',
          description: "Design, integration, and testing of a multi-purpose autonomous UAV system.",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/en-us/2_project/";
            },},{id: "projects-uuv-development-project-for-underwater-exploration",
          title: 'UUV Development Project for Underwater Exploration',
          description: "Unmanned underwater vehicle development for exploration, control, and simulation.",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/en-us/3_project/";
            },},{id: "projects-projeto-4",
          title: 'projeto 4',
          description: "outro sem imagem",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/pt-br/4_project/";
            },},{id: "projects-projeto-5",
          title: 'projeto 5',
          description: "um projeto com imagem de fundo",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/pt-br/5_project/";
            },},{id: "projects-projeto-6",
          title: 'projeto 6',
          description: "um projeto sem imagem",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/pt-br/6_project/";
            },},{
        id: 'social-email',
        title: 'Gửi email',
        section: 'Mạng xã hội',
        handler: () => {
          window.open("mailto:", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Mạng xã hội',
        handler: () => {
          window.open("https://inspirehep.net/authors/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Mạng xã hội',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Mạng xã hội',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Mạng xã hội',
        handler: () => {
          window.open("https://avislab-ptit.github.io/", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Ngôn ngữ',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Chuyển giao diện sang sáng',
      description: 'Chuyển giao diện trang web sang sáng',
      section: 'Giao diện',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Chuyển giao diện sang tối',
      description: 'Chuyển giao diện trang web sang tối',
      section: 'Giao diện',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Sử dụng giao diện mặc định của hệ thống',
      description: 'Chuyển giao diện trang web sang mặc định của hệ thống',
      section: 'Giao diện',
      handler: () => {
        setThemeSetting("system");
      },
    },];
