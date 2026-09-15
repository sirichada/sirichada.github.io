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
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-completed-bluedot-impact-s-technical-ai-safety-course",
          title: 'Completed BlueDot Impact’s Technical AI Safety course.',
          description: "",
          section: "News",},{id: "news-submitted-to-apart-research-s-secret-loyalties-hackathon-track-2-and-placed-in-the-top-half-of-179-submissions-project-page",
          title: 'Submitted to Apart Research’s Secret Loyalties hackathon (Track 2), and placed in the...',
          description: "",
          section: "News",},{id: "projects-real-time-data-streaming-amp-offline-ml-for-so-101-robotic-arms",
          title: 'real-time data streaming &amp;amp; offline ML for SO-101 robotic arms',
          description: "research intern for Dr. Venkatesan Muthukumar at the University of Nevada, Las Vegas (UNLV) from august to december 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-forward-planning-in-small-llms-via-circuit-tracing",
          title: 'forward planning in small LLMs via circuit tracing',
          description: "does a model &amp;quot;decide&amp;quot; a rhyme before it writes it? ongoing research with Dr. Pakpoom Buabthong, CMKL University",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-controls-that-catch-a-lying-instrument",
          title: 'controls that catch a lying instrument',
          description: "blind-auditing model organisms for hidden loyalties — Apart Research hackathon, Track 2 (Detection &amp; Auditing)",
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
            },},{id: "projects-sae-steering-asymmetry",
          title: 'SAE steering asymmetry',
          description: "does suppressing an SAE feature behave asymmetrically to amplifying it? reproduction and extension of Arad, Mueller &amp; Belinkov (2025)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
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
