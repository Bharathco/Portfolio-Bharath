import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/picture-4.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience from an on-site Internship, I have honed my skills in front-end technologies like HTML, CSS, Javascript, TailwindCSS and ReactJS as well as working on back-end technologies like NodeJs, ExpressJs, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am Bharath Rajashekar, a Computer Science and Design undergraduate, currently in my Pre-final year at DSATM, graduating in 2025. I have a strong foundation in web development, having worked as a Web Developer Intern at Art of Living Digital. My expertise lies in creating responsive and dynamic web applications using React.js, along with a solid understanding of Data Structures and Algorithms (DSA).\n\nIn addition to my web development skills, I am proficient in Java, Operating Systems (OS), Database Management Systems (DBMS), Computer Networks and GenerativeAI. My diverse skill set and hands-on experience with both front-end and back-end technologies equip me to tackle complex technical challenges and contribute effectively to any development team.`;


export const EXPERIENCES = [
  {
    year: "Nov 2023 - Dec 2023",
    role: "React Developer Intern",
    company: "Art of living Digital, a unit of Sumeru Software Solutions",
    description: `contributed to the Art of Living Website for Latin American countries under the guidance of Project Manager Ms. Neeru Chaurasia. Integrating into a project the developers had been working on for months, my task was to create a pop-up modal using React.js, HTML, Tailwind CSS, and JavaScript for a seamless user experience. Working alongside developers provided insights into industry practices, enhancing my technical skills. I am grateful for this opportunity and eager to apply these experiences to future endeavors..`,
    technologies: ["HTML", "CSS", "TrailwindCSS", "Javascript", "React.js"],
  },
  {
    year: "Oct 2023 - Dec-2023",
    role: "Web Developer Intern",
    company: "Varcons Technologies Pvt Ltd",
    description: `Designed and developed user interfaces for web applications  titled 'Web Template for Biometric Authentication Landing Page,' aimed at creating fully-fledged functional web templates for a client. Designed functional web pages and utilized databases to collect, store, and sort data, aligning with design briefs and client specifications provided in the project proposal.`,
    technologies: ["HTML", "CSS", "Javascript", "Figma"],
  },
  {
    year: "May 2023 - July 2023",
    role: "Machine Learning Intern",
    company: "LanguifyAI",
    description: `worked on an engaging project focused on Object Detection using Machine Learning (ML) and Python. Under the guidance of the LanguifyAI team, I developed an object detection system, curated and prepared data for machine learning models, implemented and optimized ML models using Python and libraries like TensorFlow and PyTorch, conducted thorough testing and evaluation, and maintained detailed project documentation. This experience provided me with practical insights into ML, Python programming, and object detection, furthering my path towards a successful career in AI and ML..`,
    technologies: ["Python", "Machine Learning", "TensorFlow",],
  },
 
];

export const PROJECTS = [

  {
    title: "MockXpert-AI Interview Mocker",
    image: project4,
    description:
      "Developed a Full-Stack AI-powered interview preparation web app that simulates mock interviews with AI-generated questions, records user responses, and provides detailed feedback to enhance interview skills. Implemented user authentication and account management features to enhance user experience and security.",
    technologies: ["NextJs", "ReactJs","TailwindCSS", "GenerativeAI", "Javascript", "Clerk Authentication", "Drizzle ORM"],
  },
 
  {
    title: "Landmark Detection Project",
    image: project1,
    description:
      "project focuses on advanced object detection, specifically identifying and labeling place names within images. This technology enhances user experience by providing real-time, accurate recognition and annotation of locations in images, streamlining the extraction of place-related information from visual content. It finds applications in tourism, geolocation services, and more.",
    technologies: ["Python", "Machine learning", "TensorFlow",],
  },
  {
    title: "Data Visualization Project - Netflix Dataset",
    image: project2,
    description:
      "project focused on the Netflix dataset, developing a comprehensive data dashboard that explores key aspects of the streaming platform. The dashboard highlights top content based on runtime and IMDB ratings, compares subscription costs, and delves into popular genres. This project showcases the power of data visualization in transforming raw information into actionable insights, empowering decision-making and enhancing user experiences. If you're interested in exploring the dashboard or discussing data visualization.",
    technologies: ["Tableau", "Data Visualization", "Data Analysis",],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A responsive personal portfolio website showcasing experience, projects, skills, and contact information.",
    technologies: ["HTML", "TailwindCSS", "React", "JavaScript", "React-icons", "Framer motion"
    ],
  },
  
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Bangalore, India",
  phoneNo: "+91-9686698498 ",
  email: "bharath.rajashekar3@gmail.com",
};
