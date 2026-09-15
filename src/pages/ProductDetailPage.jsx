// ProductDetailPage.jsx - Dedicated Deep-Dive for Turnkey Product Solutions
import React, { useState } from "react";
import { 
  ArrowRight, Sparkles, CheckCircle2, ShieldCheck, 
  Smartphone, Monitor, Laptop, LayoutDashboard, Plus, Minus, Server, Layers 
} from "lucide-react";
import { getProductDetail } from "../data/productsData";

export default function ProductDetailPage({ categoryId, productId, navigate, onOpenEnquiry }) {
  const detail = getProductDetail(categoryId, productId);
  const [activeScreenTab, setActiveScreenTab] = useState("customer"); // 'customer' | 'vendor' | 'admin'
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Hero Section */}
      <section className="mft-section mft-bg-navy" style={{ paddingBottom: "70px" }}>
        <div className="mft-container">
          <div className="mft-breadcrumbs" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("home")}>Home</span>
            <span>/</span>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("products")}>Products</span>
            <span>/</span>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("products")}>{detail.category.title}</span>
            <span>/</span>
            <span style={{ color: "var(--mft-cyan)" }}>{detail.product.title}</span>
          </div>

          <div style={{ maxWidth: "880px" }}>
            <div className="mft-badge mft-badge-navy">
              <Sparkles size={14} /> {detail.product.badge}
            </div>

            <h1 style={{ fontSize: "3.25rem", color: "#FFFFFF", marginBottom: "18px", lineHeight: 1.15 }}>
              {detail.headline}
            </h1>

            <p style={{ fontSize: "1.1875rem", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.7, marginBottom: "36px" }}>
              {detail.description}
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button 
                className="mft-btn mft-btn-primary"
                onClick={onOpenEnquiry}
              >
                <Sparkles size={16} />
                <span>Request Live Architecture Demo</span>
              </button>

              <button 
                className="mft-btn mft-btn-glass"
                onClick={() => navigate("portfolio")}
              >
                <span>View Realized Case Studies</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem It Solves & Value Proposition */}
      <section className="mft-section mft-bg-light">
        <div className="mft-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
            <div className="mft-card" style={{ padding: "36px", borderLeft: "4px solid var(--mft-blue)" }}>
              <span className="mft-badge" style={{ marginBottom: "10px" }}>Market Problem</span>
              <h3 style={{ fontSize: "1.5rem", color: "var(--mft-navy)", marginBottom: "12px" }}>
                Why Legacy Software & Closed Platforms Fail
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--mft-text-body)", lineHeight: 1.7 }}>
                {detail.problemSolved}
              </p>
            </div>

            <div>
              <span className="mft-badge">The Metaflow Architecture</span>
              <h2 className="mft-section-title" style={{ textAlign: "left", fontSize: "2.25rem", marginBottom: "16px" }}>
                Core Capabilities & Modules
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {detail.features.map((feat, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.95rem", color: "var(--mft-navy)", fontWeight: 600 }}>
                    <CheckCircle2 size={18} style={{ color: "var(--mft-blue)" }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE UI SCREENS & MODULE PREVIEWS
          ========================================================================= */}
      <section className="mft-section" id="screens">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">Multi-Sided Architecture</div>
            <h2 className="mft-section-title">Designed UI Mockups & Feature Modules</h2>
            <p className="mft-section-subtitle">
              Inspect the end-user application, partner/vendor portal, and super administrator command center.
            </p>
          </div>

          {/* Screen Switcher Tabs */}
          <div className="mft-tabs">
            <button 
              className={`mft-tab-btn ${activeScreenTab === "customer" ? "active" : ""}`}
              onClick={() => setActiveScreenTab("customer")}
            >
              <Smartphone size={16} style={{ display: "inline", marginRight: "6px" }} />
              Customer / User Mobile Application
            </button>
            <button 
              className={`mft-tab-btn ${activeScreenTab === "vendor" ? "active" : ""}`}
              onClick={() => setActiveScreenTab("vendor")}
            >
              <Monitor size={16} style={{ display: "inline", marginRight: "6px" }} />
              Partner / Provider / Merchant Portal
            </button>
            <button 
              className={`mft-tab-btn ${activeScreenTab === "admin" ? "active" : ""}`}
              onClick={() => setActiveScreenTab("admin")}
            >
              <LayoutDashboard size={16} style={{ display: "inline", marginRight: "6px" }} />
              Super Admin Control Console
            </button>
          </div>

          {/* Interactive Screen Preview Container */}
          <div className="mft-card" style={{ padding: "40px", background: "var(--mft-navy)", color: "#FFFFFF" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
              <div>
                <span className="mft-badge mft-badge-navy" style={{ marginBottom: "12px" }}>
                  Active Module View
                </span>
                <h3 style={{ fontSize: "1.75rem", color: "#FFFFFF", marginBottom: "16px" }}>
                  {activeScreenTab === "customer" && "User Experience & Checkout Funnel"}
                  {activeScreenTab === "vendor" && "Operational Fulfillment & Vendor Hub"}
                  {activeScreenTab === "admin" && "Global Super-Admin BI & Governance"}
                </h3>
                
                <p style={{ color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.7, marginBottom: "24px" }}>
                  {activeScreenTab === "customer" && "Engineered for consumer retention: sub-second product filtering, biometric checkout, push notifications, and live status telemetry."}
                  {activeScreenTab === "vendor" && "Empowering third-party merchants or practitioners with automated scheduling, inventory sync, and instant payout ledger reconciliation."}
                  {activeScreenTab === "admin" && "Granular role-based access control, transaction dispute resolution, automated platform fee splits, and real-time operational analytics."}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {(detail.modules[activeScreenTab] || detail.modules.customer).map((mod, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--mft-cyan)", fontSize: "0.9375rem" }}>
                      <CheckCircle2 size={16} />
                      <span style={{ color: "#FFFFFF" }}>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Designed UI Mockup Canvas */}
              <div style={{ background: "rgba(255, 255, 255, 0.05)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "24px", minHeight: "340px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "12px", marginBottom: "16px" }}>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F56" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FFBD2E" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27C93F" }} />
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "monospace" }}>
                    https://app.metaflow-ecosystem.io/{activeScreenTab}
                  </div>
                  <div style={{ width: "20px" }} />
                </div>

                {/* Simulated UI Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px", flex: 1, justifyContent: "center" }}>
                  <div style={{ background: "rgba(0, 71, 239, 0.3)", borderRadius: "8px", padding: "16px", border: "1px solid rgba(0, 210, 255, 0.3)" }}>
                    <div style={{ fontSize: "0.8125rem", color: "var(--mft-cyan)", fontWeight: 700, marginBottom: "4px" }}>
                      STATUS: PRODUCTION READY
                    </div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FFFFFF" }}>
                      {detail.product.title} — {activeScreenTab.toUpperCase()} ENGINE
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "14px", borderRadius: "8px" }}>
                      <div style={{ fontSize: "0.6875rem", color: "rgba(255, 255, 255, 0.5)" }}>API Response Latency</div>
                      <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#FFFFFF" }}>28ms</div>
                    </div>
                    <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "14px", borderRadius: "8px" }}>
                      <div style={{ fontSize: "0.6875rem", color: "rgba(255, 255, 255, 0.5)" }}>Target Concurrency</div>
                      <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--mft-cyan)" }}>50,000+</div>
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: "right", marginTop: "16px", fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.4)" }}>
                  Verified Enterprise Modular Architecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive User Flow */}
      <section className="mft-section mft-bg-light">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">Frictionless UX</div>
            <h2 className="mft-section-title">End-to-End User Flow</h2>
            <p className="mft-section-subtitle">
              How end consumers navigate from discovery to transaction fulfillment.
            </p>
          </div>

          <div className="mft-grid-3">
            {detail.userFlow.map((flow) => (
              <div key={flow.step} className="mft-card" style={{ borderTop: "4px solid var(--mft-blue)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--mft-blue)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.875rem" }}>
                    {flow.step}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--mft-text-gray)", fontWeight: 700 }}>PHASE 0{flow.step}</span>
                </div>
                <h3 style={{ fontSize: "1.2rem", color: "var(--mft-navy)", marginBottom: "8px" }}>{flow.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--mft-text-gray)", lineHeight: 1.6, margin: 0 }}>
                  {flow.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business ROI & Deployment Models */}
      <section className="mft-section">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">Commercial Value</div>
            <h2 className="mft-section-title">Enterprise Commercial ROI</h2>
            <p className="mft-section-subtitle">
              Why leading organizations deploy Metaflow product foundations instead of building from scratch.
            </p>
          </div>

          <div className="mft-grid-4" style={{ marginBottom: "50px" }}>
            {detail.businessBenefits.map((b, i) => (
              <div key={i} className="mft-card">
                <div className="mft-icon-box">
                  <ShieldCheck size={22} />
                </div>
                <h3 style={{ fontSize: "1.15rem", color: "var(--mft-navy)", marginBottom: "8px" }}>{b.title}</h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--mft-text-gray)", lineHeight: 1.5, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Deployment Options */}
          <div style={{ background: "var(--mft-navy)", borderRadius: "var(--radius-lg)", padding: "36px", color: "#FFFFFF", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <h3 style={{ fontSize: "1.4rem", color: "#FFFFFF", marginBottom: "6px" }}>
                Flexible Deployment: SaaS, Private Dedicated Cloud, or On-Premise
              </h3>
              <p style={{ color: "rgba(255, 255, 255, 0.75)", margin: 0, fontSize: "0.9375rem" }}>
                Deploy to your own AWS / GCP / Azure tenant with automated CI/CD and full codebase handoff.
              </p>
            </div>
            <button className="mft-btn mft-btn-primary" onClick={onOpenEnquiry}>
              <span>Configure Deployment</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mft-section mft-bg-light">
        <div className="mft-container" style={{ maxWidth: "860px" }}>
          <div className="mft-section-header">
            <div className="mft-badge">Product FAQ</div>
            <h2 className="mft-section-title">{detail.product.title} Questions</h2>
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

      {/* CTA */}
      <section className="mft-section mft-bg-navy" style={{ textAlign: "center" }}>
        <div className="mft-container">
          <h2 style={{ fontSize: "2.75rem", color: "#FFFFFF", marginBottom: "16px" }}>
            Ready to Launch {detail.product.title}?
          </h2>
          <p style={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.75)", maxWidth: "600px", margin: "0 auto 32px auto" }}>
            Schedule a walkthrough with our solutions team to test drive the live staging environment.
          </p>
          <button 
            className="mft-btn mft-btn-primary" 
            onClick={onOpenEnquiry}
          >
            <Sparkles size={16} />
            <span>Schedule Live Platform Demo</span>
          </button>
        </div>
      </section>
    </div>
  );
}
