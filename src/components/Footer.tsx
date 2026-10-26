import React from "react";
import { PageView } from "../types";
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "../data/products";
import { AUTHORIZED_PHONE_NUMBER, AUTHORIZED_PHONE_DISPLAY, buildGeneralWhatsAppUrl } from "../utils/whatsapp";

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onSelectCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCat = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    onNavigate("products");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t border-neutral-800">
      {/* Top Banner Strip */}
      <div className="border-b border-neutral-800/80 bg-neutral-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-900/60 border border-sky-700/50 flex items-center justify-center text-sky-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Genuine Dairy Equipment</p>
                <p className="text-xs text-neutral-400">Tested ultrasonic analyzers & certified spares</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-900/40 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Direct WhatsApp Support</p>
                <p className="text-xs text-neutral-400">Instant quotes & availability confirmations</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-900/40 border border-amber-700/50 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Operating in Bihar</p>
                <p className="text-xs text-neutral-400">Dispatch hub in Samastipur covering all districts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-900 flex items-center justify-center text-white font-bold text-lg border border-sky-700">
                AE
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">Ayush Enterprises</span>
                <p className="text-[11px] text-sky-400 font-medium tracking-wider uppercase">Samastipur, Bihar</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-neutral-400">
              Established in 2024, Ayush Enterprises is committed to delivering quality, accuracy, and durability in milk analyzers, automated AMCU collection systems, and dairy supplies for farmers, cooperatives, and chilling plants across Bihar.
            </p>
            <div className="pt-2 text-xs text-neutral-500">
              <span className="text-neutral-400 font-medium">Business Nature:</span> Trader, Wholesaler & Retailer
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav("home")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("about")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us & Background
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("products")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Products & Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("contact")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Request Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Product Categories</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleCat("Milk Analyzers")}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Milk Analyzers (Dyna, Ekomilk)</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCat("Dairy Automation Systems")}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center justify-between w-full"
                >
                  <span>AMCU Full Sets & Balaji DPUs</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCat("Spare Parts & Sensors")}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Analyzer PCBs & Ultrasonic Sensors</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCat("Thermal Paper & POS Rolls")}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Thermal Billing & POS Paper Rolls</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCat("Dairy Utensils & Strainers")}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Plastic & SS Milk Strainers</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Authorized Contact</h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`tel:${AUTHORIZED_PHONE_NUMBER}`}
                  className="hover:text-white transition-colors font-medium text-neutral-300"
                >
                  {AUTHORIZED_PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={buildGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-emerald-400 font-medium"
                >
                  Chat on WhatsApp ({AUTHORIZED_PHONE_DISPLAY})
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Ayush Enterprises Bihar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Samastipur, Bihar · India</span>
            <span aria-hidden="true">·</span>
            <span>Customer Hotline: {AUTHORIZED_PHONE_DISPLAY}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
