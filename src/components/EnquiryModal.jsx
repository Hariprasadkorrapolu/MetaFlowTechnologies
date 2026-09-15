// EnquiryModal.jsx - Interactive Project Intake & Estimation Hub
import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, ArrowRight, Upload, Building, Mail, Phone, User, Calendar, Loader2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { submitToWeb3Forms } from "../utils/web3forms";

export default function EnquiryModal({ isOpen, onClose, preselectedService }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    services: preselectedService ? [preselectedService] : ["Software Development"],
    budget: "₹3,00,000 - ₹5,00,000",
    timeline: "1 - 3 Months",
    fullName: "",
    email: "",
    company: "",
    phone: "",
    projectScope: ""
  });

  if (!isOpen) return null;

  const availableServices = [
    "Software Development",
    "Cloud & DevOps",
    "AI & Data Intelligence",
    "Salesforce CRM",
    "UI/UX Design Systems",
    "Digital Marketing",
    "Turnkey Product Customization"
  ];

  const budgetTiers = [
    "Under ₹1,00,000",
    "₹1,00,000 - ₹3,00,000",
    "₹3,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "₹10,00,000+"
  ];

  const timelines = [
    "Immediate (< 1 Month)",
    "1 - 3 Months",
    "3 - 6 Months",
    "Long-Term Enterprise Partnership"
  ];

  const toggleService = (svc) => {
    if (formData.services.includes(svc)) {
      setFormData({ ...formData, services: formData.services.filter(s => s !== svc) });
    } else {
      setFormData({ ...formData, services: [...formData.services, svc] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const result = await submitToWeb3Forms({
      subject: `Metaflow Technologies – New Project Scoping Enquiry: ${formData.services.join(", ")}`,
      fromName: formData.fullName || "MFT Scoping Lead",
      replyTo: formData.email,
      fields: {
        "Full Name": formData.fullName,
        "Email Address": formData.email,
        "Company Name": formData.company,
        "Phone Number": formData.phone,
        "Capabilities Needed": formData.services.join(", "),
        "Estimated Budget": formData.budget,
        "Expected Timeline": formData.timeline,
        "Project Scope & Goals": formData.projectScope,
      },
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0047EF", "#00D2FF", "#01102F"]
        });
      } catch {
        // confetti fallback
      }
    } else {
      setErrorMessage(result.message);
    }
  };

  const resetAndClose = () => {
    if (submitted) {
      setFormData({
        services: ["Software Development"],
        budget: "₹3,00,000 - ₹5,00,000",
        timeline: "1 - 3 Months",
        fullName: "",
        email: "",
        company: "",
        phone: "",
        projectScope: ""
      });
    }
    setSubmitted(false);
    setErrorMessage("");
    setStep(1);
    onClose();
  };

  return (
    <div className="mft-modal-overlay" onClick={resetAndClose}>
      <div className="mft-modal-box" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={resetAndClose}
          style={{ position: "absolute", top: "20px", right: "20px", color: "var(--mft-text-gray)", padding: "8px", borderRadius: "50%" }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "30px 10px" }}>
            <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(0, 71, 239, 0.1)", color: "var(--mft-blue)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px auto" }}>
              <CheckCircle2 size={40} />
            </div>
            <span className="mft-badge">Enquiry Received</span>
            <h3 style={{ fontSize: "1.75rem", marginBottom: "12px" }}>
              Enquiry Received
            </h3>
            <p style={{ color: "var(--mft-text-gray)", lineHeight: 1.7, maxWidth: "540px", margin: "0 auto 24px auto" }}>
              Thank you for contacting Metaflow Technologies. We have received your enquiry and our team will get back to you shortly.
            </p>
            <div style={{ background: "var(--mft-bg-light)", borderRadius: "var(--radius-md)", padding: "16px", marginBottom: "20px", textAlign: "left", fontSize: "0.875rem" }}>
              <div style={{ fontWeight: 700, color: "var(--mft-navy)", marginBottom: "4px" }}>Selected Solutions:</div>
              <div style={{ color: "var(--mft-blue)", fontWeight: 600 }}>{formData.services.join(", ")}</div>
              <div style={{ marginTop: "8px", color: "var(--mft-text-gray)" }}>Target Budget: {formData.budget} • Timeline: {formData.timeline}</div>
            </div>

            <div style={{ background: "rgba(0, 71, 239, 0.05)", border: "1px solid rgba(0, 71, 239, 0.15)", borderRadius: "var(--radius-md)", padding: "14px 18px", marginBottom: "24px", textAlign: "left", fontSize: "0.8125rem", color: "var(--mft-navy)" }}>
              <div><strong>Primary Branch:</strong> Hyderabad (#301, Ridge Towers, Surya Nagar, Quthbullapur, Hyderabad-500037)</div>
              <div style={{ marginTop: "4px" }}><strong>Onboarding Branch:</strong> Vijayawada (New Sanath Nagar, Vijayawada-520007)</div>
              <div style={{ marginTop: "6px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <span><strong>Phone:</strong> +91 7732080078</span>
                <span><strong>WhatsApp:</strong> +91 9318158444</span>
                <span><strong>Email:</strong> info@metaflowtechnologies.in</span>
              </div>
            </div>

            <button className="mft-btn mft-btn-primary" onClick={resetAndClose}>
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "14px" }}>
                <img 
                  src="/logo-horizontal.png" 
                  alt="Metaflow Technologies" 
                  style={{ height: "32px", width: "auto" }} 
                />
                <div className="mft-badge" style={{ margin: 0 }}>
                  <Sparkles size={14} /> Project Scoping Engine
                </div>
              </div>
              <h2 style={{ fontSize: "1.75rem", color: "var(--mft-navy)" }}>
                Start Your Project with Metaflow
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "var(--mft-text-gray)" }}>
                Share your requirements to receive a structured technical roadmap, architectural estimate, and resource allocation plan.
              </p>
            </div>

            {/* Stepper indicators */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "28px" }}>
              <div style={{ flex: 1, height: "4px", borderRadius: "2px", background: "var(--mft-blue)" }} />
              <div style={{ flex: 1, height: "4px", borderRadius: "2px", background: step === 2 ? "var(--mft-blue)" : "var(--mft-border-light)" }} />
            </div>

            {step === 1 ? (
              <div>
                <div className="mft-form-group">
                  <label className="mft-label">1. Select Capabilities Needed</label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {availableServices.map((svc) => (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => toggleService(svc)}
                        style={{
                          padding: "8px 16px",
                          borderRadius: "var(--radius-pill)",
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          border: formData.services.includes(svc) ? "1.5px solid var(--mft-blue)" : "1.5px solid var(--mft-border-light)",
                          background: formData.services.includes(svc) ? "var(--mft-blue-subtle)" : "#FFFFFF",
                          color: formData.services.includes(svc) ? "var(--mft-blue)" : "var(--mft-text-navy)",
                          transition: "all 0.2s"
                        }}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mft-form-group">
                  <label className="mft-label">2. Target Budget Range</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "10px" }}>
                    {budgetTiers.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b })}
                        style={{
                          padding: "10px",
                          borderRadius: "var(--radius-md)",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          border: formData.budget === b ? "2px solid var(--mft-blue)" : "1px solid var(--mft-border-light)",
                          background: formData.budget === b ? "var(--mft-blue-subtle)" : "#FFFFFF",
                          color: formData.budget === b ? "var(--mft-blue)" : "var(--mft-text-navy)",
                          textAlign: "center"
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mft-form-group">
                  <label className="mft-label">3. Target Timeline</label>
                  <select 
                    className="mft-select"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  >
                    {timelines.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "24px" }}>
                  <button 
                    className="mft-btn mft-btn-primary"
                    onClick={() => setStep(2)}
                  >
                    <span>Continue to Project Details</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMessage && (
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "8px", 
                    background: "rgba(239, 68, 68, 0.08)", 
                    border: "1px solid rgba(239, 68, 68, 0.25)", 
                    color: "#DC2626", 
                    padding: "10px 14px", 
                    borderRadius: "8px", 
                    marginBottom: "16px", 
                    fontSize: "0.875rem" 
                  }}>
                    <AlertCircle size={16} style={{ flexShrink: 0 }} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div className="mft-form-group">
                    <label className="mft-label">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John Doe"
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
                      placeholder="john@company.com"
                      className="mft-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div className="mft-form-group">
                    <label className="mft-label">Company / Organization *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Acme Corp / Stealth Startup"
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

                <div className="mft-form-group">
                  <label className="mft-label">Brief Project Overview / Core Goals *</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us what you're building, key technical challenges, or existing tech stack..."
                    className="mft-textarea"
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px" }}>
                  <button 
                    type="button" 
                    className="mft-btn mft-btn-secondary"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="mft-btn mft-btn-primary"
                    style={{
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? "not-allowed" : "pointer"
                    }}
                    id="submit-enquiry-modal"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        <span>Send Project Enquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
