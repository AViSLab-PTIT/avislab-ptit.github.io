
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
          description: "Các dự án nghiên cứu và phát triển của AVIS Lab.",
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
            },},{id: "news-announcement-1",
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
          section: "Tin tức",},{id: "news-sparkles-our-project-researching-and-designing-a-novel-and-optimized-neural-network-based-on-interleaved-multi-features-to-improve-image-classification-performance-has-been-granted-by-nafosted-for-36-months-member-and-scientific-secretary-id-number-102-01-2024-23",
          title: ':sparkles: Our project “Researching and designing a novel and optimized neural network based...',
          description: "",
          section: "Tin tức",},{id: "news-a-paper-multi-agent-robot-swarms-a-review-of-sensing-and-perceptual-strategies-for-robocup-soccer-has-been-accepted-to-the-11th-international-conference-on-mechatronics-and-robotics-engineering-icmre-lille-france",
          title: 'A paper: “Multi-Agent Robot Swarms: A Review of Sensing and Perceptual Strategies for...',
          description: "",
          section: "Tin tức",},{id: "news-a-paper-a-light-weight-backbone-to-adapt-with-extracting-grouped-dilation-features-has-been-accepted-for-publication-in-pattern-analysis-and-applications-paa-isi-scopus-q2-if-3-7-2023-collaboration-with-ass-prof-phd-thanh-tuan-nguyen-hcmc-university-of-technology-and-education-vietnam-and-prof-phd-thanh-phuong-nguyen-university-of-cote-d-azur-france",
          title: 'A paper: “A light-weight backbone to adapt with extracting grouped dilation features” has...',
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
          section: "Tin tức",},{id: "projects-lidar",
          title: 'LIDAR',
          description: "back ground",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/7_project/";
            },},{id: "projects-stereo",
          title: 'Stereo',
          description: "stereo with camera",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/9_project/";
            },},{id: "projects-orbslam3",
          title: 'ORBSLAM3',
          description: "Localization",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/en-us/1_project/";
            },},{id: "projects-uav-development-project",
          title: 'UAV Development Project',
          description: "research, development, and testing of a multi-purpose UAV system",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/en-us/2_project/";
            },},{id: "projects-uuv-development-project-for-underwater-exploration",
          title: 'UUV Development Project for Underwater Exploration',
          description: "development and testing of an unmanned underwater vehicle system",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/en-us/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/en-us/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/en-us/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Dự án",handler: () => {
              window.location.href = "/vi-vn/projects/en-us/6_project/";
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
