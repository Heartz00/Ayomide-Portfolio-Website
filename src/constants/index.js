import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Software Engineer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. I am also well groomed in  Machine Learning Engineering. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I'm a driven and detail-oriented backend developer with a passion for designing and implementing scalable, efficient, and reliable server-side applications. With 5 years of professional experience, I've developed expertise in Node.js, Python, and Java, with a strong focus on database systems, cloud computing, and DevOps. My fascination with the intricacies of software development drives me to continuously learn and adapt to new challenges. I excel in collaborative environments, solving complex problems, and delivering high-quality solutions. Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and staying up-to-date with industry trends.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineer",
    company: "Medical Artificial Intelligence Laboratory (MAI Lab)",
    description: `Developed a comprehensive medical imaging web application that serves as a centralized platform for the secure storage and transfer of medical images, while also leveraging AI-driven predictive models to enhance diagnostic accuracy and efficiency. Successfully optimized lightweight neural network models for brain image segmentation on Normal CPUs`,
    technologies: [
      "Javascript",
      "vue.js",
      "React.js",
      "Next.js",
      "mongoDB",
      "python",
      "AWS",
      "Django",
    ],
  },
  {
    year: "2021 - 2023",
    role: "Backend & Machine Learning Engineer",
    company: "Genomac Holdings Plc.",
    description: `Spearheaded the development of AI-driven backend systems using Python and Django, significantly enhancing cancer prediction accuracy by 20% through optimized machine learning pipelines. Through technical guidance and mentorship, I oversaw the design and deployment of a scalable health risk prediction web app, mentored junior engineers, and collaborated with cross-functional teams to translate complex bioinformatics requirements into innovative software solutions.`,
    technologies: [
      "Biopython",
      "Django",
      "GraphQl",
      "vercel",
      "Supabase",
      "mySQL",
    ],
  },
  {
    year: "2019 - 2020",
    role: "Python Developer",
    company: "Freelance",
    description: `Designed and developed RESTful APIs to facilitate seamless communication between frontend and backend systems, enabling efficient data exchange and integration for clients. Additionally, I built a comprehensive hospital database management system utilizing PostgreSQL and MySQL, and successfully deployed applications on AWS using Docker, ensuring scalable and reliable infrastructure.`,
    technologies: ["Python", "AWS", "PostgreSQL"],
  },
];

export const PROJECTS = [
  {
    title: "Haske",
    image: project1,
    description:
      "Haske is a powerful, cloud-based DICOM PACS (Picture Archiving and Communication System) website hosted on AWS, designed to enable the storage, transfer, and management of medical images for healthcare centers across Africa.",
    technologies: ["vue", "React", "nodejs", "CSS", "Javascript"],
  },
  {
    title: "HealthMania",
    image: project2,
    description:
      "An Application is a cutting-edge application crafted to deliver personalized results and actionable recommendations tailored to well-being.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "NodeJs",
      "Firebase",
      "Vercel",
      "AWS",
    ],
  },
  {
    title: "Interview Scheduler App",
    image: project3,
    description:
      "The Interview Scheduler App is a free web application designed to help companies and organizations schedule and manage interview slots efficiently.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "HolySync",
    image: project4,
    description:
      "An Information Management System and attendance tracking app to track the growth and presence of workers in a church. (ongoing project)",
    technologies: ["Python", "React Native", "Javascript", "NodeJs", "Figma"],
  },
];

export const CONTACT = {
  address: "Lagos, Nigeria",
  phoneNo: "+234 906 661 88140",
  email: "oladeleayomide831@gmail.com",
};
