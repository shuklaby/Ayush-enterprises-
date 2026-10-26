export interface ProductSpecification {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  category: "Milk Analyzers" | "Dairy Automation Systems" | "Spare Parts & Sensors" | "Thermal Paper & POS Rolls" | "Dairy Utensils & Strainers";
  tagline: string;
  price: string;
  priceNumeric?: number;
  image: string;
  description: string;
  features: string[];
  specifications: ProductSpecification;
  applications: string[];
  inStock: boolean;
  minOrder: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "dyna-milk-analyzer",
    name: "Dyna Milk Analyzer",
    category: "Milk Analyzers",
    tagline: "High-accuracy ultrasonic milk analyzer for rapid fat, SNF, and density testing",
    price: "₹34,000 / Piece",
    priceNumeric: 34000,
    image: "/images/products/dyna-milk-analyzer.jpeg",
    description: "The Dyna Milk Analyzer is a high-precision, automatic ultrasonic testing instrument engineered specifically for dairy cooperatives, milk collection centers, and chilling plants. It delivers instant, repeatable analysis of key milk parameters including Fat, SNF (Solid Not Fat), and corrected lactometer density within seconds, minimizing manual testing errors.",
    features: [
      "Ultra-fast testing cycle (under 40 seconds per sample)",
      "High throughput of up to 100 samples per hour",
      "Sturdy stainless steel housing built for rigorous daily dairy center usage",
      "Backlit LCD display for clear visibility in all lighting conditions",
      "Low sample volume requirement (only 20 ml per test)",
      "RS232 interface for seamless computer and printer connectivity"
    ],
    specifications: {
      "Sample Throughput": "100 samples/hr",
      "Parameters Tested": "Fat + SNF + Density",
      "Capacity": "100 samples/hour",
      "Automation Grade": "Automatic",
      "Material": "Stainless Steel",
      "Power Supply": "220V AC",
      "Sample Volume": "20 ml",
      "Display Type": "LCD Display",
      "Dimensions": "105 x 300 x 250 mm",
      "Country of Origin": "Made in India"
    },
    applications: [
      "Village Milk Collection Centers (VMC)",
      "Dairy Cooperative Societies",
      "Private Dairy Chilling Plants",
      "Milk Testing Laboratories",
      "Livestock & Dairy Farms"
    ],
    inStock: true,
    minOrder: "1 Piece"
  },
  {
    id: "ekomilk-bond-ultrasonic",
    name: "Ekomilk Bond Ultrasonic Milk Analyzer",
    category: "Milk Analyzers",
    tagline: "Premium ultrasonic multi-parameter analyzer with integrated printer and data logging",
    price: "₹57,000 / Piece",
    priceNumeric: 57000,
    image: "/images/products/ekomilk-bond-ultrasonic.png",
    description: "The Ekomilk Bond Ultrasonic Milk Analyzer is an industry-benchmark testing device built for automated milk collection and testing environments. Equipped with multi-parameter diagnostic sensors, it tests Fat, SNF, Added Water, Density, Freezing Point, and Protein with 100% accuracy, providing on-the-spot thermal printouts for farmers.",
    features: [
      "Comprehensive multi-parameter analysis: Fat, SNF, Added Water & Density",
      "Built-in printer support with automatic receipt generation",
      "Rugged ABS plastic and composite body for long lifespan",
      "Triple connectivity: RS232, USB, and Thermal Printer interface",
      "Temperature compensation system for reliable readings from 5°C to 45°C",
      "Low power consumption with standard 220V AC operation"
    ],
    specifications: {
      "Sample Throughput": "100 samples/hr",
      "Parameters Tested": "Multi-Parameter (Fat, SNF, Water, Density)",
      "Automation Grade": "Automatic",
      "Brand": "Ekomilk",
      "Material": "ABS Plastic / High-grade Composite",
      "Power Supply": "220V AC",
      "Sample Volume": "20 ml",
      "Display Type": "High-Contrast LCD",
      "Data Output": "RS232, Printer, USB",
      "Dimensions": "530 x 320 x 290 mm",
      "Operating Temperature": "5°C – 45°C",
      "Accuracy": "100% Laboratory Grade"
    },
    applications: [
      "Automatic Milk Collection Units (AMCU)",
      "Dairy Processing Hubs",
      "District Dairy Cooperative Unions",
      "Commercial Dairy Farming Operations"
    ],
    inStock: true,
    minOrder: "1 Piece"
  },
  {
    id: "lactoscan-milk-analyzer",
    name: "Lactoscan Milk Analyzer",
    category: "Milk Analyzers",
    tagline: "Compact, robust digital analyzer trusted globally for fast multi-parameter milk screening",
    price: "₹32,000 / Piece",
    priceNumeric: 32000,
    image: "/images/products/lactoscan-milk-analyzer.jpeg",
    description: "Lactoscan Milk Analyzer is a compact, user-friendly digital measuring device designed for fast and accurate milk evaluation. Built with a stainless steel chassis and ultrasonic measurement chamber, it delivers results without chemical reagents, making it cost-effective and environmentally friendly.",
    features: [
      "Fast 60–90 samples per hour processing capacity",
      "No hazardous chemicals or acids needed for testing",
      "Compact footprint fitting easily on tight dairy collection counters",
      "Simple two-button calibration and cleaning cycle",
      "Supports cow, buffalo, and mixed milk modes"
    ],
    specifications: {
      "Sample Throughput": "90 samples/hr",
      "Parameters Tested": "Multi Parameter",
      "Capacity": "60 samples/hour",
      "Automation Grade": "Automatic",
      "Brand Name": "Lactoscan",
      "Material": "Stainless Steel",
      "Power Supply": "220V AC",
      "Dimensions": "100 x 223 x 216 mm",
      "Usage": "Laboratory & Dairy Collection Use"
    },
    applications: [
      "Milk Procurement Centers",
      "Small to Mid-Scale Dairy Plants",
      "Veterinary & Agricultural Labs",
      "Farmer Producer Organizations (FPOs)"
    ],
    inStock: true,
    minOrder: "1 Piece"
  },
  {
    id: "advance-milk-analyzer",
    name: "Advance Milk Analyzer Plus",
    category: "Milk Analyzers",
    tagline: "High-capacity ultrasonic testing unit engineered for heavy-duty morning and evening collection cycles",
    price: "₹35,000 / Piece",
    priceNumeric: 35000,
    image: "/images/products/advance-milk-analyzer.jpeg",
    description: "The Advance Milk Analyzer Plus offers enhanced processing speed handling up to 120 samples per hour, making it ideal for high-volume rural collection centers where rapid queues must be cleared quickly during morning and evening procurement shifts.",
    features: [
      "High speed throughput: up to 120 samples/hr",
      "Stainless steel body resistant to moisture and milk splashes",
      "Direct digital readout of Fat, SNF, and Lactometer reading",
      "Standard 220V AC input with voltage fluctuation tolerance",
      "Automatic cleaning prompt to ensure sensor hygiene"
    ],
    specifications: {
      "Sample Throughput": "120 samples/hr",
      "Parameters Tested": "Fat + SNF + Density",
      "Capacity": "90 samples/hour",
      "Automation Grade": "Automatic",
      "Brand Name": "Advance Milk Analyzer Plus",
      "Material": "Stainless Steel",
      "Voltage": "220V AC",
      "Dimensions": "270 x 190 x 270 mm"
    },
    applications: [
      "High-Volume Rural Milk Collection Centers",
      "Cooperative Dairy Mandis",
      "Bulk Milk Chilling Units (BMC)",
      "Dairy Distribution Hubs"
    ],
    inStock: true,
    minOrder: "1 Piece"
  },
  {
    id: "ekomilk-ultra-milk-analyzer",
    name: "Ekomilk Ultra Milk Analyzer",
    category: "Milk Analyzers",
    tagline: "Dependable, economical automatic ultrasonic analyzer for village dairy setups",
    price: "₹32,000 / Piece",
    priceNumeric: 32000,
    image: "/images/products/ekomilk-ultra-milk-analyzer.jpg",
    description: "The Ekomilk Ultra is a practical, budget-conscious milk testing solution engineered with renowned Ekomilk ultrasonic technology. Ideal for emerging village centers needing dependable results for fair milk pricing based on fat and SNF content.",
    features: [
      "Standard 90–100 samples/hr throughput",
      "Sturdy shock-resistant plastic construction",
      "Low maintenance with straightforward peristaltic cleaning system",
      "Accurate calibration against Gerber chemical method"
    ],
    specifications: {
      "Sample Throughput": "100 samples/hr",
      "Parameters Tested": "Fat + SNF + Density",
      "Capacity": "90 samples/hour",
      "Automation Grade": "Automatic",
      "Brand": "Ekomilk",
      "Material": "Reinforced ABS Plastic",
      "Voltage": "220 Volts AC",
      "Dimensions": "95 x 300 x 250 mm"
    },
    applications: [
      "Primary Milk Collection Centers",
      "Self-Help Groups (SHGs)",
      "Rural Dairy Centers",
      "Dairy Retail Outlets"
    ],
    inStock: true,
    minOrder: "1 Piece"
  },
  {
    id: "essae-milk-analyzer",
    name: "Essae Milk Analyzer",
    category: "Milk Analyzers",
    tagline: "Trusted laboratory-grade milk tester renowned for stable long-term calibration",
    price: "Price on Request",
    image: "/images/products/essae-milk-analyzer.jpg",
    description: "The Essae Milk Analyzer is recognized across India for reliable electronics, robust build, and low-drift calibration. Suitable for laboratory quality assurance and standard dairy receiving stations.",
    features: [
      "Stable calibration curve requiring infrequent adjustment",
      "High durability ABS body with chemical-resistant faceplate",
      "Works smoothly with regional power grids (160V – 240V range)",
      "Dual channel testing options"
    ],
    specifications: {
      "Sample Throughput": "80 samples/hr",
      "Parameters Tested": "Fat + SNF + Density",
      "Capacity": "40 samples/hour",
      "Automation Grade": "Semi-Automatic / Manual Injection",
      "Brand": "Essae",
      "Material": "ABS Plastic",
      "Voltage": "160V – 240V AC",
      "Dimensions": "138 x 265 x 276 mm"
    },
    applications: [
      "Dairy QA Labs",
      "Milk Booths",
      "Dairy Technical Colleges",
      "Quality Inspection Points"
    ],
    inStock: true,
    minOrder: "1 Piece"
  },
  {
    id: "dyna-omni-bond-milk-analyzer",
    name: "Dyna Omni Bond Milk Analyzer",
    category: "Milk Analyzers",
    tagline: "Heavy-duty multi-parameter analyzer with integrated printer support and high-speed processor",
    price: "Price on Request",
    image: "/images/products/dyna-omni-bond-milk-analyzer.jpg",
    description: "The Dyna Omni Bond brings together ultrasonic precision, rapid sample flushing, and direct printer interfacing. Designed for commercial dairy setups demanding uninterrupted service during peak milk inflow seasons.",
    features: [
      "Integrated printer support for instant farmer slips",
      "Fast 10 ml micro-sample intake",
      "Multi-parameter testing including water adulteration check",
      "Dual communication ports for weighing scale and DPU connectivity"
    ],
    specifications: {
      "Sample Throughput": "100 samples/hr",
      "Parameters Tested": "Multi Parameter",
      "Automation Grade": "Automatic",
      "Sample Volume": "10 ml",
      "Power Supply": "220V AC",
      "Display Type": "LCD",
      "Data Output": "Printer / RS232"
    },
    applications: [
      "Integrated AMCU Dairy Booths",
      "Commercial Milk Processing Dairies",
      "Large Farmer Cooperatives"
    ],
    inStock: true,
    minOrder: "1 Piece"
  },
  {
    id: "amcu-full-set",
    name: "AMCU Full Set (Automatic Milk Collection Unit)",
    category: "Dairy Automation Systems",
    tagline: "Complete 5-in-1 turnkey automated dairy collection station with weighing, testing, and billing",
    price: "Price on Request",
    image: "/images/products/amcu-full-set.jpeg",
    description: "The AMCU Full Set from Ayush Enterprises is an all-in-one commercial solution for modernized milk collection centers. It integrates the milk analyzer, digital weighing scale, data processor (DPU), printer, and remote display into a synchronized system that automatically calculates farmer payouts based on fat/SNF rate charts.",
    features: [
      "Complete 5-piece hardware set ready for plug-and-play installation",
      "Automated weight and milk quality synchronization",
      "Instant bilingual receipt printing for transparent farmer accounting",
      "Prevents manual data tampering and reduces calculation disputes",
      "High capacity up to 100 milk donors per hour"
    ],
    specifications: {
      "Unit Type": "Automatic MCU Machine (Full Turnkey Set)",
      "Set Contains": "5 Items (Analyzer, DPU, Scale, Printer, Display)",
      "Body Material": "Stainless Steel & Rugged Industrial Chassis",
      "Milk Measurement": "Integrated Milk Meter / Weighing Scale",
      "Capacity Per Hour": "100 Samples / Transactions",
      "Equipment Type": "Weighing, Analysis & Billing System",
      "AC Power Supply Voltage": "220V AC, 50Hz",
      "Country of Origin": "Made in India"
    },
    applications: [
      "Cooperative Dairy Society Automation",
      "Private Milk Procurement Centers",
      "Government Dairy Development Projects",
      "Chilling Center Intake Depots"
    ],
    inStock: true,
    minOrder: "1 Set"
  },
  {
    id: "balaji-dpu",
    name: "Balaji Data Processing Unit (DPU)",
    category: "Dairy Automation Systems",
    tagline: "Industrial micro-controller DPU storing up to 2 years of farmer data with automated billing calculations",
    price: "Price on Request",
    image: "/images/products/balaji-dpu.jpeg",
    description: "The Balaji Data Processing Unit is a dedicated milk collection computer built for rural electrical environments. It directly connects to the digital weighing scale and ultrasonic milk analyzer, computes price calculations in real-time using milk rate charts, and stores comprehensive member records for up to 2 years.",
    features: [
      "Stores up to 2 years of complete farmer transaction records",
      "Supports both volume (liters) and weight (kg) measurement modes",
      "Preloaded rate matrix engine supporting shift-wise pricing",
      "RS232 interface for seamless scale and printer sync",
      "High operational capacity: 5,000 Litres/Hour processing rate",
      "Reliable internal memory backup preventing data loss during blackouts"
    ],
    specifications: {
      "Unit Type": "Data Processor / Dairy Billing Controller",
      "Capacity": "5,000 Litres / Hour Throughput",
      "Farmers Data Storage": "Up to 2 Years Internal Non-Volatile Memory",
      "Milk Measurement": "Both Volume (Ltr) and Weight (Kg)",
      "Automation Grade": "Fully Automatic (PLC / Microcontroller)",
      "Connectivity": "RS232 Serial Communication",
      "Equipment Type": "Milk Billing & Collection Management System",
      "Power Input": "Standard AC Line / Inverter Compatible"
    },
    applications: [
      "Village Milk Collection Societies",
      "Cooperative Societies Billing Counters",
      "Milk Chilling Depots",
      "Milk Procurement Weigh Bridges"
    ],
    inStock: true,
    minOrder: "1 Piece"
  },
  {
    id: "lactoscan-analyzer-pcb",
    name: "Lactoscan Milk Analyzer PCB",
    category: "Spare Parts & Sensors",
    tagline: "Original replacement motherboard circuit for Lactoscan milk testing machines",
    price: "Price on Request",
    image: "/images/products/lactoscan-analyzer-pcb.png",
    description: "Genuine OEM replacement Printed Circuit Board (PCB) for Lactoscan ultrasonic milk analyzers. Engineered for rapid signal processing, accurate sensor calibration retention, and reliable multi-parameter output in demanding service conditions.",
    features: [
      "Direct drop-in replacement for worn or damaged analyzer motherboards",
      "Pre-tested for 100 samples/hr processing speed",
      "High-grade aluminum backing and heat-dissipation traces",
      "Pre-configured communication lines for LCD and RS232 ports"
    ],
    specifications: {
      "Sample Throughput": "100 samples/hr",
      "Parameters Tested": "Multi-Parameter (Fat, SNF, Density, Water)",
      "Automation Grade": "Automatic",
      "Capacity": "100 samples/hour",
      "Usage/Application": "Laboratory & Service Center Use",
      "Number of Layers": "1 Layer High-Spec PCB",
      "Material": "Aluminum / FR4 Electronic Substrate"
    },
    applications: [
      "Dairy Equipment Service Centers",
      "Analyzer Repair & Maintenance",
      "Society Hardware Upgrades"
    ],
    inStock: true,
    minOrder: "1 Piece"
  },
  {
    id: "milk-analyzer-sensor",
    name: "Milk Analyzer Ultrasonic Sensor",
    category: "Spare Parts & Sensors",
    tagline: "High-sensitivity ultrasonic measuring cell and temperature sensor for milk analyzers",
    price: "Price on Request",
    image: "/images/products/milk-analyzer-sensor.png",
    description: "High-accuracy ultrasonic sensor module engineered for replacement in standard ultrasonic milk analyzers. Features integrated temperature compensation to ensure accurate acoustic velocity readings across fluctuating milk sample temperatures.",
    features: [
      "Precise ultrasonic sound-velocity transducer chamber",
      "Integrated fast-response temperature compensation sensor",
      "Sample capacity of 90–100 samples/hour",
      "Micro-volume intake chamber (20 ml) with easy flush design"
    ],
    specifications: {
      "Sample Throughput": "100 samples/hr",
      "Sensor Type": "Ultrasonic Transducer + Temperature Sensor",
      "Parameters Tested": "Multi Parameter",
      "Automation Grade": "Automatic",
      "Capacity": "90 samples/hour",
      "Sensing Technology": "High-Frequency Ultrasonic Velocity Chamber",
      "Sample Volume": "20 ml",
      "Material": "Medical-Grade Stainless Steel & Piezoelectric Crystals"
    },
    applications: [
      "Routine Analyzer Maintenance & Calibration Restoration",
      "Dairy Technicians & Service Engineers",
      "Milk Testing Hardware Overhauls"
    ],
    inStock: true,
    minOrder: "1 Piece"
  },
  {
    id: "thermal-paper-roll",
    name: "Thermal Paper Roll (57mm x 25m)",
    category: "Thermal Paper & POS Rolls",
    tagline: "Premium direct thermal billing rolls (55 GSM) for AMCU printers, POS machines, and swipe terminals",
    price: "Price on Request",
    image: "/images/products/thermal-paper-roll.webp",
    description: "Ayush Enterprises supplies premium 57mm (2.25 inch) width direct thermal paper rolls with 25 meters length. Manufactured using high-quality 55 GSM paper with a top-coated chemical emulsion, ensuring sharp, smudge-free dark printouts that remain legible for documentation.",
    features: [
      "Standard 57 mm (2.25 inch) width compatible with all dairy AMCU printers",
      "25 meters continuous roll length for high slip yields",
      "55 GSM top-coated paper preventing ink fading",
      "Smooth paper surface reducing thermal printhead wear",
      "Tight 18 mm core for reliable feeding without jams"
    ],
    specifications: {
      "Width": "57 mm (2.25 inch)",
      "Length": "25 meters",
      "Paper Type": "Direct Thermal Paper",
      "Paper Weight": "55 GSM",
      "Core Size": "18 mm",
      "Packaging": "Standard Box Packaging",
      "Compatibility": "AMCU Printers, EDC Machines, POS Terminals, Billing Printers"
    },
    applications: [
      "AMCU Milk Collection Receipt Slips",
      "POS Billing Machines",
      "Handheld Thermal Printers",
      "Retail Supermarkets & Petrol Pumps"
    ],
    inStock: true,
    minOrder: "20 Rolls"
  },
  {
    id: "paper-billing-roll",
    name: "Heavy-Duty Paper Billing Roll (70 GSM)",
    category: "Thermal Paper & POS Rolls",
    tagline: "Extra-thick 70 GSM thermal paper rolls for durable long-lasting archive receipts",
    price: "Price on Request",
    image: "/images/products/paper-billing-roll.webp",
    description: "Heavy-weight 70 GSM thermal billing rolls designed for organizations requiring durable audit receipts that do not yellow or fade easily. Provides crisp dark text with excellent tensile strength to prevent tears during fast tearing.",
    features: [
      "Superior 70 GSM paper thickness for premium receipt feel",
      "57 mm width x 25 m length",
      "Zero toner or ribbon required; works on all thermal mechanisms",
      "End-of-roll indicator streak for timely reel replacement"
    ],
    specifications: {
      "Width": "57 mm (2.25 inch)",
      "Length": "25 meters",
      "Paper Type": "Heavy Thermal Paper",
      "GSM": "70 GSM",
      "Core Inner Diameter": "12 mm / 18 mm",
      "Color": "High Bright White",
      "Print Mechanism": "Direct Thermal (Ribbon-Free)"
    },
    applications: [
      "Cooperative Dairy Audit Slips",
      "Banking & Payment Kiosks",
      "Toll Plazas & Ticketing Depots",
      "Retail Billing Terminals"
    ],
    inStock: true,
    minOrder: "20 Rolls"
  },
  {
    id: "printed-thermal-paper-roll",
    name: "Custom Printed Thermal Paper Roll",
    category: "Thermal Paper & POS Rolls",
    tagline: "Pre-printed thermal rolls featuring dairy society logos, terms, and branding",
    price: "Price on Request",
    image: "/images/products/printed-thermal-paper-roll.webp",
    description: "Custom pre-printed thermal paper rolls that allow dairy cooperatives, companies, and merchants to brand their customer receipts. Can be pre-printed on the reverse or header with your society name, address, GSTIN, promotional offers, or terms.",
    features: [
      "Custom single or dual color branding on reverse side",
      "Top-coated 55 GSM thermal surface on the front",
      "Precision core winding with 20 rolls per sturdy carton",
      "Water, oil, and heat resistant coating"
    ],
    specifications: {
      "Width": "57 mm",
      "Length": "25 meters",
      "Paper GSM": "55 GSM",
      "Core Inner Diameter": "12 mm",
      "Printing Side": "Front (Thermal) / Back (Pre-printed Branding)",
      "Print Colors": "Single Color / Custom Logo",
      "Rolls Per Box": "20 Rolls",
      "Country of Origin": "India"
    },
    applications: [
      "Dairy Unions & Federation Branding",
      "ATM & Parking Receipts",
      "Branded Retail Stores",
      "Franchise Dairy Outlets"
    ],
    inStock: true,
    minOrder: "50 Rolls"
  },
  {
    id: "edc-pos-rolls",
    name: "EDC Rolls & POS Rolls (55 GSM)",
    category: "Thermal Paper & POS Rolls",
    tagline: "Universal 57mm thermal rolls compatible with all swipe machines, GPRS terminals, and micro-ATMs",
    price: "Price on Request",
    image: "/images/products/edc-pos-rolls.webp",
    description: "High-volume universal thermal paper rolls formulated for seamless compatibility with all modern handheld EDC machines, credit card swipe terminals, Paytm/Pine Labs devices, and micro-ATMs used in rural banking and dairy centers.",
    features: [
      "Universal fit for Verifone, Ingenico, Pax, and domestic POS terminals",
      "BPA-free formulation safe for frequent handling",
      "Banded in protective wrap to shield against humidity before use",
      "Smooth feed without residue buildup on thermal heads"
    ],
    specifications: {
      "Width": "57 mm",
      "Length": "25 meters",
      "GSM": "55 GSM",
      "Core Inner Diameter": "25 mm",
      "Color": "Ultra White",
      "Compatibility": "POS Machine, EDC Machine, Billing Printer, Swipe Machine",
      "Rolls Per Box": "30 Rolls",
      "Country of Origin": "India"
    },
    applications: [
      "Rural Micro-ATMs & BC Points",
      "Card Swipe Terminals",
      "Restaurant & Grocery Billing",
      "Dairy Cash Settlement Desks"
    ],
    inStock: true,
    minOrder: "30 Rolls"
  },
  {
    id: "plastic-milk-strainer",
    name: "Milap Heavy-Duty Plastic Milk Strainer",
    category: "Dairy Utensils & Strainers",
    tagline: "Durable food-grade plastic strainer with fine stainless mesh for hygienic milk filtration",
    price: "Price on Request",
    image: "/images/products/plastic-milk-strainer.jpeg",
    description: "Milap brand heavy-duty plastic milk strainer engineered for dairy farmers and collection center intake points. Manufactured from food-safe, high-density virgin plastic with a reinforced handle and fine micro-mesh filter that eliminates sediment, hair, and dust particles from fresh milk.",
    features: [
      "Manufactured by trusted Milap brand in prominent red color",
      "Sturdy integrated handle designed to rest securely on standard milk cans",
      "Hygienic food-grade plastic resistant to souring and milk fats",
      "Easy to wash, sanitize, and reuse daily",
      "Large bowl diameter for quick pouring without splashing"
    ],
    specifications: {
      "Material": "Food-Grade Plastic",
      "Type": "Milk Strainer / Filter Funnel",
      "Shape": "Round Large Bowl",
      "Size": "Large Commercial Size",
      "Brand": "Milap",
      "Handle Material": "Reinforced Plastic Handle",
      "Color": "Red",
      "Usage": "Straining Fresh Milk at Collection Points"
    },
    applications: [
      "Cow & Buffalo Milking Stations",
      "Village Milk Intake Points",
      "Domestic & Commercial Dairy Kitchens",
      "Milk Can Filtration"
    ],
    inStock: true,
    minOrder: "5 Pieces"
  },
  {
    id: "stainless-steel-milk-strainer",
    name: "Stainless Steel Milk Strainer (12-inch Diameter)",
    category: "Dairy Utensils & Strainers",
    tagline: "Industrial-grade corrosion-proof SS strainer with 8-inch deep basket for bulk milk pouring",
    price: "Price on Request",
    image: "/images/products/stainless-steel-milk-strainer.jpeg",
    description: "Heavy-duty 12-inch stainless steel milk strainer with an 8-inch deep basket design. Crafted from non-reactive, food-grade stainless steel to ensure zero chemical reaction with milk acids, meeting stringent dairy hygiene norms for bulk milk handling.",
    features: [
      "Solid stainless steel construction that will never crack, rust, or stain",
      "Wide 12-inch top rim for easy bucket pouring without spillage",
      "Deep 8-inch basket preventing overflow during fast tipping",
      "Can be autoclaved, boiled, or chemically sanitized repeatedly",
      "Smooth polished edges with no hard-to-clean crevices"
    ],
    specifications: {
      "Material": "Food-Grade Stainless Steel",
      "Type": "Deep Basket Strainer",
      "Shape": "Round",
      "Diameter": "12 inch (Top Rim)",
      "Basket Depth/Size": "8 inch",
      "Finish": "Mirror Polished Clean Surface",
      "Usage": "Bulk Milk Straining & Dairy Plant Intake"
    },
    applications: [
      "Bulk Milk Chilling Units (BMC)",
      "Dairy Farm Milk Cans",
      "Sweet Shops & Mawa Production Units",
      "Commercial Dairy Processing Plants"
    ],
    inStock: true,
    minOrder: "2 Pieces"
  }
];

export const COMPANY_INFO = {
  name: "Ayush Enterprises",
  legalName: "Ayush Enterprises Bihar",
  tagline: "Precision Milk Testing & Dairy Automation Solutions",
  authorizedPhone: "+91 7362098784",
  authorizedPhoneRaw: "+917362098784",
  whatsappNumber: "+917362098784",
  whatsappNumberFormatted: "+91 7362098784",
  address: "Bibhutipur, Samastipur, Bihar - 848211, India",
  locality: "Bibhutipur",
  district: "Samastipur",
  state: "Bihar",
  pincode: "848211",
  country: "India",
  yearOfEstablishment: 2024,
  natureOfBusiness: "Trader, Wholesaler & Retailer",
  workingHours: "Monday to Saturday: 8:00 AM – 7:30 PM (IST)",
  aboutUsText: "Established in 2024 in Samastipur, Bihar, Ayush Enterprises is committed to delivering quality and reliability in every product we offer. We specialize in providing a wide range of milk analyzers and related solutions, designed to support farmers, dairies, and businesses with accurate results and dependable performance. With a focus on effective and timely delivery, we aim to make technology accessible and useful for everyday needs. At Ayush Enterprises, our mission is to build trust by offering products that enhance efficiency, save time, and ensure quality. Driven by customer satisfaction, we continue to expand our product range and services, making us a trusted partner for clients across Bihar and beyond.",
  keyHighlights: [
    "Wide range of certified milk analyzers (Dyna, Ekomilk, Lactoscan)",
    "Turnkey Automatic Milk Collection Units (AMCU) & Balaji DPUs",
    "Complete stock of genuine PCBs, ultrasonic sensors, and spare parts",
    "High-grade thermal paper billing rolls for POS and AMCU printers",
    "Strong focus on accuracy, reliability, durability, and on-site support",
    "Fast and reliable delivery across all districts of Bihar and neighboring states",
    "Transparent pricing and dedicated after-sales service for dairy societies"
  ]
};
