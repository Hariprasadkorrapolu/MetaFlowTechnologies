// Footer.jsx - Enterprise 5-Column Navigation Footer
import { 
  Mail, Phone, MapPin, ArrowRight, ShieldCheck 
} from "lucide-react";
import { LinkedinIcon, TwitterIcon, GithubIcon, YoutubeIcon, InstagramIcon } from "./SocialIcons";
import { companyOverview } from "../data/companyData";

export default function Footer({ navigate, onOpenEnquiry }) {
  const handleNav = (route, e) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(route);
  };

  return (
    <footer className="mft-footer">
      <div className="mft-container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
          
          {/* Column 1: Brand & Identity */}
          <div style={{ gridColumn: "span 1", minWidth: "260px" }}>
            <div 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                marginBottom: "20px", 
                cursor: "pointer",
                background: "#FFFFFF",
                padding: "8px 16px",
                borderRadius: "10px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.3)"
              }} 
              onClick={(e) => handleNav("home", e)}
              role="button"
              tabIndex={0}
              aria-label="Metaflow Technologies Home"
            >
              <img 
                src="/logo-horizontal.png" 
                alt="Metaflow Technologies - The Complete Project Ecosystem" 
                style={{ height: "38px", width: "auto", display: "block" }} 
              />
            </div>

            <div style={{ fontSize: "0.8125rem", color: "var(--mft-cyan)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
              {companyOverview.tagline}
            </div>

            <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.65)", lineHeight: 1.6, marginBottom: "20px" }}>
              Building intelligent digital solutions for a smarter future. Metaflow Technologies delivers software, AI, cloud, data, design, and digital solutions that help businesses transform ideas into scalable digital products.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.8125rem", color: "rgba(255, 255, 255, 0.6)" }}>
              <ShieldCheck size={16} style={{ color: "var(--mft-cyan)" }} />
              <span>SOC2 Type II & HIPAA Certified Partner</span>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4>Company</h4>
            <ul className="mft-footer-links">
              <li><a href="#home" onClick={(e) => handleNav("home", e)}>Home</a></li>
              <li><a href="#vision" onClick={(e) => handleNav("home", e)}>About & Vision</a></li>
              <li><a href="#leadership" onClick={(e) => handleNav("home", e)}>Leadership</a></li>
              <li><a href="#journey" onClick={(e) => handleNav("home", e)}>Our Journey</a></li>
              <li><a href="#careers" onClick={(e) => handleNav("careers", e)}>Careers & Culture</a></li>
              <li><a href="#contact" onClick={(e) => handleNav("contact", e)}>Contact Global Offices</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4>Services</h4>
            <ul className="mft-footer-links">
              <li><a href="#software-dev" onClick={(e) => handleNav("services/software-development/custom-software-development", e)}>Software Development</a></li>
              <li><a href="#cloud-devops" onClick={(e) => handleNav("services/cloud-devops/cloud-services", e)}>Cloud & DevOps</a></li>
              <li><a href="#ai-data" onClick={(e) => handleNav("services/ai-data-intelligence/generative-ai", e)}>AI & Data Intelligence</a></li>
              <li><a href="#salesforce" onClick={(e) => handleNav("services/salesforce/salesforce-consulting", e)}>Salesforce Solutions</a></li>
              <li><a href="#design" onClick={(e) => handleNav("services/design-experience/ui-ux-design", e)}>Design & Experience</a></li>
              <li><a href="#marketing" onClick={(e) => handleNav("services/digital-marketing/digital-marketing", e)}>Digital Marketing</a></li>
            </ul>
          </div>

          {/* Column 4: Products */}
          <div>
            <h4>Products</h4>
            <ul className="mft-footer-links">
              <li><a href="#delivery" onClick={(e) => handleNav("products/delivery/food-delivery", e)}>On-Demand Delivery</a></li>
              <li><a href="#booking" onClick={(e) => handleNav("products/booking/appointment-booking", e)}>Booking & Reservation</a></li>
              <li><a href="#ecommerce" onClick={(e) => handleNav("products/ecommerce/online-shopping-app", e)}>E-Commerce Marketplace</a></li>
              <li><a href="#education" onClick={(e) => handleNav("products/education/learning-management-system", e)}>Education & LMS</a></li>
              <li><a href="#healthcare" onClick={(e) => handleNav("products/healthcare/telemedicine", e)}>Healthcare & Telehealth</a></li>
              <li><a href="#enterprise" onClick={(e) => handleNav("products/enterprise/custom-crm", e)}>Enterprise ERP & CRM</a></li>
            </ul>
          </div>

          {/* Column 5: Resources & Contact */}
          <div>
            <h4>Resources</h4>
            <ul className="mft-footer-links" style={{ marginBottom: "20px" }}>
              <li><a href="#portfolio" onClick={(e) => handleNav("portfolio", e)}>Client Case Studies</a></li>
              <li><a href="#insights" onClick={(e) => handleNav("home", e)}>Latest Insights & Whitepapers</a></li>
              <li><a href="#faqs" onClick={(e) => handleNav("home", e)}>Enterprise FAQs</a></li>
              <li><a href="#ecosystem" onClick={(e) => handleNav("home", e)}>Technology Ecosystem</a></li>
            </ul>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.8125rem", color: "rgba(255, 255, 255, 0.7)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <MapPin size={14} style={{ color: "var(--mft-cyan)", marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#FFFFFF" }}>Hyderabad (Primary Branch):</strong>
                  <div style={{ color: "rgba(255,255,255,0.65)" }}>#301, Ridge Towers, Surya Nagar, Quthbullapur, Hyderabad-500037</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <MapPin size={14} style={{ color: "var(--mft-cyan)", marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#FFFFFF" }}>Vijayawada (Onboarding Branch):</strong>
                  <div style={{ color: "rgba(255,255,255,0.65)" }}>New Sanath Nagar, Vijayawada-520007</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Phone size={14} style={{ color: "var(--mft-cyan)" }} />
                <span><strong>Primary Phone:</strong> <a href="tel:7732080078" style={{ color: "#FFFFFF" }}>+91 7732080078</a></span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#25D366" }} />
                <span><strong>WhatsApp Only:</strong> <a href={companyOverview.contact.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontWeight: 700 }}>+91 9318158444</a></span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Mail size={14} style={{ color: "var(--mft-cyan)" }} />
                <span><strong>Email:</strong> <a href="mailto:info@metaflowtechnologies.in" style={{ color: "#FFFFFF" }}>info@metaflowtechnologies.in</a></span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mft-footer-bottom">
          <div>
            © {new Date().getFullYear()} Metaflow Technologies. All Rights Reserved.
          </div>

          <div style={{ display: "flex", gap: "20px", fontSize: "0.875rem" }}>
            <a href="#privacy" style={{ color: "var(--mft-text-light)" }}>Privacy Policy</a>
            <a href="#terms" style={{ color: "var(--mft-text-light)" }}>Terms & Conditions</a>
            <a href="#cookies" style={{ color: "var(--mft-text-light)" }}>Cookie Policy</a>
            <a href="#security" style={{ color: "var(--mft-text-light)" }}>Security Overview</a>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "14px" }}>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}
              aria-label="X Twitter"
            >
              <TwitterIcon size={16} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}
              aria-label="YouTube"
            >
              <YoutubeIcon size={16} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
