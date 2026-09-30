// Edit links, text and projects here. Components read only from this file.
export const config = {
  name: 'Rohit Thakur',
  github: 'https://github.com/RohitThakur9675',
  linkedin: 'https://www.linkedin.com/in/rohit-thakur-173865253',
  email: 'rt773694@gmail.com',
  phone: '+91 6397368237', // set to '' to hide the phone number
  resume: '/resume.pdf', // replace /public/resume.pdf with a newer resume
  photo: '/profile.jpg', // replace /public/profile.jpg to change the photo
}
export const isSet = (u) => !!u && !u.startsWith('YOUR_')
// Placeholder links render as disabled until a real URL is set.
export const linkProps = (u) =>
  isSet(u)
    ? { href: u, target: '_blank', rel: 'noreferrer' }
    : { 'aria-disabled': 'true', title: 'Add this link in src/data/portfolioData.js', onClick: (e) => e.preventDefault() }

export const nav = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact']
export const techBadges = ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'AI']
export const stats = [
  ['Full Stack', 'Modern web development'],
  ['AI Focused', 'AI integration & automation'],
  ['Real Projects', 'Production-style applications'],
  ['Always Learning', 'Modern technologies'],
]
export const about = {
  bio: [
    'I am a B.Tech Computer Science student (2026) at Dr. A.P.J. Abdul Kalam Technical University, building and deploying full stack MERN applications. I work with React, Node.js, Express.js and MongoDB, design REST APIs, and secure them with JWT authentication and role-based access.',
    'Beyond CRUD apps, I enjoy real-time features (Socket.IO and WebRTC) and I am growing my focus on AI integration and automation. Every project I have built is live on Vercel or Render, and I am looking for an entry-level MERN Stack Developer role.',
  ],
  philosophy: "I don't just want to write code. I want to understand the problem, build the solution, and turn ideas into useful products.",
  focus: ['MERN Stack', 'REST APIs & auth', 'Real-time apps', 'AI integration', 'Automation'],
  facts: [['Education', 'B.Tech CS, 2026'], ['Stack', 'React · Node · MongoDB'], ['Interest', 'Real-time, AI & automation'], ['Status', 'Open to opportunities']],
}
export const skills = {
  Frontend: ['JavaScript (ES6+)', 'React.js', 'Vite', 'HTML5', 'CSS3', 'Bootstrap', 'Material UI'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'bcrypt', 'CORS', 'Helmet', 'Rate limiting'],
  Database: ['MongoDB (Mongoose, Atlas)', 'MySQL'],
  'Real-time': ['Socket.IO', 'WebRTC'],
  'Tools & Deployment': ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render', 'Cloudinary'],
  'AI & Automation': ['AI API integration', 'AI-assisted development', 'Automation workflows'],
}
export const projects = [
  {
    id: 'jobtrack',
    name: 'JobTrack — Job & Recruitment Platform',
    short: 'JT',
    gradient: 'linear-gradient(135deg,#115e59,#134e4a 55%,#0d1214)',
    image: null, // e.g. '/jobtrack.png' (put a screenshot in /public)
    description: 'A full-stack job portal with separate job seeker and recruiter roles, deployed live on Vercel and Render.',
    problem: 'Postings, applications and follow-ups are scattered across tools, so candidates never know where they stand.',
    solution: 'Recruiters post jobs and run the hiring workflow; job seekers search, apply in one click with a saved profile and resume, and track every status.',
    features: [
      'Separate job seeker and recruiter roles', 'Search by skills, location, salary and work mode', 'One-click apply using saved profile and resume',
      'Recruiter dashboard to review applicants', 'Shortlist, schedule interviews or reject', 'Status tracking: Applied, Shortlisted, Interview Scheduled, Rejected',
      'Public candidate and recruiter/company profiles', 'JWT auth, role-based access, Helmet, CORS and rate limiting', 'Resume and photo uploads via Cloudinary',
    ],
    stack: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Cloudinary'],
    challenges: [
      'Keeping the application status consistent across candidate and recruiter views.',
      'Role-based access for two kinds of users on one API.',
      'Handling resume and photo uploads reliably.',
    ],
    learned: [
      'Designing REST APIs and MongoDB schemas around a real workflow.',
      'Securing an API with JWT, Helmet, CORS and rate limiting.',
      'Deploying a frontend on Vercel and an API on Render with MongoDB Atlas.',
    ],
    result: 'A live, working hiring workflow from posting a job to scheduling an interview.',
    github: 'https://github.com/RohitThakur9675/Job-Tracker',
    live: 'https://job-tracker-fawn-seven.vercel.app',
  },
  {
    id: 'apnavideocall',
    name: 'ApnaVideoCall — Real-Time Video Calling App',
    short: 'AV',
    gradient: 'linear-gradient(135deg,#134e4a,#1e3a5f 55%,#0d1214)',
    image: null,
    description: 'A real-time video calling web app built with WebRTC and Socket.IO, live on Render.',
    problem: 'Two browsers need reliable signaling and session handling before they can talk to each other directly.',
    solution: 'Socket.IO handles signaling and sessions while WebRTC carries peer-to-peer audio and video, behind JWT-secured sessions.',
    features: [
      'Real-time video calling', 'Peer-to-peer audio/video with WebRTC', 'Socket.IO signaling and session management',
      'JWT-secured user sessions', 'Responsive React and Material UI interface',
    ],
    stack: ['React.js', 'Material UI', 'Node.js', 'Express.js', 'Socket.IO', 'WebRTC', 'JWT'],
    challenges: [
      'Coordinating WebRTC signaling between peers through Socket.IO.',
      'Managing call sessions and connections in real time.',
    ],
    learned: [
      'How WebRTC peer connections are established.',
      'Building real-time features with Socket.IO.',
    ],
    github: 'https://github.com/RohitThakur9675',
    live: 'https://apna-video-call-6-k2mm.onrender.com/',
  },
  {
    id: 'vitalcare',
    name: 'VitalCare — Health Tracking Platform',
    short: 'VC',
    gradient: 'linear-gradient(135deg,#0f766e,#164e63 55%,#0d1214)',
    image: null,
    description: 'A health tracking application built around personal health and activity monitoring, with dashboard-based insights.',
    problem: 'Health numbers live in separate apps and notes, which makes trends hard to notice.',
    solution: 'A single dashboard that records daily health data and shows history and trends visually.',
    features: [
      'Health dashboard', 'Health history', 'Steps, sleep and heart rate', 'Blood pressure, water and calories',
      'Health data visualization', 'User profile', 'MongoDB / API integration',
    ],
    planned: ['Smartwatch / wearable integration'],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Charts'],
    challenges: [
      'Showing many different metrics clearly on one dashboard.',
      'Modelling time-based health history in the database.',
      'Planning for wearable data without overpromising.',
    ],
    learned: [
      'Turning raw data into readable charts.',
      'Designing data models for history and trends.',
      'Scoping honestly: ship what works, plan the rest.',
    ],
    github: 'YOUR_GITHUB_URL',
    live: 'YOUR_LIVE_DEMO_URL',
  },
]
export const journey = [
  ['B.Tech', 'Started my engineering degree and built a foundation in programming and problem solving.'],
  ['Full Stack Development', 'Learned HTML, CSS, JavaScript, React, Node.js, Express.js and MongoDB.'],
  ['Real-world Projects', 'Built and deployed JobTrack and ApnaVideoCall, plus VitalCare, to practise complete end-to-end workflows.'],
  ['AI Integration', 'Exploring AI APIs, AI-assisted development and automation inside applications.'],
  ['Production-ready Applications', 'Where I am heading: polished, reliable applications used by real people.'],
]
export const services = [
  ['Full Stack Web Applications', 'Modern frontend and backend applications, built end to end.'],
  ['AI-Powered Applications', 'Applications enhanced with AI APIs and intelligent features.'],
  ['Backend & APIs', 'REST APIs, authentication, databases and server-side logic.'],
  ['Automation', 'Automating repetitive workflows and business processes.'],
]
export const why = [
  ['Problem Solving', 'I start with the problem, then choose the tools.'],
  ['Real Project Experience', 'My projects are complete applications, deployed live on Vercel or Render.'],
  ['Full Stack Understanding', 'Comfortable across the UI, APIs and database.'],
  ['AI & Automation Interest', 'Keen to add practical AI features and automate busywork.'],
  ['Continuous Learning', 'I keep improving my tools and my projects.'],
]
