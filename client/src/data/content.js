export const profile = {
  name: "Duhita Khade",
  role: "Computer Science Engineering Student",
  shortBio:
    "CSE student with hands-on experience in Data Analytics, Power BI, Full Stack Development, and AI/ML — I build dashboards, data-driven applications, recommendation systems, and REST APIs.",
  about: [
    "I'm a Computer Science Engineering student at D Y Patil College of Engineering and Technology, Kasaba Bawada, Kolhapur, currently holding a CGPA of 7.9/10 with an expected graduation in 2027.",
    "I have a strong foundation in Python, Java, data science, AI/ML, SQL, and Power BI, and I enjoy developing data-driven applications, analyzing datasets, building web-based solutions, and creating insightful visualizations.",
    "I'm comfortable working across the stack with React.js, Node.js, MySQL, and MongoDB, and on the data side with Pandas, NumPy, and Scikit-learn. I'm eager to apply my technical, analytical, and problem-solving skills to real-world projects and grow as a technology professional.",
  ],
  interests: [
    "Software Development",
    "Data Science & AI/ML",
    "Data Visualization",
    "Web Development",
    "Problem Solving",
    "Analytical Thinking",
  ],
  phone: "8999494463",
  whatsapp: "https://wa.me/918999494463",
  email: "duhitakhade@gmail.com",
  github: "https://github.com/duhita7807",
  linkedin: "https://www.linkedin.com/in/duhita-khade-71ab8932b",
  location: "Pune, Maharashtra, India",
  resumePath: "/Duhita_Khade_Resume.pdf",
  education: {
    degree: "B.Tech, Computer Science Engineering",
    college: "D Y Patil College of Engineering and Technology",
    location: "Kasaba Bawada, Kolhapur, Maharashtra, India",
    graduation: "2027",
    cgpa: "7.9/10",
  },
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const skillGroups = [
  { title: "Programming", items: ["Java", "Python", "C++", "C"] },
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"] },
  { title: "Backend", items: ["Node.js", "Express.js", "Java", "REST APIs"] },
  { title: "Database", items: ["MySQL", "MongoDB", "SQLite", "SQL Queries"] },
  {
    title: "Data Analytics",
    items: ["Data Analysis", "Data Cleaning", "Data Preprocessing", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "BI & Visualization",
    items: ["Power BI", "Power Query", "DAX", "Microsoft Excel", "Dashboard Development", "Data Visualization"],
  },
  {
    title: "AI/ML",
    items: ["Machine Learning", "Scikit-learn", "Recommendation Systems", "Predictive Analysis"],
  },
  { title: "Core CS", items: ["Data Structures & Algorithms", "OOP", "DBMS"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Cursor", "Android Studio"] },
];

export const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Team Collaboration",
  "Communication",
  "Time Management",
  "Leadership",
];

export const projects = [
  {
    title: "EduVerse — AI-Powered Career & Placement Platform",
    problem:
      "Students rarely know how ready they are for campus placements, which skills they are missing, or which career paths fit them best.",
    solution:
      "An AI-powered student platform for career prediction, skill-gap analysis, placement readiness, and personalized career recommendations.",
    features: [
      "React.js interfaces and Node.js/Express REST APIs for student profiles, analytics, authentication, and dashboards",
      "MongoDB for managing student academic, skill, project, certification, and placement data",
      "Analytics and recommendation logic that generates readiness scores, skill-gap insights, and career recommendations",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "AI/ML"],
    contribution:
      "Built the entire project end to end: React frontend, Express REST APIs with JWT auth, MongoDB data model, and the recommendation logic.",
    github: "",
    live: "",
    accent: "#db2777",
  },
  {
    title: "Internship Recommendation App",
    problem:
      "Students often struggle to find internships that actually match their skills, interests, and career goals among scattered listings.",
    solution:
      "An Android application that recommends suitable internships based on skills, education, interests, and career preferences.",
    features: [
      "Personalized recommendation logic to suggest relevant internship opportunities",
      "Matches student profiles with relevant internship opportunities",
      "Simple, user-friendly interface for entering preferences and viewing recommendations",
    ],
    tech: ["Java", "Android Studio", "XML", "Recommendation Logic"],
    contribution:
      "Designed and implemented the recommendation logic and the interface for entering preferences and viewing results.",
    github: "",
    live: "",
    accent: "#2563eb",
  },
  {
    title: "Car Rental Management System",
    problem:
      "Small rental operators need an organized way to list vehicles, manage bookings, and handle users without manual, error-prone record keeping.",
    solution:
      "A car rental management system with modules for user registration, car listings, booking, payments, and administration.",
    features: [
      "Database integration for managing users, vehicles, bookings, and rental information",
      "Intuitive interface for browsing available cars and making rental bookings",
      "Backend business logic built with Java Servlets and JDBC database connectivity",
    ],
    tech: ["Java", "JSP", "Servlets", "MySQL", "GlassFish"],
    contribution:
      "Engineered the core modules and designed the database integration behind users, vehicles, and bookings.",
    github: "https://github.com/duhita7807/Car-Rental-Management-System",
    live: "",
    accent: "#0891b2",
  },
  {
    title: "Learning Path Generator",
    problem:
      "Learners often don't know which skills to prioritize next or how to structure their learning toward a specific career goal.",
    solution:
      "A personalized learning path generator based on user skills, interests, and learning goals.",
    features: [
      "Logic to recommend relevant learning resources and structured learning paths",
      "Interactive interface for entering learning preferences and receiving recommendations",
      "Problem-solving and data-processing techniques applied to generate suggestions",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Java", "MySQL", "Bootstrap"],
    contribution:
      "Designed and implemented the path-generation logic and the interactive front-end for learners.",
    github: "",
    live: "",
    accent: "#7c3aed",
  },
];

export const experience = {
  title: "Networking & Cloud Virtual Internship",
  organization: "Juniper Networks + EduSkills",
  period: "Virtual Internship",
  summary:
    "A structured virtual internship focused on networking and cloud fundamentals, delivered through Juniper Networks in partnership with EduSkills.",
  points: [
    "Completed a structured virtual internship covering core networking and cloud concepts.",
    "Worked through practical, hands-on modules that strengthened my understanding of modern network infrastructure.",
    "Applied classroom knowledge to industry-oriented tasks in a guided, professional learning environment.",
  ],
  technologies: ["Networking Fundamentals", "Cloud Fundamentals"],
};

export const achievements = [
  {
    title: "Smart India Hackathon 2023",
    context: "Internal Hackathon",
    description: "Shortlisted among the Top 25 teams in Smart India Hackathon 2023.",
  },
  {
    title: "3rd Prize — MINDSCAPES 2026",
    context: "State-Level Project Idea Competition",
    description: "Won 3rd prize in the MINDSCAPES 2026 state-level project idea competition.",
  },
  {
    title: "Placement Coordinator",
    context: "Training and Placement Cell",
    description: "Serving as a student coordinator for the college's Training and Placement Cell.",
  },
];

export const certifications = [
  {
    title: "Data Science Certification",
    issuer: "Organization to be added",
    date: "",
    credentialId: "",
    credentialUrl: "",
    detail: "",
  },
  {
    title: "Java & Web Development Certification",
    issuer: "Organization to be added",
    date: "",
    credentialId: "",
    credentialUrl: "",
    detail: "",
  },
  {
    title: "EduSkills / AICTE / NEAT",
    issuer: "EduSkills, AICTE & NEAT",
    date: "",
    credentialId: "",
    credentialUrl: "",
    detail: "Industry-aligned learning program completed as part of academic skill development.",
  },
];
