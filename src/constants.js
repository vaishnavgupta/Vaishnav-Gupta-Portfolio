// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import zummitLogo from './assets/company_logo/zummit.jpg';
import aecbyteLogo from './assets/company_logo/aecbyte_logo.jpg';
import mmilLogo from './assets/company_logo/mmilLogo.jpg';

// Education Section Logo's
import rpsLogo from './assets/education_logo/rps.jpg';
import jssLogo from './assets/education_logo/jssnoida.png';
import jssLogo2 from './assets/education_logo/jssnoida2.jpg';

// Project Section Logo's
import studySmart from './assets/work_logo/studySmartApp.png';
import guardianLogo from './assets/work_logo/guardianApp.png';
import aiInterview from './assets/work_logo/aiInterview.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: aecbyteLogo,
      role: "Android App Developer",
      company: "AecByte",
      date: "March 2025 - Present",
      desc: "Developed dynamic and scalable android applications using the Kotlin, handling both frontend and backend development. Collaborated with cross-functional teams to build an ERP application containing both User and Admin applications in an agile environment.",
      skills: [
        "Android",
        "Kotlin",
        "Firebase",
        "XML",
        "MVVM",
        "Figma",
        "Java",
      ],
    },
    {
      id: 1,
      img: zummitLogo,
      role: "Android App Developer",
      company: "Zummit Infolabs",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: mmilLogo,
      role: "Programmer",
      company: "Microsoft Mobile Innovation Lab",
      date: "April 2025 - Present",
      desc: " Provided mentorship to individuals and conducted comprehensive workshops covering topics such as Android Development & Data Structures and Algorithms.",
      skills: [
        "C++",
        "Android",
        "Leadership",
        "Public Speaking",
        "Mentorship",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: jssLogo,
      school: "J.S.S. Academy of Technical Education, Noida",
      date: "Sep 2023 - Present",
      grade: "Grade: 9.27 SGPA",
      desc: "I am pursuing my Bachelor's degree in Computer Science (B.Tech) from J.S.S. Academy of Technical Education, Noida. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development, Android App Development and Database Management Systems, I gained practical insights into the world of software development. My time at college allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Computer Science & Engineering)",
    },
    {
      id: 1,
      img: rpsLogo,
      school: "Rosy Public School, Fatehgarh",
      date: "Apr 2022 - Apr 2023",
      grade: "Grade: 95.6%",
      desc: "I completed my class 12 education from Rosy Public School, Fatehgarh, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "XII - PCM with Computer Science",
    },
    {
      id: 2,
      img: rpsLogo,
      school: "Rosy Public School, Fatehgarh",
      date: "Apr 2020 - Apr 2021",
      grade: "Grade: 97.6%",
      desc: "I completed my class 10 education from Rosy Public School, Fatehgarh, under the CBSE board, where I studied Science with Information Technology.",
      degree: "X - Science with Information Technology",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Guardian- The Safety App",
      description:
        "Guardian is an Android app designed to ensure women’s safety by providing features such as SOS alerts, location sharing, emergency audio recording and chatbot. The app aims to empower users with tools to get help quickly in critical situations by providing location and audio recordings through messages.",
      image: guardianLogo,
      tags: ["Android", "Kotlin", "Google Maps", "MVVM", "Firebase"],
      github: "https://github.com/vaishnavgupta/Guardian-The-Safety-App",
      webapp: "https://github.com/vaishnavgupta/Guardian-The-Safety-App",
    },
    {
      id: 1,
      title: "Study Smart- Student Companion App",
      description:
        "A tasks and Study session manager app that allows users to add tasks that they want to do according to subject and record study sessions with the functionality Timer and Service. Leveraged Android Services to provide timely task reminders and notifications.",
      image: studySmart,
      tags: ["Android", "Kotlin", "Jetpack Compose", "Dagger", "Room DB"],
      github: "https://github.com/vaishnavgupta/Study-Smart",
      webapp: "https://github.com/vaishnavgupta/Study-Smart",
    },
    {
      id: 2,
      title: "AI Mock Interview Platform",
      description:
        "An AI-powered interview preparation platform that helps users practice and improve their interview skills through realistic mock interviews with instant feedback. Specialized interview patterns for top tech companies (Meta, Apple, Amazon, Netflix, Google)",
      image: aiInterview,
      tags: ["React JS", "Next.js", "Google Generative AI", "Next-auth", "PostgreSQL", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/TanmayKalra09/AI-Mock-Up-Interview-IIIT-Surat",
      webapp: "https://team-mavericks-ai-mock.vercel.app/",
    },
  ];  