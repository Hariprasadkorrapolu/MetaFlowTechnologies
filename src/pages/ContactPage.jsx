import React, { useState } from "react";
import { 
  Mail, Phone, MapPin, Clock, Send, Sparkles, CheckCircle2, 
  ShieldCheck, Upload, Loader2, AlertCircle
} from "lucide-react";
import { LinkedinIcon, TwitterIcon, GithubIcon, YoutubeIcon, InstagramIcon } from "../components/SocialIcons";
import confetti from "canvas-confetti";
import { companyOverview } from "../data/companyData";
import { submitToWeb3Forms } from "../utils/web3forms";

export default function ContactPage({ navigate }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    subject: "New Enterprise Software Scoping",
    service: "Software Development",
    budget: "₹3,00,000 - ₹5,00,000",
    message: ""
  });

  const serviceOptions = [
    "Software Development",
    "Cloud & DevOps",
    "AI & Data Intelligence",
    "Salesforce Solutions",
    "Design & Experience (UI/UX)",
    "Digital Marketing Solutions",
    "Turnkey Product Engine Customization",
    "Other Enterprise Scoping"
  ];

  const budgetOptions = [
    "Under ₹1,00,000",
    "₹1,00,000 - ₹3,00,000",
    "₹3,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "₹10,00,000+"
  ];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // Submit to Web3Forms and route directly to hariprasadkorrapolu03@gmail.com
    const result = await submitToWeb3Forms({
      subject: `Metaflow Technologies – New Website Enquiry: ${formData.subject || formData.service}`,
      fromName: formData.fullName || "MFT Website Visitor",
      replyTo: formData.email,
      fields: {
        "Full Name": formData.fullName,
        "Email Address": formData.email,
        "Company Name": formData.company,
        "Phone Number": formData.phone,
        "Subject": formData.subject || "General Enterprise Enquiry",
        "Primary Service": formData.service,
        "Budget Range": formData.budget,
        "Message": formData.message,
      },
      attachment: selectedFile,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmittedData({ ...formData });
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // confetti fallback
      }

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        subject: "New Enterprise Software Scoping",
        service: "Software Development",
        budget: "₹3,00,000 - ₹5,00,000",
        message: ""
      });
      setFileName("");
      setSelectedFile(null);
    } else {
      setErrorMessage(result.message);
    }
  };

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Page Hero */}
      <section className="mft-section mft-bg-navy" style={{ paddingBottom: "70px" }}>
        <div className="mft-container" style={{ textAlign: "center" }}>
          <div className="mft-breadcrumbs" style={{ justifyContent: "center", color: "rgba(255, 255, 255, 0.6)" }}>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("home")}>Home</span>
            <span>/</span>
            <span style={{ color: "var(--mft-cyan)" }}>Contact Us</span>
          </div>

          <span className="mft-badge mft-badge-navy">
            <Sparkles size={14} /> Start the Conversation
          </span>

          <h1 style={{ fontSize: "3.5rem", color: "#FFFFFF", marginBottom: "18px" }}>
            Let’s Build Something Exceptional
          </h1>

          <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.75)", maxWidth: "720px", margin: "0 auto", lineHeight: 1.7 }}>
            Connect with our engineering teams across Hyderabad and Vijayawada. We provide clear technical roadmaps, transparent pricing, and rapid sprint execution.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="mft-section mft-bg-light">
        <div className="mft-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "40px" }}>
              
              {/* Left Column: Company Information */}
              <div>
                <div className="mft-card" style={{ padding: "36px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <span className="mft-badge" style={{ marginBottom: "12px" }}>
                      Direct Communications
                    </span>

                    <div style={{ marginBottom: "20px" }}>
                      <img 
                        src="/logo-horizontal.png" 
                        alt="Metaflow Technologies - The Complete Project Ecosystem" 
                        style={{ height: "42px", width: "auto", display: "block" }} 
                      />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                      {/* Primary Branch: Hyderabad */}
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", background: "var(--mft-bg-light)", padding: "16px", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--mft-blue)" }}>
                        <div className="mft-icon-box" style={{ margin: 0, flexShrink: 0, width: "40px", height: "40px" }}>
                          <MapPin size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--mft-blue)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            Primary Branch
                          </div>
                          <div style={{ fontSize: "1rem", color: "var(--mft-navy)", fontWeight: 700 }}>
                            Hyderabad (Primary Branch)
                          </div>
                          <div style={{ fontSize: "0.875rem", color: "var(--mft-text-gray)", marginTop: "2px", lineHeight: 1.4 }}>
                            #301, Ridge Towers, Surya Nagar, Quthbullapur, Hyderabad-500037
                          </div>
                        </div>
                      </div>

                      {/* Onboarding Branch: Vijayawada */}
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", background: "var(--mft-bg-light)", padding: "16px", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--mft-cyan)" }}>
                        <div className="mft-icon-box" style={{ margin: 0, flexShrink: 0, width: "40px", height: "40px" }}>
                          <MapPin size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#0E7490", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            Onboarding Branch
                          </div>
                          <div style={{ fontSize: "1rem", color: "var(--mft-navy)", fontWeight: 700 }}>
                            Vijayawada (Onboarding Branch)
                          </div>
                          <div style={{ fontSize: "0.875rem", color: "var(--mft-text-gray)", marginTop: "2px", lineHeight: 1.4 }}>
                            New Sanath Nagar, Vijayawada-520007
                          </div>
                        </div>
                      </div>

                      {/* Primary Contact Number */}
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                        <div className="mft-icon-box" style={{ margin: 0, flexShrink: 0, width: "40px", height: "40px" }}>
                          <Phone size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--mft-text-gray)", textTransform: "uppercase" }}>Primary Contact Number</div>
                          <div style={{ fontSize: "1rem", color: "var(--mft-navy)", fontWeight: 700 }}>
                            <a href="tel:7732080078" style={{ color: "var(--mft-blue)" }}>+91 7732080078</a>
                          </div>
                          <div style={{ fontSize: "0.75rem", color: "var(--mft-text-gray)" }}>
                            Direct Phone Line & Strategy Consultations
                          </div>
                        </div>
                      </div>

                      {/* WhatsApp Only Number */}
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                        <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-md)", background: "rgba(37, 211, 102, 0.12)", color: "#128C7E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <span style={{ fontSize: "1.2rem" }}>💬</span>
                        </div>
                        <div>
                          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#047857", textTransform: "uppercase" }}>WhatsApp Only Number</div>
                          <div style={{ fontSize: "1rem", fontWeight: 700 }}>
                            <a href={companyOverview.contact.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#059669" }}>
                              +91 9318158444 [WhatsApp Only]
                            </a>
                          </div>
                          <div style={{ marginTop: "4px" }}>
                            <a 
                              href={companyOverview.contact.whatsappLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="mft-btn"
                              style={{ padding: "4px 12px", fontSize: "0.75rem", background: "#25D366", color: "#FFFFFF", borderRadius: "6px", display: "inline-flex", gap: "4px" }}
                            >
                              <span>Click to Chat on WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Email Address */}
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                        <div className="mft-icon-box" style={{ margin: 0, flexShrink: 0, width: "40px", height: "40px" }}>
                          <Mail size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--mft-text-gray)", textTransform: "uppercase" }}>Official Email Address</div>
                          <div style={{ fontSize: "1rem", color: "var(--mft-navy)", fontWeight: 700 }}>
                            <a href="mailto:info@metaflowtechnologies.in" style={{ color: "var(--mft-navy)" }}>info@metaflowtechnologies.in</a>
                          </div>
                        </div>
                      </div>

                      {/* Working Hours */}
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                        <div className="mft-icon-box" style={{ margin: 0, flexShrink: 0, width: "40px", height: "40px" }}>
                          <Clock size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--mft-text-gray)", textTransform: "uppercase" }}>Working Hours</div>
                          <div style={{ fontSize: "0.9375rem", color: "var(--mft-navy)", fontWeight: 600 }}>
                            {companyOverview.contact.workingHours}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Handles */}
                  <div style={{ paddingTop: "24px", borderTop: "1px solid var(--mft-border-light)", marginTop: "28px" }}>
                    <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--mft-text-gray)", textTransform: "uppercase", marginBottom: "12px" }}>
                      Official Social Channels
                    </div>
                    <div style={{ display: "flex", gap: "12px" }}>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--mft-bg-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mft-navy)" }}>
                        <LinkedinIcon size={18} />
                      </a>
                      <a href="https://x.com" target="_blank" rel="noreferrer" style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--mft-bg-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mft-navy)" }}>
                        <TwitterIcon size={18} />
                      </a>
                      <a href="https://github.com" target="_blank" rel="noreferrer" style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--mft-bg-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mft-navy)" }}>
                        <GithubIcon size={18} />
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--mft-bg-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mft-navy)" }}>
                        <YoutubeIcon size={18} />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--mft-bg-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mft-navy)" }}>
                        <InstagramIcon size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Contact Form */}
              <div>
                <div className="mft-card" style={{ padding: "40px" }}>
                  {submitted ? (
                    <div style={{ textAlign: "center", padding: "40px 10px" }}>
                      <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(0, 71, 239, 0.1)", color: "var(--mft-blue)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px auto" }}>
                        <CheckCircle2 size={40} />
                      </div>
                      <span className="mft-badge">Enquiry Submitted</span>
                      <h3 style={{ fontSize: "1.85rem", color: "var(--mft-navy)", marginBottom: "12px" }}>
                        Enquiry Received
                      </h3>
                      <p style={{ color: "var(--mft-text-gray)", lineHeight: 1.7, maxWidth: "540px", margin: "0 auto 24px auto", fontSize: "1.0625rem" }}>
                        Thank you for contacting Metaflow Technologies. We have received your enquiry and our team will get back to you shortly.
                      </p>
                      
                      {submittedData && (
                        <div style={{ background: "var(--mft-bg-light)", borderRadius: "var(--radius-md)", padding: "20px", marginBottom: "20px", textAlign: "left" }}>
                          <div style={{ fontWeight: 700, color: "var(--mft-navy)", marginBottom: "4px" }}>Enquiry Summary:</div>
                          <div style={{ fontSize: "0.9375rem", color: "var(--mft-text-body)" }}>
                            <strong>Service:</strong> {submittedData.service} • <strong>Budget:</strong> {submittedData.budget}
                          </div>
                          <div style={{ fontSize: "0.875rem", color: "var(--mft-text-gray)", marginTop: "4px" }}>
                            Confirmation logged for <strong>{submittedData.email}</strong>.
                          </div>
                        </div>
                      )}

                      <div style={{ background: "rgba(0, 71, 239, 0.05)", border: "1px solid rgba(0, 71, 239, 0.15)", borderRadius: "var(--radius-md)", padding: "14px 18px", marginBottom: "28px", textAlign: "left", fontSize: "0.8125rem", color: "var(--mft-navy)" }}>
                        <div><strong>Hyderabad (Primary Branch):</strong> #301, Ridge Towers, Surya Nagar, Quthbullapur, Hyderabad-500037</div>
                        <div style={{ marginTop: "4px" }}><strong>Vijayawada (Onboarding Branch):</strong> New Sanath Nagar, Vijayawada-520007</div>
                        <div style={{ marginTop: "6px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                          <span><strong>Primary Phone:</strong> +91 7732080078</span>
                          <span><strong>WhatsApp Only:</strong> +91 9318158444</span>
                          <span><strong>Email:</strong> info@metaflowtechnologies.in</span>
                        </div>
                      </div>
                      <button 
                        className="mft-btn mft-btn-primary"
                        onClick={() => {
                          setSubmitted(false);
                          setSubmittedData(null);
                          setErrorMessage("");
                        }}
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h2 style={{ fontSize: "1.85rem", color: "var(--mft-navy)", marginBottom: "6px" }}>
                        Send Project Enquiry
                      </h2>
                      <p style={{ fontSize: "0.9375rem", color: "var(--mft-text-gray)", marginBottom: "24px" }}>
                        Fill out the details below and an MFT Systems Architect will contact you directly.
                      </p>

                      {errorMessage && (
                        <div style={{ 
                          display: "flex", 
                          alignItems: "center", 
                          gap: "10px", 
                          background: "rgba(239, 68, 68, 0.08)", 
                          border: "1px solid rgba(239, 68, 68, 0.25)", 
                          color: "#DC2626", 
                          padding: "12px 16px", 
                          borderRadius: "var(--radius-md)", 
                          marginBottom: "20px", 
                          fontSize: "0.875rem" 
                        }}>
                          <AlertCircle size={18} style={{ flexShrink: 0 }} />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      <form onSubmit={handleSubmit}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                          <div className="mft-form-group">
                            <label className="mft-label">Full Name *</label>
                            <input 
                              type="text" 
                              required 
                              placeholder="Alex Mercer"
                              className="mft-input"
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            />
                          </div>
                          <div className="mft-form-group">
                            <label className="mft-label">Business Email *</label>
                            <input 
                              type="email" 
                              required 
                              placeholder="alex@enterprise.com"
                              className="mft-input"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                          <div className="mft-form-group">
                            <label className="mft-label">Company Name *</label>
                            <input 
                              type="text" 
                              required 
                              placeholder="Acme Global Inc."
                              className="mft-input"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                          </div>
                          <div className="mft-form-group">
                            <label className="mft-label">Phone Number</label>
                            <input 
                              type="tel" 
                              placeholder="+91 98765 43210"
                              className="mft-input"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                          <div className="mft-form-group">
                            <label className="mft-label">Primary Service *</label>
                            <select 
                              className="mft-select"
                              value={formData.service}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            >
                              {serviceOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          </div>
                          <div className="mft-form-group">
                            <label className="mft-label">Budget Range</label>
                            <select 
                              className="mft-select"
                              value={formData.budget}
                              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            >
                              {budgetOptions.map((b) => (
                                <option key={b} value={b}>{b}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="mft-form-group">
                          <label className="mft-label">Subject</label>
                          <input 
                            type="text" 
                            className="mft-input"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          />
                        </div>

                        <div className="mft-form-group">
                          <label className="mft-label">Message / Project Requirements *</label>
                          <textarea 
                            required
                            rows={4}
                            placeholder="Provide details about your project goals, technical constraints, current systems, and desired launch timeline..."
                            className="mft-textarea"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          />
                        </div>

                        {/* Optional Attachment */}
                        <div className="mft-form-group">
                          <label className="mft-label">Attachment (Optional: RFP, Wireframe, or Spec Document)</label>
                          <div style={{ border: "2px dashed var(--mft-border-light)", borderRadius: "var(--radius-md)", padding: "16px", textAlign: "center", background: "var(--mft-bg-light)", position: "relative", cursor: "pointer" }}>
                            <input 
                              type="file" 
                              accept=".pdf,.doc,.docx,.png,.jpg,.zip"
                              onChange={handleFileChange}
                              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer" }}
                            />
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                              <Upload size={16} style={{ color: "var(--mft-blue)" }} />
                              <span style={{ fontSize: "0.875rem", color: "var(--mft-navy)", fontWeight: 600 }}>
                                {fileName ? `Selected file: ${fileName}` : "Click to attach document or drag and drop"}
                              </span>
                            </div>
                          </div>
                        </div>

                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="mft-btn mft-btn-primary" 
                          style={{ 
                            width: "100%", 
                            justifyContent: "center", 
                            padding: "14px", 
                            fontSize: "1rem",
                            opacity: isSubmitting ? 0.7 : 1,
                            cursor: isSubmitting ? "not-allowed" : "pointer"
                          }}
                          id="submit-contact-enquiry"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
                              <span>Submitting Enquiry...</span>
                            </>
                          ) : (
                            <>
                              <Send size={16} />
                              <span>Send Enquiry</span>
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
