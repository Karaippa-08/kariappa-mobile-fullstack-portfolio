// All portfolio content lives here. Edit this file to update the site.
export const profile = {
  name: "Kariappa M M",
  title: "Android & Full-Stack Developer",
  headline: "I build Android apps in Kotlin and Firebase, and web tools that replace manual work.",
  subline: "Fresh BCA graduate (CGPA 8.95) with two internships, one solo client delivery and a 24-hour hackathon win.",
  location: "Kodagu, Karnataka, India",
  email: "kariappamm22@gmail.com",
  phone: "+91 7619430722",
  linkedin: "https://www.linkedin.com/in/kariappa-mm-6343b73a9",
  github: "https://github.com/Karaippa-08",
  about: [
    "I am a Bachelor of Computer Applications student finishing in 2026, focused on building complete products: native Android apps in Kotlin and web applications with Node.js, Express.js and MongoDB.",
    "My projects replace manual processes with working software. That includes a lab examination system, a college attendance tracker and a client-facing app for a water park business, which I managed alone from requirements to delivery.",
    "I am looking for a development team where I can contribute across the stack, learn from experienced engineers and grow as a well-rounded software developer.",
  ],
  facts: [
    { label: "Based in", value: "Kodagu, Karnataka" },
    { label: "Focus", value: "Android (Kotlin), Firebase, web" },
    { label: "Certified", value: "Oracle Cloud Generative AI Professional" },
    { label: "Languages", value: "English (professional working)" },
  ],
};

export const projects = [
  {
    name: "Water Park Application",
    tag: "Client project, Kushalnagar",
    problem: "A water park business needed a mobile app backed by real-time data.",
    solution: "Delivered a client-facing Android app using Firebase for real-time storage and retrieval.",
    contribution: "Managed the project independently, from requirements gathering through delivery to an external client.",
    stack: ["Kotlin", "XML", "Firebase"],
  },
  {
    name: "Magister Lab Examination Management System",
    tag: "Android app, BCA department",
    problem: "Lab examinations in the BCA department were tracked with manual record-keeping.",
    solution: "Built an Android app that digitizes lab examination management with a structured Firebase-backed workflow.",
    contribution: "Designed and built the app.",
    stack: ["Kotlin", "XML", "Firebase"],
  },
  {
    name: "College Attendance Management System",
    tag: "Web app, internship at Mudranalayam",
    problem: "Attendance tracking was handled manually.",
    solution: "Automated it with a web interface that uses Google Sheets as a live backend through Google Apps Script, so data updates in real time without a database server.",
    contribution: "Built the system during my Web Development internship.",
    stack: ["HTML", "CSS", "JavaScript", "Google Apps Script", "Google Sheets"],
  },
  {
    name: "BCA Department App",
    tag: "Android app",
    problem: "Students had no single place for department information.",
    solution: "An Android app that centralizes faculty, courses and notices for students.",
    contribution: "Developed the app.",
    stack: ["Kotlin", "XML"],
  },
];

export const experience = [
  {
    role: "Android Development Intern",
    company: "Technothrive Pvt. Ltd.",
    period: "Apr 2026 - Jun 2026",
    points: [
      "Developed and enhanced modules of a college application in Kotlin and XML, contributing to core UI screens and Firebase-backed data flows.",
      "Worked with the development team to debug and test features, improving app stability ahead of internal review.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Mudranalayam Pvt. Ltd.",
    period: "Aug 2025 - Sep 2025",
    points: [
      "Built a College Attendance Management System that automated attendance tracking previously done by hand.",
      "Connected Google Sheets as a live backend through Apps Script, enabling real-time updates without a dedicated database server.",
    ],
  },
];

export const skills = [
  { group: "Mobile", items: ["Android", "Kotlin", "XML layouts", "Firebase", "Firebase Realtime Database"] },
  { group: "Web", items: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Google Apps Script"] },
  { group: "Languages", items: ["Kotlin", "Java", "Python", "C", "C++", "C#", "JavaScript"] },
  { group: "Databases", items: ["MongoDB", "MySQL", "MS Access", "Firebase Realtime Database"] },
  { group: "Tools and cloud", items: ["Git", "GitHub", "Oracle Cloud Infrastructure", "MS Office"] },
  { group: "Core concepts", items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management"] },
];

export const credentials = {
  education: [
    { title: "Bachelor of Computer Applications", detail: "Cauvery College, Gonikoppal", period: "2023 - 2026", note: "CGPA 8.95" },
    { title: "Pre-University Course (Commerce + Computer Science)", detail: "Cauvery PU College, Gonikoppal", period: "2021 - 2023", note: "91.5%" },
  ],
  certifications: [
    { title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", detail: "Oracle, Sep 2025" },
    { title: "Sigma: Data Structures & Algorithms with Java", detail: "Apna College" },
    { title: "AI/ML for Geodata Analytics", detail: "Listed on LinkedIn profile" },
    { title: "NCC Certificate 'C'", detail: "Listed on LinkedIn profile" },
  ],
  achievements: [
    { title: "1st Place, Hack The Night (24-hour coding challenge)", detail: "Department of BCA, Cauvery Degree College" },
  ],
};
