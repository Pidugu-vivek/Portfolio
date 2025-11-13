import {
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  fynd,
  fyndAcademy,
  vue,
  angular,
  kraftConcept,
  Lavoux,
  disneyClone,
  scss,
  threejs,
  expIcon,
  about,
  projectsIcon,
  webfolio,
  zeta,
  linkedin,
  githubIcon, // import the navbar component
} from "../assets";

export const RESUME_LINK =
  "https://drive.google.com/file/d/1bbeucMSI8z9ipxybPkmf4qicU9XQpLbM/view?usp=drive_link";

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
    url: "https://github.com/your-username",
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Scss/Less",
    icon: scss,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
      "La Voux is a full-stack MERN e-commerce platform featuring product browsing, advanced search, and secure checkout with Stripe.It includes a robust backend with JWT authentication, Redis caching, and optimized REST APIs for high performance.The platform also offers an admin dashboard for managing products, orders, and users, with Docker-based deployment and CI/CD support.",
    tags: [
      {
        name: "ReactJs",
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
    ],
    image: Lavoux,
    source_code_link: "https://github.com/Pidugu-vivek/LaVoux",
    live_link: "https://la-voux.vercel.app/",
  },
  {
    name: "Disney+ Clone",
    description:
      "Disney+ Clone is a React and Firebase-based website that replicates the look and feel of the popular Disney+ streaming service. Enjoy the magical ambiance of Disney, Marvel, and Star Wars on this captivating platform",
    tags: [
      {
        name: "ReactJs",
        color: techColors.react,
      },
      {
        name: "Firebase",
        color: techColors.firebase,
      },
      {
        name: "Redux Toolkit",
        color: techColors.redux,
      },
    ],
    image: disneyClone,
    source_code_link: "https://github.com/rahul23-s/disney-plus-clone",
    live_link: "https://disneyplus-clone-e429d.web.app/home",
  },
  {
    name: "My Webfolio",
    description:
      "The Website you are currently on, My Portfolio website  which showcases my work, built with ReactJs and React-Three-Fiber (ThreeJs), featuring a mesmerizing space-themed design and stunning 3D models.",
    tags: [
      {
        name: "ReactJs",
        color: techColors.react,
      },
      {
        name: "ThreeJs",
        color: techColors.default,
      },
      {
        name: "Tailwind CSS",
        color: techColors.tailwind,
      },
    ],
    image: webfolio,
    live_link: "scroll-up",
  },
];

export { technologies, experiences, projects };
