export type NavItem = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  workMode: string;
  description?: string;
  skills?: string[];
  highlight?: boolean;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ProjectCard = {
  title: string;
  description: string;
  href: string;
  tag: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Achievements", href: "/achievements" },
  { label: "Certifications", href: "/certifications" },
  { label: "YouTube", href: "/youtube" },
  { label: "Contact", href: "/contact" },
];

export const profile = {
  name: "Divyansh Rathore",
  title: "Senior Analyst | Backend & Automation",
  description:
    "Software professional focused on backend engineering, automation, reliable systems, and practical digital solutions.",
  badge: "Rajasthan State Topper — Polytechnic Computer Science",
  currentRole: "Senior Analyst at Nomura.",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/rathoredivyansh",
  instagram: "https://www.instagram.com/thedivyansh09/",
  youtube: "https://youtube.com/@thedivyansh9290",
};

export const experienceTimeline: ExperienceItem[] = [
  {
    company: "Persistent Systems",
    role: "Software Engineering Intern",
    period: "Jun 2022 – Jul 2022",
    location: "Nagpur, Maharashtra",
    workMode: "Remote",
  },
  {
    company: "Nomura",
    role: "Internship Trainee",
    period: "Jan 2023 – Jun 2023",
    location: "Mumbai, Maharashtra",
    workMode: "On-site",
    description: "Worked on automating test cases in the production environment.",
    skills: ["WinApp", "Cucumber", "Java", "Maven", "TestNG", "Automation"],
  },
  {
    company: "Nomura",
    role: "Analyst",
    period: "Jul 2023 – Nov 2024",
    location: "Powai, Mumbai",
    workMode: "On-site",
  },
  {
    company: "Nomura",
    role: "Senior Analyst",
    period: "Oct 2024 – Present",
    location: "Mumbai, Maharashtra",
    workMode: "Hybrid",
    skills: ["Autosys", "Ansible", "Automation", "Backend / Software Engineering"],
    highlight: true,
  },
];

export const featuredProject = {
  title: "Automation in Production Environment",
  summary:
    "An automation solution designed to streamline functional status monitoring and reduce repetitive manual intervention in a production environment.",
  impact: "Reduced a roughly 45-minute manual process to a one-click automation workflow.",
  problem:
    "Production monitoring depended on repetitive manual checks, which consumed time and increased the chance of delay during critical operational windows.",
  solution:
    "Built a reusable automation framework and workflow templates to monitor functional status, trigger file creation and execution, and reduce night-time intervention with minimal manual effort.",
  technology: [
    "Java",
    "Maven",
    "Selenium",
    "Cucumber",
    "TestNG",
    "Jenkins",
    "SonarQube",
    "Ansible",
    "Autosys",
  ],
  highlights: [
    "Automated functional status monitoring",
    "Reduced repetitive manual work",
    "Created reusable automation framework/templates",
    "Automated file creation and execution",
    "Reduced manual/night-time intervention",
    "Improved operational efficiency",
  ],
};

export const otherProjects: ProjectCard[] = [
  {
    title: "Client Website",
    description: "A client website project. Further project details and a public URL have not been provided.",
    href: "/projects/client-website",
    tag: "Web Development",
  },
  {
    title: "Other Web Development Projects",
    description: "A portfolio of web development work focused on responsiveness, usability, and practical business requirements.",
    href: "/projects",
    tag: "Web",
  },
  {
    title: "Healthcare Hackathon — KakushIN",
    description: "KakushIN Hackathon concept linking patients with healthcare workers based on location.",
    href: "/projects/healthcare-hackathon",
    tag: "Healthcare",
  },
  {
    title: "Digital Seva / ISKCON-related Website",
    description: "Website created as a digital seva project for Shri Shri Krishna Balram / Gupt Vrindavan Dham.",
    href: "/projects/digital-seva",
    tag: "Community",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming / Backend",
    items: ["Java", "Python", "Django"],
  },
  {
    title: "Automation / Testing",
    items: ["Selenium", "Cucumber", "TestNG", "Maven", "WinApp"],
  },
  {
    title: "DevOps / Automation",
    items: ["Jenkins", "Ansible", "Autosys", "SonarQube"],
  },
  {
    title: "Web",
    items: ["HTML", "CSS", "WordPress", "Web Development"],
  },
  {
    title: "Digital",
    items: ["Digital Marketing"],
  },
];

export const achievements = [
  {
    title: "Rajasthan State Topper",
    subtitle: "Polytechnic — Computer Science",
    award: "Sarla Birla Memorial Award",
  },
];

export const education = [
  {
    title: "Diploma",
    institution: "Shri G S Institute of Technology & Science",
  },
  {
    title: "B.Tech",
    institution: "Shri G S Institute of Technology & Science",
  },
];

export const certifications = [
  "Fundamentals of Digital Marketing — Google Digital Garage",
  "TSF GRIP Internship Program in Web Development & Designing — The Sparks Foundation",
  "BASH Training — Spoken Tutorial Project — IIT Bombay",
  "Git Training — Spoken Tutorial Project — IIT Bombay",
  "Python 3.4.3 Training — Spoken Tutorial Project — IIT Bombay",
];
