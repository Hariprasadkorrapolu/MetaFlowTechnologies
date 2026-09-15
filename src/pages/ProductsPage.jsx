// ProductsPage.jsx - Metaflow Technologies Products & Turnkey Solutions Hub
import React, { useState } from "react";
import { 
  ShoppingCart, CalendarCheck, Truck, GraduationCap, Activity, 
  Building2, ArrowRight, Sparkles, CheckCircle, ShieldCheck, Zap 
} from "lucide-react";
import { productCategories } from "../data/productsData";

const categoryIconMap = {
  ShoppingCart: <ShoppingCart size={24} />,
  CalendarCheck: <CalendarCheck size={24} />,
  Truck: <Truck size={24} />,
  GraduationCap: <GraduationCap size={24} />,
  Activity: <Activity size={24} />,
  Building2: <Building2 size={24} />
};

export default function ProductsPage({ navigate, onOpenEnquiry }) {
  const [selectedCatId, setSelectedCatId] = useState("all");

  const filteredCategories = selectedCatId === "all"
    ? productCategories
    : productCategories.filter(c => c.id === selectedCatId);

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Page Hero */}
      <section className="mft-section mft-bg-navy" style={{ paddingBottom: "70px" }}>
        <div className="mft-container" style={{ textAlign: "center" }}>
          <div className="mft-breadcrumbs" style={{ justifyContent: "center", color: "rgba(255, 255, 255, 0.6)" }}>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("home")}>Home</span>
            <span>/</span>
            <span style={{ color: "var(--mft-cyan)" }}>Products</span>
          </div>

          <span className="mft-badge mft-badge-navy">
            <Zap size={14} /> Turnkey & White-Label Enterprise Solutions
          </span>

          <h1 style={{ fontSize: "3.5rem", color: "#FFFFFF", marginBottom: "18px" }}>
            Production-Ready Product Engines
          </h1>

          <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.75)", maxWidth: "780px", margin: "0 auto 36px auto", lineHeight: 1.7 }}>
            Accelerate your product launch by up to 70%. Pre-built, customizable, and scalable applications engineered with full source code ownership and zero monthly seat penalties.
          </p>

          <button 
            className="mft-btn mft-btn-primary"
            onClick={onOpenEnquiry}
          >
            <Sparkles size={16} />
            <span>Request a Live Demo</span>
          </button>
        </div>
      </section>

      {/* Category Tabs */}
      <div style={{ background: "#FFFFFF", borderBottom: "1px solid var(--mft-border-light)", position: "sticky", top: "var(--nav-height)", zIndex: 100 }}>
        <div className="mft-container" style={{ display: "flex", gap: "10px", overflowX: "auto", padding: "14px 24px" }}>
          <button
            className={`mft-tab-btn ${selectedCatId === "all" ? "active" : ""}`}
            onClick={() => setSelectedCatId("all")}
          >
            All Products ({productCategories.reduce((acc, c) => acc + c.products.length, 0)})
          </button>
          {productCategories.map((pCat) => (
            <button
              key={pCat.id}
              className={`mft-tab-btn ${selectedCatId === pCat.id ? "active" : ""}`}
              onClick={() => setSelectedCatId(pCat.id)}
            >
              {pCat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Product Categories & Cards */}
      <section className="mft-section mft-bg-light">
        <div className="mft-container">
          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            {filteredCategories.map((cat) => (
              <div key={cat.id} id={cat.id}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                  <div className="mft-icon-box" style={{ margin: 0 }}>
                    {categoryIconMap[cat.icon]}
                  </div>
                  <div>
                    <h2 style={{ fontSize: "1.85rem", color: "var(--mft-navy)" }}>{cat.title}</h2>
                    <p style={{ fontSize: "0.95rem", color: "var(--mft-text-gray)", margin: 0 }}>{cat.tagline}</p>
                  </div>
                </div>

                <div className="mft-grid-2">
                  {cat.products.map((prod) => (
                    <div 
                      key={prod.id} 
                      className="mft-card"
                      style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "32px" }}
                    >
                      <div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                          <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "3px 10px", borderRadius: "10px", background: "var(--mft-blue-subtle)", color: "var(--mft-blue)" }}>
                            {prod.badge}
                          </span>
                          <span style={{ fontSize: "0.8125rem", color: "var(--mft-text-gray)" }}>Turnkey Core</span>
                        </div>

                        <h3 style={{ fontSize: "1.45rem", color: "var(--mft-navy)", marginBottom: "10px" }}>
                          {prod.title}
                        </h3>

                        <p style={{ fontSize: "0.9375rem", color: "var(--mft-text-gray)", lineHeight: 1.6, marginBottom: "20px" }}>
                          {prod.shortDesc}
                        </p>

                        <div style={{ marginBottom: "24px" }}>
                          <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--mft-navy)", marginBottom: "8px" }}>
                            Included Architecture & Features:
                          </div>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                            {prod.features.slice(0, 4).map((f, i) => (
                              <span key={i} style={{ fontSize: "0.75rem", padding: "4px 10px", background: "var(--mft-bg-light)", borderRadius: "6px", border: "1px solid var(--mft-border-light)", color: "var(--mft-text-body)" }}>
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "18px", borderTop: "1px solid var(--mft-border-light)" }}>
                        <button 
                          className="mft-btn mft-btn-primary"
                          style={{ padding: "8px 20px", fontSize: "0.875rem" }}
                          onClick={() => navigate(`products/${cat.id}/${prod.id}`)}
                        >
                          <span>Explore Product Engine</span>
                          <ArrowRight size={14} />
                        </button>
                        
                        <button 
                          className="mft-btn-link"
                          onClick={onOpenEnquiry}
                          style={{ fontSize: "0.875rem" }}
                        >
                          Request Demo
                        </button>
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
