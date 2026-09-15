// PortfolioPage.jsx - Filterable Enterprise Portfolio Hub
import React, { useState } from "react";
import { ArrowRight, Sparkles, TrendingUp, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react";
import { portfolioProjects, portfolioCategories } from "../data/portfolioData";

export default function PortfolioPage({ navigate, onOpenEnquiry }) {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredProjects = selectedCat === "All"
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category.toLowerCase() === selectedCat.toLowerCase() || p.industry.toLowerCase() === selectedCat.toLowerCase());

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Page Hero */}
      <section className="mft-section mft-bg-navy" style={{ paddingBottom: "70px" }}>
        <div className="mft-container" style={{ textAlign: "center" }}>
          <div className="mft-breadcrumbs" style={{ justifyContent: "center", color: "rgba(255, 255, 255, 0.6)" }}>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("home")}>Home</span>
            <span>/</span>
            <span style={{ color: "var(--mft-cyan)" }}>Portfolio</span>
          </div>

          <span className="mft-badge mft-badge-navy">
            <Sparkles size={14} /> Real-World Engineering Outcomes
          </span>

          <h1 style={{ fontSize: "3.5rem", color: "#FFFFFF", marginBottom: "18px" }}>
            Proven Enterprise Deployments
          </h1>

          <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.75)", maxWidth: "780px", margin: "0 auto 36px auto", lineHeight: 1.7 }}>
            Explore how Metaflow Technologies engineers mission-critical software, AI inference pipelines, and multi-region cloud infrastructures for ambitious enterprises.
          </p>

          <button 
            className="mft-btn mft-btn-primary"
            onClick={onOpenEnquiry}
          >
            <Sparkles size={16} />
            <span>Discuss Your Project With Us</span>
          </button>
        </div>
      </section>

      {/* Filter Tabs */}
      <div style={{ background: "#FFFFFF", borderBottom: "1px solid var(--mft-border-light)", position: "sticky", top: "var(--nav-height)", zIndex: 100 }}>
        <div className="mft-container" style={{ display: "flex", gap: "10px", overflowX: "auto", padding: "14px 24px", justifyContent: "center" }}>
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              className={`mft-tab-btn ${selectedCat === cat ? "active" : ""}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <section className="mft-section mft-bg-light">
        <div className="mft-container">
          <div className="mft-grid-2">
            {filteredProjects.map((proj) => (
              <div 
                key={proj.slug} 
                className="mft-card" 
                style={{ padding: "36px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "3px 10px", borderRadius: "12px", background: "var(--mft-blue-subtle)", color: "var(--mft-blue)" }}>
                        {proj.category}
                      </span>
                      <span style={{ fontSize: "0.75rem", fontWeight: 600, padding: "3px 10px", borderRadius: "12px", background: "var(--mft-bg-light)", color: "var(--mft-text-navy)", border: "1px solid var(--mft-border-light)" }}>
                        {proj.industry}
                      </span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: "1.5rem", color: "var(--mft-navy)", marginBottom: "8px" }}>
                    {proj.title}
                  </h3>

                  <p style={{ fontSize: "0.9375rem", color: "var(--mft-text-gray)", lineHeight: 1.6, marginBottom: "24px" }}>
                    {proj.shortDesc}
                  </p>

                  {/* Quantified Metrics Box */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", background: "var(--mft-bg-light)", padding: "16px", borderRadius: "var(--radius-md)", marginBottom: "24px", border: "1px solid var(--mft-border-light)" }}>
                    {proj.metrics.slice(0, 2).map((m, i) => (
                      <div key={i}>
                        <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--mft-blue)" }}>{m.value}</div>
                        <div style={{ fontSize: "0.75rem", color: "var(--mft-text-gray)", fontWeight: 600 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "28px" }}>
                    {proj.techStack.map((tech, i) => (
                      <span key={i} style={{ fontSize: "0.75rem", padding: "3px 8px", background: "#FFFFFF", borderRadius: "6px", border: "1px solid var(--mft-border-light)", color: "var(--mft-text-body)" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "18px", borderTop: "1px solid var(--mft-border-light)" }}>
                  <button 
                    className="mft-btn mft-btn-primary"
                    style={{ fontSize: "0.875rem", padding: "8px 20px" }}
                    onClick={() => navigate(`portfolio/${proj.slug}`)}
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={14} />
                  </button>
                  <button 
                    className="mft-btn-link"
                    style={{ fontSize: "0.875rem" }}
                    onClick={onOpenEnquiry}
                  >
                    Build Similar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
