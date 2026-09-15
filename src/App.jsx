// App.jsx - Main Application Container & Dynamic Router for Metaflow Technologies
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PortfolioPage from "./pages/PortfolioPage";
import CaseStudyDetailPage from "./pages/CaseStudyDetailPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState("home");
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  // Sync route with browser hash / history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, "");
      if (hash) {
        setCurrentRoute(hash);
      } else {
        setCurrentRoute("home");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (route) => {
    window.location.hash = `/${route}`;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenEnquiry = (svcName) => {
    if (typeof svcName === "string" && svcName.length > 0) {
      setPreselectedService(svcName);
    } else {
      setPreselectedService("");
    }
    setEnquiryModalOpen(true);
  };

  // Route Resolver
  const renderRoute = () => {
    // 1. Service Detail: services/:categoryId/:serviceId
    if (currentRoute.startsWith("services/")) {
      const parts = currentRoute.split("/");
      if (parts.length >= 3) {
        return (
          <ServiceDetailPage 
            categoryId={parts[1]} 
            serviceId={parts[2]} 
            navigate={navigate} 
            onOpenEnquiry={() => handleOpenEnquiry(parts[2].replace(/-/g, " "))} 
          />
        );
      }
    }

    // 2. Product Detail: products/:categoryId/:productId
    if (currentRoute.startsWith("products/")) {
      const parts = currentRoute.split("/");
      if (parts.length >= 3) {
        return (
          <ProductDetailPage 
            categoryId={parts[1]} 
            productId={parts[2]} 
            navigate={navigate} 
            onOpenEnquiry={() => handleOpenEnquiry(parts[2].replace(/-/g, " "))} 
          />
        );
      }
    }

    // 3. Case Study Detail: portfolio/:slug
    if (currentRoute.startsWith("portfolio/")) {
      const parts = currentRoute.split("/");
      if (parts.length >= 2) {
        return (
          <CaseStudyDetailPage 
            slug={parts[1]} 
            navigate={navigate} 
            onOpenEnquiry={() => handleOpenEnquiry("Custom Enterprise Solution")} 
          />
        );
      }
    }

    // Standard Top-Level Routes
    switch (currentRoute) {
      case "services":
        return <ServicesPage navigate={navigate} onOpenEnquiry={() => handleOpenEnquiry()} />;
      case "products":
        return <ProductsPage navigate={navigate} onOpenEnquiry={() => handleOpenEnquiry()} />;
      case "portfolio":
        return <PortfolioPage navigate={navigate} onOpenEnquiry={() => handleOpenEnquiry()} />;
      case "careers":
        return <CareersPage navigate={navigate} />;
      case "contact":
        return <ContactPage navigate={navigate} />;
      case "home":
      default:
        return <HomePage navigate={navigate} onOpenEnquiry={() => handleOpenEnquiry()} />;
    }
  };

  return (
    <div className="mft-app">
      {/* Global Fixed Navbar with Mega Menus */}
      <Navbar 
        currentRoute={currentRoute} 
        navigate={navigate} 
        onOpenEnquiry={() => handleOpenEnquiry()} 
      />

      {/* Main Dynamic View */}
      <main id="main-content">
        {renderRoute()}
      </main>

      {/* Comprehensive 5-Column Enterprise Footer */}
      <Footer 
        navigate={navigate} 
        onOpenEnquiry={() => handleOpenEnquiry()} 
      />

      {/* Global Project Scoping & Estimation Modal */}
      <EnquiryModal 
        isOpen={enquiryModalOpen} 
        onClose={() => setEnquiryModalOpen(false)} 
        preselectedService={preselectedService} 
      />

      {/* Global Floating WhatsApp Click-to-Chat Button */}
      <WhatsAppButton />
    </div>
  );
}
