// HomePage.jsx - Metaflow Technologies Flagship Portal
import React, { useState } from "react";
import { 
  Sparkles, ArrowRight, ShieldCheck, Code2, Cloud, BrainCircuit, 
  Layers, Palette, TrendingUp, CheckCircle, Award, Globe, Users, 
  ChevronRight, ExternalLink, MapPin, Phone, Mail, Clock, Plus, Minus,
  Server, Cpu, Database, Laptop, Lock, ArrowUpRight
} from "lucide-react";
import HeroCanvas from "../components/HeroCanvas";
import { 
  companyOverview, journeyTimeline, 
  techEcosystem, industriesList, whyChooseMft, 
  latestInsights, homepageFaqs 
} from "../data/companyData";
import { serviceCategories } from "../data/servicesData";

export default function HomePage({ navigate, onOpenEnquiry }) {
  const [activeTechTab, setActiveTechTab] = useState("Frontend");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  const categoryIcons = {
    "software-development": <Code2 size={26} />,
    "cloud-devops": <Cloud size={26} />,
    "ai-data-intelligence": <BrainCircuit size={26} />,
    "salesforce": <Layers size={26} />,
    "design-experience": <Palette size={26} />,
    "digital-marketing": <TrendingUp size={26} />
  };

  const activeTechGroup = techEcosystem.find(t => t.category === activeTechTab) || techEcosystem[0];

  return (
    <div>
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="mft-hero" id="hero">
        <HeroCanvas />

        <div className="mft-container mft-hero-content">
          <div style={{ maxWidth: "880px" }}>
            <div className="mft-badge">
              <Sparkles size={14} />
              <span>{companyOverview.tagline}</span>
            </div>

            <h1 className="mft-hero-headline">
              Building <span style={{ color: "var(--mft-blue)" }}>Intelligent Digital Solutions</span> for a Smarter Future.
            </h1>

            <p className="mft-hero-subtext">
              Metaflow Technologies delivers software, AI, cloud, data, design, and digital solutions that help businesses transform ideas into scalable digital products.
            </p>

            <div className="mft-hero-actions">
              <button 
                className="mft-btn mft-btn-primary" 
                onClick={onOpenEnquiry}
                id="hero-cta-start-project"
              >
                <Sparkles size={17} />
                <span>Start a Project</span>
                <ArrowRight size={17} />
              </button>

              <button 
                className="mft-btn mft-btn-secondary"
                onClick={() => navigate("services")}
              >
                <span>Explore Services</span>
              </button>

              <button 
                className="mft-btn mft-btn-secondary"
                onClick={() => navigate("products")}
              >
                <span>View Products</span>
              </button>
            </div>

            {/* Live Stats */}
            <div className="mft-hero-stats">
              {companyOverview.metrics.map((stat, idx) => (
                <div key={idx} className="mft-stat-item">
                  <div className="mft-stat-value">{stat.value}</div>
                  <div className="mft-stat-label">{stat.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--mft-text-light)", marginTop: "2px" }}>
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHAT WE DO (Core Capabilities)
          ========================================================================= */}
      <section className="mft-section mft-bg-light" id="what-we-do">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">Enterprise Capabilities</div>
            <h2 className="mft-section-title">What We Do</h2>
            <p className="mft-section-subtitle">
              We empower startups and global enterprises with high-throughput engineering, modern cloud architecture, and artificial intelligence.
            </p>
          </div>

          <div className="mft-grid-3">
            {serviceCategories.map((svc) => (
              <div key={svc.id} className="mft-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div className="mft-icon-box">
                    {categoryIcons[svc.id]}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "1.35rem" }}>{svc.title}</h3>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "2px 8px", borderRadius: "10px", background: "var(--mft-blue-subtle)", color: "var(--mft-blue)" }}>
                      {svc.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "20px" }}>
                    {svc.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                    {svc.subServices.slice(0, 3).map((sub) => (
                      <span 
                        key={sub.id} 
                        style={{ fontSize: "0.75rem", padding: "3px 8px", background: "var(--mft-bg-light)", borderRadius: "6px", color: "var(--mft-text-gray)", border: "1px solid var(--mft-border-light)" }}
                      >
                        {sub.title}
                      </span>
                    ))}
                    <span style={{ fontSize: "0.75rem", color: "var(--mft-blue)", fontWeight: 600, alignSelf: "center" }}>
                      +{svc.subServices.length - 3} more
                    </span>
                  </div>
                </div>

                <div>
                  <button 
                    className="mft-btn-link"
                    onClick={() => navigate(`services/${svc.id}/${svc.subServices[0].id}`)}
                  >
                    <span>Explore {svc.shortTitle}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          VISION SECTION (Deep Navy Enterprise Canvas)
          ========================================================================= */}
      <section className="mft-section mft-bg-navy" id="vision">
        <div className="mft-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "50px", alignItems: "center" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <span className="mft-badge mft-badge-navy">
                <ShieldCheck size={14} /> Long-Term Vision
              </span>
              <h2 style={{ fontSize: "2.75rem", color: "#FFFFFF", marginBottom: "20px" }}>
                Architecting the Autonomous Digital Enterprise
              </h2>
              <p style={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.8, marginBottom: "32px" }}>
                At Metaflow Technologies, our vision is to establish the world’s most cohesive project ecosystem — where pioneering businesses eliminate fragmented tech vendors and build unified, AI-driven, highly resilient digital products designed to outlast market volatility.
              </p>
            </div>

            <div className="mft-grid-3">
              <div className="mft-card mft-card-navy">
                <div className="mft-icon-box mft-icon-box-navy">
                  <Sparkles size={24} />
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "10px" }}>Innovation & AI Velocity</h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.65)" }}>
                  Translating breakthrough transformer models and autonomous agents into tangible enterprise revenue engines and automated operational workflows.
                </p>
              </div>

              <div className="mft-card mft-card-navy">
                <div className="mft-icon-box mft-icon-box-navy">
                  <Cpu size={24} />
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "10px" }}>Scalable Digital Architecture</h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.65)" }}>
                  Engineering fault-tolerant, multi-region distributed cloud backbones capable of seamlessly absorbing massive transactional spikes.
                </p>
              </div>

              <div className="mft-card mft-card-navy">
                <div className="mft-icon-box mft-icon-box-navy">
                  <TrendingUp size={24} />
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "10px" }}>Measurable Business Impact</h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.65)" }}>
                  Zero vanity metrics. Every system architecture, interface micro-interaction, and cloud configuration is measured against business ROI and margin expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          OUR JOURNEY (Modern Step-Based Milestone Grid - No Internal Scrollbars)
          ========================================================================= */}
      <section className="mft-section mft-bg-light" id="journey">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">Ecosystem Evolution</div>
            <h2 className="mft-section-title">Our Journey & Milestones</h2>
            <p className="mft-section-subtitle">
              From an ambitious architectural vision to a premier technology ecosystem delivering intelligent digital infrastructure.
            </p>
          </div>

          <div className="mft-journey-grid">
            {journeyTimeline.map((item, idx) => (
              <div 
                key={idx}
                className={`mft-journey-step-card ${activeTimelineIndex === idx ? "active" : ""}`}
                onClick={() => setActiveTimelineIndex(idx)}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span className="mft-journey-badge">
                      Phase 0{idx + 1} • {item.year}
                    </span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: activeTimelineIndex === idx ? "var(--mft-blue)" : "var(--mft-text-gray)" }}>
                      {item.stage}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.25rem", color: "var(--mft-navy)", marginBottom: "10px", lineHeight: 1.3 }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: "0.9375rem", color: "var(--mft-text-gray)", lineHeight: 1.6, margin: 0 }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px solid var(--mft-border-light)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: activeTimelineIndex === idx ? "var(--mft-blue)" : "var(--mft-text-gray)" }}>
                    {activeTimelineIndex === idx ? "Active Milestone Focus" : "Click to Explore Focus"}
                  </span>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: activeTimelineIndex === idx ? "var(--mft-blue)" : "var(--mft-border-light)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TECHNOLOGY ECOSYSTEM (Categorized Matrix)
          ========================================================================= */}
      <section className="mft-section" id="technologies">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">Modern Tech Stack</div>
            <h2 className="mft-section-title">Technology Ecosystem</h2>
            <p className="mft-section-subtitle">
              We leverage production-hardened, battle-tested technologies and frameworks to ensure zero vendor lock-in and high maintainability.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mft-tabs">
            {techEcosystem.map((t) => (
              <button
                key={t.category}
                className={`mft-tab-btn ${activeTechTab === t.category ? "active" : ""}`}
                onClick={() => setActiveTechTab(t.category)}
              >
                {t.category}
              </button>
            ))}
          </div>

          {/* Active Tech Items Grid */}
          <div className="mft-grid-3">
            {activeTechGroup.items.map((item, idx) => (
              <div key={idx} className="mft-card" style={{ padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "var(--mft-blue-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mft-blue)" }}>
                      <Server size={18} />
                    </div>
                    <h4 style={{ fontSize: "1.125rem", margin: 0 }}>{item.name}</h4>
                  </div>
                  <span style={{ fontSize: "0.6875rem", fontWeight: 700, padding: "2px 8px", borderRadius: "10px", background: "var(--mft-bg-light)", color: "var(--mft-text-gray)", border: "1px solid var(--mft-border-light)" }}>
                    {item.level}
                  </span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--mft-text-gray)", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INDUSTRIES / SECTORS
          ========================================================================= */}
      <section className="mft-section mft-bg-light" id="industries">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">Domain Specialization</div>
            <h2 className="mft-section-title">Industries & Sectors</h2>
            <p className="mft-section-subtitle">
              Tailored software and digital ecosystems engineered for specific regulatory, operational, and commercial demands.
            </p>
          </div>

          <div className="mft-grid-4">
            {industriesList.map((ind) => (
              <div 
                key={ind.id} 
                className="mft-card" 
                style={{ padding: "24px", cursor: "pointer" }}
                onClick={() => navigate("services")}
              >
                <div className="mft-icon-box" style={{ width: "46px", height: "46px", marginBottom: "14px" }}>
                  <Globe size={20} />
                </div>
                <h3 style={{ fontSize: "1.125rem", marginBottom: "8px" }}>{ind.name}</h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--mft-text-gray)", lineHeight: 1.5, marginBottom: "16px" }}>
                  {ind.desc}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--mft-blue)", fontSize: "0.8125rem", fontWeight: 600 }}>
                  <span>Explore Solutions</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE US (Enterprise Pillars)
          ========================================================================= */}
      <section className="mft-section" id="why-choose-us">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">The Metaflow Difference</div>
            <h2 className="mft-section-title">Why Metaflow Technologies?</h2>
            <p className="mft-section-subtitle">
              We eliminate the friction of coordinating multiple disparate vendors by delivering a unified, end-to-end technical partnership.
            </p>
          </div>

          <div className="mft-grid-3">
            {whyChooseMft.map((pillar, i) => (
              <div key={i} className="mft-card">
                <div className="mft-icon-box">
                  <CheckCircle size={22} />
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "10px" }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          LATEST INSIGHTS & BLOG
          ========================================================================= */}
      <section className="mft-section mft-bg-light" id="insights">
        <div className="mft-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <div className="mft-badge">Engineering & Strategy</div>
              <h2 className="mft-section-title" style={{ marginBottom: "8px" }}>Latest Insights</h2>
              <p className="mft-section-subtitle" style={{ margin: 0 }}>
                Deep dives, architectural blueprints, and emerging technology trends from our senior engineering fellows.
              </p>
            </div>
            <button className="mft-btn mft-btn-secondary" onClick={() => navigate("services")}>
              <span>View All Publications</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="mft-grid-2">
            {latestInsights.map((insight) => (
              <div key={insight.id} className="mft-card" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1.0)"}
                  />
                  <div style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(1, 16, 47, 0.85)", backdropFilter: "blur(6px)", color: "var(--mft-cyan)", padding: "4px 12px", borderRadius: "var(--radius-pill)", fontSize: "0.75rem", fontWeight: 700 }}>
                    {insight.category}
                  </div>
                </div>

                <div style={{ padding: "28px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--mft-text-gray)", marginBottom: "8px" }}>
                      {insight.date} • {insight.readTime}
                    </div>
                    <h3 style={{ fontSize: "1.3rem", color: "var(--mft-navy)", marginBottom: "12px", lineHeight: 1.35 }}>
                      {insight.title}
                    </h3>
                    <p style={{ fontSize: "0.9375rem", color: "var(--mft-text-gray)", lineHeight: 1.6, marginBottom: "20px" }}>
                      {insight.excerpt}
                    </p>
                  </div>

                  <button 
                    className="mft-btn-link"
                    onClick={onOpenEnquiry}
                  >
                    <span>Request Full Whitepaper</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION
          ========================================================================= */}
      <section className="mft-section" id="faq">
        <div className="mft-container" style={{ maxWidth: "900px" }}>
          <div className="mft-section-header">
            <div className="mft-badge">Got Questions?</div>
            <h2 className="mft-section-title">Frequently Asked Questions</h2>
            <p className="mft-section-subtitle">
              Clear answers to how we engage, architect, and deliver transformative software ecosystems.
            </p>
          </div>

          <div>
            {homepageFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`mft-accordion ${openFaqIndex === idx ? "active" : ""}`}
              >
                <button 
                  className="mft-accordion-trigger"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === idx ? <Minus size={20} color="var(--mft-blue)" /> : <Plus size={20} />}
                </button>
                {openFaqIndex === idx && (
                  <div className="mft-accordion-content">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BRANCH LOCATIONS & CONTACT HUBS
          ========================================================================= */}
      <section className="mft-section mft-bg-light" id="location">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">Office Locations & Hubs</div>
            <h2 className="mft-section-title">Where to Find Us</h2>
            <p className="mft-section-subtitle">
              Metaflow Technologies operates from our primary engineering headquarters in Hyderabad and onboarding branch in Vijayawada.
            </p>
          </div>

          <div className="mft-grid-3">
            {/* Hyderabad Primary Branch */}
            <div className="mft-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderTop: "4px solid var(--mft-blue)" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "var(--mft-blue-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mft-blue)" }}>
                    <MapPin size={22} />
                  </div>
                  <span style={{ fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "0.75rem", background: "var(--mft-blue-subtle)", padding: "4px 10px", borderRadius: "var(--radius-pill)", color: "var(--mft-blue)" }}>
                    Primary Branch
                  </span>
                </div>

                <h3 style={{ fontSize: "1.35rem", color: "var(--mft-navy)", marginBottom: "12px" }}>
                  Hyderabad (Primary Branch)
                </h3>

                <p style={{ fontSize: "0.9375rem", color: "var(--mft-text-body)", lineHeight: 1.6, marginBottom: "16px" }}>
                  #301, Ridge Towers, Surya Nagar, Quthbullapur, Hyderabad-500037
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--mft-border-light)", paddingTop: "14px", marginTop: "12px" }}>
                <div style={{ fontSize: "0.8125rem", color: "var(--mft-text-gray)", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Clock size={14} />
                  <span>Mon - Sat: 09:30 AM - 07:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Vijayawada Onboarding Branch */}
            <div className="mft-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderTop: "4px solid var(--mft-cyan)" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(0, 210, 255, 0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0891B2" }}>
                    <MapPin size={22} />
                  </div>
                  <span style={{ fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "0.75rem", background: "rgba(0, 210, 255, 0.15)", padding: "4px 10px", borderRadius: "var(--radius-pill)", color: "#0E7490" }}>
                    Onboarding Branch
                  </span>
                </div>

                <h3 style={{ fontSize: "1.35rem", color: "var(--mft-navy)", marginBottom: "12px" }}>
                  Vijayawada (Onboarding Branch)
                </h3>

                <p style={{ fontSize: "0.9375rem", color: "var(--mft-text-body)", lineHeight: 1.6, marginBottom: "16px" }}>
                  New Sanath Nagar, Vijayawada-520007
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--mft-border-light)", paddingTop: "14px", marginTop: "12px" }}>
                <div style={{ fontSize: "0.8125rem", color: "var(--mft-text-gray)", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Clock size={14} />
                  <span>Mon - Sat: 09:30 AM - 06:30 PM IST</span>
                </div>
              </div>
            </div>

            {/* Direct Communications & Support */}
            <div className="mft-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderTop: "4px solid #10B981" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(16, 185, 129, 0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#059669" }}>
                    <Phone size={22} />
                  </div>
                  <span style={{ fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "0.75rem", background: "rgba(16, 185, 129, 0.12)", padding: "4px 10px", borderRadius: "var(--radius-pill)", color: "#047857" }}>
                    Direct Support
                  </span>
                </div>

                <h3 style={{ fontSize: "1.35rem", color: "var(--mft-navy)", marginBottom: "12px" }}>
                  Connect with Us
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.875rem" }}>
                  <div>
                    <span style={{ color: "var(--mft-text-gray)", display: "block", fontSize: "0.75rem" }}>Primary Contact Number</span>
                    <a href="tel:7732080078" style={{ color: "var(--mft-blue)", fontWeight: 700, fontSize: "0.9375rem" }}>+91 7732080078</a> [Phone]
                  </div>
                  <div>
                    <span style={{ color: "var(--mft-text-gray)", display: "block", fontSize: "0.75rem" }}>WhatsApp Only Number</span>
                    <a href={companyOverview.contact.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#059669", fontWeight: 700, fontSize: "0.9375rem" }}>+91 9318158444</a> [WhatsApp]
                  </div>
                  <div>
                    <span style={{ color: "var(--mft-text-gray)", display: "block", fontSize: "0.75rem" }}>Official Email Address</span>
                    <a href="mailto:info@metaflowtechnologies.in" style={{ color: "var(--mft-navy)", fontWeight: 600, fontSize: "0.9375rem" }}>info@metaflowtechnologies.in</a>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--mft-border-light)", paddingTop: "14px", marginTop: "16px" }}>
                <a 
                  href={companyOverview.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mft-btn mft-btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "10px 16px", background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)", borderColor: "#25D366" }}
                >
                  <span>Chat on WhatsApp (9318158444)</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA BANNER
          ========================================================================= */}
      <section className="mft-section mft-bg-navy" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-50%", right: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0, 71, 239, 0.35) 0%, transparent 70%)", pointerEvents: "none" }} />
        
        <div className="mft-container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <span className="mft-badge mft-badge-navy">
            <Sparkles size={14} /> Ready to Build?
          </span>

          <h2 style={{ fontSize: "3rem", color: "#FFFFFF", marginBottom: "18px" }}>
            Have an Idea? Let's Build It.
          </h2>

          <p style={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.75)", maxWidth: "680px", margin: "0 auto 36px auto", lineHeight: 1.7 }}>
            Collaborate with Metaflow Technologies to accelerate your product timeline, modernize legacy infrastructure, and lead your industry with intelligence.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <button 
              className="mft-btn mft-btn-primary" 
              onClick={onOpenEnquiry}
              id="final-cta-start-project"
            >
              <Sparkles size={17} />
              <span>Start a Project</span>
            </button>
            <button 
              className="mft-btn mft-btn-glass"
              onClick={() => navigate("contact")}
            >
              <span>Contact Us</span>
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
