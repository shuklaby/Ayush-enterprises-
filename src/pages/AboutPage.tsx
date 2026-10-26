import React from "react";
import { PageView } from "../types";
import { COMPANY_INFO } from "../data/products";
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Clock, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  CheckCircle2 
} from "lucide-react";
import { AUTHORIZED_PHONE_NUMBER, AUTHORIZED_PHONE_DISPLAY, buildGeneralWhatsAppUrl } from "../utils/whatsapp";

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wider uppercase">
          <Building2 className="w-4 h-4 text-sky-700" />
          <span>About Ayush Enterprises Bihar</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight" style={{ textWrap: "balance" }}>
          Delivering Precision, Reliability, and Trust to Bihar’s Dairy Industry
        </h1>
        <p className="text-base text-neutral-600 leading-relaxed">
          Founded in 2024 in Samastipur, Bihar, Ayush Enterprises is committed to empowering dairy farmers, milk cooperatives, and commercial chilling centers with certified ultrasonic milk testing technology and automation hardware.
        </p>
      </div>

      {/* Main Narrative & Company Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <div className="lg:col-span-7 space-y-6 text-sm text-neutral-700 leading-relaxed">
          <div className="bg-white p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-5">
            <h2 className="text-xl font-bold text-neutral-900">
              Our Background & Commitment
            </h2>
            <p>
              Established in 2024 in Samastipur, Bihar, <strong>Ayush Enterprises</strong> is committed to delivering quality and reliability in every product we offer. We specialize in providing a wide range of milk analyzers and related solutions, designed to support farmers, dairies, and businesses with accurate results and dependable performance.
            </p>
            <p>
              With a focus on effective and timely delivery, we aim to make modern dairy measurement technology accessible and useful for everyday needs. At Ayush Enterprises, our mission is to build lasting trust by offering products that enhance efficiency, save time, and ensure fair milk pricing based on accurate Fat and SNF analysis.
            </p>
            <p>
              Driven by customer satisfaction, we continue to expand our product range and technical services, making us a dependable partner for clients across Bihar and neighboring districts.
            </p>

            <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-4 items-center">
              <a
                href={buildGeneralWhatsAppUrl("I would like to know more about Ayush Enterprises' dairy equipment offerings")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>Contact Business Representative</span>
              </a>
              <button
                onClick={() => onNavigate("products")}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 7 Core Value Pillars from IndiaMART Listing */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">
              Why Dairy Clients Trust Ayush Enterprises
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {COMPANY_INFO.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Business Profile Spec Table */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs p-6 space-y-5">
            <h3 className="text-base font-bold text-neutral-900 pb-3 border-b border-neutral-100">
              Verified Business Profile
            </h3>

            <dl className="divide-y divide-neutral-100 text-xs">
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-neutral-500 font-medium">Enterprise Name</dt>
                <dd className="font-semibold text-neutral-900 text-right">{COMPANY_INFO.name}</dd>
              </div>

              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-neutral-500 font-medium">Nature of Business</dt>
                <dd className="font-semibold text-neutral-900 text-right">{COMPANY_INFO.natureOfBusiness}</dd>
              </div>

              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-neutral-500 font-medium">Year of Establishment</dt>
                <dd className="font-semibold text-neutral-900 font-mono text-right">{COMPANY_INFO.yearOfEstablishment}</dd>
              </div>

              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-neutral-500 font-medium">Operating Hub</dt>
                <dd className="font-semibold text-neutral-900 text-right">{COMPANY_INFO.locality}, {COMPANY_INFO.district}</dd>
              </div>

              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-neutral-500 font-medium">State & Pincode</dt>
                <dd className="font-semibold text-neutral-900 font-mono text-right">{COMPANY_INFO.state} - {COMPANY_INFO.pincode}</dd>
              </div>

              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-neutral-500 font-medium">Authorized Helpline</dt>
                <dd className="font-semibold text-neutral-900 font-mono text-right">
                  <a href={`tel:${AUTHORIZED_PHONE_NUMBER}`} className="text-sky-800 hover:underline">
                    {AUTHORIZED_PHONE_DISPLAY}
                  </a>
                </dd>
              </div>

              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-neutral-500 font-medium">Working Hours</dt>
                <dd className="font-semibold text-neutral-900 text-right">{COMPANY_INFO.workingHours}</dd>
              </div>
            </dl>

            <div className="p-3.5 bg-sky-50/70 border border-sky-100 rounded-xl text-xs text-sky-900 space-y-1">
              <p className="font-bold">Regional Distribution Network</p>
              <p className="text-[11px] leading-relaxed text-sky-800">
                Regular dispatches to Patna, Muzaffarpur, Darbhanga, Begusarai, Samastipur, Gaya, Bhagalpur, Purnia, and all neighboring dairy unions.
              </p>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4">
            <h4 className="text-sm font-bold text-white">Direct Enquiry Desk</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Have questions about compatibility, bulk orders for cooperative societies, or repair parts?
            </p>
            <div className="flex flex-col gap-2.5 pt-1">
              <a
                href={`tel:${AUTHORIZED_PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call {AUTHORIZED_PHONE_DISPLAY}</span>
              </a>
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
