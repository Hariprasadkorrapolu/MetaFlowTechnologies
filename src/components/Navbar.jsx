// Navbar.jsx - Fixed Enterprise Navigation with Services and Products Mega Menus
import React, { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronDown, ArrowRight, Sparkles, Code2, Cloud,
  BrainCircuit, Layers, Palette, TrendingUp, ShoppingCart,
  CalendarCheck, Truck, GraduationCap, Activity, Building2, Zap
} from "lucide-react";
import { serviceCategories } from "../data/servicesData";
import { productCategories } from "../data/productsData";

const categoryIconMap = {
  Code2: <Code2 size={20} />,
  Cloud: <Cloud size={20} />,
  BrainCircuit: <BrainCircuit size={20} />,
  Layers: <Layers size={20} />,
  Palette: <Palette size={20} />,
  TrendingUp: <TrendingUp size={20} />,
  ShoppingCart: <ShoppingCart size={20} />,
  CalendarCheck: <CalendarCheck size={20} />,
  Truck: <Truck size={20} />,
  GraduationCap: <GraduationCap size={20} />,
  Activity: <Activity size={20} />,
  Building2: <Building2 size={20} />
};

export default function Navbar({ currentRoute, navigate, onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState(null); // 'services' | 'products' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileActiveServiceCat, setMobileActiveServiceCat] = useState(null);
  const [mobileActiveProductCat, setMobileActiveProductCat] = useState(null);
  const [selectedServiceCat, setSelectedServiceCat] = useState(serviceCategories[0].id);
  const [selectedProductCat, setSelectedProductCat] = useState(productCategories[0].id);
  const megaMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mega menu on outside click or escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target) && !e.target.closest(".mft-nav-item")) {
        setActiveMega(null);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveMega(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNavClick = (route, e) => {
    if (e) e.preventDefault();
    setActiveMega(null);
    setMobileMenuOpen(false);
    navigate(route);
  };

  const handleServiceSelect = (categoryId, serviceId) => {
    setActiveMega(null);
    setMobileMenuOpen(false);
    navigate(`services/${categoryId}/${serviceId}`);
  };

  const handleProductSelect = (categoryId, productId) => {
    setActiveMega(null);
    setMobileMenuOpen(false);
    navigate(`products/${categoryId}/${productId}`);
  };

  const currentServiceCategory = serviceCategories.find(c => c.id === selectedServiceCat) || serviceCategories[0];
  const currentProductCategory = productCategories.find(c => c.id === selectedProductCat) || productCategories[0];

  return (
    <>
      <header className={`mft-header ${scrolled ? "scrolled" : ""}`}>
        <div className="mft-container mft-nav-wrap">
          {/* Logo */}
          <div
            className="mft-logo"
            onClick={(e) => handleNavClick("home", e)}
            role="button"
            tabIndex={0}
            aria-label="Metaflow Technologies Home"
          >
            <img
              src="/logo-horizontal.png"
              alt="Metaflow Technologies - The Complete Project Ecosystem"
              className="mft-nav-logo-img"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="mft-nav-links">
              <li className="mft-nav-item">
                <button
                  className={`mft-nav-link ${currentRoute === "home" ? "active" : ""}`}
                  onClick={(e) => handleNavClick("home", e)}
                >
                  Home
                </button>
              </li>

              {/* Services Mega Menu Trigger */}
              <li
                className="mft-nav-item"
                onMouseEnter={() => setActiveMega("services")}
              >
                <button
                  className={`mft-nav-link ${currentRoute.startsWith("services") ? "active" : ""}`}
                  onClick={() => setActiveMega(activeMega === "services" ? null : "services")}
                  aria-expanded={activeMega === "services"}
                >
                  Services
                  <ChevronDown size={15} style={{ transform: activeMega === "services" ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </button>
              </li>

              {/* Products Mega Menu Trigger */}
              <li
                className="mft-nav-item"
                onMouseEnter={() => setActiveMega("products")}
              >
                <button
                  className={`mft-nav-link ${currentRoute.startsWith("products") ? "active" : ""}`}
                  onClick={() => setActiveMega(activeMega === "products" ? null : "products")}
                  aria-expanded={activeMega === "products"}
                >
                  Products
                  <ChevronDown size={15} style={{ transform: activeMega === "products" ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </button>
              </li>

              <li className="mft-nav-item">
                <button
                  className={`mft-nav-link ${currentRoute.startsWith("portfolio") ? "active" : ""}`}
                  onClick={(e) => handleNavClick("portfolio", e)}
                >
                  Portfolio
                </button>
              </li>

              <li className="mft-nav-item">
                <button
                  className={`mft-nav-link ${currentRoute.startsWith("careers") ? "active" : ""}`}
                  onClick={(e) => handleNavClick("careers", e)}
                >
                  Careers
                </button>
              </li>

              <li className="mft-nav-item">
                <button
                  className={`mft-nav-link ${currentRoute === "contact" ? "active" : ""}`}
                  onClick={(e) => handleNavClick("contact", e)}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>

          {/* Nav Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              className="mft-btn mft-btn-primary mft-header-cta"
              onClick={onOpenEnquiry}
              id="cta-start-project-nav"
            >
              <Sparkles size={16} />
              <span>Start a Project</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              className="mft-mobile-toggle"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          SERVICES MEGA MENU (Desktop)
          ========================================================================= */}
      <div
        ref={activeMega === "services" ? megaMenuRef : null}
        className={`mft-mega-menu ${activeMega === "services" ? "open" : ""}`}
        onMouseLeave={() => setActiveMega(null)}
      >
        <div className="mft-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "20px", marginBottom: "24px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mft-cyan)", fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                <Zap size={14} /> Full Enterprise Service Matrix
              </div>
              <h3 style={{ fontSize: "1.5rem", color: "#FFFFFF", marginTop: "4px" }}>
                Comprehensive Engineering & Cloud Capabilities
              </h3>
            </div>
            <button
              className="mft-btn mft-btn-glass"
              style={{ fontSize: "0.875rem", padding: "8px 18px" }}
              onClick={(e) => handleNavClick("services", e)}
            >
              <span>Explore All Services</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "36px" }}>
            {/* Left Category Selector */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", borderRight: "1px solid rgba(255, 255, 255, 0.1)", paddingRight: "20px" }}>
              {serviceCategories.map((cat) => (
                <div
                  key={cat.id}
                  onMouseEnter={() => setSelectedServiceCat(cat.id)}
                  onClick={() => setSelectedServiceCat(cat.id)}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    background: selectedServiceCat === cat.id ? "rgba(0, 71, 239, 0.3)" : "transparent",
                    border: selectedServiceCat === cat.id ? "1px solid rgba(0, 210, 255, 0.4)" : "1px solid transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.2s"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: selectedServiceCat === cat.id ? "var(--mft-cyan)" : "var(--mft-text-light)" }}>
                      {categoryIconMap[cat.icon]}
                    </span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: selectedServiceCat === cat.id ? "#FFFFFF" : "var(--mft-text-light)" }}>
                        {cat.title}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.45)" }}>
                        {cat.subServices.length} Sub-Services
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={14} style={{ color: selectedServiceCat === cat.id ? "var(--mft-cyan)" : "transparent" }} />
                </div>
              ))}
            </div>

            {/* Right Sub-Services Grid */}
            <div>
              <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span style={{ color: "var(--mft-cyan)" }}>{categoryIconMap[currentServiceCategory.icon]}</span>
                  <h4 style={{ fontSize: "1.2rem", color: "#FFFFFF", margin: 0 }}>{currentServiceCategory.title}</h4>
                  <span style={{ fontSize: "0.75rem", padding: "3px 10px", borderRadius: "12px", background: "rgba(0, 71, 239, 0.4)", color: "#99C2FF" }}>
                    {currentServiceCategory.badge}
                  </span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.65)", margin: 0, maxWidth: "650px" }}>
                  {currentServiceCategory.tagline}
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
                {currentServiceCategory.subServices.map((sub) => (
                  <div
                    key={sub.id}
                    onClick={() => handleServiceSelect(currentServiceCategory.id, sub.id)}
                    style={{
                      padding: "14px",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(0, 71, 239, 0.25)";
                      e.currentTarget.style.borderColor = "var(--mft-cyan)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                      <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#FFFFFF" }}>{sub.title}</span>
                      <span style={{ fontSize: "0.6875rem", padding: "2px 6px", borderRadius: "4px", background: "rgba(0, 210, 255, 0.15)", color: "var(--mft-cyan)" }}>
                        {sub.badge}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.55)", lineHeight: 1.4 }}>
                      {sub.shortDesc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PRODUCTS MEGA MENU (Desktop)
          ========================================================================= */}
      <div
        ref={activeMega === "products" ? megaMenuRef : null}
        className={`mft-mega-menu ${activeMega === "products" ? "open" : ""}`}
        onMouseLeave={() => setActiveMega(null)}
      >
        <div className="mft-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "20px", marginBottom: "24px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mft-cyan)", fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                <Sparkles size={14} /> Modular Product Engines
              </div>
              <h3 style={{ fontSize: "1.5rem", color: "#FFFFFF", marginTop: "4px" }}>
                Turnkey & White-Label Enterprise Solutions
              </h3>
            </div>
            <button
              className="mft-btn mft-btn-glass"
              style={{ fontSize: "0.875rem", padding: "8px 18px" }}
              onClick={(e) => handleNavClick("products", e)}
            >
              <span>Explore All Products</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "36px" }}>
            {/* Left Product Category Selector */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", borderRight: "1px solid rgba(255, 255, 255, 0.1)", paddingRight: "20px" }}>
              {productCategories.map((pCat) => (
                <div
                  key={pCat.id}
                  onMouseEnter={() => setSelectedProductCat(pCat.id)}
                  onClick={() => setSelectedProductCat(pCat.id)}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    background: selectedProductCat === pCat.id ? "rgba(0, 71, 239, 0.3)" : "transparent",
                    border: selectedProductCat === pCat.id ? "1px solid rgba(0, 210, 255, 0.4)" : "1px solid transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.2s"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: selectedProductCat === pCat.id ? "var(--mft-cyan)" : "var(--mft-text-light)" }}>
                      {categoryIconMap[pCat.icon]}
                    </span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: selectedProductCat === pCat.id ? "#FFFFFF" : "var(--mft-text-light)" }}>
                        {pCat.title}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.45)" }}>
                        {pCat.products.length} Solutions Ready
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={14} style={{ color: selectedProductCat === pCat.id ? "var(--mft-cyan)" : "transparent" }} />
                </div>
              ))}
            </div>

            {/* Right Products List */}
            <div>
              <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span style={{ color: "var(--mft-cyan)" }}>{categoryIconMap[currentProductCategory.icon]}</span>
                  <h4 style={{ fontSize: "1.2rem", color: "#FFFFFF", margin: 0 }}>{currentProductCategory.title}</h4>
                </div>
                <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.65)", margin: 0, maxWidth: "650px" }}>
                  {currentProductCategory.tagline}
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
                {currentProductCategory.products.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => handleProductSelect(currentProductCategory.id, prod.id)}
                    style={{
                      padding: "18px",
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(0, 71, 239, 0.25)";
                      e.currentTarget.style.borderColor = "var(--mft-cyan)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                      <span style={{ fontSize: "1rem", fontWeight: 700, color: "#FFFFFF" }}>{prod.title}</span>
                      <span style={{ fontSize: "0.6875rem", padding: "2px 8px", borderRadius: "10px", background: "rgba(0, 210, 255, 0.2)", color: "var(--mft-cyan)" }}>
                        {prod.badge}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.5, marginBottom: "10px" }}>
                      {prod.shortDesc}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--mft-cyan)", fontSize: "0.8125rem", fontWeight: 600 }}>
                      <span>View Specifications & Architecture</span>
                      <ArrowRight size={13} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE DRAWER NAVIGATION
          ========================================================================= */}
      <div className={`mft-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* Mobile Drawer Header with Logo & Close */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.12)", marginBottom: "6px" }}>
            <div 
              style={{ 
                background: "#FFFFFF", 
                padding: "6px 12px", 
                borderRadius: "8px", 
                cursor: "pointer" 
              }}
              onClick={(e) => handleNavClick("home", e)}
            >
              <img 
                src="/logo-horizontal.png" 
                alt="Metaflow Technologies" 
                style={{ height: "30px", width: "auto", display: "block" }} 
              />
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: "#FFFFFF", padding: "8px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Home */}
          <button 
            style={{ textAlign: "left", fontSize: "1.0625rem", fontWeight: 700, color: currentRoute === "home" ? "var(--mft-cyan)" : "#FFFFFF", padding: "12px 6px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}
            onClick={(e) => handleNavClick("home", e)}
          >
            <span>Home</span>
            <ArrowRight size={15} style={{ opacity: currentRoute === "home" ? 1 : 0.4 }} />
          </button>

          {/* Services Accordion */}
          <div>
            <button 
              style={{ width: "100%", textAlign: "left", fontSize: "1.0625rem", fontWeight: 700, color: currentRoute.startsWith("services") ? "var(--mft-cyan)" : "#FFFFFF", padding: "12px 6px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}
              onClick={() => setMobileServicesOpen(prev => !prev)}
            >
              <span>Services</span>
              <ChevronDown size={16} style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>

            {mobileServicesOpen && (
              <div style={{ background: "rgba(0, 0, 0, 0.25)", borderRadius: "10px", padding: "8px", margin: "6px 0 10px 0", display: "flex", flexDirection: "column", gap: "6px" }}>
                <button
                  style={{ textAlign: "left", padding: "8px 10px", fontSize: "0.875rem", fontWeight: 700, color: "var(--mft-cyan)", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  onClick={(e) => handleNavClick("services", e)}
                >
                  <span>Explore All Services</span>
                  <ArrowRight size={13} />
                </button>

                {serviceCategories.map((cat) => (
                  <div key={cat.id} style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)", paddingTop: "4px" }}>
                    <button
                      style={{ width: "100%", textAlign: "left", padding: "8px 10px", fontSize: "0.9375rem", fontWeight: 600, color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                      onClick={() => setMobileActiveServiceCat(mobileActiveServiceCat === cat.id ? null : cat.id)}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "var(--mft-cyan)" }}>{categoryIconMap[cat.icon]}</span>
                        <span>{cat.title}</span>
                      </div>
                      <ChevronDown size={14} style={{ transform: mobileActiveServiceCat === cat.id ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                    </button>

                    {mobileActiveServiceCat === cat.id && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px", paddingLeft: "32px", paddingBottom: "6px" }}>
                        {cat.subServices.map((sub) => (
                          <button
                            key={sub.id}
                            style={{ textAlign: "left", padding: "8px 0", fontSize: "0.8125rem", color: "rgba(255, 255, 255, 0.75)", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                            onClick={() => handleServiceSelect(cat.id, sub.id)}
                          >
                            <span>{sub.title}</span>
                            <ArrowRight size={12} style={{ opacity: 0.6 }} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Products Accordion */}
          <div>
            <button 
              style={{ width: "100%", textAlign: "left", fontSize: "1.0625rem", fontWeight: 700, color: currentRoute.startsWith("products") ? "var(--mft-cyan)" : "#FFFFFF", padding: "12px 6px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}
              onClick={() => setMobileProductsOpen(prev => !prev)}
            >
              <span>Products</span>
              <ChevronDown size={16} style={{ transform: mobileProductsOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>

            {mobileProductsOpen && (
              <div style={{ background: "rgba(0, 0, 0, 0.25)", borderRadius: "10px", padding: "8px", margin: "6px 0 10px 0", display: "flex", flexDirection: "column", gap: "6px" }}>
                <button
                  style={{ textAlign: "left", padding: "8px 10px", fontSize: "0.875rem", fontWeight: 700, color: "var(--mft-cyan)", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  onClick={(e) => handleNavClick("products", e)}
                >
                  <span>Explore All Products</span>
                  <ArrowRight size={13} />
                </button>

                {productCategories.map((pCat) => (
                  <div key={pCat.id} style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)", paddingTop: "4px" }}>
                    <button
                      style={{ width: "100%", textAlign: "left", padding: "8px 10px", fontSize: "0.9375rem", fontWeight: 600, color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                      onClick={() => setMobileActiveProductCat(mobileActiveProductCat === pCat.id ? null : pCat.id)}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "var(--mft-cyan)" }}>{categoryIconMap[pCat.icon]}</span>
                        <span>{pCat.title}</span>
                      </div>
                      <ChevronDown size={14} style={{ transform: mobileActiveProductCat === pCat.id ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                    </button>

                    {mobileActiveProductCat === pCat.id && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px", paddingLeft: "32px", paddingBottom: "6px" }}>
                        {pCat.products.map((prod) => (
                          <button
                            key={prod.id}
                            style={{ textAlign: "left", padding: "8px 0", fontSize: "0.8125rem", color: "rgba(255, 255, 255, 0.75)", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                            onClick={() => handleProductSelect(pCat.id, prod.id)}
                          >
                            <span>{prod.title}</span>
                            <ArrowRight size={12} style={{ opacity: 0.6 }} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Portfolio */}
          <button 
            style={{ textAlign: "left", fontSize: "1.0625rem", fontWeight: 700, color: currentRoute.startsWith("portfolio") ? "var(--mft-cyan)" : "#FFFFFF", padding: "12px 6px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}
            onClick={(e) => handleNavClick("portfolio", e)}
          >
            <span>Portfolio & Case Studies</span>
            <ArrowRight size={15} style={{ opacity: currentRoute.startsWith("portfolio") ? 1 : 0.4 }} />
          </button>

          {/* Careers */}
          <button 
            style={{ textAlign: "left", fontSize: "1.0625rem", fontWeight: 700, color: currentRoute.startsWith("careers") ? "var(--mft-cyan)" : "#FFFFFF", padding: "12px 6px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}
            onClick={(e) => handleNavClick("careers", e)}
          >
            <span>Careers</span>
            <ArrowRight size={15} style={{ opacity: currentRoute.startsWith("careers") ? 1 : 0.4 }} />
          </button>

          {/* Contact Us */}
          <button 
            style={{ textAlign: "left", fontSize: "1.0625rem", fontWeight: 700, color: currentRoute === "contact" ? "var(--mft-cyan)" : "#FFFFFF", padding: "12px 6px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}
            onClick={(e) => handleNavClick("contact", e)}
          >
            <span>Contact Us</span>
            <ArrowRight size={15} style={{ opacity: currentRoute === "contact" ? 1 : 0.4 }} />
          </button>

          {/* Mobile CTA */}
          <div style={{ marginTop: "18px", paddingTop: "6px" }}>
            <button 
              className="mft-btn mft-btn-primary" 
              style={{ width: "100%", justifyContent: "center", padding: "14px 20px" }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
            >
              <Sparkles size={16} />
              <span>Start a Project</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
