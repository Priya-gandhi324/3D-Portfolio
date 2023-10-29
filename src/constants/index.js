import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  cpp,
  java,
  python,
  django,
  flask,
  mysql,
  elasticsearch,
  legistify,
  marutienergies,
  platetrailtracer,
  asd,
  safejourney,
  rtx,
  springboot,
  aws,
  sih,
  education
} from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "achievements",
      title: "Honours",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database Administrator",
      icon: mobile,
    },
    {
      title: "Problem-Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Spring Boot",
      icon: springboot,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Elasticsearch",
      icon: elasticsearch,
    },
    {
      name: "AWS",
      icon: aws,
    }
  ];
  
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Maruti Energies",
      icon: marutienergies,
      iconBg: "#f5f5f5",
      date: "Feb 2023 - Present",
      points: [
        "Designed the frontend using React, JavaScript, and Tailwind CSS.",
        "Integrated 3D models in the web app using ThreeJS.",
        "Developed a Flask-based chatbot for enriched user interaction.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Legistify",
      icon: legistify,
      iconBg: "#383E56",
      date: "Jun 2022 - Feb 2023",
      points: [
        "Built Restful APIs with FastAPI for web scraping, storing data in Postgres and AWS S3.",
        "Automated email-based monitoring to keep the team informed in Django using Elasticsearch.",
        "Improvised captcha-solving using Computer Vision techniques.",
        "Deployed microservice for PDF-to-text extraction, using FastAPI and AWS",
      ],
    },
  ];

  const educations = [
    {
      title: "Bachelor of Technology + Honours",
      company_name: "Bennett University",
      icon: education,
      iconBg: "#ffffff",
      date: "Jul 2019 - 2023",
      points: [
        "Computer Science, GPA: 8.85",
        "Relevant Courses: ",
        "ECSE341L: Image and Video Processing",
        "ECSE460L: DevOps Engineering Practice",
        "ECSE303L: Artificial Intelligence and Machine Learning",
        "ECSE220L: Operating System",
        "ECSE446L: Advanced Database Management System",
        "ECSE215L: Data Structures and Algorithms",
        "ECSE209L: Discrete Mathematics",
        "ECSE231L: Probability and Statistics"
      ],
    },
    {
      title: "Higher Secondary School",
      company_name: "Delhi Public School",
      icon: education,
      iconBg: "#ffffff",
      date: "Apr 2017 - 2019",
      points: [
        "Graduated from DPS, located in Roorkee, Uttarkhand.",
        "Score: 88.2%",
      ],
    },
  ];
  
  const achievements = [
    {
      achievement:
        "We worked on problem statement PK844 from the Ministry of Electronics and Information Technology (MEITy). We developed a web app and browser extension that empowers users to analyze website security threats, cookies, and privacy policies. With a single click, our solution generates a comprehensive report for any website, providing valuable insights and summaries.",
      name: "Won National Level Smart India Hackathon 2022",
      issued_date: "August 2022",
      company: "Issued by Ministry of Electronics and Information Technology, Government of India, AICTE",
      image: sih,
    }
  ];
  
  const projects = [
    {
      name: "Plate Trail Tracer",
      description:
      "Tracking and Registration System built using Automated Number Plate Recognition (ANPR) that allows organizations to easily register vehicles and upload car images to confirm their location.",
      tags: [
        {
          name: "Python, Flask, OpenCV, OCR",
        },
      ],
      image: platetrailtracer,
      source_code_link: "https://github.com/Priya-gandhi324/Plate-Trail-Tracer",
    },
    {
      name: "ASD Detector",
      description:
        "Powerful model that accurately identifies the early stages of Autism Spectrum Disorder in children. Analyzing behavior patterns, input attributes and using multi-layered Neural Network for efficient detection.",
      tags: [
        {
          name: "Python, TensorFlow",
        }
      ],
      image: asd,
      source_code_link: "https://github.com/Priya-gandhi324/EarlyASD-ML",
    },
    
    {
      name: "#SafeJourney",
      description:
        "a seamless blog web app to share their travel experiences through engaging blog posts with media, tag locations, effortlessly share on social media, and stay tuned with newsletters for the latest travel narratives.",
      tags: [
        {
          name: "Python, Django",
        },
      ],
      image: safejourney,
      source_code_link: "https://github.com/Priya-gandhi324/SafeJourney",
    },

    {
      name: "R.A.X: Rate & Expose",
      description:
        "Mobile app that highlights the latest and most popular news stories from across the globe. Users can seamlessly search for news and even rate the news articles.",
      tags: [
        {
          name: "Java, XML",
        },
      ],
      image: rtx,
      source_code_link: "https://github.com/Priya-gandhi324/R.A.X.",
    },
    
  ];
  
  export { services, technologies, experiences, achievements, projects, educations };