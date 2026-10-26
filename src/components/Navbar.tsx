import React, { useState } from "react";
import { PageView } from "../types";
import { Phone, MessageSquare, Menu, X } from "lucide-react";
import { AUTHORIZED_PHONE_NUMBER, AUTHORIZED_PHONE_DISPLAY, buildGeneralWhatsAppUrl } from "../utils/whatsapp";

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenGeneralEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenGeneralEnquiry
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageView }[] = [
    { label: "Home", page: "home" },
    { label: "About Us", page: "about" },
    { label: "Products", page: "products" },
    { label: "Contact Us", page: "contact" }
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-md shrink-0 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-sky-900 flex items-center justify-center text-white font-bold text-lg shadow-sm border border-sky-800">
              AE
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-neutral-900 whitespace-nowrap">
                Ayush Enterprises
              </span>
              <span className="text-[11px] font-medium text-neutral-500 tracking-wider uppercase">
                Dairy & Industrial Solutions
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Single line, quiet hover) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? "text-sky-900 font-semibold"
                      : "hover:text-neutral-900"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-800 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Quick Connect */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${AUTHORIZED_PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-neutral-700 hover:text-sky-900 bg-neutral-100 hover:bg-neutral-200/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Call Ayush Enterprises directly"
            >
              <Phone className="w-3.5 h-3.5 text-sky-700" />
              <span>{AUTHORIZED_PHONE_DISPLAY}</span>
            </a>
            
            <a
              href={buildGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${AUTHORIZED_PHONE_NUMBER}`}
              className="p-2 text-sky-900 hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label="Call Ayush Enterprises"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-3">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-colors ${
                  currentPage === item.page
                    ? "bg-sky-50 text-sky-900 font-semibold"
                    : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2.5">
            <a
              href={`tel:${AUTHORIZED_PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-sky-950 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-700" />
              <span>Call: {AUTHORIZED_PHONE_DISPLAY}</span>
            </a>
            <a
              href={buildGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
