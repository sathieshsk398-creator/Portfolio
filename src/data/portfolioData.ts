import { Project, Experience, Patent, Education, SkillItem, Certification, MetricStat } from '../types';

export const personalInfo = {
  name: "Sathiesh Kumar M",
  role: "Full Stack & AI Developer",
  headline: "Sathiesh Kumar M. Building Intelligent Full-Stack Applications.",
  subheadline: "Computer Science Engineer (2023-2027) specializing in React, Node.js, and integrating AI via the Google Gemini API.",
  bio: "Full Stack Developer and Computer Science undergraduate with a deep focus on crafting deterministic AI systems, high-throughput web applications, and resilient architectures. Passionate about bridging cutting-edge LLM capabilities with production-grade full-stack engineering.",
  location: "Coimbatore, India",
  email: "sathieshsk398@gmail.com",
  phone: "+91-9344515118",
  availability: "Available for Internships & Full-Stack Roles",
  links: {
    github: "https://github.com/sathieshsk398-creator",
    linkedin: "https://www.linkedin.com/in/sathieshkumar3662633a3/",
    leetcode: "https://leetcode.com/u/Sathiesh_Kumar-SK17/",
    resume: "https://drive.google.com/file/d/1kp2uJseMJWN0wrpk1g_riyO_fZubF6VN/view?usp=drive_link"
  }
};

export const experiences: Experience[] = [
  {
    id: "viruzverse",
    role: "Full Stack Development Intern",
    company: "Viruzverse Solutions",
    period: "2024",
    location: "Coimbatore, India",
    type: "Internship",
    summary: "Built production full-stack web application modules with enterprise Java, Spring Boot, React.js, and MySQL.",
    skills: ["Java", "React.js", "Spring Boot", "MySQL", "REST APIs", "SQL Optimization"],
    achievements: [
      "Built resilient full-stack web application components connecting Spring Boot REST APIs to reactive React interfaces.",
      "Optimized complex MySQL relational queries, indexing schemes, and CRUD workflows to minimize query execution overhead.",
      "Engineered structured data-access layers and stateful client components for high-concurrency enterprise workflows.",
      "Collaborated on API contract specifications and payload validation schemas ensuring seamless frontend-backend integration."
    ],
    impactMetric: "Full Lifecycle REST API & Database Optimization"
  }
];

export const patents: Patent[] = [
  {
    id: "voting-system-patent",
    title: "Fraud Detection in Voting System Using Hybrid Biometric Scanner",
    applicationNo: "202541037560 A",
    jurisdiction: "Patent Application Published (India)",
    status: "Published",
    abstract: "A novel electronic voting architecture featuring multi-factor biometric authentication, real-time cryptographic anomaly verification, and decentralized fraud prevention protocols.",
    keyInnovations: [
      "Multi-factor biometric verification pipeline combining fingerprint pattern matching with behavioral anomaly detection.",
      "High-throughput concurrency engine benchmarked to process >1,000 secure votes per minute without queue degradation.",
      "Tamper-evident verification protocols preventing duplicate votes and algorithmic ballot stuffing."
    ],
    performanceMetrics: [
      { metric: "Throughput", value: ">1,000 votes/min" },
      { metric: "Authentication", value: "Hybrid Multi-Factor" },
      { metric: "Duplicate Anomaly Prevention", value: "100% Deterministic" }
    ]
  }
];

export const educationList: Education[] = [
  {
    id: "vsb-be",
    degree: "B.E. Computer Science and Engineering",
    institution: "V.S.B College of Engineering Technical Campus",
    period: "2023 – 2027",
    score: "7.39/10",
    scoreLabel: "CGPA",
    location: "Coimbatore, India",
    focus: "Distributed Systems, Data Structures & Algorithms, Database Engineering, AI Architectures",
    highlights: [
      "Core coursework in Object-Oriented Analysis, DBMS, Computer Networks, and Machine Learning Systems",
      "Active competitive programmer & research contributor in hardware-software biometric interfaces"
    ]
  },
  {
    id: "nsvv-hsc",
    degree: "Higher Secondary Certificate (H.S.C)",
    institution: "N.S.V.V Matric Hr Sec School",
    period: "2021 – 2023",
    score: "76%",
    scoreLabel: "Percentage",
    location: "PattiVeeranPatti, India",
    focus: "Computer Science, Mathematics, Physics, Chemistry",
    highlights: [
      "Distinction in Computer Science fundamentals and foundational algorithmic logic"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "ai-car-damage",
    title: "AI Car Damage Estimator",
    category: "Multimodal AI & Full-Stack Platform",
    role: "Lead Full-Stack & AI Architect",
    tagline: "Multimodal vehicle inspection with deterministic pricing and automated repair estimations.",
    description: "A full-stack automated vehicle appraisal platform integrating Google Gemini's multimodal LLM API to classify damaged automobile components with 95% classification accuracy and calculate auditable repair estimates.",
    keyMetrics: [
      { label: "Classification Accuracy", value: "95%", subtext: "Multimodal Part Recognition" },
      { label: "Estimating Error Reduction", value: "-40%", subtext: "Deterministic Price Engine" },
      { label: "Inference Latency", value: "<1.4s", subtext: "Edge-optimized pipeline" }
    ],
    techStack: ["React.js", "Node.js", "TypeScript", "Google Gemini API", "JWT", "Tailwind CSS", "Express"],
    features: [
      "Multi-angle image upload with automated visual tensor preprocessing and metadata extraction.",
      "Gemini Multimodal integration to detect structural dents, bumper fractures, paint scratches, and windshield fissures.",
      "Deterministic pricing engine utilizing fuzzy component-matching to map visual damage directly to an auditable OEM parts catalog.",
      "JWT-secured authentication with role-based access control for insurance adjusters, body shops, and vehicle owners.",
      "Exportable itemized damage reports with repair labor estimations and parts replacement schedules."
    ],
    architecturalHighlights: [
      "Multi-modal prompt engineering enforcing strict JSON schema responses to completely prevent hallucinations.",
      "Fuzzy logic string distance algorithms matching damaged part labels against standardized repair price matrices.",
      "Stateless Node.js backend proxy safeguarding Gemini API secrets and caching repeated inference runs."
    ],
    challengesSolved: "Standard LLM outputs generate variable cost predictions. Solved this by decoupling AI classification (pure taxonomy) from the calculation engine (deterministic price matrices with fuzzy string matching).",
    status: "Production Ready",
    highlightBadge: "Google Gemini Multimodal Powered",
    demoUrl: "#demo-car-damage",
    githubUrl: "https://github.com/sathieshsk398-creator/AI-Car-Damage-Detection-Estimator-"
  },
  {
    id: "ai-hospital-management",
    title: "AI-Powered Hospital Management System",
    category: "Healthcare Infrastructure & AI Workflow",
    role: "Full-Stack Engineer",
    tagline: "Comprehensive clinical dashboard with AI-driven smart triage, appointment dispatching, and inventory.",
    description: "An enterprise-grade hospital management and clinical operations platform engineered to process 10,000+ daily operational records, featuring intelligent symptom triage and automated practitioner scheduling.",
    keyMetrics: [
      { label: "Daily Records Throughput", value: "10,000+", subtext: "Processed Seamlessly" },
      { label: "Operational Efficiency", value: "+25%", subtext: "Reduced Triage Wait Times" },
      { label: "Dashboard Modules", value: "6 Core", subtext: "Patient, Triage, Inventory, Billing" }
    ],
    techStack: ["React.js", "Node.js", "TypeScript", "Tailwind CSS", "Google Gemini API", "JSON Database", "Vite"],
    features: [
      "AI-driven clinical symptom triage bot assessing urgency levels and routing patients to relevant specialists.",
      "Smart practitioner scheduling engine balancing doctor availability, room allocations, and patient loads.",
      "Modular role-based dashboards tailored for Doctors, Nurses, Pharmacists, and Hospital Administrators.",
      "Automated pharmacy inventory management with low-stock alerts and predictive consumption analysis.",
      "Comprehensive diagnostic reporting and invoice tracking with exportable medical summaries."
    ],
    architecturalHighlights: [
      "High-density React component architecture built for zero-lag filtering across 10k+ patient records.",
      "Gemini-assisted natural language patient intake converting conversational complaints into structured triage codes.",
      "Optimized query and indexing layer delivering sub-50ms search response times across historical records."
    ],
    challengesSolved: "Handling peak admission bottlenecks by integrating natural language intake chatbots that categorize preliminary vitals before physical consultation.",
    status: "Completed & Deployed",
    highlightBadge: "High-Throughput Clinical Suite",
    demoUrl: "#demo-hospital",
    githubUrl: "https://github.com/sathieshsk398-creator/Hospital-Management-System"
  }
];

export const skillsList: SkillItem[] = [
  // Languages
  { name: "Java", category: "Languages", level: "Medium", experienceContext: "Object-Oriented Architecture, Spring Boot, Multithreading, Core APIs", iconName: "Coffee", featured: true },
  { name: "JavaScript", category: "Languages", level: "Medium", experienceContext: "ES6+, Async Event Loop, DOM, Functional Programming", iconName: "Code", featured: true },
  { name: "TypeScript", category: "Languages", level: "Basic", experienceContext: "Strict Typing, Generics, Complex Interfaces, Full-Stack Contract Safety", iconName: "FileCode", featured: true },
  { name: "SQL", category: "Languages", level: "Medium", experienceContext: "Complex Joins, Indexing, Relational Normalization, Query Tuning", iconName: "Database", featured: true },
  
  // Frontend
  { name: "React.js", category: "Frontend", level: "Medium", experienceContext: "Hooks, Context, Custom Hooks, Performance Optimization, Vite", iconName: "Layers", featured: true },
  { name: "HTML5 / CSS3", category: "Frontend", level: "Advanced", experienceContext: "Semantic Markup, Modern Flexbox & Grid, Web Accessibility", iconName: "Layout", featured: false },

  // Backend & AI
  { name: "Google Gemini API", category: "Backend & AI", level: "Advanced", experienceContext: "Multimodal Vision, Structured JSON Generation, Function Calling", iconName: "Sparkles", featured: true },

  // Databases & Tools
  { name: "MySQL", category: "Databases & Tools", level: "Medium", experienceContext: "Schema Design, ACID Transactions, Relational Integrity, Performance", iconName: "Database", featured: true },
  { name: "Git & GitHub", category: "Databases & Tools", level: "Basic", experienceContext: "Version Control, Branching Workflows, CI/CD Actions", iconName: "GitBranch", featured: true }
];

export const metricStats: MetricStat[] = [
  {
    id: "leetcode",
    value: 120,
    suffix: "+",
    label: "LeetCode Problems Solved",
    description: "Consistent practice in Data Structures, Dynamic Programming, and Algorithms.",
    iconName: "Terminal"
  },
  {
    id: "patents",
    value: 2,
    suffix: "",
    label: "Patent Applications Published",
    description: "Published intellectual property in Indian Patent Journal for biometric fraud detection.",
    iconName: "Award"
  },
  {
    id: "accuracy",
    value: 95,
    suffix: "%",
    label: "AI Vision Classification Accuracy",
    description: "Achieved on automated vehicle component damage appraisal pipeline.",
    iconName: "Sparkles"
  },
  {
    id: "records",
    value: 10000,
    suffix: "+",
    label: "Daily Records Processed",
    description: "Throughput supported by hospital operational management dashboards.",
    iconName: "Activity"
  }
];

export const certifications: Certification[] = [
  {
    id: "nptel-cloud",
    title: "Cloud Computing Certification",
    issuer: "NPTEL (IIT)",
    category: "Cloud Infrastructure",
    badgeText: "IIT Certified",
    highlights: "Mastery in cloud virtualization, storage virtualization, distributed computing models, and SLA reliability."
  },
  {
    id: "infosys-fullstack",
    title: "Full Stack Development",
    issuer: "Infosys Springboard",
    category: "Full Stack Engineering",
    badgeText: "Infosys Certified",
    highlights: "End-to-end full-stack web architecture, frontend state management, backend controllers, and database design."
  },
  {
    id: "tcs-codevita",
    title: "TCS CodeVita Season 13 Rank",
    issuer: "Tata Consultancy Services (TCS)",
    category: "Competitive Programming",
    badgeText: "Rank Achiever",
    highlights: "Global competitive programming olympiad evaluating algorithmic problem solving under strict time constraints."
  },
  {
    id: "java-great-learning",
    title: "Java Programming",
    issuer: "Great Learning",
    category: "Languages & OOP",
    badgeText: "Certified",
    highlights: "Comprehensive object-oriented programming, data structures, multithreading, and memory management in Java."
  },
  {
    id: "coursera-data-analysis",
    title: "Introduction to Data Analysis using MS Excel",
    issuer: "Coursera Project Network",
    category: "Data Analysis",
    badgeText: "Certified",
    highlights: "Data transformation, statistical summary formulas, pivot tables, and visual reporting."
  }
];
