import { Category, Product } from "@/types";

export const categories: Category[] = [
  {
    id: "c1",
    name: "Fashion (Clothing & Accessories)",
    slug: "fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "c2",
    name: "Electronics",
    slug: "electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "c3",
    name: "Beauty & Personal Care",
    slug: "beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "c4",
    name: "Home & Kitchen",
    slug: "home-kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
  },
];

export const products: Product[] = [
  // --- FASHION ---
  {
    id: "f1",
    name: "Classic Leather Jacket",
    description: "Handcrafted genuine leather jacket designed for comfort and timeless style. Features durable zippers, multiple utility pockets, and a soft inner lining.",
    price: 199.99,
    category: "fashion",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["100% Genuine Leather", "Polyester Inner Lining", "YKK Zippers", "Slim Fit Design"],
    rating: 4.8,
    reviews: 142,
    stock: 25,
    isTrending: true,
  },
  {
    id: "f2",
    name: "Minimalist Canvas Backpack",
    description: "Water-resistant vintage style canvas backpack. Perfect for school, travel, or daily commute. Features a padded laptop sleeve.",
    price: 49.99,
    category: "fashion",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Water-resistant Canvas", "15.6\" Laptop Pouch", "Adjustable Padded Straps", "Magnetic Snaps"],
    rating: 4.5,
    reviews: 98,
    stock: 60,
  },
  {
    id: "f3",
    name: "Premium Linen Button-Up",
    description: "Ultra-breathable linen shirt. Tailored for a relaxed yet polished look, ideal for summer days and casual evenings.",
    price: 39.50,
    category: "fashion",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["100% Organic Linen", "Breathable Material", "Regular Fit", "Pre-washed for Softness"],
    rating: 4.3,
    reviews: 45,
    stock: 100,
  },
  {
    id: "f4",
    name: "Sleek Polarized Sunglasses",
    description: "Classic design with high-performance polarized lenses. Provides full UV400 protection and cuts glare efficiently.",
    price: 24.99,
    category: "fashion",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Polarized Lenses", "UV400 Protection", "Lightweight TR90 Frame", "Shatterproof Material"],
    rating: 4.6,
    reviews: 215,
    stock: 120,
    isTrending: true,
  },
  {
    id: "f5",
    name: "Aero Knit Running Shoes",
    description: "Extremely lightweight and breathable mesh running shoes. Equipped with responsive cushioning for ultimate shock absorption.",
    price: 85.00,
    category: "fashion",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Breathable Mesh Upper", "Responsive Midsole Foam", "Anti-slip Rubber Outsole", "Arch Support"],
    rating: 4.7,
    reviews: 320,
    stock: 45,
  },
  {
    id: "f6",
    name: "Minimalist Chronograph Watch",
    description: "Stunning dress watch featuring a minimalist dial, Japanese quartz movement, and an interchangeable genuine leather band.",
    price: 120.00,
    category: "fashion",
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Japanese Quartz Movement", "Hardened Mineral Glass", "3 ATM Water Resistant", "Interchangeable Strap"],
    rating: 4.9,
    reviews: 84,
    stock: 15,
    isTrending: true,
  },
  {
    id: "f7",
    name: "Classic Denim Jacket",
    description: "Rugged yet stylish, this classic denim jacket is made from premium cotton with a comfortable, relaxed fit. Features button closures and dual chest pockets.",
    price: 69.99,
    category: "fashion",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["100% Premium Cotton", "Classic Button Closure", "Dual Buttoned Chest Pockets", "Machine Washable"],
    rating: 4.6,
    reviews: 110,
    stock: 40,
  },
  {
    id: "f8",
    name: "Casual Slip-On Loafers",
    description: "Versatile canvas loafers designed for casual elegance and daily ease. Extremely lightweight with a cushioned footbed for superior walking comfort.",
    price: 55.00,
    category: "fashion",
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Breathable Canvas Upper", "Padded Ortholite Insole", "Elastic Side Gores", "Flexible Rubber Outsole"],
    rating: 4.4,
    reviews: 75,
    stock: 65,
  },

  // --- ELECTRONICS ---
  {
    id: "e1",
    name: "Pro ANC Wireless Headphones",
    description: "Industry-leading active noise-cancelling headphones. Delivers crisp studio sound and features a comfortable memory foam headband.",
    price: 299.99,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Hybrid Active Noise Cancellation", "45-Hour Battery Life", "Bluetooth 5.2 Multipoint", "Hi-Res Audio Certified"],
    rating: 4.8,
    reviews: 512,
    stock: 30,
    isTrending: true,
  },
  {
    id: "e2",
    name: "Ultra HD Mechanical Keyboard",
    description: "Compact 75% mechanical keyboard with customizable RGB backlighting, premium hot-swappable yellow switches, and a solid aluminum case.",
    price: 145.00,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Hot-Swappable PCB", "Premium Linear Yellow Switches", "PBT Double-Shot Keycaps", "Wireless & Wired Modes"],
    rating: 4.9,
    reviews: 187,
    stock: 55,
    isTrending: true,
  },
  {
    id: "e3",
    name: "Smart Fitness Watch S3",
    description: "Monitor your training, track sleep cycles, and stay connected with real-time notifications on a gorgeous always-on AMOLED display.",
    price: 189.99,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Continuous Heart Rate Tracking", "GPS & Workout Tracking", "Waterproof (IP68)", "10-Day Battery Life"],
    rating: 4.5,
    reviews: 260,
    stock: 40,
  },
  {
    id: "e4",
    name: "Portable Bluetooth Speaker Mini",
    description: "Pocket-sized wireless speaker with surprisingly rich bass and 360-degree sound. Dust and water-resistant.",
    price: 39.99,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["IP67 Waterproof", "15-Hour Playtime", "Deep Bass Radiators", "Dual Speaker Pairing"],
    rating: 4.4,
    reviews: 140,
    stock: 150,
  },
  {
    id: "e5",
    name: "4K Dual-Screen Action Camera",
    description: "Capture extreme sports and vlog seamlessly in Ultra HD 4K at 60fps with state-of-the-art electronic image stabilization.",
    price: 220.00,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Native 4K/60FPS Video", "Dual Color Screens", "6-Axis Gyro Stabilization", "Waterproof to 40m with Case"],
    rating: 4.6,
    reviews: 74,
    stock: 20,
  },
  {
    id: "e6",
    name: "Dual-Device Wireless Charger",
    description: "Sleek magnetic wireless charging stand that powers your phone and wireless earbuds simultaneously.",
    price: 49.50,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["15W Fast Wireless Charging", "Magnetic Snap Alignment", "Overcharge Protection", "Aluminum Alloy Build"],
    rating: 4.7,
    reviews: 105,
    stock: 80,
  },
  {
    id: "e7",
    name: "Noise-Isolating Earbuds",
    description: "Ultra-compact true wireless earbuds offering immersive sound with smart noise isolation and touch gestures. Fits snugly for workouts.",
    price: 79.99,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Bluetooth 5.3 Auto-pairing", "Smart Touch Controls", "IPX5 Sweat-resistant", "24-Hour Battery with Charging Case"],
    rating: 4.5,
    reviews: 112,
    stock: 95,
  },
  {
    id: "e8",
    name: "Ergonomic Wireless Mouse",
    description: "Engineered for high comfort and efficiency, featuring a contoured grip, quiet click buttons, and high-precision adjustable DPI levels.",
    price: 29.99,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Contoured Ergonomic Shape", "Silent Click Switches", "Adjustable DPI (800-2400)", "Contoured Side Grips"],
    rating: 4.7,
    reviews: 140,
    stock: 110,
  },

  // --- BEAUTY & PERSONAL CARE ---
  {
    id: "b1",
    name: "Hydrating Hyaluronic Serum",
    description: "Pure hyaluronic acid facial serum. Visibly plumps skin, minimizes fine lines, and provides intense multi-depth hydration.",
    price: 22.00,
    category: "beauty",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["100% Vegan & Cruelty-Free", "Fragrance-Free Formulation", "Deep Moisture Retention", "Dermatologist Tested"],
    rating: 4.7,
    reviews: 340,
    stock: 90,
    isTrending: true,
  },
  {
    id: "b2",
    name: "Sonic Facial Cleansing Brush",
    description: "Rechargeable electric face cleanser. Employs gentle silicone bristles and sonic pulsations to thoroughly clean clogged pores.",
    price: 65.00,
    category: "beauty",
    images: [
      "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Medical-grade Silicone", "8 Adjustable Speeds", "Fully Waterproof (IPX7)", "USB Rechargeable"],
    rating: 4.6,
    reviews: 198,
    stock: 35,
  },
  {
    id: "b3",
    name: "Premium Beard Grooming Kit",
    description: "Complete set for maintaining a healthy and stylized beard. Includes grooming oil, organic balm, natural wooden comb, and scissors.",
    price: 29.99,
    category: "beauty",
    images: [
      "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["All-Natural Ingredients", "Organic Jojoba Beard Oil", "Pure Boar Bristle Brush", "Compact Travel Bag Included"],
    rating: 4.5,
    reviews: 85,
    stock: 75,
  },
  {
    id: "b4",
    name: "Mineral Sunscreen SPF 50",
    description: "Broad-spectrum mineral sunscreen that leaves no white cast. Non-greasy formula loaded with soothing botanical antioxidants.",
    price: 18.50,
    category: "beauty",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Non-Nano Zinc Oxide", "Reef-Safe Formulation", "Water-resistant (80 min)", "Paraben-Free"],
    rating: 4.3,
    reviews: 112,
    stock: 110,
  },
  {
    id: "b5",
    name: "Matte Liquid Lipstick Set",
    description: "Velvety smooth, long-lasting matte liquid lipsticks in 6 gorgeous nude shades. Transfer-proof formula.",
    price: 32.00,
    category: "beauty",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["16-Hour Stay", "Intense Pigmentation", "Enriched with Vitamin E", "Non-Drying Smooth Texture"],
    rating: 4.4,
    reviews: 154,
    stock: 50,
  },
  {
    id: "b6",
    name: "Natural Clay Detox Mask",
    description: "Bentonite and Kaolin clay mask formulated with organic green tea extract to draw out impurities and tighten pores.",
    price: 16.99,
    category: "beauty",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Deep Cleansing Clay", "Soothing Green Tea Extract", "Combats Acne & Excess Sebum", "No Artificial Colors"],
    rating: 4.8,
    reviews: 210,
    stock: 65,
    isTrending: true,
  },
  {
    id: "b7",
    name: "Nourishing Argan Hair Oil",
    description: "Infused with organic argan and jojoba oils. Restores natural shine, tames frizz, and deeply hydrates damaged hair without leaving heavy residue.",
    price: 24.00,
    category: "beauty",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["100% Pure Organic Argan Oil", "Heat Damage Protection", "Sulfate & Paraben-Free", "Lightweight Daily Formula"],
    rating: 4.8,
    reviews: 185,
    stock: 70,
  },
  {
    id: "b8",
    name: "Exfoliating Coffee Scrub",
    description: "Organic Arabica coffee facial and body scrub with sweet almond oil and sea salt. Gently exfoliates dead skin cells to reveal glowing skin.",
    price: 15.99,
    category: "beauty",
    images: [
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Organic Arabica Coffee", "Infused with Almond Oil", "Gentle Cellulite & Acne Care", "No Microplastics"],
    rating: 4.6,
    reviews: 94,
    stock: 85,
  },

  // --- HOME & KITCHEN ---
  {
    id: "h1",
    name: "Chef's Knife 8-Inch",
    description: "Razor-sharp professional kitchen knife forged from high-carbon German steel. Ergonomically optimized pakkawood handle.",
    price: 59.99,
    category: "home-kitchen",
    images: [
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["High-Carbon German Steel", "Full-Tang Solid Construction", "Optimal Hand Control & Balance", "Gift Box Packaging"],
    rating: 4.9,
    reviews: 310,
    stock: 30,
    isTrending: true,
  },
  {
    id: "h2",
    name: "Electric Gooseneck Kettle",
    description: "Matte black stainless steel pour-over kettle featuring precise variable temperature controls and a built-in stopwatch timer.",
    price: 89.99,
    category: "home-kitchen",
    images: [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Variable Temperature Precision", "1200W Rapid Heating", "1-Hour Temp Hold Option", "Precision Pour Spout"],
    rating: 4.7,
    reviews: 178,
    stock: 45,
    isTrending: true,
  },
  {
    id: "h3",
    name: "Aroma Essential Oil Diffuser",
    description: "Ultrasonic mist humidifier that operates silently. Features auto-shutoff and adjustable, soothing ambient LED lighting.",
    price: 25.99,
    category: "home-kitchen",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["500ml Reservoir Capacity", "7 Changing Color Lights", "Whisper-Quiet Ultrasonic Tech", "BPA-Free Eco Materials"],
    rating: 4.5,
    reviews: 420,
    stock: 130,
  },
  {
    id: "h4",
    name: "Eco-Friendly Bamboo Cutting Board Set",
    description: "Set of three premium organic bamboo boards. Double-sided use with built-in juice grooves to prevent counter mess.",
    price: 34.50,
    category: "home-kitchen",
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["100% Organic Bamboo", "Water and Stain Resistant", "Built-in Liquid Juice Grooves", "Set of 3 Practical Sizes"],
    rating: 4.6,
    reviews: 115,
    stock: 90,
  },
  {
    id: "h5",
    name: "Double-Walled Espresso Glasses (Set of 4)",
    description: "Insulated hand-blown borosilicate glasses. Keeps your espresso hot while remaining perfectly cool to the touch on the outside.",
    price: 19.99,
    category: "home-kitchen",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Hand-Blown Borosilicate Glass", "Double-Walled Thermal Insulation", "Condensation-Free Design", "Dishwasher Safe"],
    rating: 4.8,
    reviews: 245,
    stock: 110,
  },
  {
    id: "h6",
    name: "Premium French Press Coffee Maker",
    description: "Heat-resistant borosilicate glass carafe encased in durable stainless steel. Employs a highly effective 4-level filtration screen system.",
    price: 28.00,
    category: "home-kitchen",
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["4-Level Double Mesh Filters", "Borosilicate Thermal Glass", "Durable Stainless Steel Frame", "Dishwasher Safe Components"],
    rating: 4.7,
    reviews: 132,
    stock: 55,
  },
  {
    id: "h7",
    name: "Stainless Steel Garlic Press",
    description: "Heavy-duty garlic press designed to crush cloves cleanly and quickly with minimal hand strain. Built-in cleaning teeth.",
    price: 14.99,
    category: "home-kitchen",
    images: [
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["304 Stainless Steel", "Contoured Ergonomic Grips", "Large Capacity Press Basket", "Dishwasher Safe"],
    rating: 4.7,
    reviews: 212,
    stock: 120,
  },
  {
    id: "h8",
    name: "Handheld Milk Frother Wand",
    description: "Battery-powered premium frother designed to create rich, creamy froth in seconds for your home-brewed matcha and lattes.",
    price: 12.50,
    category: "home-kitchen",
    images: [
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["High-speed 19000 RPM Motor", "Stainless Steel Whisk", "Ergonomic Soft-touch Grip", "Includes Sleek Stand"],
    rating: 4.5,
    reviews: 310,
    stock: 140,
  }
];

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  getProducts: async () => {
    await delay(800);
    return products;
  },
  getProductById: async (id: string) => {
    await delay(500);
    const product = products.find(p => p.id === id);
    if (!product) throw new Error("Product not found");
    return product;
  },
  getCategories: async () => {
    await delay(500);
    return categories;
  },
  getProductsByCategory: async (categorySlug: string) => {
    await delay(800);
    return products.filter(p => p.category === categorySlug);
  }
};
