// Edit links here. Empty strings = "not configured yet" (rendered as placeholders).
export const profile = {
  name: 'Meghana Gaonkar', role: 'Full-Stack Developer | Java | MERN Stack',
  tagline: 'Building digital experiences, one piece at a time.',
  intro: 'Computer Science graduate (2022–2026) focused on full-stack development, from Java and Spring MVC backends to MERN applications, with hands-on open-source collaboration.',
  email: 'meghanadgaonkar04@gmail.com',
  linkedin: 'https://www.linkedin.com/in/meghana-gaonkar-415653282/',
  github: 'https://github.com/MeghanaDG04',
  resume: 'https://drive.google.com/file/d/1-a2LwWcTgUItUXLEjEI1gUIqfXBTM82J/view?usp=sharing',
}
export const nav = ['home','about','skills','experience','projects','achievements','contact']
export const aboutPieces = [
  { id:'edu', title:'Education', text:'BE in Computer Science and Engineering, Mangalore Institute of Technology and Engineering, 2022–2026. CGPA: 9.1/10.' },
  { id:'tech', title:'Technical interests', text:'Full-stack development, backend development and application development across Java, MERN and Flutter.' },
  { id:'exp', title:'Professional experience', text:'Internships at Infosys Springboard, EY Systems and CodeLab Systems, building Java and MERN applications.' },
  { id:'oss', title:'Open source', text:'Project Admin at GirlScript Summer of Code 2025 and contributor with Open Source Connect India.' },
]
export const skillGroups = [
  { name:'Languages', note:'Core languages used across backend, frontend and database work.', items:['Java','C','SQL','HTML','CSS','JavaScript'] },
  { name:'Frameworks', note:'Frameworks used to build web and mobile applications.', items:['React.js','Node.js','Express.js','Spring MVC','Flutter'] },
  { name:'Databases', note:'Relational and document stores used in projects.', items:['MySQL','MongoDB','SQLite'] },
  { name:'Tools', note:'Everyday tooling for version control, API testing and IDEs.', items:['Git','GitHub','Postman','Visual Studio','Eclipse'] },
  { name:'Development areas', note:'Areas of work across internships and projects.', items:['Full-stack development','Backend development','Application development'] },
]
// Related technologies highlighted on hover/focus (based on the projects listed).
export const related = {
  'Java':['Spring MVC','MySQL','Eclipse'], 'Spring MVC':['Java','MySQL','Backend development'],
  'MySQL':['SQL','Java','Spring MVC'], 'React.js':['Node.js','Express.js','MongoDB','JavaScript'],
  'Node.js':['Express.js','React.js','MongoDB','SQLite'], 'Express.js':['Node.js','MongoDB','Postman'],
  'MongoDB':['Express.js','Node.js','React.js'], 'Flutter':['Node.js','SQLite','Application development'],
  'SQLite':['Flutter','Node.js','SQL'], 'Postman':['Express.js','Spring MVC'], 'Git':['GitHub'], 'GitHub':['Git'],
  'JavaScript':['React.js','Node.js','HTML','CSS'], 'HTML':['CSS','JavaScript'], 'CSS':['HTML','JavaScript'],
  'SQL':['MySQL','SQLite'], 'Full-stack development':['React.js','Node.js','MongoDB','Java'],
  'Backend development':['Spring MVC','Express.js','MySQL'], 'Application development':['Flutter','Java'],
}
export const experience = [
  { org:'Infosys Springboard', role:'Student Intern', dates:'March 2024 – June 2024', text:'Java development, REST APIs, MySQL, CRUD operations, testing, and debugging.' },
  { org:'EY Systems', role:'Full Stack Intern', dates:'February 2025 – March 2025', text:'MERN stack development, REST APIs, testing, debugging, and cloud deployment exposure.' },
  { org:'GirlScript Summer of Code 2025', role:'Project Admin', dates:'July 2025 – October 2025', text:'Project workflows, contributor coordination, documentation, and task tracking.' },
  { org:'Open Source Connect India', role:'Contributor', dates:'August 2025 – September 2025', text:'Open-source contributions, bug fixes, and feature improvements.' },
  { org:'CodeLab Systems', role:'MERN Stack Web Development Intern', dates:'February 2026 – May 2026', text:'Web application development, backend development, database operations, and debugging.' },
]
export const projects = [
  { id:'fms', name:'Flight Management System', size:'feat', hue:200, tech:['Java','Spring MVC','MySQL'], desc:'Flight booking, viewing and modification, with schedule and route management.', features:['Flight booking, viewing and modification','Schedule management','Route management','REST APIs'], github:'https://github.com/MeghanaDG04/Flight_Management_System.git', live:'' },
  { id:'gv', name:'GreenVolt', size:'feat', hue:140, tech:['Flutter','Node.js','SQLite'], desc:'EV charging and maintenance app with a sustainability focus.', features:['EV charging and maintenance','Station availability tracking','Predictive maintenance','Sustainability-focused functionality'], badge:'UNISYS Ideathon Top 20 shortlist', github:'https://github.com/MeghanaDG04/GreenVolt.git', live:'' },
  { id:'rec', name:'RECIPEDIA', size:'small', hue:270, tech:['MERN stack'], desc:'Recipe discovery with search, authentication, saving and sharing.', features:['Recipe discovery and searching','Authentication','Saving recipes','Sharing','REST APIs'], github:'https://github.com/MeghanaDG04/RECIPEDIA.git', live:'' },
  { id:'mf', name:'MindFit', size:'small', hue:320, tech:['Java','Spring MVC'], desc:'Wellness support: mood tracking, workouts and meditation guides.', features:['Mood tracking','Workouts','Meditation guides','Wellness support'], github:'https://github.com/MeghanaDG04/MindFit.git', live:'' },
  { id:'fl', name:'FurLink', size:'wide', hue:30, tech:['MERN stack'], desc:'Pet adoption and a pet product marketplace.', features:['Pet adoption','Pet product marketplace','Authentication and authorization','REST APIs'], github:'https://github.com/MeghanaDG04/FurLink.git', live:'' },
]
export const achievements = [
  ['GreenVolt','UNISYS Ideathon Top 20 shortlist'],['AquaFlow Analysis','Shortlisted, UNISYS Innovation Program Ideathon 2025'],
  ['Open Source Connect India','Top 10 Contributor recognition'],['CodeClash 2025','Rank 449'],
  ['Infosys Pragati Path to Future','Cohort 3 completion'],['GFG160','160-day coding program completion'],
  ['Postman API Fundamentals','Student Expert'],['Multiagent Collaborative Agent Program','Selected project under the IUCEE platform'],
]
export const certifications = [
  { name:'Introduction to Internet of Things', issuer:'NPTEL', year:'2023'},
  { name:'Programming Using Java', issuer:'Infosys', year:'2024'},
  { name:'Programming in Java', issuer:'NPTEL', year:'2024' },
  { name:'Google IT and Support', issuer:'Coursera', year:'2024' },
  { name:'Postman API Fundamentals Student Expert', issuer:'Postman', year:'2024' },
]
export const jokes = ['A developer’s puzzle: it works on my machine, so ship the machine.','There are 10 kinds of people: those who get binary and those who don’t.','I’d tell a UDP joke, but you might not get it.']
