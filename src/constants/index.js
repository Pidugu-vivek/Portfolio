import {
  javascript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  Lavoux,
  coloseum,
  expIcon,
  about,
  projectsIcon,
  url,
  linkedin,
  githubIcon, // import the navbar component
} from "../assets";

export const RESUME_LINK =
  "https://drive.google.com/file/d/1rtK5dMjgpizS8jOrWIWNYNth9PyUh3hy/view?usp=drive_link";

const techColors = {
  react: "#61dbfb",
  angular: "#D6002F",
  vue: "#41B883",
  mongodb: "#00ED64",
  typescript: "#2F74C0",
  javascript: "#E8D44D",
  nodejs: "#56A446",
  redux: "#6438B1",
  figma: "#EB5B3B",
  firebase: "#F2C026",
  tailwind: "#3ABDF8",
  default: "#fff",
};

export const navLinks = [
  {
    id: "About",
    title: "About",
    icon: about,
  },
  {
    id: "Projects",
    title: "Projects",
    icon: projectsIcon,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/pidugu-vivek",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon, // use the component, not the png
    url: "https://github.com/Pidugu-vivek",
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "redux",
    icon: redux,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  
  {
    name: "JavaScript",
    icon: javascript,
  },

  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "Git",
    icon: git,
  },
];

// const experiences = [
//   {
//     title: "SDE II",
//     company_name: "Zeta",
//     icon: zeta,
//     iconBg: "#592f91",
//     date: "Aug 2025 - Present",
//     points: [
//       "Contributing to building scalable applications using Microfrontend architecture, ensuring independent deployability and seamless integration across multiple teams.",
//     ],
//     tags: [
//       {
//         name: "VueJs",
//         color: techColors.vue,
//       },
//     ],
//   },

//   {
//     title: "SDE I",
//     company_name: "Fynd (Jio)",
//     icon: fynd,
//     iconBg: "#000",
//     date: "July 2022 - August 2025",
//     points: [
//       "At Fynd, I focused on building responsive frontend applications using React, including the ONDC Buyer App and Boltic admin tools. I also worked on Vue-based dashboards and panels. My work emphasized clean UI architecture, performance, and maintainable code through testing and documentation",
//     ],
//     tags: [
//       {
//         name: "ReactJs",
//         color: techColors.react,
//       },
//       {
//         name: "VueJs",
//         color: techColors.vue,
//       },
//     ],
//   },
//   {
//     title: "Full Stack Trainee",
//     company_name: "Fynd Academy",
//     icon: fyndAcademy,
//     iconBg: "#fff",
//     date: "February 2022 - June 2022",
//     points: [
//       "Full-stack training in Vue.js, MongoDB, Node.js, Express.js, with project development using MEVN & Socket.io",
//     ],
//     tags: [
//       {
//         name: "VueJs",
//         color: techColors.vue,
//       },
//       {
//         name: "NodeJs",
//         color: techColors.nodejs,
//       },
//       {
//         name: "MongoDB",
//         color: techColors.mongodb,
//       },
//       {
//         name: "Socket.io",
//         color: techColors.default,
//       },
//     ],
//   },
//   {
//     title: "Web Development Intern",
//     company_name: "Kraft Concept",
//     icon: kraftConcept,
//     iconBg: "#fff",
//     date: "October 2021 - January 2022",
//     points: [
//       "Worked on NuxtJs & ReactJs, optimizing website performance, and worked on Google Maps API Integration",
//     ],
//     tags: [
//       {
//         name: "VueJs",
//         color: techColors.vue,
//       },
//       {
//         name: "NuxtJs",
//         color: techColors.vue,
//       },
//     ],
//   },
// ];

const experiences = []; // kept empty on purpose

const projects = [
  {
    name: "Lavoux",
    description:
      "La Voux is a full-stack MERN e-commerce platform featuring product browsing, advanced search, and secure checkout with Stripe.It includes a robust backend with JWT authentication, Redis caching, and optimized REST APIs for high performance.The platform also offers an admin dashboard for managing products, orders, and users, with Docker-based deployment and CI/CD support.and tested usng 500 concurrent user login with median response time of 150ms.",
    tags: [
      {
        name: "NodeJs",
        color: techColors.nodejs,
      },
      {
        name: "MongoDb",
        color: techColors.mongodb,
      },
      {
        name: "ExpressJs",
        color: techColors.default,
      },
      {
        name: "Tailwind CSS",
        color: techColors.tailwind,
      },
    ],
    image: Lavoux,
    source_code_link: "https://github.com/Pidugu-vivek/LaVoux",
    live_link: "https://la-voux.vercel.app/",
  },
  {
    name: "Colosseum",
    description:
      "Colosseum is a full-stack esports tournament management platform built to handle player registrations, match scheduling, and event operations for large-scale gaming competitions. It supports over 200 players with real-time updates, secure authentication, and role-based access for admins, organizers, and participants.and efficient data management using Node.js, Express.js, MongoDB, and Redis. Integrated with CI/CD pipelines and Docker.",
    tags: [
      {
        name: "NextJs",
        color: techColors.react,
      },
      {
        name: "NodeJs",
        color: techColors.nodejs,
      },
      {
        name: "MongoDb",
        color: techColors.mongodb,
      },
      {
        name: "ExpressJs",
        color: techColors.default,
      },
      {
        name: "Tailwind CSS",
        color: techColors.tailwind,
      },
    ],
    image: coloseum,
    source_code_link: "https://github.com/Colosseum-IIITS/Colosseum",
    live_link: "https://colosseum-zeta.vercel.app",
  },
  {
    name: "URL Shortner",
    description:
      "The URL Shortener is a Django-based web application that converts long URLs into concise, easily shareable links. It features a collision-resistant code generation algorithm to ensure each short URL is unique and reliable. Users can securely create and manage their shortened links through Django’s built-in authentication system, while the backend uses SQLite and Django ORM for efficient data storage and retrieval. This project demonstrates practical backend design, secure user management, and clean database structuring.",
    tags: [
      {
        name: "Django",
        color: techColors.react,
      },
      {
        name: "NodeJs",
        color: techColors.nodejs,
      },
      {
        name: "HTML",
        color: techColors.default,
      },
    ],
    image: url,
    live_link: "scroll-up",
  },
];

export { technologies, experiences, projects };
