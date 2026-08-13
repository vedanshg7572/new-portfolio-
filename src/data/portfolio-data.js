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
    website: "https://vedansh.tech",
    email: "mailto:vedanshg7572@gmail.com",
  },
};

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science Engineering",
    institution: "GLA University, Mathura",
    duration: "2024 — 2028 (Expected)",
    status: "Currently in 3rd Year",
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
  { name: "AWS & Cloud Computing", level: 85, category: "Cloud & Tools" },
  { name: "Git & GitHub", level: 80, category: "Cloud & Tools" },
  { name: "LeetCode Problem Solving", level: 80, category: "Cloud & Tools" },
];

export const projects = [
  {
    title: "Cloud Disaster Recovery System",
    description:
      "Automated multi-region 'Warm Standby' AWS disaster recovery architecture (us-east-1 to us-west-2) featuring Route 53 health-check failovers, RDS cross-region replication, and automated ASG compute scaling.",
    tech: ["AWS Route 53", "EC2", "RDS Replication", "Node.js", "Express.js", "Bash"],
    github: "https://github.com/vedanshg7572/cloud-disaster-recovery",
    live: null,
    icon: "🌩️",
    color: "#FF3B30",
  },
  {
    title: "Cloud Cost Optimization Dashboard",
    description:
      "Real-time cloud analytics & waste detection platform integrated with AWS Cost Explorer SDK. Features 10+ resource optimization strategies, automated SNS budget threshold alerts, and PDF report exports.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Recharts", "Express.js", "AWS SDK"],
    github: "https://github.com/vedanshg7572/Cloud-Cost-Optimization-Dashboard",
    live: null,
    icon: "☁️",
    color: "#4285F4",
  },
  {
    title: "The Server Commander",
    description:
      "Cloud IaaS automated deployment & management suite for AWS EC2 Linux instances. Automates Apache2 web server setups, security group configurations, firewall UFW rules, and deployment scripts.",
    tech: ["AWS EC2", "Ubuntu Linux", "Apache2", "Bash", "SSH", "Firewall UFW"],
    github: "https://github.com/vedanshg7572/the-server-commandar",
    live: null,
    icon: "⚙️",
    color: "#E95420",
  },
  {
    title: "AuraCloud AI Chatbot",
    description:
      "AI-powered chatbot widget & telemetry dashboard featuring hybrid Jaccard similarity intent matching, custom NLP tokenization, and Google Gemini LLM fallback for off-pattern queries.",
    tech: ["JavaScript", "Google Gemini API", "NLP Engine", "CSS Grid", "HTML5"],
    github: "https://github.com/vedanshg7572/CodeAlpha_chatbot",
    live: null,
    icon: "🤖",
    color: "#FF9900",
  },
  {
    title: "Cloud-Based Bus Pass System",
    description:
      "Production-ready MERN transit ticketing platform with HMAC-signed QR verification, in-memory PDF pass rendering (PDFKit), Cloudinary document storage, and RBAC authentication.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT"],
    github: "https://github.com/vedanshg7572/CodeAlpha_cloudbus-pass",
    live: null,
    icon: "🚌",
    color: "#0ae",
  },
  {
    title: "Quantum Hands",
    description:
      "High-performance hand-tracking web application powered by MediaPipe & WebGL. Features real-time gesture recognition (peace, pinch, fist), custom draw canvas, and shader effects.",
    tech: ["JavaScript", "MediaPipe AI", "WebGL", "Canvas API"],
    github: "https://github.com/vedanshg7572/ved-quantum-hands-",
    live: null,
    icon: "🖐️",
    color: "#6c9",
  },
];

export const certificates = [
  {
    title: "Cloud Computing Intern",
    issuer: "Codec Technologies Pvt. Ltd. (AICTE Approved)",
    date: "July 2026 — Sept 2026",
    hours: "1 Month Internship",
    credlyLink: "https://internship.aicte-india.org/",
    pdfPath: "/assets/codec-internship-certificate.pdf",
    icon: "⚡",
    color: "#4285F4",
  },
  {
    title: "Essentials: Your First Workflows",
    issuer: "n8n academy",
    date: "July 25, 2026",
    hours: "Workflow Automation",
    credlyLink: "https://academy.n8n.io/",
    pdfPath: "/assets/n8n-workflows-certificate.pdf",
    icon: "🔄",
    color: "#EA4B71",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    date: "July 13, 2026",
    hours: "Completion Certificate",
    credlyLink: "https://www.aws.training/",
    pdfPath: "/assets/aws-practitioner-certificate.pdf",
    icon: "☁️",
    color: "#FF9900",
  },
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
