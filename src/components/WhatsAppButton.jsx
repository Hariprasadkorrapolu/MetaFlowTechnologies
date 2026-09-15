// WhatsAppButton.jsx - Global Floating WhatsApp Click-to-Chat Widget
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const whatsappNumber = "9318158444";
  const whatsappFormatted = "+91 9318158444";
  const prefilledMessage = encodeURIComponent("Hello Metaflow Technologies, I would like to know more about your services.");
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${prefilledMessage}`;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "12px"
      }}
    >
      {/* Tooltip on Desktop */}
      <div
        style={{
          background: "var(--mft-navy)",
          color: "#FFFFFF",
          padding: "8px 16px",
          borderRadius: "var(--radius-pill)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          fontSize: "0.8125rem",
          fontWeight: 700,
          border: "1px solid rgba(255,255,255,0.15)",
          whiteSpace: "nowrap",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(10px)",
          transition: "all 0.25s ease",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          gap: "6px"
        }}
      >
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#25D366", display: "inline-block" }} />
        <span>Chat on WhatsApp ({whatsappFormatted})</span>
      </div>

      {/* WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Metaflow Technologies on WhatsApp at ${whatsappFormatted}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 25px rgba(37, 211, 102, 0.45), 0 4px 10px rgba(0, 0, 0, 0.15)",
          transition: "transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.25s ease",
          transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
          textDecoration: "none",
          position: "relative"
        }}
      >
        {/* Pulsing ring */}
        <span
          style={{
            position: "absolute",
            top: "-4px",
            left: "-4px",
            right: "-4px",
            bottom: "-4px",
            borderRadius: "50%",
            border: "2px solid #25D366",
            opacity: 0.6,
            animation: "mftPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            pointerEvents: "none"
          }}
        />

        {/* WhatsApp Icon */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-1.114-.055-.262-.083-.604-.199-1.036-.388-1.83-.801-3.023-2.659-3.115-2.782-.091-.123-.745-.992-.745-1.892s.47-1.341.638-1.524c.168-.183.367-.229.49-.229.122 0 .245.002.352.007.113.005.264-.043.413.315.155.372.528 1.288.574 1.381.046.092.077.2.015.323-.061.123-.092.2-.183.307-.092.107-.193.24-.276.323-.092.092-.187.192-.08.376.107.184.475.784 1.02 1.269.702.625 1.294.819 1.478.911.184.092.291.077.399-.046.107-.123.46-.537.583-.721.122-.184.245-.153.413-.092.169.061 1.073.506 1.257.598.184.092.307.138.352.215.046.077.046.444-.098.849zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2.05 22l4.982-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.696 0-3.272-.512-4.587-1.39l-.329-.222-2.955.775.789-2.879-.214-.341A8.136 8.136 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z" />
        </svg>
      </a>
    </div>
  );
}
