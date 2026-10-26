import React, { useState } from "react";
import { Product, PRODUCTS } from "../data/products";
import { PageView } from "../types";
import { LeadGeneratorForm } from "../components/LeadGeneratorForm";
import { 
  ArrowLeft, 
  MessageSquare, 
  Phone, 
  CheckCircle, 
  ShieldCheck, 
  Truck, 
  Share2, 
  Copy, 
  Check 
} from "lucide-react";
import { 
  AUTHORIZED_PHONE_NUMBER, 
  AUTHORIZED_PHONE_DISPLAY, 
  buildQuickProductWhatsAppUrl 
} from "../utils/whatsapp";

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onNavigate: (page: PageView) => void;
  onSelectProduct: (product: Product) => void;
  onOpenEnquiryModal: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
  onNavigate,
  onSelectProduct,
  onOpenEnquiryModal
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  // Find related products in the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Breadcrumb & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-sky-900 font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Catalog</span>
          </button>
          <span aria-hidden="true">/</span>
          <span>{product.category}</span>
          <span aria-hidden="true">/</span>
          <span className="text-neutral-900 font-medium truncate max-w-xs">{product.name}</span>
        </div>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 text-xs text-neutral-600 hover:text-neutral-900 bg-white border border-neutral-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          title="Share product link"
        >
          {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
          <span>{copiedLink ? "Link Copied!" : "Share"}</span>
        </button>
      </div>

      {/* Main Product Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Product Image Frame */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative aspect-4/3 sm:aspect-square bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-8 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            {product.inStock && (
              <div className="absolute top-4 left-4 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-md text-[11px] font-bold">
                In Stock & Ready for Dispatch
              </div>
            )}
          </div>

          {/* Quick Assurance Strip */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-neutral-200/80 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0" />
              <span className="font-medium text-neutral-800">100% Genuine Tested</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-neutral-200/80 flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span className="font-medium text-neutral-800">Fast Bihar Delivery</span>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Price, Description, Quick Actions */}
        <div className="lg:col-span-7 space-y-6">
          
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-1.5">
              <span>{product.category}</span>
              <span aria-hidden="true">·</span>
              <span>Min Order: {product.minOrder}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              {product.name}
            </h1>

            <p className="text-sm font-medium text-neutral-600 mt-2 leading-relaxed">
              {product.tagline}
            </p>
          </div>

          {/* Price Box */}
          <div className="p-4 bg-sky-50/70 border border-sky-100 rounded-xl flex items-baseline justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block">
                Reference Pricing
              </span>
              <div className="text-2xl font-extrabold text-sky-950 font-mono tabular-nums mt-0.5">
                {product.price}
              </div>
            </div>
            <span className="text-xs text-sky-800 font-medium">
              Taxes & transport extra as applicable
            </span>
          </div>

          {/* Core Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href={buildQuickProductWhatsAppUrl(product.name, product.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm hover:shadow"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={`tel:${AUTHORIZED_PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-neutral-800 hover:text-neutral-900 bg-white border border-neutral-300 hover:bg-neutral-50 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-700" />
              <span>Call: {AUTHORIZED_PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* Detailed Product Narrative */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider text-xs">
              Product Overview
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Features Bullet List */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider text-xs">
              Key Features & Benefits
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* Specifications Table Section */}
      <section className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase">
            Technical Parameters
          </span>
          <h2 className="text-xl font-bold text-neutral-900 mt-0.5">
            Complete Product Specifications
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Verified technical data based on official manufacturer documentation and test benchmarks.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50/70">
                <th className="py-3 px-4 font-bold text-neutral-800 w-1/3">Specification Parameter</th>
                <th className="py-3 px-4 font-bold text-neutral-800">Operational Value / Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {Object.entries(product.specifications).map(([key, value]) => (
                <tr key={key} className="hover:bg-neutral-50/50 transition-colors">
                  <td className="py-3 px-4 font-medium text-neutral-600 bg-neutral-50/20">{key}</td>
                  <td className="py-3 px-4 font-semibold text-neutral-900 font-mono text-xs">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recommended Applications */}
      <section className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs p-6 sm:p-8 space-y-4">
        <div>
          <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase">
            Operational Fit
          </span>
          <h2 className="text-xl font-bold text-neutral-900 mt-0.5">
            Recommended Commercial Applications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          {product.applications.map((app, idx) => (
            <div key={idx} className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 text-xs text-neutral-800 font-medium flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-sky-700" />
              <span>{app}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Lead Generator Form for this Specific Product */}
      <section className="space-y-4">
        <div>
          <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase">
            Direct Requirement Desk
          </span>
          <h2 className="text-2xl font-bold text-neutral-900 mt-0.5">
            Enquire for {product.name}
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Fill out your details to receive current pricing, discount on bulk quantities, and delivery timeframe to your location in Bihar.
          </p>
        </div>

        <LeadGeneratorForm initialProduct={product.name} />
      </section>

      {/* Related Products Carousel / Grid */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-neutral-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-neutral-900">
              Related Equipment in {product.category}
            </h3>
            <button
              onClick={() => onNavigate("products")}
              className="text-xs font-semibold text-sky-800 hover:underline cursor-pointer"
            >
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  onSelectProduct(rel);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group bg-white rounded-xl border border-neutral-200 p-4 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-4/3 bg-neutral-50 rounded-lg p-3 flex items-center justify-center overflow-hidden mb-3">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900 group-hover:text-sky-900 line-clamp-1">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-neutral-500 line-clamp-2 mt-1">
                    {rel.tagline}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-sky-950 font-mono">{rel.price}</span>
                  <span className="text-sky-700 group-hover:translate-x-1 transition-transform">
                    Details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
