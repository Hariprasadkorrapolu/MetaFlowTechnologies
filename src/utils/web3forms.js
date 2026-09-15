// web3forms.js - Centralized Web3Forms Integration Service for Metaflow Technologies

export const WEB3FORMS_ACCESS_KEY = 
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "ecc826f3-0f82-4a25-9855-ed3502f2e550";

export const NOTIFICATION_TARGET_EMAIL = "hariprasadkorrapolu03@gmail.com";

/**
 * Submit form data to Web3Forms API
 * @param {Object} options
 * @param {string} options.subject - Email subject line
 * @param {string} options.fromName - Sender title/name
 * @param {string} options.replyTo - Submitter's email for direct reply
 * @param {Object} options.fields - Key-value pair of all form input values
 * @param {File|null} options.attachment - Optional file attachment (PDF, DOCX, PNG, etc.)
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function submitToWeb3Forms({
  subject = "Metaflow Technologies – New Website Enquiry",
  fromName = "Metaflow Technologies Web Portal",
  replyTo = "",
  fields = {},
  attachment = null,
}) {
  try {
    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", subject);
    formData.append("from_name", fromName);

    if (replyTo) {
      formData.append("replyto", replyTo);
    }

    // System routing & metadata
    formData.append("Forward_To", NOTIFICATION_TARGET_EMAIL);
    formData.append("Platform", "Metaflow Technologies (MFT) Ecosystem");
    formData.append("Timestamp", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST");

    // Append formatted form fields
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined && value !== null && value !== "") {
        // Format camelCase key to Clean Label (e.g. fullName -> Full Name)
        const formattedKey = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())
          .trim();

        if (Array.isArray(value)) {
          formData.append(formattedKey, value.join(", "));
        } else {
          formData.append(formattedKey, String(value));
        }
      }
    }

    // Attach file if provided
    if (attachment instanceof File) {
      formData.append("attachment", attachment);
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    let result = null;
    try {
      result = await response.json();
    } catch {
      result = null;
    }

    if (response.ok && (result?.success || response.status === 200)) {
      return {
        success: true,
        message: "Thank you for contacting Metaflow Technologies. We have received your enquiry and our team will get back to you shortly."
      };
    } else {
      return {
        success: false,
        message: (result && result.message) || "Something went wrong while submitting your enquiry. Please try again or contact us directly."
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong while submitting your enquiry. Please try again or contact us directly."
    };
  }
}
