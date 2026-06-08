
export const profile = {
  name: 'Rayen Nacef',
  title: 'AI Engineer',
  avatar: './avatar.jpg',
  summary:
    'AI Engineer with experience across the full ML lifecycle — from data pipelines and fine-tuning to RAG systems and production deployment. Research background in LLM optimization and RL. Actively seeking a professional position to apply and grow my skills in a real-world engineering environment.',
  location: 'Open to relocation · Remote-friendly',
  resume: './RESUME_RayenNACEF_updated.pdf',
}

export const contacts = {
  email: 'rayennacef2@gmail.com',
  phone: '+216 24 639 522',
  linkedin: 'https://www.linkedin.com/in/rayen-nacef-34259029b/',
  github: 'https://github.com/RayenNacef',
}

export const stats = [
  { value: '1', label: 'Research Experience' },
  { value: '+5', label: 'Projects' },
  { value: '+7', label: 'AI Certifications' },
  { value: '5+', label: 'AI engineering roles' },
]

export const experience = [
  {
    role: 'Data Scientist',
    company: 'Ominimo Insurance Group',
    location: 'Serbia',
    period: 'Feb – May 2026',
    points: [
      'Engineered an end-to-end data validation pipeline with automated quality checks, enforcing domain-specific thresholds on daily ingested data and triggering real-time alerts to the IT team on anomaly detection.',
      'Designed and deployed a scalable web-crawling pipeline using Apache Airflow and Docker, automating structured data collection and feeding clean datasets into downstream analytics workflows — improving pipeline reliability and data integrity for insurance analytics.',
    ],
    tags: ['Data Validation', 'Apache Airflow', 'Web Crawling', 'Docker', 'Python', 'Pipeline Automation'],
  },
  {
    role: 'AI Research Intern — MITACS Program',
    company: 'Mila & Polytechnique Montréal',
    location: 'Canada',
    period: 'Jul – Sep 2025',
    points: [
      'Optimized Open-R1 LLM training infrastructure, reducing GPU requirements from 8 to 1 while preserving model performance through memory-efficient techniques and gradient checkpointing.',
      'Designed a novel token-level credit assignment mechanism for Group Relative Policy Optimization (GRPO), achieving a 13% improvement in mathematical reasoning accuracy on benchmark evaluations.',
    ],
    tags: ['LLM', 'Reinforcement Learning', 'GRPO', 'Fine-Tuning', 'PyTorch', 'HPC', 'Slurm'],
  },
  {
    role: 'AI Engineer Intern',
    company: 'Proxiad',
    location: 'Tunis, Tunisia',
    period: 'Feb – May 2025',
    points: [
      'Architected a production-ready RAG-based chatbot by orchestrating two LLMs, integrating a vector knowledge base with structured data preprocessing for accurate retrieval.',
      'Deployed the chatbot system for real-time e-commerce order tracking and claims handling using FastAPI, containerized with Docker and Kubernetes for scalable, fault-tolerant production performance.',
    ],
    tags: ['LLM', 'RAG', 'FastAPI', 'Docker', 'Kubernetes', 'Spring Boot', 'Angular', 'NLP'],
  },
  {
    role: 'AI Engineer Intern',
    company: 'Focus Corporation',
    location: 'Tunisia',
    period: 'Jul – Aug 2024',
    points: [
      'Built a modular data preprocessing pipeline to clean, transform, validate, and analyze both structured and unstructured datasets, preparing high-quality training corpora for downstream LLM fine-tuning.',
      'Developed an AI-powered network diagnostic assistant capable of parsing Wireshark packet capture files and generating natural-language root-cause analysis, reducing manual inspection time.',
    ],
    tags: ['LLM', 'RAG', 'Pandas', 'Hugging Face', 'Ollama', 'Docker', 'NLP'],
  },
  {
    role: 'AI Engineer Intern',
    company: 'LARA Laboratory, ENSI',
    location: 'Tunisia',
    period: 'Jul – Aug 2023',
    points: [
      'Built an AI web application for classifying anomalies impacting electric vehicle performance, enhancing predictive accuracy.',
      'Designed a user-friendly interface to deliver a smooth, accessible user experience.',
    ],
    tags: ['Linear Regression', 'Flask', 'Python', 'HTML', 'CSS'],
  },
]

export const projects = [
  {
    name: 'CryptoFacial Recognition System',
    field: 'Embedded AI & Security',
    period: 'Dec 2024 – Jan 2025',
    repo: contacts.github,
    points: [
      'Built a real-time facial recognition system with OpenCV and deep CNN-based face embeddings, deployed on an ESP32 edge device.',
      'Secured client-device communication using AES encryption over TCP sockets, ensuring data privacy for biometric data transmission.',
    ],
    tags: ['Python', 'OpenCV', 'CNN', 'AES Encryption', 'ESP32', 'Deep Learning'],
    category: 'Embedded AI',
  },
  {
    name: 'FreeRTOS-Based Real-Time Robot Control',
    field: 'Embedded Systems',
    period: 'Oct – Nov 2024',
    repo: contacts.github,
    points: [
      'Designed a multitask FreeRTOS control architecture for a robot, synchronizing motor control, sensor fusion, and Wi-Fi communication tasks.',
      'Implemented a TCP server for remote real-time motor command dispatch and battery telemetry monitoring.',
    ],
    tags: ['C++', 'FreeRTOS', 'ESP32', 'TCP/IP', 'Multitasking', 'GPIO'],
    category: 'Embedded AI',
  },
  {
    name: 'Intelligent Intrusion Detection for CPS',
    field: 'ML & Cybersecurity',
    period: 'May – Jul 2024',
    repo: contacts.github,
    points: [
      'Benchmarked four ML classification algorithms for real-time network intrusion detection in Cyber-Physical Systems (CPS).',
      'Designed a dynamic algorithm selection module that reduced false-positive rate by 30% compared to single-model baselines.',
    ],
    tags: ['Machine Learning', 'Scikit-learn', 'TensorFlow', 'Keras', 'Python', 'CPS Security'],
    category: 'Machine Learning',
  },
  {
    name: 'HexaSwift Autonomous Hexapod Robot',
    field: 'Robotics & Computer Vision',
    period: 'Feb – Apr 2024',
    repo: contacts.github,
    points: [
      'Engineered an autonomous hexapod robot with ArUco marker-based indoor navigation using OpenCV and PID controllers on Raspberry Pi.',
      'Developed a companion Django mobile interface for real-time robot teleoperation and sensor feedback visualization.',
    ],
    tags: ['Python', 'OpenCV', 'Raspberry Pi', 'PID Control', 'ArUco', 'Django'],
    category: 'Robotics',
  },
]

export const education = [
  {
    degree: 'Computer Science Engineering Diploma',
    school: 'ENSI — École Nationale des Sciences de l’Informatique',
    period: '2022 – 2025',
  },
  {
    degree: 'Preparatory Cycle for Engineering (Physics & Chemistry)',
    school: 'IPEIT',
    period: '2020 – 2022',
  },
]

export const certifications = [
  {
    name: 'Intro to AI Agents and Agentic AI',
    issuer: '365 Data Science',
    year: '2025',
    file: './certs/intro-ai-agents-agentic-ai.pdf',
    link: 'https://learn.365datascience.com/certificates/CC-AAB148EA22/',
  },
  {
    name: 'Build Conversational AI Memory with LangGraph',
    issuer: '365 Data Science',
    year: '2025',
    file: './certs/conversational-ai-memory-langgraph.pdf',
    link: 'https://learn.365datascience.com/certificates/CC-20BB2AA8CB/',
  },
  {
    name: 'MCPs for Everyone: Supercharge Your AI Tooling Skills',
    issuer: '365 Data Science',
    year: '2025',
    file: './certs/mcps-supercharge-ai-tooling.pdf',
    link: 'https://learn.365datascience.com/certificates/CC-B4C140FF30/',
  },
  {
    name: 'Fully Automated MLOps',
    issuer: '365 Data Science',
    year: '2025',
    file: './certs/fully-automated-mlops.pdf',
    link: 'https://learn.365datascience.com/certificates/CC-EB818DDD31/',
  },
  {
    name: 'AI Model Deployment on AWS',
    issuer: '365 Data Science',
    year: '2025',
    file: './certs/ai-model-deployment-aws.pdf',
    link: 'https://learn.365datascience.com/certificates/CC-167FD220B2/',
  },
  {
    name: 'Hashgraph Developer Course',
    issuer: 'The Hashgraph Association',
    year: '2024',
    file: './certs/hashgraph-developer-course.pdf',
    link: '',
  },
  {
    name: 'Introduction and Programming with IoT Boards',
    issuer: 'POSTECH · Coursera',
    year: '2024',
    file: './certs/iot-boards-postech.pdf',
    link: 'https://coursera.org/verify/ND68RM35EVHN',
  },
]

export const skills = [
  { group: 'Programming', items: ['Python', 'C', 'C++', 'Java'] },
  {
    group: 'AI / ML / DL',
    items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Reinforcement Learning', 'LLM', 'GenAI'],
  },
  {
    group: 'GenAI & LLMs',
    items: ['LangChain', 'LangGraph', 'Hugging Face', 'Ollama', 'LlamaIndex', 'RAG', 'Prompt Engineering', 'Fine-Tuning', 'RLHF'],
  },
  {
    group: 'MLOps & DevOps',
    items: ['Docker', 'Kubernetes', 'CI/CD', 'GitLab', 'Minikube'],
  },
  {
    group: 'Frameworks',
    items: ['FastAPI', 'Flask', 'Spring Boot', 'Angular'],
  },
  {
    group: 'ML Libraries',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Pandas', 'Scikit-learn'],
  },
  {
    group: 'HPC, OS & Shell',
    items: ['Slurm', 'Linux', 'Bash'],
  },
  { group: 'Databases', items: ['PostgreSQL', 'SQL', 'Redis'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Keil', 'IntelliJ IDEA'] },
  { group: 'Languages', items: ['English', 'French', 'Arabic'] },
]
