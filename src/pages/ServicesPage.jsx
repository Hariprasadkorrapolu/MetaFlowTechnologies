// ServicesPage.jsx - Metaflow Technologies Services Directory
import React, { useState } from "react";
import { 
  Code2, Cloud, BrainCircuit, Layers, Palette, TrendingUp, 
  ArrowRight, Sparkles, CheckCircle2, Shield 
} from "lucide-react";
import { serviceCategories } from "../data/servicesData";

const categoryIconMap = {
  Code2: <Code2 size={24} />,
  Cloud: <Cloud size={24} />,
  BrainCircuit: <BrainCircuit size={24} />,
  Layers: <Layers size={24} />,
  Palette: <Palette size={24} />,
  TrendingUp: <TrendingUp size={24} />
};

export default function ServicesPage({ navigate, onOpenEnquiry }) {
  const [selectedCatId, setSelectedCatId] = useState("all");

  const filteredCategories = selectedCatId === "all" 
    ? serviceCategories 
    : serviceCategories.filter(c => c.id === selectedCatId);

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Page Hero */}
      <section className="mft-section mft-bg-navy" style={{ paddingBottom: "70px" }}>
        <div className="mft-container" style={{ textAlign: "center" }}>
          <div className="mft-breadcrumbs" style={{ justifyContent: "center", color: "rgba(255, 255, 255, 0.6)" }}>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("home")}>Home</span>
            <span>/</span>
            <span style={{ color: "var(--mft-cyan)" }}>Services</span>
          </div>

          <span className="mft-badge mft-badge-navy">
            <Sparkles size={14} /> Full-Spectrum Technology Ecosystem
          </span>

          <h1 style={{ fontSize: "3.5rem", color: "#FFFFFF", marginBottom: "18px" }}>
            End-to-End Enterprise Services
          </h1>

          <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.75)", maxWidth: "780px", margin: "0 auto 36px auto", lineHeight: 1.7 }}>
            From greenfield software engineering to autonomous AI agents, enterprise cloud migrations, and bespoke design systems, we build resilient technology designed to scale.
          </p>

          <button 
            className="mft-btn mft-btn-primary"
            onClick={onOpenEnquiry}
          >
            <Sparkles size={16} />
            <span>Consult Our Solutions Architects</span>
          </button>
        </div>
      </section>

      {/* Category Filter Navigation */}
      <div style={{ background: "#FFFFFF", borderBottom: "1px solid var(--mft-border-light)", position: "sticky", top: "var(--nav-height)", zIndex: 100 }}>
        <div className="mft-container" style={{ display: "flex", gap: "10px", overflowX: "auto", padding: "14px 24px" }}>
          <button
            className={`mft-tab-btn ${selectedCatId === "all" ? "active" : ""}`}
            onClick={() => setSelectedCatId("all")}
          >
            All Services ({serviceCategories.reduce((acc, c) => acc + c.subServices.length, 0)})
          </button>
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              className={`mft-tab-btn ${selectedCatId === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCatId(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Services List Section */}
      <section className="mft-section mft-bg-light">
        <div className="mft-container">
          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            {filteredCategories.map((cat) => (
              <div key={cat.id} id={cat.id} className="mft-card" style={{ padding: "40px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", marginBottom: "28px", paddingBottom: "24px", borderBottom: "1px solid var(--mft-border-light)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div className="mft-icon-box" style={{ margin: 0 }}>
                      {categoryIconMap[cat.icon]}
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <h2 style={{ fontSize: "1.85rem", color: "var(--mft-navy)" }}>{cat.title}</h2>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "3px 10px", borderRadius: "12px", background: "var(--mft-blue-subtle)", color: "var(--mft-blue)" }}>
                          {cat.badge}
                        </span>
                      </div>
                      <p style={{ fontSize: "1rem", color: "var(--mft-text-gray)", margin: "4px 0 0 0" }}>
                        {cat.tagline}
                      </p>
                    </div>
                  </div>

                  <button 
                    className="mft-btn mft-btn-secondary"
                    onClick={() => navigate(`services/${cat.id}/${cat.subServices[0].id}`)}
                  >
                    <span>View Primary Service</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

                <p style={{ fontSize: "1.0625rem", color: "var(--mft-text-body)", lineHeight: 1.7, marginBottom: "28px", maxWidth: "900px" }}>
                  {cat.description}
                </p>

                {/* Sub Services Grid */}
                <h4 style={{ fontSize: "1.1rem", marginBottom: "16px", color: "var(--mft-navy)" }}>Available Sub-Services & Specializations:</h4>
                <div className="mft-grid-3">
                  {cat.subServices.map((sub) => (
                    <div
                      key={sub.id}
                      onClick={() => navigate(`services/${cat.id}/${sub.id}`)}
                      style={{
                        padding: "20px",
                        borderRadius: "var(--radius-md)",
                        background: "var(--mft-bg-light)",
                        border: "1px solid var(--mft-border-light)",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--mft-blue)";
                        e.currentTarget.style.background = "#FFFFFF";
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow = "var(--shadow-card)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--mft-border-light)";
                        e.currentTarget.style.background = "var(--mft-bg-light)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                        <h4 style={{ fontSize: "1rem", color: "var(--mft-navy)", margin: 0 }}>{sub.title}</h4>
                        <span style={{ fontSize: "0.6875rem", padding: "2px 6px", borderRadius: "4px", background: "var(--mft-blue-subtle)", color: "var(--mft-blue)", fontWeight: 700 }}>
                          {sub.badge}
                        </span>
                      </div>
                      <p style={{ fontSize: "0.8125rem", color: "var(--mft-text-gray)", lineHeight: 1.5, marginBottom: "12px" }}>
                        {sub.shortDesc}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--mft-blue)", fontSize: "0.8125rem", fontWeight: 600 }}>
                        <span>Explore Deep Dive</span>
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
