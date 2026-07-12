// Centralized portfolio data — edit this file to update all sections
export const personalInfo = {
  name: "Vedansh Gupta",
  tagline: "Aspiring Software Engineer",
  location: "Uttar Pradesh, India",
  phone: "+91 7572001500",
  email: "vedanshg7572@gmail.com",
  heroImage: "/assets/hero-image.png",
  heroVideo: "/assets/hero-video.mp4",
  resumePdf: "/assets/resume.pdf",
  bio: "Motivated and detail-oriented Computer Science student with a strong interest in Cloud Computing, Data Structures & Algorithms, and Software Development. Seeking opportunities to enhance technical skills through internships and real-world projects while contributing effectively to organizational growth.",
  social: {
    github: "https://github.com/vedanshg7572",
    linkedin: "https://www.linkedin.com/in/vedansh-gupta-94373a32a/",
    leetcode: "https://leetcode.com/u/Vedansh75/",
    email: "mailto:vedanshg7572@gmail.com",
  },
};

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science Engineering",
    institution: "GLA University, Mathura",
    duration: "2024 — 2028 (Expected)",
    status: "Currently in 2nd Year",
    icon: "🎓",
  },
];

export const skills = [
  { name: "Java", level: 85, category: "Languages" },
  { name: "C", level: 75, category: "Languages" },
  { name: "C++", level: 78, category: "Languages" },
  { name: "HTML", level: 90, category: "Web" },
  { name: "CSS", level: 85, category: "Web" },
  { name: "JavaScript", level: 80, category: "Web" },
  { name: "Data Structures & Algorithms", level: 80, category: "Core CS" },
  { name: "DBMS", level: 70, category: "Core CS" },
  { name: "OOPs", level: 82, category: "Core CS" },
  { name: "AWS Basics", level: 65, category: "Cloud & Tools" },
  { name: "Git & GitHub", level: 78, category: "Cloud & Tools" },
  { name: "LeetCode Problem Solving", level: 75, category: "Cloud & Tools" },
];

export const projects = [
  {
    title: "Quantum Hands",
    description:
      "A WebGL-powered hand-tracking experience using MediaPipe. Features real-time gesture recognition (peace, fist, pinch, thumbs up), multiple color themes, persistent draw mode, and cinematic glitch effects — all running in the browser with zero backend.",
    tech: ["JavaScript", "MediaPipe", "WebGL", "Canvas API"],
    github: "https://github.com/vedanshg7572",
    live: null,
    icon: "🖐️",
    color: "#6c9",
  },
  {
    title: "Library Management System",
    description:
      "Full-stack library management application with a Vite-powered React frontend and a dedicated backend. Features book cataloging, user management, and seamless CRUD operations. Deployed on Vercel.",
    tech: ["React", "Vite", "Node.js", "Vercel"],
    github: "https://github.com/vedanshg7572",
    live: null,
    icon: "📚",
    color: "#7df",
  },
  {
    title: "Static Website on AWS S3",
    description:
      "Hosted a static website using Amazon S3 with properly configured bucket permissions and static website hosting settings. Demonstrated cloud deployment skills and AWS fundamentals.",
    tech: ["AWS S3", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/vedanshg7572",
    live: null,
    icon: "☁️",
    color: "#f80",
  },
  {
    title: "Snake Game",
    description:
      "Classic Snake game built with HTML5 Canvas. Features smooth gameplay, score tracking, and responsive controls. A fun project showcasing JavaScript DOM manipulation and game loop fundamentals.",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    github: "https://github.com/vedanshg7572",
    live: null,
    icon: "🐍",
    color: "#0ae",
  },
  {
    title: "DSA Problem Solving",
    description:
      "Consistent practice on LeetCode solving problems on arrays, trees, and graphs. Implemented BFS and DFS traversal algorithms. Building strong algorithmic thinking and coding efficiency.",
    tech: ["Java", "C++", "Algorithms", "Data Structures"],
    github: "https://leetcode.com/u/Vedansh75/",
    live: "https://leetcode.com/u/Vedansh75/",
    icon: "🧠",
    color: "#f2a",
  },
];

export const certificates = [
  {
    title: "AWS Academy Graduate — Cloud Foundations",
    issuer: "AWS Academy / Credly",
    date: "March 2026",
    hours: "20 hours",
    credlyLink: "https://www.credly.com/go/3BzTUYY3",
    pdfPath: "/assets/aws-certificate.pdf",
    icon: "☁️",
    color: "#FF9900",
  },
];

export const strengths = [
  { name: "Quick Learner", icon: "⚡" },
  { name: "Team Player", icon: "🤝" },
  { name: "Good Communication", icon: "💬" },
  { name: "Problem Solving", icon: "🧩" },
];

export const languages = ["English", "Hindi"];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];
