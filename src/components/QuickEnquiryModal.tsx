import React from "react";
import { Product } from "../data/products";
import { LeadGeneratorForm } from "./LeadGeneratorForm";
import { X } from "lucide-react";

interface QuickEnquiryModalProps {
  isOpen: boolean;
  product?: Product;
  onClose: () => void;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  isOpen,
  product,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/70">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-800">
              Quick Price Enquiry
            </span>
            <h3 className="text-base font-bold text-neutral-900 truncate">
              {product ? product.name : "Product Quotation"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 overflow-y-auto">
          {product && (
            <div className="flex items-center gap-4 p-3 bg-sky-50/60 border border-sky-100 rounded-xl mb-4">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-16 h-16 object-contain rounded-lg bg-white border border-neutral-200 shrink-0"
              />
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-neutral-900 truncate">{product.name}</h4>
                <p className="text-xs text-neutral-600 line-clamp-1">{product.tagline}</p>
                <p className="text-xs font-bold text-sky-800 mt-0.5">{product.price}</p>
              </div>
            </div>
          )}

          <LeadGeneratorForm
            initialProduct={product?.name}
            compact
            className="p-0 border-0 shadow-none"
            onSuccess={() => {
              // keep modal open so user sees confirmation message
            }}
          />
        </div>
      </div>
    </div>
  );
};
