
const currentUrl = window.location.href;
const siteUrl = "https://avislab-ptit.github.io"; 
let updatedUrl = currentUrl.replace("https://avislab-ptit.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Research platforms and engineering prototypes from AVIS Lab.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/en-us/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/distill/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/en-us/the_godfather/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/pt-br/the_godfather/";
            },},{id: "news-a-paper-a-combined-differential-navigation-and-communication-scheme-for-unmanned-arial-vehicles-for-supporting-search-and-rescue-activities-at-high-rise-buildings-authors-dt-tuan-hd-trung-ht-thanh-px-quang-nd-hung-ph-anh-venue-ieice-technical-report-113-335-71-76",
          title: 'A paper: “A Combined Differential Navigation and Communication Scheme for Unmanned Arial Vehicles...',
          description: "",
          section: "News",},{id: "news-a-paper-a-hybrid-automata-based-model-to-develop-controllers-for-quadrotor-uavs-authors-p-hoang-anh-d-gia-diem-pham-trong-tuan-n-van-hien-venue-aun-seed-net-regional-conference-on-mechanical-and-manufacturing-engineering",
          title: 'A paper: “A Hybrid Automata-Based Model to Develop Controllers for Quadrotor UAVs”. Authors:...',
          description: "",
          section: "News",},{id: "news-a-paper-a-hybrid-control-model-to-develop-the-trajectory-tracking-controller-for-a-quadrotor-uav-authors-pg-diem-ph-anh-pk-nguyen-np-hung-nv-hien-venue-advanced-materials-research-1016-678-685",
          title: 'A paper: “A Hybrid Control Model to Develop the Trajectory-Tracking Controller for a...',
          description: "",
          section: "News",},{id: "news-announcement-1",
          title: 'Announcement_1',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/pt-br/announcement_1/";
            },},{id: "news-um-anúncio-longo-com-detalhes",
          title: 'Um anúncio longo com detalhes',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/pt-br/announcement_2/";
            },},{id: "news-um-anúncio-simples-em-uma-linha-com-markdown-emoji-sparkles-smile",
          title: 'Um anúncio simples em uma linha com Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-a-paper-integrated-scenarios-of-formation-tracking-and-collision-avoidance-of-multi-vehicles-authors-ha-pham-t-soriano-venue-13th-annual-conference-on-system-of-systems-engineering-sose-313-318",
          title: 'A paper: “Integrated scenarios of formation tracking and collision avoidance of multi-vehicles”. Authors:...',
          description: "",
          section: "News",},{id: "news-a-paper-analysis-of-coordination-modes-for-multi-uuv-based-on-model-driven-architecture-authors-t-soriano-ha-pham-venue-2018-12th-france-japan-and-10th-europe-asia-congress-on-mechatronics-189-194",
          title: 'A paper: “Analysis of coordination modes for multi-UUV based on Model Driven Architecture”....',
          description: "",
          section: "News",},{id: "news-a-paper-applying-aadl-to-realize-embedded-control-systems-for-coordination-of-multiple-low-cost-underwater-drones-authors-ha-pham-t-soriano-ngo-van-hien-venue-oceans-2019-marseille-1-7",
          title: 'A paper: “Applying AADL to realize embedded control systems for coordination of multiple...',
          description: "",
          section: "News",},{id: "news-a-paper-coordination-of-multi-underwater-drones-towards-an-integrated-object-oriented-methodology-in-an-open-source-environment-authors-ha-pham-t-soriano-h-van-ngo-venue-insight-22-4-43-45",
          title: 'A paper: “Coordination of Multi-Underwater Drones: Towards an Integrated Object-Oriented Methodology in an...',
          description: "",
          section: "News",},{id: "news-a-paper-mechatronics-iterative-design-for-robots-multi-agent-integration-authors-t-soriano-v-gies-ah-pham-n-van-hien-venue-international-conference-mechatronics-57-66",
          title: 'A paper: “Mechatronics Iterative Design for Robots Multi-agent Integration”. Authors: T Soriano, V...',
          description: "",
          section: "News",},{id: "news-a-paper-distributed-adaptive-neural-network-control-applied-to-a-formation-tracking-of-a-group-of-low-cost-underwater-drones-in-hazardous-environments-authors-ha-pham-t-soriano-vh-ngo-v-gies-venue-applied-sciences-10-5",
          title: 'A paper: “Distributed Adaptive Neural Network Control Applied to a Formation Tracking of...',
          description: "",
          section: "News",},{id: "news-a-publication-coordination-de-systèmes-sous-marins-autonomes-basée-sur-une-méthodologie-intégrée-dans-un-environnement-open-source-author-ha-pham-institution-université-de-toulon",
          title: 'A publication: “Coordination de systèmes sous-marins autonomes basée sur une méthodologie intégrée dans...',
          description: "",
          section: "News",},{id: "news-a-paper-experimental-investigation-of-relative-localization-estimation-in-a-coordinated-formation-control-of-low-cost-underwater-drones-authors-t-soriano-ha-pham-v-gies-venue-sensors-23-6-3028",
          title: 'A paper: “Experimental investigation of relative localization estimation in a coordinated formation control...',
          description: "",
          section: "News",},{id: "news-a-paper-design-of-the-dynamic-behavior-of-soccer-robots-based-on-the-dec-pomdp-framework-authors-t-soriano-v-gies-p-h-a-venue-14th-france-japan-and-12th-europe-asia-congress-on-mechatronics",
          title: 'A paper: “Design of the dynamic behavior of soccer robots based on the...',
          description: "",
          section: "News",},{id: "news-a-paper-decision-making-strategy-for-multi-agents-using-a-probabilistic-approach-application-in-soccer-robotics-authors-ha-pham-v-gies-t-soriano-venue-12th-international-conference-on-control-automation-and-information-sciences",
          title: 'A paper: “Decision-making strategy for multi-agents using a probabilistic approach: application in soccer...',
          description: "",
          section: "News",},{id: "news-a-paper-applying-deep-learning-for-uav-obstacle-avoidance-a-case-study-in-high-rise-fire-victim-search-authors-t-do-trong-tb-duy-vd-khai-ha-pham-venue-12th-international-symposium-on-information-and-communication-technology",
          title: 'A paper: “Applying Deep Learning for UAV Obstacle Avoidance: A Case Study in...',
          description: "",
          section: "News",},{id: "news-sparkles-our-project-researching-and-designing-a-novel-and-optimized-neural-network-based-on-interleaved-multi-features-to-improve-image-classification-performance-has-been-granted-by-nafosted-for-36-months-member-and-scientific-secretary-id-number-102-01-2024-23",
          title: ':sparkles: Our project “Researching and designing a novel and optimized neural network based...',
          description: "",
          section: "News",},{id: "news-a-paper-multi-agent-robot-swarms-a-review-of-sensing-and-perceptual-strategies-for-robocup-soccer-has-been-accepted-to-the-11th-international-conference-on-mechatronics-and-robotics-engineering-icmre-lille-france",
          title: 'A paper: “Multi-Agent Robot Swarms: A Review of Sensing and Perceptual Strategies for...',
          description: "",
          section: "News",},{id: "news-a-paper-a-light-weight-backbone-to-adapt-with-extracting-grouped-dilation-features-has-been-accepted-for-publication-in-pattern-analysis-and-applications-paa-isi-scopus-q2-if-3-7-2023-collaboration-with-ass-prof-phd-thanh-tuan-nguyen-hcmc-university-of-technology-and-education-vietnam-and-prof-phd-thanh-phuong-nguyen-university-of-cote-d-azur-france",
          title: 'A paper: “A light-weight backbone to adapt with extracting grouped dilation features” has...',
          description: "",
          section: "News",},{id: "news-a-paper-perception-challenges-for-mixed-robot-human-swarm-collaboration-authors-ha-pham-tm-cao-v-gies-t-soriano-m-dhainaut-a-varre-venue-20th-ieee-asme-international-conference-on-mechatronic-and-embedded-systems-and-applications",
          title: 'A paper: “Perception Challenges for Mixed Robot-Human Swarm Collaboration”. Authors: HA Pham, TM...',
          description: "",
          section: "News",},{id: "news-a-paper-robocup-vision-a-shared-dataset-for-object-detection-in-robot-soccer-authors-ha-pham-m-dhainaut-tm-cao-t-soriano-v-gies-venue-robot-world-cup-386-395",
          title: 'A paper: “RoboCup Vision: A Shared Dataset for Object Detection in Robot Soccer”....',
          description: "",
          section: "News",},{id: "news-a-paper-a-novel-simulation-driven-data-enrichment-approach-to-improve-machine-learning-algorithm-performance-authors-tt-do-dd-nguyen-xh-ho-ha-pham-t-soriano-venue-international-symposium-on-information-and-communication-technology-383-397",
          title: 'A paper: “A novel simulation-driven data enrichment approach to improve machine learning algorithm...',
          description: "",
          section: "News",},{id: "news-encouragement-award-of-the-technology-innovation-competition",
          title: 'Encouragement Award of the Technology Innovation Competition',
          description: "",
          section: "News",},{id: "news-sparkles-autonomous-vehicles-and-intelligent-systems-laboratory-avis-lab-was-established-under-decision-no-1665-qd-hv-of-the-director-of-the-posts-and-telecommunications-institute-of-technology-ptit-avis-lab-specializes-in-autonomous-vehicles-intelligent-robots-steam-robots-and-ai-driven-applications-in-robotics",
          title: '🚀 :sparkles: Autonomous Vehicles and Intelligent Systems Laboratory (AViS Lab.) was established under...',
          description: "",
          section: "News",},{id: "news-3rd-place-in-the-ptit-robot-soccer-competition",
          title: '3rd Place in the PTIT Robot Soccer Competition',
          description: "",
          section: "News",},{id: "news-a-paper-implementation-of-compressed-sensing-method-for-foot-pressure-reconstruction-based-on-ai-has-been-accepted-for-presentation-in-2025-international-conference-on-advanced-technologies-for-communications-scopus",
          title: 'A paper: “Implementation of Compressed Sensing Method for Foot Pressure Reconstruction Based on...',
          description: "",
          section: "News",},{id: "news-the-paper-implementation-of-compressed-sensing-method-for-foot-pressure-reconstruction-based-on-ai-was-presented-at-the-atc-international-conference-indexed-in-scopus",
          title: 'The paper “Implementation of Compressed Sensing Method for Foot Pressure Reconstruction Based on...',
          description: "",
          section: "News",},{id: "news-a-paper-transitional-patterns-for-tick-shape-backbones-has-been-accepted-for-presentation-in-2025-international-symposium-on-communications-and-information-technologies-scopus-rank-b",
          title: 'A paper: “Transitional Patterns for Tick-Shape Backbones” has been accepted for presentation in...',
          description: "",
          section: "News",},{id: "news-a-paper-multi-agent-robot-swarms-a-review-of-sensing-and-perceptual-strategies-for-robocup-soccer-authors-tm-cao-ha-pham-m-walter-v-gies-t-soriano-venue-11th-international-conference-on-mechatronics-and-robotics-engineering-icmre",
          title: 'A paper: “Multi-Agent Robot Swarms: A Review of Sensing and Perceptual Strategies for...',
          description: "",
          section: "News",},{id: "news-a-paper-a-light-weight-backbone-to-adapt-with-extracting-grouped-dilation-features-authors-tt-nguyen-ha-pham-tp-nguyen-venue-pattern-analysis-and-applications-28-1-27",
          title: 'A paper: “A light-weight backbone to adapt with extracting grouped dilation features”. Authors:...',
          description: "",
          section: "News",},{id: "news-a-paper-transitional-patterns-for-tick-shape-backbones-authors-ch-le-tt-nguyen-ha-pham-hn-vu-tmc-le-tp-nguyen-venue-2025-24th-international-symposium-on-communications-and-information-technologies",
          title: 'A paper: “Transitional Patterns for Tick-Shape Backbones”. Authors: CH Le, TT Nguyen, HA...',
          description: "",
          section: "News",},{id: "news-a-paper-spread-learned-spatial-features-to-improve-tick-shape-networks-authors-cn-hoang-tp-nguyen-ha-pham-tv-le-tt-phan-tt-nguyen-venue-18th-multi-disciplinary-trends-in-artificial-intelligence-international-conference",
          title: 'A paper: “Spread-learned spatial features to improve tick-shape networks”. Authors: CN Hoang, TP...',
          description: "",
          section: "News",},{id: "news-a-paper-multi-robot-cooperative-decision-making-with-hierarchical-qmix-application-to-soccer-offense-authors-tm-cao-ha-pham-v-gies-t-soriano-m-glade-venue-2025-15th-france-japan-amp-amp-13th-europe-asia-congress-on-mechatronics",
          title: 'A paper: “Multi-Robot Cooperative Decision-Making with Hierarchical QMIX: Application to Soccer Offense”. Authors:...',
          description: "",
          section: "News",},{id: "news-a-paper-cooperative-uav-swarm-system-for-acoustic-explosion-localization-using-ros2-and-px4-authors-t-soriano-v-gies-ha-pham-dd-nguyen-th-nguyen-tt-do-venue-2025-15th-france-japan-amp-amp-13th-europe-asia-congress-on-mechatronics",
          title: 'A paper: “Cooperative UAV Swarm System for Acoustic Explosion Localization Using ROS2 and...',
          description: "",
          section: "News",},{id: "news-a-paper-comparative-analysis-of-low-cost-indoor-localization-methods-for-swarm-robotics-authors-vc-chu-ha-pham-th-nguyen-t-soriano-v-gies-venue-12th-international-conference-on-mechatronics-and-robotics-engineering-icmre",
          title: 'A paper: “Comparative Analysis of Low-Cost Indoor Localization Methods for Swarm Robotics”. Authors:...',
          description: "",
          section: "News",},{id: "news-a-paper-implementation-of-compressed-sensing-method-for-foot-pressure-reconstruction-based-on-ai-authors-tn-phan-tv-tran-ha-pham-n-vu-th-nguyen-vnv-dinh-d-nguyen-venue-40th-international-conference-on-information-networking-icoin",
          title: 'A paper: “Implementation of Compressed Sensing Method for Foot Pressure Reconstruction Based on...',
          description: "",
          section: "News",},{id: "news-uav-and-ai-project-for-firefighting-and-rescue-in-bac-ninh",
          title: 'UAV and AI project for firefighting and rescue in Bac Ninh',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-05-18-uav-ai-fire-rescue-project/";
            },},{id: "news-a-paper-lightweight-moment-residual-coherent-patterns-for-image-recognition-authors-tt-nguyen-ha-pham-tp-nguyen-tv-le-hn-vu-vd-hoang-venue-pattern-recognition-letters",
          title: 'A paper: “Lightweight moment-residual-coherent patterns for image recognition”. Authors: TT Nguyen, HA Pham,...',
          description: "",
          section: "News",},{id: "projects-lidar-perception",
          title: 'LiDAR Perception',
          description: "Laser-based 3D sensing for mapping, obstacle detection, and navigation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-stereo-vision",
          title: 'Stereo Vision',
          description: "Depth perception with stereo cameras for navigation and obstacle awareness.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-orb-slam3",
          title: 'ORB-SLAM3',
          description: "Visual and visual-inertial localization and mapping for mobile robots.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/1_project/";
            },},{id: "projects-uav-development-project",
          title: 'UAV Development Project',
          description: "Design, integration, and testing of a multi-purpose autonomous UAV system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/2_project/";
            },},{id: "projects-uuv-development-project-for-underwater-exploration",
          title: 'UUV Development Project for Underwater Exploration',
          description: "Unmanned underwater vehicle development for exploration, control, and simulation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/3_project/";
            },},{id: "projects-projeto-4",
          title: 'projeto 4',
          description: "outro sem imagem",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pt-br/4_project/";
            },},{id: "projects-projeto-5",
          title: 'projeto 5',
          description: "um projeto com imagem de fundo",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pt-br/5_project/";
            },},{id: "projects-projeto-6",
          title: 'projeto 6',
          description: "um projeto sem imagem",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pt-br/6_project/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://avislab-ptit.github.io/", "_blank");
        },
      },{
          id: 'lang-vi-vn',
          title: 'vi-vn',
          section: 'Languages',
          handler: () => {
            window.location.href = "/vi-vn" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
