// CaseStudyDetailPage.jsx - Deep Case Study Narrative & Blueprint
import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Server, TrendingUp, AlertTriangle } from "lucide-react";
import { portfolioProjects } from "../data/portfolioData";

export default function CaseStudyDetailPage({ slug, navigate, onOpenEnquiry }) {
  const project = portfolioProjects.find(p => p.slug === slug) || portfolioProjects[0];

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Hero */}
      <section className="mft-section mft-bg-navy" style={{ paddingBottom: "70px" }}>
        <div className="mft-container">
          <div className="mft-breadcrumbs" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("home")}>Home</span>
            <span>/</span>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("portfolio")}>Portfolio</span>
            <span>/</span>
            <span style={{ color: "var(--mft-cyan)" }}>{project.title}</span>
          </div>

          <div style={{ maxWidth: "880px" }}>
            <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
              <span className="mft-badge mft-badge-navy">
                {project.category} Architecture
              </span>
              <span className="mft-badge mft-badge-navy">
                {project.industry} Vertical
              </span>
            </div>

            <h1 style={{ fontSize: "3.25rem", color: "#FFFFFF", marginBottom: "18px", lineHeight: 1.15 }}>
              {project.title}
            </h1>

            <p style={{ fontSize: "1.25rem", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.6, marginBottom: "36px" }}>
              {project.tagline}
            </p>

            {/* Impact Metric Counters in Hero */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "20px", background: "rgba(255, 255, 255, 0.06)", padding: "24px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255, 255, 255, 0.12)" }}>
              {project.metrics.map((m, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--mft-cyan)" }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: "rgba(255, 255, 255, 0.7)", fontWeight: 600 }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Side by Side */}
      <section className="mft-section mft-bg-light">
        <div className="mft-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            {/* The Challenge */}
            <div className="mft-card" style={{ padding: "36px", borderTop: "4px solid #EF4444" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(239, 68, 68, 0.1)", color: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <AlertTriangle size={18} />
                </div>
                <h3 style={{ fontSize: "1.4rem", color: "var(--mft-navy)", margin: 0 }}>The Challenge & Bottlenecks</h3>
              </div>
              <p style={{ fontSize: "1rem", color: "var(--mft-text-body)", lineHeight: 1.7 }}>
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="mft-card" style={{ padding: "36px", borderTop: "4px solid var(--mft-blue)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "var(--mft-blue-subtle)", color: "var(--mft-blue)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Sparkles size={18} />
                </div>
                <h3 style={{ fontSize: "1.4rem", color: "var(--mft-navy)", margin: 0 }}>The Metaflow Engineering Solution</h3>
              </div>
              <p style={{ fontSize: "1rem", color: "var(--mft-text-body)", lineHeight: 1.7 }}>
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Blueprint & Tech Stack */}
      <section className="mft-section">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">Systems Topology</div>
            <h2 className="mft-section-title">Technical Architecture & Stack</h2>
            <p className="mft-section-subtitle">
              How distributed systems components interact to deliver high availability and sub-millisecond response.
            </p>
          </div>

          <div className="mft-card" style={{ padding: "40px", background: "var(--mft-navy)", color: "#FFFFFF", marginBottom: "40px" }}>
            <h3 style={{ fontSize: "1.35rem", color: "#FFFFFF", marginBottom: "14px" }}>
              Distributed System Blueprint
            </h3>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.8, fontSize: "1.0625rem", marginBottom: "28px" }}>
              {project.architecture}
            </p>

            <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)", paddingTop: "24px" }}>
              <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--mft-cyan)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                Production Technologies Used:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {project.techStack.map((tech, i) => (
                  <span key={i} style={{ padding: "8px 16px", borderRadius: "var(--radius-pill)", background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.15)", fontSize: "0.875rem", color: "#FFFFFF", fontWeight: 600 }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quantified Results */}
          <div className="mft-card" style={{ padding: "36px", borderLeft: "4px solid var(--mft-blue)" }}>
            <h3 style={{ fontSize: "1.35rem", color: "var(--mft-navy)", marginBottom: "18px" }}>
              Measurable Business Impact & Verified Results
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {project.results.map((res, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1rem", color: "var(--mft-text-body)" }}>
                  <CheckCircle2 size={20} style={{ color: "var(--mft-blue)", flexShrink: 0 }} />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="mft-section mft-bg-light">
        <div className="mft-container" style={{ maxWidth: "880px" }}>
          <div className="mft-card" style={{ padding: "36px", background: "#FFFFFF" }}>
            <span className="mft-badge" style={{ marginBottom: "10px" }}>Engineering Takeaway</span>
            <h3 style={{ fontSize: "1.35rem", color: "var(--mft-navy)", marginBottom: "10px" }}>
              Key Architectural Learning
            </h3>
            <p style={{ fontSize: "1rem", color: "var(--mft-text-body)", lineHeight: 1.7, margin: 0 }}>
              "{project.keyLearnings}"
            </p>
          </div>
        </div>
      </section>

      {/* Conversion Final CTA */}
      <section className="mft-section mft-bg-navy" style={{ textAlign: "center" }}>
        <div className="mft-container">
          <h2 style={{ fontSize: "2.75rem", color: "#FFFFFF", marginBottom: "14px" }}>
            Have a Similar Project?
          </h2>
          <p style={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.75)", maxWidth: "580px", margin: "0 auto 32px auto" }}>
            Partner with the architects behind {project.title}. We'll scope your technical roadmap and sprint schedule.
          </p>
          <button 
            className="mft-btn mft-btn-primary" 
            onClick={onOpenEnquiry}
          >
            <Sparkles size={16} />
            <span>Start a Project</span>
          </button>
        </div>
      </section>
    </div>
  );
}
