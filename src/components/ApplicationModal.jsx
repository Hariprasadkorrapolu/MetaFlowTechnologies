// ApplicationModal.jsx - Job Application Modal for Careers Portal
import React, { useState } from "react";
import { X, CheckCircle2, Upload, FileText, Send, Briefcase, Loader2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { submitToWeb3Forms } from "../utils/web3forms";

export default function ApplicationModal({ isOpen, onClose, job }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    github: "",
    portfolio: "",
    coverLetter: ""
  });

  if (!isOpen || !job) return null;

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

    const result = await submitToWeb3Forms({
      subject: `Metaflow Technologies – Job Application: ${job.title} (${formData.fullName})`,
      fromName: formData.fullName || "MFT Job Applicant",
      replyTo: formData.email,
      fields: {
        "Position": job.title,
        "Department": job.department,
        "Location": job.location,
        "Experience Required": job.experience,
        "Applicant Name": formData.fullName,
        "Applicant Email": formData.email,
        "Applicant Phone": formData.phone,
        "LinkedIn": formData.linkedIn || "N/A",
        "GitHub": formData.github || "N/A",
        "Portfolio": formData.portfolio || "N/A",
        "Cover Letter": formData.coverLetter || "N/A"
      },
      attachment: selectedFile
    });

    setIsSubmitting(false);

    if (result.success) {
      try {
        const stored = JSON.parse(localStorage.getItem("mft_job_applications") || "[]");
        stored.push({ ...formData, jobId: job.id, jobTitle: job.title, fileName, submittedAt: new Date().toISOString() });
        localStorage.setItem("mft_job_applications", JSON.stringify(stored));
      } catch {
        // LocalStorage fallback
      }

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // confetti fallback
      }

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        linkedIn: "",
        github: "",
        portfolio: "",
        coverLetter: ""
      });
      setSelectedFile(null);
      setFileName("");
    } else {
      setErrorMessage(result.message || "Something went wrong while submitting your enquiry. Please try again or contact us directly.");
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setErrorMessage("");
    setFileName("");
    setSelectedFile(null);
    onClose();
  };

  return (
    <div className="mft-modal-overlay" onClick={handleClose}>
      <div className="mft-modal-box" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={handleClose}
          style={{ position: "absolute", top: "20px", right: "20px", color: "var(--mft-text-gray)", padding: "8px" }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "30px 10px" }}>
            <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(0, 71, 239, 0.1)", color: "var(--mft-blue)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px auto" }}>
              <CheckCircle2 size={40} />
            </div>
            <span className="mft-badge">Application Submitted</span>
            <h3 style={{ fontSize: "1.75rem", marginBottom: "12px" }}>
              Application Submitted Successfully!
            </h3>
            <p style={{ color: "var(--mft-navy)", fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "540px", margin: "0 auto 12px auto" }}>
              Thank you for contacting Metaflow Technologies. We have received your enquiry and our team will get back to you shortly.
            </p>
            <p style={{ color: "var(--mft-text-gray)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto 24px auto", fontSize: "0.9rem" }}>
              Your application for <strong>{job.title}</strong> has been routed directly to our Talent Acquisition Squad and executive desk.
            </p>
            <button className="mft-btn mft-btn-primary" onClick={handleClose}>
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "12px" }}>
                <img 
                  src="/logo-horizontal.png" 
                  alt="Metaflow Technologies" 
                  style={{ height: "30px", width: "auto" }} 
                />
                <span className="mft-badge" style={{ margin: 0 }}>
                  <Briefcase size={13} /> {job.department}
                </span>
              </div>
              <h2 style={{ fontSize: "1.5rem", color: "var(--mft-navy)" }}>
                Apply for {job.title}
              </h2>
              <div style={{ fontSize: "0.875rem", color: "var(--mft-text-gray)", marginTop: "4px" }}>
                {job.location} • {job.employmentType} • {job.experience}
              </div>
            </div>

            {errorMessage && (
              <div style={{ padding: "12px 16px", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)", borderRadius: "var(--radius-md)", color: "#EF4444", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem" }}>
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
                    placeholder="Jane Doe" 
                    className="mft-input" 
                    value={formData.fullName} 
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
                  />
                </div>
                <div className="mft-form-group">
                  <label className="mft-label">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="jane@domain.com" 
                    className="mft-input" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="mft-form-group">
                  <label className="mft-label">Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 98765 43210" 
                    className="mft-input" 
                    value={formData.phone} 
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                  />
                </div>
                <div className="mft-form-group">
                  <label className="mft-label">LinkedIn Profile URL</label>
                  <input 
                    type="url" 
                    placeholder="https://linkedin.com/in/..." 
                    className="mft-input" 
                    value={formData.linkedIn} 
                    onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })} 
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="mft-form-group">
                  <label className="mft-label">GitHub URL</label>
                  <input 
                    type="url" 
                    placeholder="https://github.com/..." 
                    className="mft-input" 
                    value={formData.github} 
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })} 
                  />
                </div>
                <div className="mft-form-group">
                  <label className="mft-label">Portfolio / Website</label>
                  <input 
                    type="url" 
                    placeholder="https://mywork.dev" 
                    className="mft-input" 
                    value={formData.portfolio} 
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })} 
                  />
                </div>
              </div>

              <div className="mft-form-group">
                <label className="mft-label">Resume / CV (PDF, DOCX) *</label>
                <div style={{ border: "2px dashed var(--mft-border-light)", borderRadius: "var(--radius-md)", padding: "18px", textAlign: "center", background: "var(--mft-bg-light)", cursor: "pointer", position: "relative" }}>
                  <input 
                    type="file" 
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer" }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                    <Upload size={20} style={{ color: "var(--mft-blue)" }} />
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--mft-navy)" }}>
                      {fileName ? `Selected: ${fileName}` : "Click to upload resume or drag and drop"}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "var(--mft-text-gray)" }}>PDF or Word documents up to 10MB</span>
                  </div>
                </div>
              </div>

              <div className="mft-form-group">
                <label className="mft-label">Cover Letter / Note</label>
                <textarea 
                  rows={3} 
                  placeholder="Why do you want to build the future with Metaflow Technologies?" 
                  className="mft-textarea" 
                  value={formData.coverLetter} 
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })} 
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "24px" }}>
                <button type="button" className="mft-btn mft-btn-secondary" onClick={handleClose} disabled={isSubmitting}>
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="mft-btn mft-btn-primary" 
                  id="submit-job-application"
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? "not-allowed" : "pointer" }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" style={{ animation: "spin 1s linear infinite" }} />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
