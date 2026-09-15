// productsData.js - Metaflow Technologies (MFT) Complete Product Ecosystem

export const productCategories = [
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    shortTitle: "E-Commerce",
    icon: "ShoppingCart",
    tagline: "High-Conversion Multi-Channel Retail & Marketplace Engines",
    description: "Battle-tested digital commerce solutions with lightning-fast catalog search, dynamic promotions, multi-currency checkout, and omnichannel order fulfillment.",
    products: [
      {
        id: "online-shopping-app",
        title: "Online Shopping App",
        badge: "Flagship Solution",
        shortDesc: "Full-featured consumer shopping app with personalized recommendations and instant 1-click checkout.",
        stats: { conversion: "+35%", checkoutTime: "18s", loadTime: "<0.8s" },
        features: [
          "Intuitive User Onboarding & Social SSO",
          "AI-Powered Predictive Search & Smart Filters",
          "Interactive Product Showcases with AR/3D Previews",
          "Multi-Wallet & Split-Payment Gateway Integrations",
          "Dynamic Cart & Wishlist Synchronization",
          "Live GPS Order Tracking & Real-Time Push Alerts",
          "Automated Loyalty Points & Tiered Coupons",
          "Verified Customer Reviews with Media Uploads"
        ],
        modules: {
          customer: ["Personalized Feed", "Instant Search & Facets", "Wishlist & Cart", "Stripe/Apple Pay/UPI Checkout", "Live Order Tracker", "Support Chat"],
          vendor: ["Inventory Management", "Bulk Catalog Importer", "Discount & Promotion Engine", "Order Dispatch Hub", "Settlement Ledger"],
          admin: ["Global Analytics BI", "User & Vendor KYC", "Commission Payout Automation", "Multi-Currency Management", "Fraud Sentinel Engine"]
        },
        userFlow: [
          { step: "1", title: "Discovery", desc: "User discovers products through AI search, categorized curated feeds, and personalized banners." },
          { step: "2", title: "Selection", desc: "Inspects high-res media, reads verified reviews, selects variations (size/color), and adds to cart." },
          { step: "3", title: "Secure Checkout", desc: "Automated address auto-fill via Google Places, coupon code application, and tokenized payment." },
          { step: "4", title: "Order Fulfillment", desc: "Real-time dispatch notification, driver allocation, and milestone GPS route tracking." },
          { step: "5", title: "Post-Purchase", desc: "Push notification upon delivery, automated invoice generation, and 1-tap review prompt." }
        ],
        techStack: ["React Native / Flutter", "Node.js / NestJS", "PostgreSQL & Redis", "ElasticSearch", "AWS Serverless"],
        deploymentModels: ["White-Label SaaS", "Self-Hosted Enterprise Cloud", "Custom Hybrid Hybrid Setup"]
      },
      {
        id: "multi-vendor-marketplace",
        title: "Multi-Vendor Marketplace",
        badge: "Enterprise Scale",
        shortDesc: "Scalable B2B & B2C marketplace platform with dedicated merchant portals, automated payouts, and commission routing.",
        features: ["Multi-Merchant Storefronts", "Automated Commission Split", "Vendor Payouts via Stripe Connect", "Custom Shipping Rules", "Centralized Dispute Resolution", "Vendor Rating Engine"],
        techStack: ["Next.js", "Go / Microservices", "PostgreSQL", "Kafka", "Docker & Kubernetes"]
      },
      {
        id: "grocery-marketplace",
        title: "Grocery Marketplace",
        badge: "Hyperlocal",
        shortDesc: "Hyperlocal grocery ordering ecosystem with slot-based delivery, barcode scanning, and fresh inventory management.",
        features: ["Slot-Based Delivery Scheduling", "Weight-Based Dynamic Pricing", "Batch Picking App for Store Clerks", "Temperature-Controlled Delivery Tracking"],
        techStack: ["React Native", "FastAPI", "MongoDB", "RabbitMQ", "Google Maps Platform"]
      },
      {
        id: "retail-ecommerce",
        title: "Retail E-Commerce Platform",
        badge: "Omnichannel",
        shortDesc: "Unified retail POS and headless web store synchronization for brick-and-mortar brands.",
        features: ["BOPIS (Buy Online, Pick Up in Store)", "Inventory Sync Across Physical Stores", "Clienteling & VIP CRM", "Return-to-Store Integration"],
        techStack: ["Shopify Plus / Custom React", "Node.js", "GraphQL", "AWS ECS"]
      }
    ]
  },
  {
    id: "booking",
    title: "Booking & Reservation Solutions",
    shortTitle: "Booking",
    icon: "CalendarCheck",
    tagline: "Automated Scheduling, Real-Time Availability, & Booking Engines",
    description: "Eliminate scheduling conflicts, optimize staff utilization, and provide clients with friction-free 24/7 self-service reservation systems.",
    products: [
      {
        id: "appointment-booking",
        title: "Appointment Booking System",
        badge: "Versatile",
        shortDesc: "Automated appointment booking platform for salons, clinics, consultants, and professional services.",
        features: ["Two-Way Calendar Sync (Google, Outlook, Apple)", "Automated SMS & WhatsApp Reminders", "Time Zone Detection", "Staff Shift Roster Management", "Deposit & Upfront Payments", "Tele-Consultation Video Integration"],
        techStack: ["Next.js", "Node.js", "Redis", "Twilio", "Zoom / WebRTC SDK"]
      },
      {
        id: "hotel-booking",
        title: "Hotel & Resort Booking Engine",
        badge: "Hospitality",
        shortDesc: "Direct hotel booking engine with room availability matrices, channel manager sync, and dynamic seasonal pricing.",
        features: ["Interactive Room 360 Visualizer", "Seasonal Dynamic Pricing Engine", "OTA Channel Manager Sync", "Add-on Packages & Dining Additions", "Mobile Keycard Integration"],
        techStack: ["React", "Python / Django", "PostgreSQL", "Stripe Terminal", "AWS Lambda"]
      },
      {
        id: "service-booking",
        title: "On-Demand Service Booking",
        badge: "Home Services",
        shortDesc: "Urban-services platform connecting customers with vetted electricians, plumbers, cleaners, and technicians.",
        features: ["Geolocation Matching Engine", "In-App Quoting & Estimates", "Real-Time Service Provider Tracking", "Escrow Milestones & Job Sign-Off"],
        techStack: ["Flutter", "Express.js", "PostGIS", "Firebase Cloud Messaging"]
      },
      {
        id: "event-booking",
        title: "Event & Ticket Booking Platform",
        badge: "High Volume",
        shortDesc: "High-capacity ticketing system capable of handling tens of thousands of simultaneous seat reservations.",
        features: ["Interactive SVG Seat Map Selector", "Queue-It Style High-Traffic Protection", "Dynamic QR Code Fraud Prevention", "On-Site Scanner Mobile App"],
        techStack: ["Next.js", "Rust / Go Microservices", "Redis Cluster", "AWS CloudFront"]
      }
    ]
  },
  {
    id: "delivery",
    title: "On-Demand Delivery Applications",
    shortTitle: "Delivery",
    icon: "Truck",
    tagline: "Hyperlocal Logistics, Multi-Stop Routing, & Fleet Management",
    description: "Complete 3-sided logistics ecosystems connecting customers, merchant stores, and delivery couriers with real-time route optimization.",
    products: [
      {
        id: "food-delivery",
        title: "Food Delivery Platform",
        badge: "Turnkey Stack",
        shortDesc: "DoorDash/UberEats-style comprehensive ecosystem: Customer App, Restaurant Tablet Hub, Driver App, and Super Admin.",
        features: ["Real-Time Chef Kitchen Display System (KDS)", "AI Route Optimization for Drivers", "Dynamic Surge Delivery Pricing", "Contactless Delivery & Live Heatmaps", "Dietary Filter & Custom Add-ons"],
        techStack: ["React Native", "Node.js", "Socket.io", "Mapbox SDK", "PostgreSQL"]
      },
      {
        id: "grocery-delivery",
        title: "Quick-Commerce Grocery Delivery",
        badge: "Dark Store Ops",
        shortDesc: "15-minute quick-commerce logistics engine for micro-fulfillment centers and dark stores.",
        features: ["Micro-Warehouse Bin Picking App", "Real-Time SKU Inventory Count", "Rider Dispatching Algorithm", "Batch Delivery Multi-Drop Route Optimization"],
        techStack: ["Flutter", "Go", "Redis", "Kafka", "AWS EKS"]
      },
      {
        id: "medicine-delivery",
        title: "Pharmacy & Medicine Delivery",
        badge: "Healthcare Compliant",
        shortDesc: "HIPAA-compliant e-pharmacy platform with prescription upload, pharmacist verification, and cold-chain tracking.",
        features: ["OCR Prescription Auto-Read", "Licensed Pharmacist Verification Desk", "Substitute Generic Medication Suggestion", "Temperature-Controlled Delivery Alerts"],
        techStack: ["React Native", "Python / FastAPI", "AWS Textract", "PostgreSQL"]
      },
      {
        id: "logistics-delivery",
        title: "Enterprise Logistics & Courier Hub",
        badge: "B2B Logistics",
        shortDesc: "Inter-city freight and parcel dispatch tracking system with digital Proof-of-Delivery (PoD).",
        features: ["Barcode / RFID Waybill Tracking", "Digital Signature & Photo PoD", "Fleet Telematics & Fuel Tracking", "Multi-Hub Hub-and-Spoke Routing"],
        techStack: ["Vue.js / React", "Spring Boot / Java", "PostgreSQL", "Kafka"]
      }
    ]
  },
  {
    id: "education",
    title: "Education Solutions",
    shortTitle: "Education",
    icon: "GraduationCap",
    tagline: "Interactive EdTech, LMS, & Continuous Learning Ecosystems",
    description: "Empower academic institutions, corporate academies, and tutoring ventures with modern digital classrooms, proctored exams, and student analytics.",
    products: [
      {
        id: "learning-management-system",
        title: "Learning Management System (LMS)",
        badge: "SCORM / LTI Compliant",
        shortDesc: "Enterprise LMS with video lectures, interactive quizzes, automated grading, and accreditation tracking.",
        features: ["Video Streaming with DRM Protection", "SCORM 1.2 & 2004 / xAPI Support", "Discussion Forums & Gamified Badges", "Institutional White-Label Portals", "Automated Certificate Issuance with Verifiable Hashes"],
        techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS Elemental MediaConvert", "Redis"]
      },
      {
        id: "online-course-platform",
        title: "Online Course Marketplace",
        badge: "Creator Economy",
        shortDesc: "All-in-one platform for independent creators and bootcamps to monetize structured courses and cohorts.",
        features: ["Cohort-Based Live Zoom / WebRTC Streams", "Subscription & Lifetime Access Paywalls", "Interactive Code Sandboxes", "Affiliate Partner Management"],
        techStack: ["React", "FastAPI", "Stripe Billing", "PostgreSQL"]
      },
      {
        id: "student-management",
        title: "School & Student Information System (SIS)",
        badge: "Institutional",
        shortDesc: "Centralized campus administration managing admissions, fee payments, attendance, and parent communications.",
        features: ["Automated Fee Invoicing & Payment Links", "Biometric / RFID Student Attendance", "Parent-Teacher Communication App", "Gradebook & Report Card Generator"],
        techStack: ["React", "Laravel / PHP", "MySQL", "AWS RDS"]
      },
      {
        id: "exam-platform",
        title: "Online Examination & AI Proctoring",
        badge: "AI Proctored",
        shortDesc: "Secure assessment platform featuring AI webcam proctoring, lockdown browser, and randomized question banks.",
        features: ["AI Gaze & Multiple-Face Detection", "Browser Lockdown & Tab Switching Prevention", "Equation & Code Compilers", "Automated Psychometric Scoring"],
        techStack: ["React", "Python / OpenCV", "TensorFlow.js", "WebRTC", "DynamoDB"]
      }
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare Solutions",
    shortTitle: "Healthcare",
    icon: "Activity",
    tagline: "HIPAA-Compliant Telehealth, EHR, & Hospital Workflows",
    description: "Bridging healthcare providers and patients with secure video consultations, electronic health records, and clinical management portals.",
    products: [
      {
        id: "hospital-management",
        title: "Hospital Information System (HIS / HMS)",
        badge: "Clinical Core",
        shortDesc: "Complete digital hospital operation covering OPD, IPD, OT scheduling, pharmacy, lab billing, and doctor rosters.",
        features: ["Electronic Medical Records (EMR / EHR)", "Bed Occupancy & Ward Allocation Matrix", "Laboratory Information System (LIS) with HL7 / FHIR", "Insurance Claim & TPA Desk Automation"],
        techStack: ["React", "Spring Boot / Java", "PostgreSQL", "FHIR API Server", "Docker"]
      },
      {
        id: "telemedicine",
        title: "Telemedicine & Virtual Care Platform",
        badge: "HIPAA Ready",
        shortDesc: "Secure telehealth suite providing HD video visits, digital prescriptions, and direct patient chat.",
        features: ["End-to-End Encrypted WebRTC Video", "In-Call Digital Prescription Pad", "Vitals Sync via Apple Health & Google Fit", "Post-Consultation Pharmacy Delivery Routing"],
        techStack: ["React Native / Web", "Node.js", "Twilio Video / Agora", "PostgreSQL"]
      },
      {
        id: "doctor-appointment",
        title: "Doctor Appointment & Clinic Portal",
        badge: "Practitioner App",
        shortDesc: "Streamlined clinic scheduling app eliminating waiting room congestion and automated follow-up recalls.",
        features: ["Queue Number Live Status on Patient Phone", "SMS Confirmation & Reminder Sequences", "Patient Medical History Timeline", "Digital Payment & Receipt Printing"],
        techStack: ["React", "FastAPI", "Redis", "Twilio", "PostgreSQL"]
      },
      {
        id: "pharmacy-platform",
        title: "Smart Pharmacy Management",
        badge: "Retail Pharmacy",
        shortDesc: "Inventory management, expiry batch tracking, drug interaction warnings, and barcode billing for pharmacies.",
        features: ["Drug Contraindication Warnings", "Automated Reorder Threshold Alerts", "GST / VAT Compliant Invoice Generation", "Customer Refill Subscription Reminders"],
        techStack: ["Electron / React", "Node.js", "SQLite / PostgreSQL"]
      }
    ]
  },
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    shortTitle: "Enterprise",
    icon: "Building2",
    tagline: "Mission-Critical ERP, CRM, & Autonomous Enterprise Workflows",
    description: "Custom enterprise software modernizing organizational operations, supply chain visibility, and financial reconciliation.",
    products: [
      {
        id: "custom-crm",
        title: "Enterprise CRM Solution",
        badge: "Revenue Engine",
        shortDesc: "Customizable sales pipeline, lead scoring, deal velocity tracking, and automated client engagement.",
        features: ["Visual Kanban Pipeline Management", "Automated Lead Scoring Algorithm", "Call Recording & Email Logging", "Sales Quota & Commission Forecasting"],
        techStack: ["React", "Go / Python", "PostgreSQL", "Redis", "AWS"]
      },
      {
        id: "enterprise-erp",
        title: "Modular Enterprise ERP",
        badge: "Operations Core",
        shortDesc: "Unified operational spine integrating finance, procurement, warehouse, production, and HR.",
        features: ["Real-Time General Ledger & Multi-Entity Accounting", "Procurement Purchase Order Workflows", "Raw Material Bill of Materials (BOM)", "Audited Change Logs & Role-Based Access"],
        techStack: ["Angular / React", "Java / Spring Cloud", "PostgreSQL", "Kafka"]
      },
      {
        id: "hrms-workforce",
        title: "HRMS & Workforce Platform",
        badge: "People Operations",
        shortDesc: "Modern human resource management with automated payroll, leave tracking, performance reviews, and employee self-service.",
        features: ["One-Click Payroll & Tax Deduction Engine", "Facial Attendance & Geofenced Mobile Punch-In", "OKRs & 360 Performance Appraisals", "Automated Employee Onboarding Workflows"],
        techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis"]
      }
    ]
  }
];

// Fallback helper to fetch product detail
export function getProductDetail(categoryId, productId) {
  const category = productCategories.find(c => c.id === categoryId) || productCategories[0];
  const product = category.products.find(p => p.id === productId) || category.products[0];

  return {
    category,
    product,
    headline: `Turnkey, Enterprise-Ready ${product.title} Built for Scale`,
    description: product.shortDesc || `Our ${product.title} solution provides organizations with a production-proven foundation, combining modern consumer experience with high-volume enterprise backend architecture.`,
    problemSolved: `Traditional off-the-shelf software packages are rigid, impose exorbitant recurring subscription fees per seat, and trap your proprietary customer data in closed silos. Metaflow Technologies builds modern, brandable, 100% customizable ${product.title} instances tailored to your precise workflow needs with zero third-party vendor lock-in.`,
    features: product.features || [
      "Real-Time Data Sync Across Web & Mobile",
      "Enterprise Multi-Tenant Security",
      "Customizable Workflow Automations",
      "Full API & Webhook Ecosystem",
      "Granular Role-Based Access Controls (RBAC)",
      "Continuous Automated Backups"
    ],
    modules: product.modules || {
      customer: ["User Registration & Profile", "Smart Search & Filtering", "Interactive Workflows", "Secure Payment Gateway", "Real-Time Tracking & Push Notifications"],
      vendor: ["Dashboard Analytics", "Product / Service Management", "Operational Dispatch Desk", "Payouts & Settlement Ledger"],
      admin: ["Super Admin Security Console", "User Management & KYC", "System Configuration", "System Audit Logs & BI Reports"]
    },
    userFlow: product.userFlow || [
      { step: "1", title: "Registration & Onboarding", desc: "User securely logs in via passwordless SMS OTP or social single sign-on." },
      { step: "2", title: "Discovery & Selection", desc: "Explores items, leverages dynamic filtering, and configures order specifications." },
      { step: "3", title: "Automated Processing", desc: "Backend algorithms process requests, dispatch notifications, and secure transactions." },
      { step: "4", title: "Live Fulfillment", desc: "Real-time updates, status notifications, and live status progress markers." },
      { step: "5", title: "Feedback & Loyalty", desc: "Automated receipt issuance, customer ratings, and loyalty rewards redemption." }
    ],
    techStack: product.techStack || ["React / React Native", "Node.js / Express", "PostgreSQL", "Redis", "Docker / AWS"],
    businessBenefits: [
      { title: "70% Faster Time to Market", desc: "Launch an enterprise-grade solution in weeks rather than spending years building from scratch." },
      { title: "Zero Monthly Seat Penalties", desc: "Scale to millions of users without escalating monthly licensing bills." },
      { title: "Complete Source Code Ownership", desc: "Your company owns the IP, database, and repository." },
      { title: "Customizable to Exact Workflow", desc: "Engineered with modular microservice blocks that adapt as your enterprise expands." }
    ],
    industries: ["Startups", "Enterprises", "Retail", "Healthcare", "Logistics", "Hospitality"],
    faqs: [
      { q: `Can we customize the branding and features of ${product.title}?`, a: `Absolutely. The entire UI, color scheme, business rules, and payment gateways are fully bespoke and customizable to match your brand identity.` },
      { q: `Do you provide source code ownership upon delivery?`, a: `Yes. Metaflow Technologies grants complete intellectual property rights and full source code access to your organization upon project completion.` },
      { q: `Can you host this on our dedicated AWS / Azure / GCP accounts?`, a: `Yes. We configure automated CI/CD pipelines to deploy directly to your private cloud infrastructure with full compliance and security audits.` },
      { q: `What is the estimated deployment timeline?`, a: `Standard white-label deployments launch within 2 to 4 weeks, while heavily tailored custom configurations typically take 6 to 12 weeks.` }
    ]
  };
}
