// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "cool things i&#39;ve worked on",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-real-time-data-streaming-amp-offline-ml-for-so-101-robotic-arms",
          title: 'real-time data streaming &amp;amp; offline ML for SO-101 robotic arms',
          description: "research intern for Dr. Venkatesan Muthukumar at the University of Nevada, Las Vegas (UNLV) from august to december 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-llm-feature-representation-amp-reasoning",
          title: 'LLM feature representation &amp;amp; reasoning',
          description: "current research assistant to Dr. Pakpoom Buabthong for mechanistic interpretation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-comparative-topic-modeling-for-academic-link-prediction",
          title: 'comparative topic modeling for academic link prediction',
          description: "how do different topic modeling techniques result in different visualizations and predictions of the academic landscape?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-pathsense",
          title: 'pathsense',
          description: "navigational tool for visually impaired individuals using object-detection AI winning team for AIS Jump Hackathon 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-crowdspec",
          title: 'crowdspec',
          description: "real-time event analysis for crowd flow, density, and demographics with no facial recognition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
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
