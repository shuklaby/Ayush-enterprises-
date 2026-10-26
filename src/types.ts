import { Product } from "./data/products";

export type PageView = "home" | "about" | "products" | "product-detail" | "contact";

export interface EnquiryFormData {
  fullName: string;
  mobileNumber: string;
  companyName: string;
  productInterestedIn: string;
  quantity: string;
  message: string;
}

export interface ModalEnquiryState {
  isOpen: boolean;
  product?: Product;
}
