// portfolioData.js - Metaflow Technologies (MFT) Case Studies & Realized Outcomes

export const portfolioProjects = [
  {
    slug: "nexahealth-ai-telemedicine",
    title: "NexaHealth AI Telemedicine Platform",
    category: "AI",
    industry: "Healthcare",
    tagline: "Connecting 1.2M+ Patients with Specialists via Real-Time AI Diagnostics",
    shortDesc: "End-to-end HIPAA compliant telehealth ecosystem with automated medical transcription, symptom triage AI, and HD WebRTC consults.",
    metrics: [
      { label: "Active Consultations", value: "1.2M+" },
      { label: "Triage Accuracy", value: "98.4%" },
      { label: "Wait Time Reduction", value: "62%" },
      { label: "Target Uptime", value: "99.99%" }
    ],
    techStack: ["React Native", "Python / FastAPI", "WebRTC", "PostgreSQL", "AWS HIPAA Cloud", "OpenAI Whisper"],
    challenge: "NexaHealth needed to handle a 400% surge in virtual consult requests while ensuring zero medical record compromise, sub-second video latency on 3G networks, and automated clinical transcription to prevent physician burnout.",
    solution: "Metaflow Technologies engineered a resilient WebRTC media pipeline with adaptive bitrate streaming. We integrated a fine-tuned medical speech-to-text model that automatically generates SOAP notes, saving clinicians 14 minutes per consultation.",
    architecture: "Microservice cluster deployed on AWS EKS with end-to-end KMS encryption, dedicated TURN/STUN relays, and zero-retention ephemeral transcription buffers.",
    results: [
      "Scaled effortlessly to over 85,000 peak concurrent video streams.",
      "Reduced physician charting time by 65%, boosting doctor retention to 94%.",
      "Achieved full HIPAA and SOC2 Type II compliance audit clearance on first review."
    ],
    keyLearnings: "Decoupling live video streams from clinical record synchronization ensured zero call dropouts even in unstable cellular network conditions."
  },
  {
    slug: "omnistore-global-marketplace",
    title: "OmniStore Multi-Vendor Global Marketplace",
    category: "Web",
    industry: "E-Commerce",
    tagline: "High-Throughput Retail Hub Supporting 14,000 Merchants & Millions of SKUs",
    shortDesc: "High-concurrency e-commerce engine with sub-80ms search queries, multi-currency checkout, and real-time vendor dispatch management.",
    metrics: [
      { label: "Active Merchants", value: "14,000+" },
      { label: "Search Latency", value: "<45ms" },
      { label: "Checkout Conversion", value: "+38%" },
      { label: "Merchant Onboarding", value: "3.5 Mins" }
    ],
    techStack: ["Next.js", "Node.js / NestJS", "ElasticSearch", "PostgreSQL", "Redis Cluster", "Stripe Connect"],
    challenge: "The client suffered from frequent checkout crashes during seasonal flash sales and merchant dissatisfaction with delayed 14-day manual payout reconciliations.",
    solution: "MFT re-architected the monolithic database into an event-driven microservices architecture using Apache Kafka and Redis caching. We built an automated merchant settlement engine.",
    architecture: "Event-sourced microservices with read-replicas, distributed ElasticSearch clusters for faceted catalog browsing, and edge caching via Cloudflare Workers.",
    results: [
      "Handled 42,000 transactions per minute during peak seasonal sales without a single second of downtime.",
      "Instant 24-hour merchant payout automation reduced support disputes by 82%."
    ],
    keyLearnings: "Implementing edge-computed dynamic pricing rules reduced origin server load by 74%."
  },
  {
    slug: "hyperflow-cloud-devops-migration",
    title: "HyperFlow Financial Cloud & DevOps Modernization",
    category: "Cloud",
    industry: "FinTech",
    tagline: "Migrating Legacy Monoliths to Zero-Trust Multi-Region Kubernetes",
    shortDesc: "Automated Terraform IaC and GitOps CI/CD transformation cutting deployment cycles from 3 weeks to 9 minutes.",
    metrics: [
      { label: "Deployment Frequency", value: "24x / Day" },
      { label: "Cloud Spend Reduced", value: "43%" },
      { label: "Rollback Time", value: "<15s" },
      { label: "Availability", value: "99.995%" }
    ],
    techStack: ["AWS EKS", "Terraform", "ArgoCD", "Prometheus", "Datadog", "Docker"],
    challenge: "A leading financial technology enterprise faced quarterly release bottlenecks, frequent config drifts across staging environments, and surging unmonitored cloud infrastructure bills.",
    solution: "Engineered a standardized GitOps deployment workflow using ArgoCD and codified all infrastructure across Indian and international availability zones via modular Terraform scripts.",
    architecture: "Multi-region active-active Kubernetes clusters governed by Istio service mesh and automated blue-green traffic switching.",
    results: [
      "Deployment cycle collapsed from 21 days of manual approvals to under 9 minutes with automated compliance testing.",
      "Identified and terminated dormant cloud instances, saving ₹3.2 Cr annually."
    ],
    keyLearnings: "Enforcing GitOps as the single source of truth eliminated 100% of staging vs production configuration drifts."
  },
  {
    slug: "agripulse-iot-predictive-agriculture",
    title: "AgriPulse Smart IoT & Crop Yield Prediction",
    category: "Data",
    industry: "Agriculture",
    tagline: "Sensor-to-Cloud Telemetry & AI Yield Forecasting Across 240,000 Acres",
    shortDesc: "LoRaWAN sensor gateway mesh delivering real-time soil moisture telemetry and automated irrigation alerts.",
    metrics: [
      { label: "Acreage Monitored", value: "240K Acres" },
      { label: "Water Conservation", value: "34%" },
      { label: "Yield Improvement", value: "+22%" },
      { label: "Daily Data Points", value: "18M+" },
    ],
    techStack: ["MQTT / LoRaWAN", "Python / PyTorch", "TimescaleDB", "React Native", "Google Cloud Platform"],
    challenge: "Commercial agricultural co-ops lacked granular field moisture data, leading to severe water waste and delayed response to fungal blight outbreaks.",
    solution: "Deployed low-power solar IoT soil probes broadcasting over LoRaWAN, backed by a predictive deep learning model forecasting micro-climate pest risks.",
    architecture: "Edge LoRaWAN gateways streaming telemetry via MQTT to Google Cloud IoT Core and TimescaleDB, visualized on progressive web and mobile dashboards.",
    results: [
      "Saved 1.4 billion liters of agricultural water across 12 months.",
      "Predicted fungal outbreaks 5 days in advance with 91% validated accuracy."
    ],
    keyLearnings: "Edge sensor data aggregation and anomaly filtering reduced cellular transmission costs by 80%."
  },
  {
    slug: "apexfin-ai-fraud-sentinel",
    title: "ApexFin Enterprise Banking AI Fraud Sentinel",
    category: "AI",
    industry: "FinTech",
    tagline: "Sub-15ms Transactional Anomaly Scoring Protecting ₹19,500 Cr in Annual Volume",
    shortDesc: "Real-time graph neural network identifying synthetic identity fraud and card-not-present laundering rings.",
    metrics: [
      { label: "Volume Protected", value: "₹19,500 Cr" },
      { label: "Inference Latency", value: "12ms" },
      { label: "False Positives Dropped", value: "54%" },
      { label: "Detection Rate", value: "99.1%" }
    ],
    techStack: ["PyTorch Geometric", "FastAPI", "Neo4j Graph DB", "Kafka", "AWS SageMaker"],
    challenge: "Traditional rule-based fraud engines flagged excessive legitimate customer purchases while missing distributed cross-bank fraud rings.",
    solution: "Designed a Graph Neural Network (GNN) analyzing interconnected transaction nodes, IP clusters, and device fingerprint hops in real time.",
    architecture: "High-throughput Apache Kafka event pipe feeding a distributed Neo4j cluster and ultra-low latency C++ inference servers.",
    results: [
      "Prevented ₹150 Cr in fraudulent transfers within the first 6 months of live deployment.",
      "Customer checkout friction dropped significantly with a 54% reduction in false account freezes."
    ],
    keyLearnings: "Graph topology features proved 3x more predictive of coordinated fraud than tabular transaction histories."
  },
  {
    slug: "edusphere-adaptive-learning-lms",
    title: "EduSphere Adaptive AI Learning Management System",
    category: "SaaS",
    industry: "Education",
    tagline: "Personalized Educational Journeys for 450,000 Active University Students",
    shortDesc: "Next-generation institutional LMS with AI difficulty pacing, peer video cohorts, and auto-graded assessments.",
    metrics: [
      { label: "Active Students", value: "450K+" },
      { label: "Course Completion", value: "+44%" },
      { label: "Institutions Deployed", value: "32" },
      { label: "Average Session", value: "52 Mins" }
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS CloudFront", "Tailored LLMs"],
    challenge: "High student drop-out rates in remote higher-education programs due to passive video lectures and lack of timely feedback.",
    solution: "Created an adaptive knowledge-graph LMS where AI tutors dynamically generate personalized practice challenges based on student retention curves.",
    architecture: "Multi-tenant SaaS architecture supporting customized white-label institutional subdomains, single sign-on (SAML/LTI), and real-time student engagement heatmaps.",
    results: [
      "Course completion rates increased from 31% to 75% across participating partner universities.",
      "Faculty grading workload reduced by 40% through automated rubric-based code and text evaluations."
    ],
    keyLearnings: "Micro-learning modules coupled with immediate conversational feedback drove a 3x increase in daily active retention."
  }
];

export const portfolioCategories = [
  "All",
  "AI",
  "Web",
  "Mobile",
  "Cloud",
  "Data",
  "SaaS",
  "Enterprise"
];
