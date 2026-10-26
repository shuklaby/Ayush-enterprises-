import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../data/products";
import { EnquiryFormData } from "../types";
import { buildEnquiryWhatsAppUrl, validateIndianMobile, AUTHORIZED_PHONE_DISPLAY } from "../utils/whatsapp";
import { Send, CheckCircle2, AlertCircle, ShieldAlert, RotateCcw } from "lucide-react";

interface LeadGeneratorFormProps {
  initialProduct?: string;
  onSuccess?: () => void;
  className?: string;
  compact?: boolean;
}

const STORAGE_KEY = "ayush_enquiry_form_draft";

export const LeadGeneratorForm: React.FC<LeadGeneratorFormProps> = ({
  initialProduct,
  onSuccess,
  className = "",
  compact = false
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: "",
    mobileNumber: "",
    companyName: "",
    productInterestedIn: initialProduct || "Dyna Milk Analyzer",
    quantity: "",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [submittedState, setSubmittedState] = useState<{
    submitted: boolean;
    whatsappUrl?: string;
  }>({ submitted: false });

  // Load preserved draft from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({
          ...prev,
          ...parsed,
          productInterestedIn: initialProduct || parsed.productInterestedIn || prev.productInterestedIn
        }));
      } else if (initialProduct) {
        setFormData((prev) => ({ ...prev, productInterestedIn: initialProduct }));
      }
    } catch (e) {
      // ignore JSON error
    }
  }, [initialProduct]);

  // Persist draft on changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    // clear specific field error when typed
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      // ignore storage error
    }
  };

  const handleReset = () => {
    const empty: EnquiryFormData = {
      fullName: "",
      mobileNumber: "",
      companyName: "",
      productInterestedIn: PRODUCTS[0]?.name || "General Dairy Equipment Enquiry",
      quantity: "",
      message: ""
    };
    setFormData(empty);
    setErrors({});
    setSubmittedState({ submitted: false });
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required.";
    } else if (!validateIndianMobile(formData.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid 10-digit Indian mobile number.";
    }

    if (!formData.productInterestedIn.trim()) {
      newErrors.productInterestedIn = "Please select a product.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your requirement or query.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Build URL-encoded WhatsApp link
    const whatsappUrl = buildEnquiryWhatsAppUrl(formData);

    setSubmittedState({
      submitted: true,
      whatsappUrl
    });

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className={`bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 sm:p-8 ${className}`}>
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-wider uppercase text-sky-700">
            Direct Requirement Desk
          </span>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
            title="Clear form"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mt-1">
          Request Best Price & Availability
        </h3>
        <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
          Submit your equipment details below. An encoded quotation message will be formatted for Ayush Enterprises Bihar and opened in WhatsApp.
        </p>
      </div>

      {submittedState.submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-neutral-800 space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-base font-bold text-emerald-950">
                WhatsApp Chat Opened
              </h4>
              <p className="text-xs text-emerald-900 mt-1 leading-relaxed">
                Your enquiry has been pre-formatted for <strong>Ayush Enterprises Bihar</strong> ({AUTHORIZED_PHONE_DISPLAY}).
              </p>
              <div className="mt-3 p-3 bg-white/80 rounded-lg border border-emerald-200 text-xs text-neutral-700">
                <strong>Important:</strong> The message is not sent automatically. Please press the <strong>Send</strong> button inside WhatsApp to deliver your enquiry to our sales desk.
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            {submittedState.whatsappUrl && (
              <a
                href={submittedState.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Re-open WhatsApp Chat</span>
              </a>
            )}
            <button
              type="button"
              onClick={() => setSubmittedState({ submitted: false })}
              className="px-4 py-2 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              Modify Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          
          {/* Row 1: Full Name & Mobile */}
          <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"} gap-4`}>
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-neutral-800 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Ramesh Kumar"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                  errors.fullName
                    ? "border-red-400 bg-red-50/30 focus-visible:ring-red-400"
                    : "border-neutral-300 focus-visible:ring-sky-600 bg-white"
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="mobileNumber" className="block text-xs font-semibold text-neutral-800 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="10-digit number (e.g. 9876543210)"
                maxLength={14}
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                  errors.mobileNumber
                    ? "border-red-400 bg-red-50/30 focus-visible:ring-red-400"
                    : "border-neutral-300 focus-visible:ring-sky-600 bg-white"
                }`}
              />
              {errors.mobileNumber && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.mobileNumber}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Company Name & Product */}
          <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"} gap-4`}>
            <div>
              <label htmlFor="companyName" className="block text-xs font-semibold text-neutral-800 mb-1">
                Company / Dairy Farm Name <span className="text-neutral-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Kisan Milk Cooperative"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 bg-white"
              />
            </div>

            <div>
              <label htmlFor="productInterestedIn" className="block text-xs font-semibold text-neutral-800 mb-1">
                Product Interested In <span className="text-red-500">*</span>
              </label>
              <select
                id="productInterestedIn"
                name="productInterestedIn"
                value={formData.productInterestedIn}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 bg-white ${
                  errors.productInterestedIn
                    ? "border-red-400 bg-red-50/30 focus-visible:ring-red-400"
                    : "border-neutral-300 focus-visible:ring-sky-600"
                }`}
              >
                <optgroup label="Milk Analyzers">
                  <option value="Dyna Milk Analyzer">Dyna Milk Analyzer</option>
                  <option value="Ekomilk Bond Ultrasonic Milk Analyzer">Ekomilk Bond Ultrasonic Milk Analyzer</option>
                  <option value="Lactoscan Milk Analyzer">Lactoscan Milk Analyzer</option>
                  <option value="Advance Milk Analyzer Plus">Advance Milk Analyzer Plus</option>
                  <option value="Ekomilk Ultra Milk Analyzer">Ekomilk Ultra Milk Analyzer</option>
                  <option value="Essae Milk Analyzer">Essae Milk Analyzer</option>
                  <option value="Dyna Omni Bond Milk Analyzer">Dyna Omni Bond Milk Analyzer</option>
                </optgroup>
                <optgroup label="Dairy Automation Systems">
                  <option value="AMCU Full Set (Automatic Milk Collection Unit)">AMCU Full Set (Automatic Milk Collection Unit)</option>
                  <option value="Balaji Data Processing Unit (DPU)">Balaji Data Processing Unit (DPU)</option>
                </optgroup>
                <optgroup label="Spare Parts & Sensors">
                  <option value="Lactoscan Milk Analyzer PCB">Lactoscan Milk Analyzer PCB</option>
                  <option value="Milk Analyzer Ultrasonic Sensor">Milk Analyzer Ultrasonic Sensor</option>
                </optgroup>
                <optgroup label="Thermal Paper & POS Rolls">
                  <option value="Thermal Paper Roll (57mm x 25m)">Thermal Paper Roll (57mm x 25m)</option>
                  <option value="Heavy-Duty Paper Billing Roll (70 GSM)">Heavy-Duty Paper Billing Roll (70 GSM)</option>
                  <option value="Custom Printed Thermal Paper Roll">Custom Printed Thermal Paper Roll</option>
                  <option value="EDC Rolls & POS Rolls (55 GSM)">EDC Rolls & POS Rolls (55 GSM)</option>
                </optgroup>
                <optgroup label="Dairy Utensils & Strainers">
                  <option value="Milap Heavy-Duty Plastic Milk Strainer">Milap Heavy-Duty Plastic Milk Strainer</option>
                  <option value="Stainless Steel Milk Strainer (12-inch Diameter)">Stainless Steel Milk Strainer (12-inch Diameter)</option>
                </optgroup>
                <option value="General Equipment / Bulk Order Inquiry">General Equipment / Bulk Order Inquiry</option>
              </select>
              {errors.productInterestedIn && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.productInterestedIn}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Quantity */}
          <div>
            <label htmlFor="quantity" className="block text-xs font-semibold text-neutral-800 mb-1">
              Quantity Required <span className="text-neutral-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 2 Units / 50 Rolls / 1 Complete Set"
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 bg-white"
            />
          </div>

          {/* Row 4: Message / Requirement */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-neutral-800 mb-1">
              Message / Requirement Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please specify your dairy center location in Bihar, required features, or any questions..."
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 resize-y bg-white ${
                errors.message
                  ? "border-red-400 bg-red-50/30 focus-visible:ring-red-400"
                  : "border-neutral-300 focus-visible:ring-sky-600"
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Privacy Note */}
          <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/80 text-[11px] text-neutral-500 leading-relaxed flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
            <span>
              <strong>Privacy Notice:</strong> By submitting, the entered enquiry details will be structured into a WhatsApp message addressed to Ayush Enterprises Bihar ({AUTHORIZED_PHONE_DISPLAY}). You will review and send the message in WhatsApp.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Submit & Enquire on WhatsApp</span>
          </button>
        </form>
      )}
    </div>
  );
};
