import React, { useState } from "react";
import { LeadGeneratorForm } from "../components/LeadGeneratorForm";
import { COMPANY_INFO } from "../data/products";
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Building, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Truck 
} from "lucide-react";
import { 
  AUTHORIZED_PHONE_NUMBER, 
  AUTHORIZED_PHONE_DISPLAY, 
  buildGeneralWhatsAppUrl 
} from "../utils/whatsapp";

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast can milk analyzers and AMCU sets be delivered within Bihar?",
      a: "Orders for in-stock equipment like Dyna Milk Analyzers, Balaji DPUs, and thermal paper rolls are dispatched from our Samastipur hub within 24 to 48 hours via secure road or courier express to any district in Bihar."
    },
    {
      q: "Are the milk testing units calibrated before dispatch?",
      a: "Yes. Every ultrasonic analyzer is tested and calibrated against standard cow and buffalo milk parameters before handover to ensure immediate operational readiness at your village collection society or dairy chilling plant."
    },
    {
      q: "Do you supply genuine replacement PCBs, ultrasonic sensors, and pumps?",
      a: "Yes. Ayush Enterprises stocks original replacement parts including Lactoscan PCBs, ultrasonic transducer sensors, and peristaltic pump tubes to keep dairy centers operating without seasonal breakdowns."
    },
    {
      q: "Can I order custom printed thermal billing paper with our society's name?",
      a: "Yes. We supply both standard 55 GSM/70 GSM thermal rolls and custom pre-printed rolls with your society name, logo, and terms on the reverse side. Minimum order quantities apply for custom prints."
    },
    {
      q: "What payment terms are supported for cooperative milk societies?",
      a: "We support direct bank transfers (NEFT/RTGS), UPI, and structured invoicing for registered dairy cooperative societies, farmer producer organizations (FPOs), and commercial plants."
    }
  ];

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wider uppercase">
          <Building className="w-4 h-4 text-sky-700" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight" style={{ textWrap: "balance" }}>
          Contact Ayush Enterprises Bihar
        </h1>
        <p className="text-sm text-neutral-600 leading-relaxed">
          Reach our dedicated technical and sales desk in Samastipur for quotations, machine demonstration requests, bulk thermal paper orders, and urgent replacement spares.
        </p>
      </div>

      {/* Main Contact Grid: Lead Form + Contact Channels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Direct Channels */}
          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs p-6 space-y-6">
            <h3 className="text-base font-bold text-neutral-900 pb-3 border-b border-neutral-100">
              Customer Support & Inquiries
            </h3>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-800 flex items-center justify-center shrink-0 border border-sky-100">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 block">
                  Authorized Phone Hotline
                </span>
                <a
                  href={`tel:${AUTHORIZED_PHONE_NUMBER}`}
                  className="text-base font-bold text-sky-950 hover:text-sky-700 font-mono tracking-tight transition-colors"
                >
                  {AUTHORIZED_PHONE_DISPLAY}
                </a>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Direct line for urgent inquiries & technical advice
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 block">
                  Official WhatsApp Desk
                </span>
                <a
                  href={buildGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-emerald-800 hover:text-emerald-900 font-mono tracking-tight transition-colors"
                >
                  {AUTHORIZED_PHONE_DISPLAY}
                </a>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Instant quotations, availability checks, and brochures
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0 border border-neutral-200">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 block">
                  Dispatch & Business Address
                </span>
                <p className="text-xs font-semibold text-neutral-900 mt-0.5 leading-relaxed">
                  {COMPANY_INFO.address}
                </p>
                <p className="text-[11px] text-neutral-500 mt-0.5">
                  Bibhutipur, District Samastipur, Bihar - 848211
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0 border border-neutral-200">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 block">
                  Working Hours
                </span>
                <p className="text-xs font-semibold text-neutral-900 mt-0.5">
                  {COMPANY_INFO.workingHours}
                </p>
                <p className="text-[11px] text-neutral-500 mt-0.5">
                  Sunday: Closed for routine warehouse maintenance
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${AUTHORIZED_PHONE_NUMBER}`}
                className="flex-1 py-2.5 px-4 text-xs font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-700" />
                <span>Call Now</span>
              </a>

              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Delivery & Logistics Card */}
          <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-6 text-xs text-sky-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-sky-900">
              <Truck className="w-4 h-4" />
              <span>Statewide Bihar Logistics Coverage</span>
            </div>
            <p className="text-[11px] leading-relaxed text-sky-800">
              We dispatch daily consignments to dairy centers in Patna, Vaishali, Muzaffarpur, Samastipur, Darbhanga, Madhubani, Begusarai, Khagaria, Saharsa, Madhepura, Supaul, Bhagalpur, Munger, Nalanda, and all surrounding regions.
            </p>
          </div>

        </div>

        {/* Right Column: Lead Generator Form */}
        <div className="lg:col-span-7">
          <LeadGeneratorForm />
        </div>

      </div>

      {/* Frequently Asked Questions */}
      <section className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs p-6 sm:p-10 space-y-6">
        <div>
          <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase">
            Help & Guidance
          </span>
          <h2 className="text-2xl font-bold text-neutral-900 mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Common questions from milk cooperative secretaries, chilling plant supervisors, and dairy entrepreneurs.
          </p>
        </div>

        <div className="divide-y divide-neutral-200/80 pt-2">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left text-sm font-bold text-neutral-900 hover:text-sky-900 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-neutral-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed pr-6 animate-in fade-in duration-150">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
