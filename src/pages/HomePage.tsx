import React from "react";
import { PRODUCTS, Product, COMPANY_INFO } from "../data/products";
import { PageView } from "../types";
import { LeadGeneratorForm } from "../components/LeadGeneratorForm";
import { 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  CheckCircle, 
  Cpu, 
  Printer, 
  FlaskConical, 
  Gauge, 
  ShieldCheck, 
  MapPin, 
  SlidersHorizontal 
} from "lucide-react";
import { AUTHORIZED_PHONE_NUMBER, AUTHORIZED_PHONE_DISPLAY, buildQuickProductWhatsAppUrl, buildGeneralWhatsAppUrl } from "../utils/whatsapp";

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onSelectProduct: (product: Product) => void;
  onOpenEnquiryModal: (product?: Product) => void;
  onSelectCategory: (category: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onOpenEnquiryModal,
  onSelectCategory
}) => {
  // Select top 6 featured products
  const featuredProducts = PRODUCTS.slice(0, 6);

  const categories = [
    {
      title: "Milk Analyzers",
      count: "7 Models",
      desc: "Ultrasonic digital testers for instant Fat, SNF, and density measurement",
      categoryName: "Milk Analyzers",
      icon: FlaskConical
    },
    {
      title: "Dairy Automation",
      count: "AMCU & DPU",
      desc: "Integrated weighing, testing, and farmer billing computing stations",
      categoryName: "Dairy Automation Systems",
      icon: Cpu
    },
    {
      title: "Spare Parts & Sensors",
      count: "Genuine OEM",
      desc: "Ultrasonic sensors, motherboard PCBs, and replacement components",
      categoryName: "Spare Parts & Sensors",
      icon: Gauge
    },
    {
      title: "Thermal Billing Rolls",
      count: "55 & 70 GSM",
      desc: "Top-coated direct thermal paper for POS, AMCU, and swipe terminals",
      categoryName: "Thermal Paper & POS Rolls",
      icon: Printer
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-neutral-200 bg-linear-to-b from-sky-50/40 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Regional trust marker */}
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-800">
                <MapPin className="w-4 h-4 text-sky-700" />
                <span>Samastipur, Bihar · Serving Dairy Centers Statewide</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.15]" style={{ textWrap: "balance" }}>
                Precision Milk Testing & Dairy Automation Solutions for Bihar
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
                Ayush Enterprises is a trusted supplier of laboratory-grade ultrasonic milk analyzers (Dyna, Ekomilk, Lactoscan), turnkey AMCU systems, Balaji DPUs, and thermal billing rolls. Empowering dairy cooperatives, chilling centers, and milk societies with fast, transparent testing.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate("products")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-sky-900 hover:bg-sky-800 rounded-xl transition-all shadow-sm hover:shadow cursor-pointer"
                >
                  <span>Explore Product Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={buildGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm hover:shadow"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${AUTHORIZED_PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-300 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-700" />
                  <span>{AUTHORIZED_PHONE_DISPLAY}</span>
                </a>
              </div>

              {/* Key Trust Checkmarks */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-neutral-600 border-t border-neutral-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Genuine Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ready Stock in Samastipur</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>On-Site Support & Spares</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-2xl border border-neutral-200/90 shadow-lg p-6 space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-500">
                      Flagship Hardware
                    </span>
                    <h3 className="text-lg font-bold text-neutral-900">
                      Dyna Milk Analyzer
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    ₹34,000 / Piece
                  </span>
                </div>

                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100 flex items-center justify-center p-4">
                  <img
                    src="/images/products/dyna-milk-analyzer.jpeg"
                    alt="Dyna Milk Analyzer"
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200/60">
                    <p className="text-[10px] uppercase font-semibold text-neutral-500">Speed</p>
                    <p className="text-xs font-bold text-neutral-900 mt-0.5">100 s/hr</p>
                  </div>
                  <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200/60">
                    <p className="text-[10px] uppercase font-semibold text-neutral-500">Testing</p>
                    <p className="text-xs font-bold text-neutral-900 mt-0.5">Fat + SNF</p>
                  </div>
                  <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200/60">
                    <p className="text-[10px] uppercase font-semibold text-neutral-500">Chassis</p>
                    <p className="text-xs font-bold text-neutral-900 mt-0.5">Stainless Steel</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => {
                      const prod = PRODUCTS.find(p => p.id === "dyna-milk-analyzer");
                      if (prod) onSelectProduct(prod);
                    }}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors text-center cursor-pointer"
                  >
                    View Full Specs
                  </button>
                  <button
                    onClick={() => {
                      const prod = PRODUCTS.find(p => p.id === "dyna-milk-analyzer");
                      onOpenEnquiryModal(prod);
                    }}
                    className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Get Best Price</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Categories Bento Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase">
              Product Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mt-1">
              Complete Dairy Procurement Equipment
            </h2>
          </div>
          <button
            onClick={() => onNavigate("products")}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-900 hover:text-sky-700 transition-colors cursor-pointer"
          >
            <span>Browse Full Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.title}
                onClick={() => {
                  onSelectCategory(cat.categoryName);
                  onNavigate("products");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group p-6 bg-white rounded-2xl border border-neutral-200/90 shadow-xs hover:border-sky-700/60 hover:shadow-md transition-all text-left flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-sky-900 text-sky-800 group-hover:text-white flex items-center justify-center transition-colors mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-sky-900 transition-colors">
                      {cat.title}
                    </h3>
                    <span className="text-xs text-neutral-500 font-medium">{cat.count}</span>
                  </div>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-1 text-xs font-semibold text-sky-800 group-hover:translate-x-1 transition-transform">
                  <span>View Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase">
              Marquee Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mt-1">
              Featured Dairy & Testing Equipment
            </h2>
            <p className="text-xs text-neutral-600 mt-1">
              Genuine commercial units backed by manufacturer warranties and regional delivery
            </p>
          </div>
          <button
            onClick={() => onNavigate("products")}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-900 hover:text-sky-700 transition-colors cursor-pointer"
          >
            <span>View All {PRODUCTS.length} Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-neutral-200/90 shadow-xs hover:shadow-md transition-all flex flex-col overflow-hidden"
            >
              {/* Product Image Area */}
              <div 
                onClick={() => onSelectProduct(product)}
                className="relative aspect-4/3 bg-neutral-50 p-6 flex items-center justify-center cursor-pointer border-b border-neutral-100 overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback container
                    const target = e.currentTarget;
                    target.style.display = "none";
                  }}
                />
                <div className="absolute top-3 left-3 text-[11px] font-semibold text-neutral-500">
                  {product.category}
                </div>
                {product.priceNumeric && (
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-neutral-200 text-xs font-bold text-neutral-900 shadow-2xs tabular-nums">
                    {product.price}
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="text-base font-bold text-neutral-900 hover:text-sky-900 transition-colors cursor-pointer line-clamp-1"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                {/* Key Spec Snippets */}
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                  {Object.entries(product.specifications).slice(0, 2).map(([key, val]) => (
                    <div key={key} className="bg-neutral-50 p-2 rounded-lg border border-neutral-100">
                      <span className="text-neutral-400 block truncate">{key}</span>
                      <span className="font-semibold text-neutral-800 truncate block mt-0.5">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 rounded-lg transition-colors text-center cursor-pointer"
                  >
                    Specifications
                  </button>
                  <button
                    onClick={() => onOpenEnquiryModal(product)}
                    className="flex-1 py-2 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Get Best Price</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Ayush Enterprises (Editorial 4-Pillar Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 border border-neutral-800">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold text-sky-400 tracking-wider uppercase">
              Proven Dairy Partner
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 text-white">
              Why Dairy Cooperatives & Chilling Hubs Choose Ayush Enterprises
            </h2>
            <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
              Established in 2024 in Samastipur, Bihar, we combine tested measurement instruments with direct field support and ready local inventory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-sky-400">01. Accuracy & Reliability</span>
              <h3 className="text-base font-bold text-white">Certified Laboratory Precision</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Tested against traditional Gerber chemical standards, our ultrasonic analyzers deliver repeatable Fat and SNF testing without hazardous acid reagents.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-sky-400">02. Genuine Spares</span>
              <h3 className="text-base font-bold text-white">Ready Motherboards & Sensors</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We maintain genuine replacement PCBs, ultrasonic transducers, and peristaltic pump components in Samastipur, minimizing dairy collection downtime.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-sky-400">03. Automated Billing</span>
              <h3 className="text-base font-bold text-white">Transparent Farmer Payouts</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Our AMCU units and Balaji DPUs synchronize weighing and testing automatically, generating printed bilingual slips and eliminating calculation disputes.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-sky-400">04. Bihar-Wide Delivery</span>
              <h3 className="text-base font-bold text-white">Direct Road & Rail Logistics</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Fast, secure delivery across all 38 districts of Bihar with dedicated dispatch coordination, phone guidance, and verified packaging.
              </p>
            </div>

          </div>

          {/* Quick contact strip inside dark section */}
          <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-400">
              Need technical advice on AMCU setup or analyzer selection?
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${AUTHORIZED_PHONE_NUMBER}`}
                className="px-4 py-2 text-xs font-bold text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
              >
                Call: {AUTHORIZED_PHONE_DISPLAY}
              </a>
              <a
                href={buildGeneralWhatsAppUrl("I would like advice on selecting a milk analyzer for our dairy center")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>Chat with Specialist</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Integrated Lead Generator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase">
              Immediate Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Get an Official Quotation for Your Dairy Center
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Whether you need a single Dyna Milk Analyzer, replacement PCB boards, or a bulk order of thermal billing rolls, submit your details. Your enquiry will be immediately compiled and transmitted directly to Ayush Enterprises Bihar via WhatsApp.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-neutral-200/80 shadow-2xs">
                <MapPin className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Office & Dispatch Hub</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-neutral-200/80 shadow-2xs">
                <Phone className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Authorized Phone Hotline</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">{AUTHORIZED_PHONE_DISPLAY}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-neutral-200/80 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Business Integrity</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">Trader & Retailer registered in Samastipur, Bihar (Est. 2024)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <LeadGeneratorForm />
          </div>

        </div>
      </section>

    </div>
  );
};
