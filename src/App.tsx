import React, { useState, useEffect, useCallback } from "react";
import { PRODUCTS, Product } from "./data/products";
import { PageView, ModalEnquiryState } from "./types";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { QuickEnquiryModal } from "./components/QuickEnquiryModal";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [modalState, setModalState] = useState<ModalEnquiryState>({ isOpen: false });

  // Handle URL hash changes for robust direct navigation and browser history
  const parseHash = useCallback(() => {
    const hash = window.location.hash.replace(/^#\/?/, "");
    
    if (hash.startsWith("product/")) {
      const productId = hash.replace("product/", "").trim();
      const matched = PRODUCTS.find((p) => p.id === productId);
      if (matched) {
        setSelectedProduct(matched);
        setCurrentPage("product-detail");
        return;
      }
    }

    if (hash === "about") {
      setCurrentPage("about");
      setSelectedProduct(null);
    } else if (hash === "products") {
      setCurrentPage("products");
      setSelectedProduct(null);
    } else if (hash === "contact") {
      setCurrentPage("contact");
      setSelectedProduct(null);
    } else {
      setCurrentPage("home");
      setSelectedProduct(null);
    }
  }, []);

  // Listen to hash changes and initial load
  useEffect(() => {
    parseHash();
    window.addEventListener("hashchange", parseHash);
    return () => window.removeEventListener("hashchange", parseHash);
  }, [parseHash]);

  // Navigate function that also updates hash
  const navigateTo = (page: PageView) => {
    setCurrentPage(page);
    if (page === "home") {
      window.location.hash = "#/";
    } else if (page === "about") {
      window.location.hash = "#about";
    } else if (page === "products") {
      window.location.hash = "#products";
    } else if (page === "contact") {
      window.location.hash = "#contact";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage("product-detail");
    window.location.hash = `#product/${product.id}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenEnquiryModal = (product?: Product) => {
    setModalState({
      isOpen: true,
      product
    });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false });
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 font-sans selection:bg-sky-900 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenGeneralEnquiry={() => handleOpenEnquiryModal()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === "home" && (
          <HomePage
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
            onOpenEnquiryModal={handleOpenEnquiryModal}
            onSelectCategory={(cat) => {
              setActiveCategory(cat);
              navigateTo("products");
            }}
          />
        )}

        {currentPage === "about" && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === "products" && (
          <ProductsPage
            onSelectProduct={handleSelectProduct}
            onOpenEnquiryModal={handleOpenEnquiryModal}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        )}

        {currentPage === "product-detail" && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => navigateTo("products")}
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
            onOpenEnquiryModal={handleOpenEnquiryModal}
          />
        )}

        {currentPage === "contact" && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
        }}
      />

      {/* Floating WhatsApp and Mobile Action Bar */}
      <FloatingWhatsApp />

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={modalState.isOpen}
        product={modalState.product}
        onClose={handleCloseModal}
      />
    </div>
  );
}
