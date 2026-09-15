// careersData.js - Metaflow Technologies (MFT) Careers & Talent Ecosystem

export const benefits = [
  { icon: "Globe", title: "Global Remote-First Flexibility", desc: "Work flexibly from anywhere with hours structured around output and deep focus, supported across our Hyderabad & Vijayawada hubs." },
  { icon: "Sparkles", title: "Continuous Learning Budget", desc: "₹2,00,000 annual stipend for certifications (AWS, GCP, CKA), conferences, technical books, and advanced courses." },
  { icon: "HeartPulse", title: "Comprehensive Health & Wellness", desc: "Premium medical, dental, and mental health coverage for you and your dependents with zero deductibles." },
  { icon: "Laptop", title: "High-End Engineering Setup", desc: "Top-of-the-line MacBook Pro M3 Max / Linux workstation, 4K dual displays, and ergonomics home office reimbursement." },
  { icon: "TrendingUp", title: "Equity & Performance Bonuses", desc: "Meaningful company equity grants and quarterly performance profit-sharing bonuses for all team members." },
  { icon: "Coffee", title: "Annual Team Retreats", desc: "All-expense-paid international summits to connect, innovate, and build together in person." }
];

export const culturePillars = [
  { title: "Ownership Over Bureaucracy", desc: "We hire self-directed builders who take full pride and accountability in writing clean, resilient software from concept to production." },
  { title: "Radical Candor & Transparency", desc: "Direct, constructive feedback. No corporate politics or hidden agendas. Engineering roadmaps and metrics are shared openly company-wide." },
  { title: "Relentless Craftsmanship", desc: "We don't settle for 'good enough'. We obsess over micro-interactions, sub-100ms response times, and bulletproof security postures." },
  { title: "Curiosity & Experimentation", desc: "We allocate 10% dedicated time for all engineers to explore cutting-edge AI models, open-source libraries, and internal hackathons." }
];

export const openPositions = [
  {
    id: "senior-ai-engineer",
    title: "Senior AI & LLM Systems Engineer",
    department: "AI & Data Intelligence",
    location: "Hyderabad (Hybrid) / Remote",
    employmentType: "Full-Time",
    experience: "Senior (5+ yrs)",
    compensation: "₹9,50,000 - ₹12,50,000 + Equity",
    skills: ["Python", "PyTorch", "LangChain", "RAG Systems", "FastAPI", "Vector Databases", "Docker"],
    description: "We are seeking a senior AI engineer to design and deploy enterprise-grade generative AI pipelines, multi-agent workflows, and custom fine-tuned models for Fortune 500 clients.",
    responsibilities: [
      "Architect and benchmark scalable Retrieval-Augmented Generation (RAG) pipelines over millions of multimodal documents.",
      "Design autonomous multi-agent systems with tool-use capabilities and memory persistence.",
      "Optimize inference latency and token economics using quantizations, speculative decoding, and dedicated vLLM clusters.",
      "Collaborate directly with client CTOs to scope enterprise AI governance, evaluation metrics, and guardrails."
    ],
    requirements: [
      "5+ years of production software engineering with at least 2+ years dedicated to deep learning and generative models.",
      "Deep practical experience with LangChain, LlamaIndex, Pinecone, Milvus, and transformer architectures.",
      "Track record of deploying production microservices on AWS or Google Cloud Platform."
    ]
  },
  {
    id: "staff-cloud-devops-architect",
    title: "Staff Cloud & DevOps Architect",
    department: "Cloud & DevOps",
    location: "Hyderabad / Remote",
    employmentType: "Full-Time",
    experience: "Lead (7+ yrs)",
    compensation: "₹10,50,000 - ₹13,50,000 + Equity",
    skills: ["AWS", "Kubernetes", "Terraform", "GitOps (ArgoCD)", "Istio", "CI/CD", "Security Compliance"],
    description: "Lead MFT's multi-cloud infrastructure strategy, establishing automated GitOps pipelines, zero-trust security postures, and cost-efficient Kubernetes clusters.",
    responsibilities: [
      "Design resilient, multi-region cloud architectures on AWS and GCP capable of 99.999% uptime.",
      "Codify complex enterprise topologies into clean, reusable, version-controlled Terraform modules.",
      "Mentor senior DevOps engineers and champion DevSecOps automation across our entire engineering group.",
      "Drive SOC2 Type II, HIPAA, and ISO 27001 automated compliance monitoring."
    ],
    requirements: [
      "7+ years architecting enterprise distributed cloud infrastructure with deep Kubernetes container mastery.",
      "Recognized cloud certifications (AWS Solutions Architect Professional, CKA, or GCP Cloud Architect).",
      "Demonstrated ability to reduce cloud infrastructure spend by 30%+ through architectural modernization."
    ]
  },
  {
    id: "lead-fullstack-engineer",
    title: "Lead Full-Stack Web Architect",
    department: "Software Development",
    location: "Hyderabad / Remote",
    employmentType: "Full-Time",
    experience: "Senior (6+ yrs)",
    compensation: "₹9,00,000 - ₹12,00,000 + Equity",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Micro-Frontends"],
    description: "Build ultra-responsive, accessible, and mission-critical web applications for our enterprise client portfolio and flagship SaaS products.",
    responsibilities: [
      "Set architectural standards for frontend performance, component libraries, state management, and SSR.",
      "Design clean RESTful and GraphQL APIs with strict TypeScript contracts and OpenAPI documentation.",
      "Conduct rigorous code reviews focusing on performance, modularity, security, and accessibility.",
      "Work closely with product designers to implement smooth 60fps micro-animations and intuitive workflows."
    ],
    requirements: [
      "6+ years of full-stack engineering with deep mastery of React, Next.js, and Node.js ecosystems.",
      "Proven experience building high-throughput transactional web platforms handling millions of monthly requests.",
      "Strong aesthetic sensibility and appreciation for pristine UI/UX details."
    ]
  },
  {
    id: "lead-product-designer",
    title: "Lead UI/UX & Product Designer",
    department: "Design & Experience",
    location: "Hyderabad / Remote",
    employmentType: "Full-Time",
    experience: "Senior (5+ yrs)",
    compensation: "₹8,50,000 - ₹11,00,000 + Equity",
    skills: ["Figma", "Design Systems", "UX Research", "Interactive Prototyping", "Design Tokens", "Mobile UX"],
    description: "Champion the visual and interaction design of our enterprise software, SaaS products, and mobile experiences. Turn complex business logic into effortless human interfaces.",
    responsibilities: [
      "Own end-to-end design from user journey mapping, wireframing, and usability testing to high-fidelity designs.",
      "Build and maintain scalable design systems with tokenized variables matching engineering codebases.",
      "Create fluid micro-interactions, clickable prototypes, and design specs for engineering teams."
    ],
    requirements: [
      "5+ years of product design experience with an outstanding portfolio showcasing complex B2B or SaaS applications.",
      "Mastery of Figma, component variants, auto-layout, and interactive prototyping tools.",
      "Excellent communication skills and ability to articulate design rationale to executive stakeholders."
    ]
  },
  {
    id: "senior-mobile-engineer",
    title: "Senior Mobile Engineer (Flutter & React Native)",
    department: "Software Development",
    location: "Hyderabad / Remote",
    employmentType: "Full-Time",
    experience: "Mid-Senior (4+ yrs)",
    compensation: "₹8,00,000 - ₹10,50,000 + Equity",
    skills: ["Flutter", "React Native", "Swift / Kotlin", "Offline Sync", "WebSocket", "App Store Release"],
    description: "Engineer high-performance cross-platform mobile apps for on-demand delivery, telemedicine, and fintech clients.",
    responsibilities: [
      "Develop smooth, native-feel iOS and Android applications with offline-first synchronization capabilities.",
      "Integrate complex native device hardware (BLE, GPS background tracking, Biometrics, Camera OCR).",
      "Manage end-to-end release pipelines for Apple App Store and Google Play Store."
    ],
    requirements: [
      "4+ years building and shipping production mobile applications with over 100k+ downloads.",
      "Deep understanding of state management (Bloc, Riverpod, Redux/Zustand) and native bridge internals."
    ]
  },
  {
    id: "ai-engineering-intern",
    title: "AI & Machine Learning Research Intern",
    department: "AI & Data Intelligence",
    location: "Hyderabad / Vijayawada / Remote",
    employmentType: "Internship (6 Months)",
    experience: "Students / Early Career",
    compensation: "₹20,000 - ₹30,000 / month + Mentorship",
    skills: ["Python", "NumPy", "PyTorch / TensorFlow", "Hugging Face", "Data Pipelines"],
    description: "Fast-track internship program for exceptional students and researchers passionate about developing and evaluating real-world generative AI and computer vision models.",
    responsibilities: [
      "Benchmark state-of-the-art open source models on proprietary enterprise evaluation datasets.",
      "Assist in data cleaning, synthetic dataset generation, and fine-tuning experiments.",
      "Pair directly with Senior AI Engineers on client-facing production prototypes."
    ],
    requirements: [
      "Enrolled in or recently graduated from a Computer Science, Data Science, or related STEM degree.",
      "Hands-on experience with Python, Git, and modern machine learning frameworks through coursework or personal projects."
    ]
  }
];

export const careerFaqs = [
  {
    q: "What is Metaflow's interview process like?",
    a: "Our process is straightforward, respectful of your time, and typically completed within 2 weeks: (1) 30-min intro chat with talent partner, (2) 60-min practical technical discussion or system design session with a peer engineer, (3) 45-min leadership & culture conversation, (4) Written offer."
  },
  {
    q: "Where are Metaflow's offices located?",
    a: "Our primary branch is located in Hyderabad (#301, Ridge Towers, Surya Nagar, Quthbullapur, Hyderabad-500037) with our onboarding branch located in Vijayawada (New Sanath Nagar, Vijayawada-520007). We also support flexible remote arrangements."
  },
  {
    q: "How does MFT support ongoing learning and development?",
    a: "Every team member receives an annual ₹2,00,000 learning budget, paid study days for professional certifications, access to internal engineering brown-bag sessions, and direct mentorship from industry veterans."
  }
];
