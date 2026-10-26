import React, { useState } from "react";
import { MessageSquare, Phone, X } from "lucide-react";
import { AUTHORIZED_PHONE_NUMBER, AUTHORIZED_PHONE_DISPLAY, buildGeneralWhatsAppUrl } from "../utils/whatsapp";

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <>
      {/* Floating Desktop & Tablet WhatsApp Launcher */}
      <aside 
        aria-label="Direct Contact Support"
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3"
      >
        {!tooltipDismissed && (
          <div className="relative bg-white px-3.5 py-2 rounded-xl shadow-lg border border-neutral-200 text-xs text-neutral-800 flex items-center gap-2 max-w-xs animate-in slide-in-from-right-4 duration-300">
            <div>
              <p className="font-semibold text-neutral-900">Need Quick Quotes?</p>
              <p className="text-[11px] text-neutral-600">Chat with Ayush Enterprises on WhatsApp</p>
            </div>
            <button
              onClick={() => setTooltipDismissed(true)}
              className="text-neutral-400 hover:text-neutral-600 p-0.5"
              aria-label="Dismiss quick chat hint"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-neutral-200 rotate-45" />
          </div>
        )}

        <a
          href={buildGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Chat with Ayush Enterprises on WhatsApp"
        >
          <MessageSquare className="w-7 h-7 fill-white" />
          <span className="sr-only">Chat on WhatsApp</span>
        </a>
      </aside>

      {/* Mobile Bottom Fixed Action Bar (Clean, low profile <10% height) */}
      <nav 
        aria-label="Mobile Quick Contact"
        className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 p-2.5 shadow-2xl flex items-center gap-2"
      >
        <a
          href={`tel:${AUTHORIZED_PHONE_NUMBER}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-bold transition-colors"
        >
          <Phone className="w-4 h-4 text-sky-700" />
          <span>Call Desk</span>
        </a>

        <a
          href={buildGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>WhatsApp Enquiry</span>
        </a>
      </nav>
    </>
  );
};
