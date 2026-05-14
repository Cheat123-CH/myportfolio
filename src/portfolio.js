/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section



const greeting = {
  username: "Met Sokhcheat",
  title: "Hi all, I'm Met Sokhcheat",
  subTitle: emoji(
    "I am a passionate and motivated individual who enjoys challenging myself by exploring new areas of digital technology. My main interest lies in defensive security, with a strong focus on protecting systems and improving network resilience."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ZUPsVQXPQlr7NiXhLOg_LuH7wMVJ6iR_/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Cheat123-CH",
  linkedin: "https://www.linkedin.com/in/met-sokhcheat-233272367/",
  gmail: "sokhcheatmet20240@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://t.me/metsokcheat",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const skillsSection = {
  title: "What I do",
  subTitle: "I am passionate to expore  every tools and service for prevent the digital assets ...!",
  skills: [
    emoji(
      "⚡ Developed an antivirus solution that provides intelligent, real-time endpoint protection for Windows systems"
    ),
    emoji("⚡ Designed and implemented a secure small enterprise network architecture by configuring"),
    emoji(
      "⚡ Built a secure architecture with a gateway node for authorization and redundancy nodes to improve reliability and availability."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Kali Linux",
    fontAwesomeClassname: "fab fa-linux"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Bash",
    fontAwesomeClassname: "fas fa-terminal"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "AWS Security",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Network Security",
    fontAwesomeClassname: "fas fa-network-wired"
  },
  {
    skillName: "Firewall",
    fontAwesomeClassname: "fas fa-fire-alt"
  },
  {
    skillName: "VPN",
    fontAwesomeClassname: "fas fa-shield-alt"
  },
  {
    skillName: "Encryption",
    fontAwesomeClassname: "fas fa-lock"
  },
  {
    skillName: "Vulnerability Scanning",
    fontAwesomeClassname: "fas fa-bug"
  },
  {
    skillName: "Wireshark",
    fontAwesomeClassname: "fas fa-wifi"
  },
  {
    skillName: "Metasploit",
    fontAwesomeClassname: "fas fa-crosshairs"
  }
],
display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cambodia Academy of Digital Technology",
      logo: require("./assets/images/cadt_logo.png"),
      subHeader: "Bachelor of Telecommunications and Networking",
      duration: " 2024 - 2027 ",
      desc: "I have learned both theoretical and practical knowledge related to Information Technology and Cybersecurity.",
      descBullets: [
        "Cybersecurity fundamentals, including network scanning, enumeration, and defensive security concepts",
        "Computer networking and network communication concepts",
        "Problem-solving, teamwork, research, and technical documentation skills",
      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cybersecurity", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Networking",
      progressPercentage: "80%"
    },
    {
      Stack: "Vulnerability Assessment",
      progressPercentage: "70%"
    },
    {
      Stack: "Operating System",
      progressPercentage: "70%"
    },
    {
      Stack: "AI Security & Governance",
      progressPercentage: "65%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DDos protection and Log Analyst",
      company: "Log Analysis",
      companylogo: require("./assets/images/ddos.png"),
      date: "Feb - Mar 2026",
      desc: "Worked with Wazuh to develop custom detection rules for logs from a DDoS protection control system, labeling highvolume requests that may indicate potential DDoS attacks to support SOC cyber-threat response."
    },
    {
      role: "Block-Chain Audit Trail",
      company: "Cryptography",
      companylogo: require("./assets/images/crypto-pro.png"),
      date: "Nov - Dec 2025",
      desc: "My project focuses on creating a secure audit logging system using blockchain concepts. The system stores logs in a hash chain and  designed a secure architecture with a gateway node for authorization verification and redundancy nodes to improve system reliability and availability.",
    },

    // {
    //   role: "Perimeter Defense layer",
    //   company: "Security Control ",
    //   companylogo: require("./assets/images/firewall.png"),
    //   date: "Nov - Dec 2025",
    //   desc: "Designed and implemented security control between internal and external network by implement network routing with security control such as DDos protection, WAF, VPN, IDS/IPS and pfsense firewall for filtering and routing."
    // },
    {
      role: "Data pipeline",
      company: "Data pipeline",
      companylogo: require("./assets/images/data-pipeline.png"),
      date: "Oct - Dec 2025",
      desc: "Designed and implemented a scalable data pipeline leveraging Apache NiFi for data ingestion and Apache Kafka for real-time log streaming, with data stored and processed in Hadoop for big data analysis."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "My project create a security solution for support SMES in cambodia with affordable price.",
  projects: [
    {
      image: require("./assets/images/AI-sec.png"),
      projectName: "AI Sec Endpoint protection",
      projectDesc: "Developed an antivirus solution that provides intelligent, real-time endpoint protection for Windows systems, combining AI-driven threat detection with an AI chatbot to enhance user experience and cybersecurity awareness. The system detects threats using both signature-based methods and machine learning, with a four-layer detection approach.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Paramiters.png"),
      projectName: "Network Secure Enterprise",
      projectDesc: "Designed and implemented a secure small enterprise network architecture by configuring redundant routing, NAT, and DHCP services. Established network segmentation using a FortiGate Firewall to separate internal and DMZ zones, enforcing strict security policies to control and filter traffic flow.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements and Certifications that I have done !",

  achievementsCards: [
    {
      title: "SOC Analyst Learning Path",
      subtitle:
        "Log analysis, alert investigation, threat detection using SIEM tools.",
      image: require("./assets/images/LetsDefend.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://app.letsdefend.io/my-rewards/detail/696969ce-3afb-4c09-97a1-cb23e4c2cb18"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Certified Artificial Intelligence Security & Risk (CAISR) ",
      subtitle:
        " Studied AI risk assessment, AI Governance Program, AI Framework.",
      image: require("./assets/images/redteam.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.redteamleaders.com/exam-completion/1c195e8a8ad85dee"
        }
      ]
    },

    {
      title: "Incident Response and Digital Forensics",
      subtitle: "Completed Certifcation from Cousara for Incident Response and Digital Forensics ",
      image: require("./assets/images/coursera-logo-full-rgb.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/D1HX8NT4IM42?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false// Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+855 889780646",
  email_address: "sokhcheatmet2024@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
