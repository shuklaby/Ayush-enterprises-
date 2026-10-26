import React, { useState, useMemo } from "react";
import { PRODUCTS, Product } from "../data/products";
import { PageView } from "../types";
import { 
  Search, 
  SlidersHorizontal, 
  MessageSquare, 
  ArrowRight, 
  Check, 
  RotateCcw,
  Tag,
  Boxes
} from "lucide-react";
import { buildQuickProductWhatsAppUrl } from "../utils/whatsapp";

interface ProductsPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenEnquiryModal: (product?: Product) => void;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  onOpenEnquiryModal,
  activeCategory,
  onSelectCategory
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "name">("featured");

  const categories = [
    "All",
    "Milk Analyzers",
    "Dairy Automation Systems",
    "Spare Parts & Sensors",
    "Thermal Paper & POS Rolls",
    "Dairy Utensils & Strainers"
  ];

  // Filter & Search Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        Object.values(item.specifications).some((s) => s.toLowerCase().includes(q)) ||
        item.applications.some((a) => a.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-desc") {
        return (b.priceNumeric || 0) - (a.priceNumeric || 0);
      }
      if (sortBy === "price-asc") {
        return (a.priceNumeric || 0) - (b.priceNumeric || 0);
      }
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="space-y-10 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wider uppercase">
          <Boxes className="w-4 h-4 text-sky-700" />
          <span>Product Catalog & Solutions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight" style={{ textWrap: "balance" }}>
          Dairy Quality Testing & Automation Equipment
        </h1>
        <p className="text-sm text-neutral-600 leading-relaxed">
          Explore our certified range of ultrasonic milk analyzers, data processing units, AMCU collection stations, thermal billing paper rolls, and original spare components.
        </p>
      </div>

      {/* Control Bar: Search & Category Tabs */}
      <div className="space-y-4 bg-white p-5 rounded-2xl border border-neutral-200/90 shadow-2xs">
        
        {/* Search input & Sort dropdown */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name, specification, or category..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700 p-1"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <label htmlFor="sortBy" className="text-xs font-medium text-neutral-500 whitespace-nowrap">
              Sort by:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
            >
              <option value="featured">Featured Catalog</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

        </div>

        {/* Category Tabs (Segmented functional buttons) */}
        <div className="pt-2 border-t border-neutral-100 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-sky-900 text-white shadow-xs"
                    : "bg-neutral-100 hover:bg-neutral-200/70 text-neutral-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

      </div>

      {/* Results Count & Active Filters Indicator */}
      <div className="flex items-center justify-between text-xs text-neutral-500">
        <p>
          Showing <span className="font-bold text-neutral-900">{filteredProducts.length}</span> of {PRODUCTS.length} products
          {activeCategory !== "All" && <span> in <strong className="text-neutral-800">{activeCategory}</strong></span>}
          {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
        </p>

        {(activeCategory !== "All" || searchQuery) && (
          <button
            onClick={() => {
              onSelectCategory("All");
              setSearchQuery("");
            }}
            className="inline-flex items-center gap-1 text-sky-800 hover:underline cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-neutral-200 p-12 text-center space-y-3">
          <p className="text-base font-bold text-neutral-800">No products found</p>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto">
            We couldn't find any items matching your search criteria. Try a different search term or reset filters.
          </p>
          <button
            onClick={() => {
              onSelectCategory("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-sky-900 rounded-lg hover:bg-sky-800 transition-colors"
          >
            Show All Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-neutral-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col overflow-hidden"
            >
              {/* Product Image */}
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
                    e.currentTarget.style.display = "none";
                  }}
                />
                
                {/* Metadata: Unboxed quiet category tag */}
                <div className="absolute top-3 left-3 text-[11px] font-semibold text-neutral-500">
                  {product.category}
                </div>

                {/* Price Display */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-neutral-200 text-xs font-bold text-neutral-900 shadow-2xs font-mono tabular-nums">
                  {product.price}
                </div>
              </div>

              {/* Product Body */}
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

                {/* Key Spec Snippets (3 specs) */}
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  {Object.entries(product.specifications).slice(0, 2).map(([key, val]) => (
                    <div key={key} className="bg-neutral-50 p-2 rounded-lg border border-neutral-100">
                      <span className="text-neutral-400 block truncate">{key}</span>
                      <span className="font-semibold text-neutral-800 truncate block mt-0.5">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons: Detail & WhatsApp */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 rounded-lg transition-colors text-center cursor-pointer"
                  >
                    View Details & Specs
                  </button>

                  <button
                    onClick={() => onOpenEnquiryModal(product)}
                    className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Get Best Price</span>
                  </button>
                </div>

                {/* Direct 1-tap WhatsApp Link */}
                <a
                  href={buildQuickProductWhatsAppUrl(product.name, product.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 hover:underline pt-1"
                >
                  Quick Enquire on WhatsApp →
                </a>

              </div>

            </div>
          ))}
        </div>
      )}

      {/* Catalog Help Callout */}
      <div className="bg-sky-50 border border-sky-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-base font-bold text-sky-950">
            Looking for Custom AMCU Sets or Bulk Paper Orders?
          </h3>
          <p className="text-xs text-sky-800 mt-1 max-w-xl">
            We provide customized pricing for village cooperative societies, bulk roll cartons, and complete dairy automation installations across Bihar.
          </p>
        </div>
        <button
          onClick={() => onOpenEnquiryModal()}
          className="px-5 py-2.5 text-xs font-bold text-white bg-sky-900 hover:bg-sky-800 rounded-xl transition-colors whitespace-nowrap cursor-pointer shadow-xs"
        >
          Submit Custom Requirement
        </button>
      </div>

    </div>
  );
};
