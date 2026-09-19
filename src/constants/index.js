import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a data engineer who builds pipelines and quality systems that make machine learning datasets trustworthy. I've designed and deployed reproducible Python and SQL workflows for genomic, clinical, and medical imaging data across multi-country teams, handling heterogeneous, incomplete, and malformed real-world inputs. My core strength is dataset integrity — I design the graded evaluation protocols and quality benchmarks that determine which data and model outputs are fit for use, methodology I've since published in two peer-reviewed international proceedings. I build for constrained infrastructure by default, shipping systems that run reliably where compute, connectivity, and clean data can't be assumed.`;

export const ABOUT_TEXT = `I started out studying Chemistry at Obafemi Awolowo University, where computational drug-discovery work — running molecular docking and molecular dynamics simulations — pulled me toward the data side of science. That pull became a career: today I design ETL pipelines, database schemas, and quality-evaluation systems for genomic, clinical, and medical imaging platforms used by universities and radiology practices across Africa. I care most about dataset integrity — the graded evaluation protocols and quality benchmarks I've designed determine which data and model outputs are fit for downstream use, methodology I've since published in two peer-reviewed international proceedings. I build for constrained infrastructure by default: CPU-only inference, unreliable connectivity, and messy real-world inputs are the normal case in the environments I work in, not the exception. Outside of pipelines and benchmarks, I enjoy mentoring engineers newer to data work and contributing to open, reproducible research.`;

export const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "SQL", "R", "Bash/Shell", "JavaScript/TypeScript"],
  },
  {
    category: "Data Processing",
    items: [
      "Pandas",
      "NumPy",
      "ETL Pipeline Design",
      "Reproducible Workflows",
      "Data Cleaning & Normalization",
      "Schema Design",
    ],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Query Optimization",
      "Indexing",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Docker", "CI/CD", "Linux/Ubuntu", "HPC/SLURM", "REST APIs"],
  },
  {
    category: "Data Quality & QA",
    items: [
      "Evaluation Rubric Design",
      "Graded Quality Assessment",
      "Automated Validation",
      "Integration & Unit Testing",
      "Structured QA",
    ],
  },
  {
    category: "ML & Pipelines",
    items: [
      "PyTorch",
      "TensorFlow/Keras",
      "scikit-learn",
      "Training Data Prep",
      "Model Deployment",
      "Human-in-the-loop Labeling",
    ],
  },
  {
    category: "Standards & Formats",
    items: [
      "DICOM/DICOMweb",
      "HTTP/JSON",
      "Webhooks",
      "Genomic & Clinical Data Formats",
    ],
  },
];

export const EXPERIENCES = [
  {
    year: "2024 - 2026",
    role: "Lead Innovation Engineer",
    company: "Genomac Innovation Hub — OmicsBoard",
    description: `Built Python ETL pipelines for large genomic and clinical datasets — collection, cleaning, normalization, and transformation — packaged as reproducible, parameterized workflows that run consistently across heterogeneous environments. Designed storage and retrieval strategies for dataset sizes where naive approaches were untenable, and defined the evaluation criteria and quality gates applied to every dataset and model output before release. Architected and deployed a multi-tenant data platform end-to-end — backend services, data model, authentication, and deployment lifecycle — for a bioinformatics platform serving universities across Africa, and ran structured review cycles with junior engineers across a fully asynchronous, multi-country team.`,
    technologies: [
      "Python",
      "ETL Pipelines",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Multi-tenant Architecture",
      "CI/CD",
    ],
  },
  {
    year: "2025 - 2026",
    role: "AI and Software Engineer",
    company: "DycoVue",
    description: `Built and maintained a high-volume ingestion pipeline for medical imaging data — parsing, validating, and routing DICOM studies and structured reports, including malformed and edge-case payloads that would otherwise corrupt downstream datasets. Implemented automated validation against live imaging servers, designed the database schema, indexing strategy, and REST APIs serving both the web client and downstream AI inference services, and built an analytics service aggregating turnaround time, reporting latency, and study volume into operational dashboards. Containerized the full stack with Docker and deployed on AWS, with role-based access control and audit-relevant workflows for sensitive patient data from the first commit.`,
    technologies: [
      "DICOM/DICOMweb",
      "Python",
      "PostgreSQL",
      "REST APIs",
      "Docker",
      "AWS",
    ],
  },
  {
    year: "2024 - 2025",
    role: "Biomedical AI Engineer",
    company: "Medical Artificial Intelligence Laboratory (MAI Lab)",
    description: `Designed the evaluation protocols and quality benchmarks distinguishing correct, partially correct, and failed output across tumor subregions — the annotation quality framework underpinning two peer-reviewed publications. Prepared and curated multi-institutional medical imaging datasets for model training, applying domain adaptation to handle heterogeneous, low-quality, and inconsistently annotated source data. Engineered deep learning pipelines for CPU-only inference in environments without GPU access, and authored a reproducible pipeline protocol published on protocols.io enabling independent replication by external teams.`,
    technologies: [
      "PyTorch",
      "TensorFlow/Keras",
      "Python",
      "CPU Inference Optimization",
      "Data Curation",
    ],
  },
  {
    year: "2021 - 2023",
    role: "Undergraduate Research Assistant",
    company: "Obafemi Awolowo University",
    description: `Performed computational drug-discovery studies using molecular docking and molecular dynamics simulations, processing and analyzing large simulation output datasets. Contributed to a peer-reviewed computational study published in In Silico Pharmacology.`,
    technologies: ["Molecular Docking", "Molecular Dynamics", "Python", "Data Analysis"],
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
      "An application crafted to deliver personalized results and actionable recommendations tailored to well-being.",
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
      "An information management system and attendance tracking app to track the growth and presence of workers in a church.",
    technologies: ["Python", "React Native", "Javascript", "NodeJs", "Figma"],
  },
];

export const SELECTED_PROJECT = {
  title: "DycoAtlas — Geospatial Diagnostic Imaging Dataset",
  description:
    "Collected, structured, and deployed a geospatial dataset mapping diagnostic imaging facilities across Nigerian states — from field data collection through to a queryable, deployed platform.",
  technologies: ["Python", "Geospatial Data", "PostgreSQL", "Deployment"],
};

export const PUBLICATIONS = [
  {
    title:
      "MAPS-Glioma: Modality-specific augmentation and tissue-adaptive postprocessing for robust glioma segmentation in resource-limited settings",
    venue:
      "BrainLes/BraTS Workshop, MICCAI 2025 — Lecture Notes in Computer Science, Vol. 16376, pp. 274–283, Springer, Cham",
    year: "2026",
  },
  {
    title:
      "Lightweight 3D U-Net for brain tumor segmentation on CPUs: Enabling deep learning in low-resource environments",
    venue:
      "MIRASOL 2025 — Lecture Notes in Computer Science, Vol. 16398, pp. 52–61, Springer, Cham",
    year: "2026",
  },
];

export const EDUCATION = {
  degree: "B.Sc. Chemistry",
  school: "Obafemi Awolowo University, Ile-Ife, Nigeria",
  year: "2017 – 2023",
};

export const RECOGNITION = [
  {
    text: `Oral presentation, Africa Digital Health Summit — "Empowering radiology with AI to improve diagnosis in Nigeria"`,
    year: "2025",
  },
];

export const CONTACT = {
  address: "Lagos, Nigeria",
  phoneNo: "+234 906 661 88140",
  email: "oladeleayomide831@gmail.com",
};
