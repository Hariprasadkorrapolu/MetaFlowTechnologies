// servicesData.js - Metaflow Technologies (MFT) Complete Service Ecosystem

export const serviceCategories = [
  {
    id: "software-development",
    title: "Software Development",
    shortTitle: "Software",
    icon: "Code2",
    tagline: "Engineering Robust, Scalable, & Mission-Critical Software Systems",
    description: "From intuitive consumer mobile apps to high-throughput enterprise platforms, we engineer end-to-end digital experiences tailored for exponential business growth.",
    badge: "Core Engineering",
    subServices: [
      { id: "mobile-app-development", title: "Mobile App Development", badge: "High Demand", shortDesc: "Native iOS & Android apps built for performance, retention, and enterprise security." },
      { id: "android-app-development", title: "Android App Development", badge: "Kotlin / Java", shortDesc: "High-performance Android applications built with modern Jetpack architecture." },
      { id: "ios-ipad-app-development", title: "iOS / iPad App Development", badge: "Swift / SwiftLint", shortDesc: "Pixel-perfect Apple ecosystem apps with seamless biometric & metal performance." },
      { id: "flutter-development", title: "Flutter Development", badge: "Multi-Platform", shortDesc: "Single-codebase, native-speed applications for mobile, web, and desktop." },
      { id: "react-native-development", title: "React Native Development", badge: "Cross-Platform", shortDesc: "Cost-effective, rapid time-to-market apps with native bridge optimization." },
      { id: "web-application-development", title: "Web Application Development", badge: "Full-Stack", shortDesc: "Ultra-responsive, accessible SPAs and PWAs with modern micro-frontend architecture." },
      { id: "cms-development", title: "CMS Development", badge: "Headless & Traditional", shortDesc: "Decoupled headless CMS architectures for multi-channel content publishing." },
      { id: "portal-development", title: "Portal Development", badge: "B2B / B2C", shortDesc: "Secure customer, partner, and vendor self-service portals with SSO." },
      { id: "custom-software-development", title: "Custom Software Development", badge: "Bespoke", shortDesc: "Tailored enterprise solutions built from the ground up to solve complex workflows." },
      { id: "application-maintenance-support", title: "Application Maintenance & Support", badge: "24/7 SLA", shortDesc: "Proactive uptime monitoring, security patching, and bug triage." },
      { id: "api-development", title: "API Development", badge: "REST & GraphQL", shortDesc: "High-throughput, secure microservice APIs with OpenAPI specification." },
      { id: "enterprise-application-development", title: "Enterprise Application Development", badge: "Scalable Core", shortDesc: "Distributed, fault-tolerant enterprise software for global organizations." }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    shortTitle: "Cloud & DevOps",
    icon: "Cloud",
    tagline: "Modernizing Infrastructure for Uncompromised Resiliency & Speed",
    description: "Accelerate software delivery, reduce cloud compute expenditure, and achieve 99.99% system availability through automated CI/CD and cloud-native architecture.",
    badge: "Cloud Native",
    subServices: [
      { id: "cloud-services", title: "Cloud Services", badge: "Enterprise Cloud", shortDesc: "Strategic cloud advisory, multi-cloud strategy, and modernization roadmaps." },
      { id: "aws-solutions", title: "AWS Solutions", badge: "AWS Partner Ready", shortDesc: "Elastic serverless, ECS/EKS containerization, and AWS Well-Architected frameworks." },
      { id: "google-cloud-solutions", title: "Google Cloud Solutions", badge: "GCP Expert", shortDesc: "Dataflow, BigQuery, and Anthos deployments for data-heavy workloads." },
      { id: "cloud-migration", title: "Cloud Migration", badge: "Zero Downtime", shortDesc: "Phased rehosting, replatforming, and refactoring of legacy workloads." },
      { id: "cloud-architecture", title: "Cloud Architecture", badge: "High Availability", shortDesc: "Fault-tolerant, disaster-resilient system designs engineered for scale." },
      { id: "devops-services", title: "DevOps Services", badge: "Agile Delivery", shortDesc: "End-to-end DevOps transformation to supercharge developer velocity." },
      { id: "devops-consulting", title: "DevOps Consulting", badge: "Advisory", shortDesc: "Maturity assessments, toolchain consolidation, and workflow automation." },
      { id: "ci-cd", title: "CI/CD Automation", badge: "Pipelines", shortDesc: "Zero-touch testing, linting, container scanning, and canary deployments." },
      { id: "infrastructure-automation", title: "Infrastructure Automation", badge: "IaC (Terraform)", shortDesc: "Repeatable, version-controlled cloud infrastructure via Terraform and Ansible." },
      { id: "cloud-monitoring", title: "Cloud Monitoring", badge: "Observability", shortDesc: "Full-stack observability with Prometheus, Grafana, Datadog, and OpenTelemetry." },
      { id: "iot-development", title: "IoT Development", badge: "Smart Edge", shortDesc: "Edge telemetry pipelines, MQTT messaging brokers, and device fleet management." }
    ]
  },
  {
    id: "ai-data-intelligence",
    title: "AI & Data Intelligence",
    shortTitle: "AI & Data",
    icon: "BrainCircuit",
    tagline: "Harnessing Generative AI & Predictive Models to Drive Business Action",
    description: "Transform unstructured enterprise data into proprietary intelligence, autonomous agents, and revenue-generating predictive workflows.",
    badge: "Next-Gen Tech",
    subServices: [
      { id: "generative-ai", title: "Generative AI", badge: "LLMs & RAG", shortDesc: "Enterprise Retrieval-Augmented Generation (RAG) and private LLM fine-tuning." },
      { id: "ai-application-development", title: "AI Application Development", badge: "Custom AI", shortDesc: "Production-ready intelligent applications embedded with real-time AI capabilities." },
      { id: "machine-learning", title: "Machine Learning", badge: "Supervised & Unsupervised", shortDesc: "Custom neural networks and algorithms deployed to production endpoints." },
      { id: "data-science", title: "Data Science", badge: "Scientific Rigor", shortDesc: "Hypothesis testing, statistical modeling, and deep business pattern discovery." },
      { id: "data-analytics", title: "Data Analytics", badge: "BI Dashboards", shortDesc: "Interactive Tableau, PowerBI, and custom data intelligence dashboards." },
      { id: "ai-agents", title: "AI Agents", badge: "Autonomous Ops", shortDesc: "Goal-seeking autonomous agent swarms capable of executing multi-step business tasks." },
      { id: "automation", title: "Intelligent Automation", badge: "RPA + AI", shortDesc: "Cognitive robotic process automation for eliminating manual repetitive workflows." },
      { id: "nlp", title: "Natural Language Processing", badge: "Sentiment & Semantics", shortDesc: "Semantic search, document summarization, and multilingual entity extraction." },
      { id: "computer-vision", title: "Computer Vision", badge: "Visual AI", shortDesc: "Real-time object detection, facial recognition, and quality inspection models." },
      { id: "predictive-analytics", title: "Predictive Analytics", badge: "Forecasting", shortDesc: "Churn prediction, inventory demand forecasting, and predictive maintenance." },
      { id: "cybersecurity-ai-security", title: "Cybersecurity & AI Security", badge: "Zero Trust", shortDesc: "Adversarial AI defense, prompt injection prevention, and model vulnerability auditing." }
    ]
  },
  {
    id: "salesforce",
    title: "Salesforce Solutions",
    shortTitle: "Salesforce",
    icon: "Layers",
    tagline: "Empowering Revenue Teams with Intelligent CRM Systems",
    description: "Maximize your CRM ROI with certified Salesforce architects delivering customized Sales Cloud, Service Cloud, Experience Cloud, and MuleSoft integrations.",
    badge: "CRM Excellence",
    subServices: [
      { id: "salesforce-consulting", title: "Salesforce Consulting", badge: "Advisory", shortDesc: "CRM roadmap planning, license optimization, and business process alignment." },
      { id: "salesforce-development", title: "Salesforce Development", badge: "Apex & LWC", shortDesc: "Lightning Web Components, Apex triggers, and custom workflow development." },
      { id: "salesforce-integration", title: "Salesforce Integration", badge: "MuleSoft & REST", shortDesc: "Bi-directional synchronization between Salesforce, ERPs, and legacy systems." },
      { id: "crm-solutions", title: "CRM Solutions", badge: "Omnichannel CRM", shortDesc: "Holistic 360-degree customer view with unified communication pipelines." },
      { id: "salesforce-customization", title: "Salesforce Customization", badge: "Automation", shortDesc: "Custom objects, Flow automations, approval matrices, and dynamic layouts." },
      { id: "salesforce-support", title: "Salesforce Support", badge: "Managed Services", shortDesc: "Admin-as-a-service, continuous maintenance, release management, and data audits." }
    ]
  },
  {
    id: "design-experience",
    title: "Design & Experience",
    shortTitle: "UI/UX & Design",
    icon: "Palette",
    tagline: "Crafting High-Converting, Human-Centric Digital Interfaces",
    description: "We combine empathetic user research, futuristic visual aesthetics, and scalable design systems to build digital products people love to use.",
    badge: "Design Systems",
    subServices: [
      { id: "ui-ux-design", title: "UI/UX Design", badge: "Full Product Design", shortDesc: "Seamless digital interfaces engineered for intuitive user journeys and conversions." },
      { id: "product-design", title: "Product Design", badge: "0 to 1 Strategy", shortDesc: "End-to-end product definition from problem validation to final launch design." },
      { id: "web-design", title: "Web Design", badge: "Modern Aesthetics", shortDesc: "Award-winning corporate and product web experiences with micro-interactions." },
      { id: "mobile-app-design", title: "Mobile App Design", badge: "iOS & Android", shortDesc: "Touch-first mobile interfaces following Human Interface & Material guidelines." },
      { id: "ux-research", title: "UX Research", badge: "User Interviews", shortDesc: "Qualitative and quantitative usability studies, heuristic analysis, and testing." },
      { id: "design-systems", title: "Design Systems", badge: "Figma Tokens", shortDesc: "Comprehensive tokenized UI component libraries ensuring brand consistency." },
      { id: "prototyping", title: "Interactive Prototyping", badge: "High Fidelity", shortDesc: "Clickable, animated prototypes for investor pitches and user testing." },
      { id: "interaction-design", title: "Interaction Design", badge: "Micro-UX", shortDesc: "Delightful motion design, haptic feedback, and fluid screen transitions." },
      { id: "brand-experience-design", title: "Brand / Digital Experience Design", badge: "Identity", shortDesc: "Complete brand identity, typography, iconography, and visual guidelines." }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Solutions",
    shortTitle: "Digital Marketing",
    icon: "TrendingUp",
    tagline: "Scalable Customer Acquisition & Brand Growth Engines",
    description: "Data-driven growth strategies that convert attention into sustainable enterprise pipeline, market leadership, and customer lifetime value.",
    badge: "Growth Engine",
    subServices: [
      { id: "digital-marketing", title: "Digital Marketing Strategy", badge: "Omnichannel", shortDesc: "Comprehensive multi-channel go-to-market strategies and user acquisition." },
      { id: "social-media-marketing", title: "Social Media Marketing", badge: "Engagement", shortDesc: "Strategic B2B and B2C community building, viral content, and influencer outreach." },
      { id: "seo", title: "Search Engine Optimization (SEO)", badge: "Organic Growth", shortDesc: "Technical SEO, topical authority architecture, and global search domination." },
      { id: "aso", title: "App Store Optimization (ASO)", badge: "Store Rank", shortDesc: "Keyword indexing, screenshot conversion optimization, and app store rank growth." },
      { id: "email-marketing", title: "Email & Lifecycle Marketing", badge: "Automation", shortDesc: "Behavioral nurture sequences, drip workflows, and churn reduction campaigns." },
      { id: "content-marketing", title: "Content Marketing", badge: "Thought Leadership", shortDesc: "Deep-dive technical whitepapers, case studies, and engineering blog posts." },
      { id: "performance-marketing", title: "Performance Marketing", badge: "ROAS Focused", shortDesc: "Hyper-targeted paid acquisition across Google Ads, Meta, LinkedIn, and programmatic." },
      { id: "search-engine-marketing", title: "Search Engine Marketing (SEM)", badge: "PPC Campaigns", shortDesc: "Intent-based PPC search advertising capturing high-value procurement buyers." },
      { id: "brand-marketing", title: "Brand Marketing", badge: "Global Positioning", shortDesc: "Brand narrative development, PR strategy, and enterprise market positioning." }
    ]
  }
];

// Standard 9-Step Development Journey applicable across all services
export const developmentJourneySteps = [
  { step: "01", name: "Discovery", desc: "Stakeholder workshops, project scoping, competitive audit, and technical feasibility validation." },
  { step: "02", name: "Requirement Analysis", desc: "Detailed user stories, functional specifications, system dependencies, and compliance roadmaps." },
  { step: "03", name: "Strategy & Architecture", desc: "Solution blueprinting, tech stack selection, cloud infrastructure topology, and security modeling." },
  { step: "04", name: "UX/UI Design", desc: "Wireframing, interactive prototypes, design system integration, and user-validation testing." },
  { step: "05", name: "Development", desc: "Agile bi-weekly sprints, clean code standards, modular architecture, and CI/CD code reviews." },
  { step: "06", name: "Testing & QA", desc: "Automated regression, penetration testing, performance benchmarking, and cross-device validation." },
  { step: "07", name: "Deployment", desc: "Zero-downtime blue/green rollout, container orchestration, and production telemetry initialization." },
  { step: "08", name: "Monitoring", desc: "Real-time error tracking, latency tracing, usage analytics, and uptime SLA monitoring." },
  { step: "09", name: "Support & Maintenance", desc: "Continuous patching, feature enhancements, cost optimization, and 24/7 incident response." }
];

// Rich fallback dynamic generator for any sub-service detail page
export function getServiceDetail(categoryId, serviceId) {
  const category = serviceCategories.find(c => c.id === categoryId) || serviceCategories[0];
  const sub = category.subServices.find(s => s.id === serviceId) || category.subServices[0];

  // Specific contextual technology stacks per category
  const techStacks = {
    "software-development": [
      { name: "React / Next.js", type: "Frontend" },
      { name: "Node.js / Express", type: "Backend" },
      { name: "Python / FastAPI", type: "API Core" },
      { name: "Flutter / Dart", type: "Mobile" },
      { name: "PostgreSQL", type: "Database" },
      { name: "Docker", type: "Containerization" }
    ],
    "cloud-devops": [
      { name: "AWS / GCP / Azure", type: "Cloud Providers" },
      { name: "Terraform", type: "Infrastructure as Code" },
      { name: "Kubernetes", type: "Orchestration" },
      { name: "GitHub Actions", type: "CI/CD" },
      { name: "Prometheus & Grafana", type: "Monitoring" },
      { name: "Docker", type: "Microservices" }
    ],
    "ai-data-intelligence": [
      { name: "OpenAI / Claude / Llama", type: "LLM Foundation" },
      { name: "LangChain / LlamaIndex", type: "Orchestration" },
      { name: "PyTorch & TensorFlow", type: "Deep Learning" },
      { name: "Pinecone / Qdrant", type: "Vector DB" },
      { name: "Snowflake & BigQuery", type: "Data Warehouse" },
      { name: "FastAPI", type: "Inference Engine" }
    ],
    "salesforce": [
      { name: "Lightning Web Components", type: "Frontend" },
      { name: "Apex & SOQL", type: "Backend Logic" },
      { name: "MuleSoft", type: "Enterprise Integration" },
      { name: "Sales & Service Cloud", type: "Core CRM" },
      { name: "Salesforce Flow", type: "Workflow Engine" },
      { name: "Einstein AI", type: "CRM Intelligence" }
    ],
    "design-experience": [
      { name: "Figma & FigJam", type: "Core UI/UX Tool" },
      { name: "Design Tokens", type: "Tokenized Library" },
      { name: "Framer / Webflow", type: "Interactive Prototyping" },
      { name: "UserTesting.com", type: "Usability Labs" },
      { name: "Adobe Creative Suite", type: "Visual Assets" },
      { name: "Storybook", type: "Component Docs" }
    ],
    "digital-marketing": [
      { name: "Google Analytics 4", type: "Analytics" },
      { name: "Google Search Console", type: "SEO Intelligence" },
      { name: "HubSpot / Klaviyo", type: "Marketing Automation" },
      { name: "Ahrefs & SEMrush", type: "Keyword & Backlink" },
      { name: "Meta & LinkedIn Ads", type: "Paid Media" },
      { name: "Mixpanel", type: "Product Analytics" }
    ]
  };

  return {
    category,
    subService: sub,
    headline: `Enterprise ${sub.title} Engineered for Scale & High Business ROI`,
    overview: `At Metaflow Technologies, our ${sub.title} practice unites seasoned domain architects, cutting-edge frameworks, and rigorous engineering protocols to deliver resilient, scalable, and secure digital assets. Whether modernizing existing legacy ecosystems or launching pioneering 0-to-1 solutions, we empower your business with high-velocity deployment and unmatched stability.`,
    businessProblemsSolved: [
      {
        title: "High Operational Latency & Bottlenecks",
        solution: "We eliminate legacy technical debt and engineer modern automated pipelines, cutting development cycles by up to 60%."
      },
      {
        title: "Scalability Constraints Under Peak Load",
        solution: "Our cloud-native architectures automatically autoscale, guaranteeing uninterrupted service during sudden 10x traffic surges."
      },
      {
        title: "Fragmented Data & Lack of Real-Time Visibility",
        solution: "We implement unified data contracts and real-time telemetry, equipping decision-makers with actionable intelligence."
      },
      {
        title: "Vulnerability to Cyber Threats & Compliance Audits",
        solution: "Security is embedded into every sprint (DevSecOps), ensuring SOC2, GDPR, and HIPAA compliance from Day 1."
      }
    ],
    capabilities: [
      `End-to-end strategy, specification, and execution tailored to enterprise business objectives.`,
      `Modern microservices and distributed modular architectures ensuring frictionless future expansion.`,
      `Zero-downtime deployment strategies with automated rollback and continuous QA validation.`,
      `Dedicated post-launch monitoring, performance benchmarking, and SLA-backed support.`
    ],
    technologies: techStacks[categoryId] || techStacks["software-development"],
    keyFeatures: [
      "Enterprise-Grade Reliability (99.99% Target Uptime)",
      "High-Velocity CI/CD Automated Pipelines",
      "Military-Grade Security & End-to-End Encryption",
      "Seamless Third-Party & Legacy API Integration",
      "Multi-Tenant & Multi-Region Support",
      "Comprehensive Observability & Real-Time Dashboards"
    ],
    developmentProcess: developmentJourneySteps,
    industries: ["FinTech", "Healthcare", "E-Commerce", "EdTech", "Logistics", "Enterprise SaaS"],
    whyChooseMFT: [
      { title: "Top 1% Senior Engineering Talent", desc: "No junior trial-and-error. You work with vetted domain specialists and senior systems architects." },
      { title: "Transparent Agile Delivery", desc: "Bi-weekly sprint demos, live Kanban boards, and zero surprise billing or delays." },
      { title: "Future-Proof Tech Architecture", desc: "We build on battle-tested, modern tech stacks designed to evolve over decades, not months." },
      { title: "IP & Code Ownership Guarantee", desc: "100% full intellectual property and source code ownership transferred directly to your organization." }
    ],
    faqs: [
      {
        q: `How long does a typical ${sub.title} engagement take?`,
        a: `Timelines vary by scope: rapid MVPs and initial deliverables often launch in 4 to 8 weeks, while comprehensive enterprise system builds typically span 3 to 6 months in iterative bi-weekly sprints.`
      },
      {
        q: `Can Metaflow Technologies integrate with our existing in-house team?`,
        a: `Yes. We provide both turnkey end-to-end project execution and dedicated staff augmentation teams that seamlessly integrate into your Jira, Slack, and CI/CD pipelines.`
      },
      {
        q: `What post-launch support and maintenance do you offer?`,
        a: `We provide flexible SLA-backed maintenance packages including 24/7 uptime monitoring, critical security patching, performance optimization, and dedicated feature enhancement sprints.`
      },
      {
        q: `How do you ensure data security and confidentiality?`,
        a: `We operate under strict bilateral NDAs, enforce zero-trust security postures, conduct routine code audits, and comply with international regulations such as GDPR, SOC2, and HIPAA.`
      }
    ]
  };
}
