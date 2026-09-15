// ServiceDetailPage.jsx - Dedicated Dynamic Deep-Dive for all 50+ Sub-Services
import React, { useState } from "react";
import { 
  ArrowRight, Sparkles, CheckCircle2, ChevronRight, ShieldCheck, 
  HelpCircle, Server, Layers, Cpu, Code2, Plus, Minus, ArrowUpRight 
} from "lucide-react";
import { getServiceDetail, serviceCategories } from "../data/servicesData";

export default function ServiceDetailPage({ categoryId, serviceId, navigate, onOpenEnquiry }) {
  const detail = getServiceDetail(categoryId, serviceId);
  const [activeStep, setActiveStep] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Hero Section */}
      <section className="mft-section mft-bg-navy" style={{ paddingBottom: "70px" }}>
        <div className="mft-container">
          {/* Breadcrumbs */}
          <div className="mft-breadcrumbs" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("home")}>Home</span>
            <span>/</span>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("services")}>Services</span>
            <span>/</span>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("services")}>{detail.category.title}</span>
            <span>/</span>
            <span style={{ color: "var(--mft-cyan)" }}>{detail.subService.title}</span>
          </div>

          <div style={{ maxWidth: "880px" }}>
            <div className="mft-badge mft-badge-navy">
              <Sparkles size={14} /> {detail.category.title} Practice
            </div>

            <h1 style={{ fontSize: "3.25rem", color: "#FFFFFF", marginBottom: "20px", lineHeight: 1.15 }}>
              {detail.headline}
            </h1>

            <p style={{ fontSize: "1.1875rem", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.7, marginBottom: "36px" }}>
              {detail.overview}
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button 
                className="mft-btn mft-btn-primary"
                onClick={onOpenEnquiry}
              >
                <Sparkles size={16} />
                <span>Start a Project in {detail.subService.title}</span>
              </button>

              <button 
                className="mft-btn mft-btn-glass"
                onClick={() => navigate("portfolio")}
              >
                <span>View Related Case Studies</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Problems We Solve */}
      <section className="mft-section mft-bg-light">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">Commercial Impact</div>
            <h2 className="mft-section-title">Business Problems We Solve</h2>
            <p className="mft-section-subtitle">
              We bridge business strategy and deep engineering to overcome mission-critical operational bottlenecks.
            </p>
          </div>

          <div className="mft-grid-2">
            {detail.businessProblemsSolved.map((item, idx) => (
              <div key={idx} className="mft-card" style={{ borderLeft: "4px solid var(--mft-blue)" }}>
                <div style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", color: "var(--mft-blue)", letterSpacing: "0.05em", marginBottom: "6px" }}>
                  Challenge 0{idx + 1}
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--mft-navy)", marginBottom: "12px" }}>
                  {item.title}
                </h3>
                <div style={{ background: "var(--mft-bg-light)", padding: "14px", borderRadius: "var(--radius-md)", border: "1px solid var(--mft-border-light)" }}>
                  <div style={{ fontWeight: 700, color: "var(--mft-blue)", fontSize: "0.8125rem", marginBottom: "4px" }}>
                    The Metaflow Engineering Solution:
                  </div>
                  <p style={{ fontSize: "0.9375rem", margin: 0, color: "var(--mft-text-body)" }}>
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & Key Features */}
      <section className="mft-section">
        <div className="mft-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <div>
              <div className="mft-badge">Core Disciplines</div>
              <h2 className="mft-section-title" style={{ textAlign: "left", marginBottom: "20px" }}>
                Specialized {detail.subService.title} Capabilities
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "var(--mft-text-gray)", lineHeight: 1.7, marginBottom: "24px" }}>
                Our senior engineering teams deploy modern modular design patterns, clean architecture, and continuous delivery to guarantee high availability and enterprise security.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {detail.capabilities.map((cap, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--mft-blue)", marginTop: "3px" }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <span style={{ fontSize: "0.95rem", color: "var(--mft-text-body)", fontWeight: 500 }}>
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mft-card" style={{ padding: "36px", background: "var(--mft-bg-light)" }}>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "20px", color: "var(--mft-navy)" }}>
                Key Technical Architectural Features
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {detail.keyFeatures.map((feat, i) => (
                  <div key={i} style={{ padding: "12px 16px", background: "#FFFFFF", borderRadius: "var(--radius-sm)", border: "1px solid var(--mft-border-light)", display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9375rem", fontWeight: 600, color: "var(--mft-navy)" }}>
                    <ShieldCheck size={16} style={{ color: "var(--mft-blue)" }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Matrix */}
      <section className="mft-section mft-bg-light">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">Frameworks & Tooling</div>
            <h2 className="mft-section-title">Production Technology Stack</h2>
            <p className="mft-section-subtitle">
              Carefully chosen technologies ensuring high throughput, developer velocity, and long-term maintainability.
            </p>
          </div>

          <div className="mft-grid-3">
            {detail.technologies.map((t, idx) => (
              <div key={idx} className="mft-card" style={{ padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "var(--mft-blue-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mft-blue)" }}>
                    <Server size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", margin: 0, color: "var(--mft-navy)" }}>{t.name}</h4>
                    <span style={{ fontSize: "0.75rem", color: "var(--mft-text-gray)" }}>{t.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE 9-STEP DEVELOPMENT JOURNEY (Modern Stepper Grid - No Internal Scrollbars)
          ========================================================================= */}
      <section className="mft-section mft-bg-navy" id="journey">
        <div className="mft-container">
          <div className="mft-section-header">
            <span className="mft-badge mft-badge-navy">Agile Engineering Lifecycle</span>
            <h2 className="mft-section-title" style={{ color: "#FFFFFF" }}>
              Our 9-Step Development Journey
            </h2>
            <p className="mft-section-subtitle" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              A disciplined, transparent delivery framework engineered to minimize delivery risk and maximize software velocity.
            </p>
          </div>

          {/* Responsive 9-Step Grid Stepper (No internal scrollbar) */}
          <div className="mft-steps-stepper">
            {detail.developmentProcess.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`mft-step-item-btn ${activeStep === idx ? "active" : ""}`}
              >
                <span style={{ fontSize: "0.875rem", fontWeight: 800 }}>{step.step}</span>
                <span style={{ fontSize: "0.6875rem", fontWeight: 600, lineHeight: 1.2 }}>{step.name}</span>
              </button>
            ))}
          </div>

          {/* Active Step Feature Box */}
          <div className="mft-card mft-card-navy" style={{ padding: "36px", borderLeft: "4px solid var(--mft-cyan)", display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", borderBottom: "1px solid rgba(255, 255, 255, 0.12)", paddingBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "var(--mft-cyan)", lineHeight: 1 }}>
                  STAGE {detail.developmentProcess[activeStep].step}
                </span>
                <span style={{ fontSize: "1.4rem", color: "#FFFFFF", fontWeight: 700 }}>
                  — {detail.developmentProcess[activeStep].name}
                </span>
              </div>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "4px 12px", borderRadius: "12px", background: "rgba(0, 210, 255, 0.15)", color: "var(--mft-cyan)" }}>
                Step {activeStep + 1} of 9
              </span>
            </div>

            <p style={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.8, margin: 0 }}>
              {detail.developmentProcess[activeStep].desc}
            </p>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "12px", flexWrap: "wrap", gap: "10px" }}>
              <div style={{ fontSize: "0.8125rem", color: "rgba(255, 255, 255, 0.55)" }}>
                Quality Gate: Strict peer code review, automated regression tests & security scans before proceeding.
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  className="mft-btn mft-btn-glass"
                  style={{ padding: "6px 14px", fontSize: "0.75rem" }}
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                >
                  Previous Step
                </button>
                <button
                  className="mft-btn mft-btn-primary"
                  style={{ padding: "6px 14px", fontSize: "0.75rem" }}
                  disabled={activeStep === detail.developmentProcess.length - 1}
                  onClick={() => setActiveStep(Math.min(detail.developmentProcess.length - 1, activeStep + 1))}
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served & Why Choose MFT */}
      <section className="mft-section">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">Partnership Value</div>
            <h2 className="mft-section-title">Why Choose Metaflow for {detail.subService.title}?</h2>
            <p className="mft-section-subtitle">
              We deliver senior engineering excellence with complete IP ownership and clear communication.
            </p>
          </div>

          <div className="mft-grid-2" style={{ marginBottom: "64px" }}>
            {detail.whyChooseMFT.map((why, i) => (
              <div key={i} className="mft-card">
                <div className="mft-icon-box">
                  <CheckCircle2 size={22} />
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--mft-navy)", marginBottom: "8px" }}>
                  {why.title}
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--mft-text-gray)", lineHeight: 1.6, margin: 0 }}>
                  {why.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Target Industries */}
          <div style={{ background: "var(--mft-bg-light)", borderRadius: "var(--radius-lg)", padding: "36px", textAlign: "center" }}>
            <h4 style={{ fontSize: "1.2rem", marginBottom: "16px", color: "var(--mft-navy)" }}>
              High-Impact Industries Utilizing Our {detail.subService.title} Practice:
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
              {detail.industries.map((ind, idx) => (
                <span key={idx} style={{ padding: "8px 18px", borderRadius: "var(--radius-pill)", background: "#FFFFFF", border: "1px solid var(--mft-border-light)", fontSize: "0.875rem", fontWeight: 700, color: "var(--mft-navy)" }}>
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      <section className="mft-section mft-bg-light">
        <div className="mft-container" style={{ maxWidth: "860px" }}>
          <div className="mft-section-header">
            <div className="mft-badge">Knowledge Base</div>
            <h2 className="mft-section-title">{detail.subService.title} FAQs</h2>
          </div>

          <div>
            {detail.faqs.map((faq, idx) => (
              <div key={idx} className={`mft-accordion ${openFaqIndex === idx ? "active" : ""}`}>
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

      {/* Direct CTA */}
      <section className="mft-section mft-bg-navy" style={{ textAlign: "center" }}>
        <div className="mft-container">
          <h2 style={{ fontSize: "2.75rem", color: "#FFFFFF", marginBottom: "16px" }}>
            Ready to Build Your {detail.subService.title} Solution?
          </h2>
          <p style={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.75)", maxWidth: "600px", margin: "0 auto 32px auto" }}>
            Connect directly with a Senior Solutions Architect to receive an architectural estimate and sprint roadmap.
          </p>
          <button 
            className="mft-btn mft-btn-primary" 
            onClick={onOpenEnquiry}
          >
            <Sparkles size={16} />
            <span>Request Architectural Consultation</span>
          </button>
        </div>
      </section>
    </div>
  );
}
