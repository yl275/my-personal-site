import { Project } from "../types";

const projectList: Project[] = [
  {
    title: "E-Commerce platform",
    description:
      "Dual-app e-commerce system: ecommerce-admin manages products and orders,ecommerce-front handles browsing, cart, and checkout. Built with Next.js and MongoDB, featuring modular UI components and full payment integration.",
    image: "/E-commerce.png",
    techStack: ["Stripe", "Next.js", "MongoDB", "AWS S3", "Axios"],
    link: "https://ecommerce-front-sk7f5oc1x-ys-projects-8a426084.vercel.app/",
    github: "https://github.com/yl275/ecommerce-front",
  },
  {
    title: "ATSYS No-Code Solution for InfluxDB",
    description:
      "My first group project as a backend developer, where I owned database integration and API connectivity for a time-series data exploration platform. Designed and implemented RESTful APIs endpoints, enabling data querying and visualization. Collaborated closely with frontend developers, contributing to architectural decisions and technical solutions. Gained hands-on experience with Docker, Express.js, and InfluxDB client integration.",
    image: "/ATSYS.png",
    techStack: ["RESTful","InfluxDB","Docker"],
  },
  {
    title: "3-Gomoku",
    description:
      "Developed a real-time multiplayer Gomoku game for 2+ players with React, Socket.IO, featuring turn-based gameplay, and a responsive interface.",
    image: "/Gomoku.png",
    techStack: ["websockets", "React", "Node.js", "Express"],
    link: "https://three-gomoku.onrender.com/",
    github: "https://github.com/yl275/3-gomoku",
  },
];

export default projectList;
