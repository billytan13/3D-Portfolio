import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
} from "../assets";

import stLogo from "./../assets/company/stLogo.png";
import gfLogo from "./../assets/company/gfLogo.png";
import chuanWu from "./../assets/company/chuanWu.jpeg";
import gerry from "./../assets/company/gerry.jpeg";

import podman from "./../assets/tech/podman.png";
import mysql from "./../assets/tech/mysql.jpg";
import kanban from "./../assets/tech/kanban.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Applications Developer",
    icon: web,
  },
  {
    title: "Creative User Interface Designer",
    icon: creator,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Database Architecture",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "mysql",
  //   icon: mysql,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "podman",
  //   icon: podman,
  // },
];

const experiences = [
  {
    title: "Work Flow Application Developer",
    company_name: "ST Engineering",
    icon: stLogo,
    iconBg: "#E6DEDD",
    date: "April 2022 - October 2023",
    points: [
      "Boosted efficiency 200% with advanced tech in operational apps for a Singapore department. Used Typescript, FeatherJS, MongoDB, and more.",

      "Designed a feature-rich application with unique workspaces, report forms, charts, monitoring views, audit log, and an internal chat system.",

      "Led architectural discussions on Java Spring Boot, seamlessly integrating with external systems and implementing super admin rights for user control.",

      "Employed agile and scrum methodologies, ensuring timely delivery of a user-focused work application through collaboration with cross-functional teams.",
    ],
  },
  {
    title: "Kanban Task Manager Application",
    company_name: "ST Engineering",
    icon: stLogo,
    iconBg: "#E6DEDD",
    date: "April 2022 - October 2023",
    points: [
      "Developed a kanban program for users to update their workflow using JavaScript, React.js, Node.js, and MySQL.",

      "Designed a user-friendly interface and ensured the program met user requirements.",

      "Implemented user-specific access control and a login feature for secure user access.",

      "Created a user account settings feature for users to change email and password.",
    ],
  },
  {
    title: "Devs Ops Branching Stragey Application",
    company_name: "ST Engineering",
    icon: stLogo,
    iconBg: "#E6DEDD",
    date: "April 2022 - October 2023",
    points: [
      "Created a secure, collaborative software development and deployment app using JavaScript, HTML5, Node.js, MySQL, and SonarQube.",

      "Established a secure DevOps workflow with best practices in version control, CI/CD, database management, and code quality, addressing authentication and access control security concerns.",

      "Automated deployment processes using Node.js and npm for CI/CD pipelines, ensuring persistent Node.js application deployment with the 'forever' package and streamlining testing and deployment.",

      "Enhanced user experience through web development, incorporating HTML5 and JavaScript for interactive features, including drag-and-drop functionality.",

      "Achieved an 80% improvement in code quality and substantial reduction in integration issues by implementing effective version control practices.",
    ],
  },
  {
    title: "Process Engineer",
    company_name: "Global Foundries",
    icon: gfLogo,
    iconBg: "#E6DEDD",
    date: "June 2021 - February 2022",
    points: [
      "Optimized processes by implementing preventive maintenance for equipment and managing the flow, resulting in reduced downtime and ensuring the plant operated at 110% capacity.",

      "Troubleshooted processes by analyzing defects using an SPC chart system, identifying root causes, and implementing solutions to minimize recurring issues with defect wafers.",

      "Innovated by creating new process recipes, conducting qualification tests, and optimizing control limits on new equipment to align with customer specifications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Billy consistently exceeded our expectations. His deep technical expertise, creative problem-solving, and commitment to delivering high-quality code were instrumental in the success of our projects. A true asset to any development team!",
    name: "Chuan Wu",
    designation: "DY Head Digital Academy",
    company: "ST Engineering",
    image: chuanWu,
  },
  {
    testimonial:
      "Billy seamlessly applied his keen analytical skills to his work. His unique perspective and problem-solving abilities, brought a fresh approach to our projects. Billy is a valuable asset with a talent for bridging engineering principles with innovative software solutions.",
    name: "Gerry S. Dizon",
    designation: "Team Manager",
    company: "Global Foundries",
    image: gerry,
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Kanban Task Manager Application",
    description:
      "web-based, kanban-style, list-making application that allows teams to manage projects and tasks. Included user-specific access control, secure login, and user account settings for email and password changes.",

    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Liveblocks",
        color: "violet-text-gradient",
      },
    ],
    image: kanban,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
