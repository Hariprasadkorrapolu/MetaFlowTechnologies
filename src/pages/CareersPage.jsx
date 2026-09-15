// CareersPage.jsx - Talent Ecosystem, Open Positions & Culture
import React, { useState } from "react";
import { 
  Briefcase, MapPin, Clock, IndianRupee, ArrowRight, Sparkles, 
  CheckCircle2, Globe, HeartPulse, Laptop, TrendingUp, Coffee, 
  Plus, Minus, Filter 
} from "lucide-react";
import { benefits, culturePillars, openPositions, careerFaqs } from "../data/careersData";
import ApplicationModal from "../components/ApplicationModal";

const benefitIcons = {
  Globe: <Globe size={24} />,
  Sparkles: <Sparkles size={24} />,
  HeartPulse: <HeartPulse size={24} />,
  Laptop: <Laptop size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Coffee: <Coffee size={24} />
};

export default function CareersPage({ navigate }) {
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [selectedJobForModal, setSelectedJobForModal] = useState(null);

  const departments = ["All", "Engineering", "AI & Data Intelligence", "Cloud & DevOps", "Design & Experience"];

  const filteredJobs = openPositions.filter((job) => {
    const deptMatch = selectedDept === "All" || job.department.toLowerCase().includes(selectedDept.toLowerCase());
    const locMatch = selectedLocation === "All" || job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return deptMatch && locMatch;
  });

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Page Hero */}
      <section className="mft-section mft-bg-navy" style={{ paddingBottom: "70px" }}>
        <div className="mft-container" style={{ textAlign: "center" }}>
          <div className="mft-breadcrumbs" style={{ justifyContent: "center", color: "rgba(255, 255, 255, 0.6)" }}>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("home")}>Home</span>
            <span>/</span>
            <span style={{ color: "var(--mft-cyan)" }}>Careers</span>
          </div>

          <span className="mft-badge mft-badge-navy">
            <Sparkles size={14} /> Join The Builders of Metaflow
          </span>

          <h1 style={{ fontSize: "3.5rem", color: "#FFFFFF", marginBottom: "18px" }}>
            Build Systems That Matter
          </h1>

          <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.75)", maxWidth: "780px", margin: "0 auto 36px auto", lineHeight: 1.7 }}>
            We are hiring visionary systems engineers, AI researchers, and product designers passionate about solving complex enterprise problems without corporate red tape.
          </p>
        </div>
      </section>

      {/* Why Work With Us & Culture */}
      <section className="mft-section">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">Our Culture & Ethos</div>
            <h2 className="mft-section-title">Why Work at Metaflow Technologies?</h2>
            <p className="mft-section-subtitle">
              We empower autonomous thinkers with high agency, top-tier engineering tooling, and true ownership.
            </p>
          </div>

          <div className="mft-grid-4" style={{ marginBottom: "64px" }}>
            {culturePillars.map((p, idx) => (
              <div key={idx} className="mft-card">
                <div className="mft-icon-box">
                  <CheckCircle2 size={22} />
                </div>
                <h3 style={{ fontSize: "1.2rem", color: "var(--mft-navy)", marginBottom: "8px" }}>{p.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--mft-text-gray)", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Employee Benefits Grid */}
          <div className="mft-section-header" style={{ marginBottom: "36px" }}>
            <div className="mft-badge">Perks & Compensation</div>
            <h3 style={{ fontSize: "2rem", color: "var(--mft-navy)" }}>Comprehensive Employee Benefits</h3>
          </div>

          <div className="mft-grid-3">
            {benefits.map((b, i) => (
              <div key={i} className="mft-card" style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "24px" }}>
                <div className="mft-icon-box" style={{ margin: 0, flexShrink: 0 }}>
                  {benefitIcons[b.icon]}
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "var(--mft-navy)", marginBottom: "6px" }}>{b.title}</h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--mft-text-gray)", lineHeight: 1.5, margin: 0 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          OPEN POSITIONS WITH INTERACTIVE FILTERS
          ========================================================================= */}
      <section className="mft-section mft-bg-light" id="positions">
        <div className="mft-container">
          <div className="mft-section-header">
            <div className="mft-badge">Join the Squad</div>
            <h2 className="mft-section-title">Open Positions</h2>
            <p className="mft-section-subtitle">
              Find your next career chapter. We hire globally across multiple time zones.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "40px" }}>
            {departments.map((dept) => (
              <button
                key={dept}
                className={`mft-tab-btn ${selectedDept === dept ? "active" : ""}`}
                onClick={() => setSelectedDept(dept)}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Jobs List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {filteredJobs.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px", color: "var(--mft-text-gray)" }}>
                No active openings matching the selected filter. Try selecting 'All' or submit an exploratory application below!
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div key={job.id} className="mft-card" style={{ padding: "32px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "16px" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                        <h3 style={{ fontSize: "1.45rem", color: "var(--mft-navy)", margin: 0 }}>{job.title}</h3>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "3px 10px", borderRadius: "10px", background: "var(--mft-blue-subtle)", color: "var(--mft-blue)" }}>
                          {job.employmentType}
                        </span>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "0.875rem", color: "var(--mft-text-gray)", marginTop: "4px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <Briefcase size={14} /> {job.department}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <MapPin size={14} /> {job.location}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <IndianRupee size={14} /> {job.compensation}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <Clock size={14} /> {job.experience}
                        </span>
                      </div>
                    </div>

                    <button 
                      className="mft-btn mft-btn-primary"
                      onClick={() => setSelectedJobForModal(job)}
                      id={`apply-btn-${job.id}`}
                    >
                      <span>Apply Now</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>

                  <p style={{ fontSize: "0.9375rem", color: "var(--mft-text-body)", lineHeight: 1.6, marginBottom: "18px" }}>
                    {job.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {job.skills.map((skill, i) => (
                      <span key={i} style={{ fontSize: "0.75rem", padding: "4px 10px", background: "#FFFFFF", borderRadius: "6px", border: "1px solid var(--mft-border-light)", color: "var(--mft-text-navy)", fontWeight: 600 }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Career FAQs */}
      <section className="mft-section">
        <div className="mft-container" style={{ maxWidth: "860px" }}>
          <div className="mft-section-header">
            <div className="mft-badge">Interview Guide</div>
            <h2 className="mft-section-title">Career FAQs</h2>
          </div>

          <div>
            {careerFaqs.map((faq, idx) => (
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

      {/* Application Modal */}
      <ApplicationModal 
        isOpen={!!selectedJobForModal}
        job={selectedJobForModal}
        onClose={() => setSelectedJobForModal(null)}
      />
    </div>
  );
}
