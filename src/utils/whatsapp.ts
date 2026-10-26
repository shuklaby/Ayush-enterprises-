import { EnquiryFormData } from "../types";

export const AUTHORIZED_WHATSAPP_NUMBER = "917362098784";
export const AUTHORIZED_PHONE_NUMBER = "+917362098784";
export const AUTHORIZED_PHONE_DISPLAY = "+91 7362098784";

/**
 * Builds the URL-encoded WhatsApp URL for the lead generator enquiry form
 */
export function buildEnquiryWhatsAppUrl(data: EnquiryFormData): string {
  const parts: string[] = [
    "Hello Ayush Enterprises Bihar,",
    "",
    "I would like to enquire about your products.",
    "",
    `Name: ${data.fullName.trim()}`,
    `Mobile: ${data.mobileNumber.trim()}`
  ];

  if (data.companyName.trim()) {
    parts.push(`Company: ${data.companyName.trim()}`);
  }

  parts.push(`Product: ${data.productInterestedIn.trim()}`);

  if (data.quantity.trim()) {
    parts.push(`Quantity: ${data.quantity.trim()}`);
  }

  parts.push(`Requirement: ${data.message.trim()}`);
  parts.push("");
  parts.push("Please share product details, availability and pricing.");

  const fullMessage = parts.join("\n");
  return `https://wa.me/${AUTHORIZED_WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
}

/**
 * Builds a direct quick product enquiry WhatsApp URL
 */
export function buildQuickProductWhatsAppUrl(productName: string, productPrice?: string): string {
  const parts = [
    "Hello Ayush Enterprises Bihar,",
    "",
    `I am interested in getting the best price for: *${productName}*.`,
    productPrice ? `Listed Reference: ${productPrice}` : "",
    "",
    "Could you please share the current availability, discount on bulk quantity, and delivery timeline to my location in Bihar?",
    "",
    "Thank you!"
  ].filter(Boolean);

  return `https://wa.me/${AUTHORIZED_WHATSAPP_NUMBER}?text=${encodeURIComponent(parts.join("\n"))}`;
}

/**
 * Builds a general WhatsApp contact URL
 */
export function buildGeneralWhatsAppUrl(contextPrompt?: string): string {
  const message = contextPrompt 
    ? `Hello Ayush Enterprises Bihar, I would like to get more information regarding: ${contextPrompt}`
    : "Hello Ayush Enterprises Bihar, I am looking for milk testing and dairy automation solutions. Please assist me with product details and pricing.";
  
  return `https://wa.me/${AUTHORIZED_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Validates 10-digit Indian mobile numbers
 */
export function validateIndianMobile(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, "");
  // Indian mobile: 10 digits starting with 6, 7, 8, or 9
  // Or 12 digits starting with 91 followed by 6-9
  if (cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned)) {
    return true;
  }
  if (cleaned.length === 12 && /^91[6-9]\d{9}$/.test(cleaned)) {
    return true;
  }
  return false;
}
