import { createContext } from "react";

export const CandleContext = createContext();

const candleData = [
  {
    id: 1,
    name: "Ocean Breeze",
    description: "A refreshing candle inspired by sea waves and coastal air.",
    usedFor: "Relaxation, stress relief",
    category: "Fresh",
    fragrance: "Ocean, Sea Salt",
    scentStrength: "Medium",
    size: "200g",
    burningTime: "40 hours",
    color: "Aqua Blue",

    price: 799,
    stock: 12,
    isBestSeller: true,

    ingredients: ["Soy Wax", "Cotton Wick", "Essential Oils"],
    safetyInfo: "Burn within sight. Keep away from children and pets.",
    occasion: ["Relaxation", "Gift"],

    images: [
      "/images/ocean-1.jpg",
      "/images/ocean-2.jpg",
      "/images/ocean-3.jpg"
    ]
  },
  {
    id: 2,
    name: "Rose Garden",
    description: "Soft floral fragrance with dried rose petals.",
    usedFor: "Romantic mood, gifting",
    category: "Floral",
    fragrance: "Rose",
    scentStrength: "Strong",
    size: "180g",
    burningTime: "35 hours",
    color: "Ivory White",

    price: 899,
    stock: 8,
    isBestSeller: true,

    ingredients: ["Soy Wax", "Cotton Wick", "Rose Essential Oil"],
    safetyInfo: "Trim wick to ¼ inch before lighting.",
    occasion: ["Anniversary", "Gift"],

    images: [
      "/images/rose-1.jpg",
      "/images/rose-2.jpg",
      "/images/rose-3.jpg"
    ]
  },
  {
    id: 3,
    name: "Lavender Calm",
    description: "Soothing lavender scent for peaceful evenings.",
    usedFor: "Sleep, meditation",
    category: "Floral",
    fragrance: "Lavender",
    scentStrength: "Medium",
    size: "200g",
    burningTime: "40 hours",
    color: "Soft Purple",

    price: 849,
    stock: 15,
    isBestSeller: false,

    ingredients: ["Soy Wax", "Cotton Wick", "Lavender Oil"],
    safetyInfo: "Do not burn for more than 4 hours at a time.",
    occasion: ["Meditation", "Relaxation"],

    images: [
      "/images/lavender-1.jpg",
      "/images/lavender-2.jpg"
    ]
  },
  {
    id: 4,
    name: "Vanilla Comfort",
    description: "Warm vanilla aroma for cozy moments.",
    usedFor: "Comfort, relaxation",
    category: "Warm",
    fragrance: "Vanilla",
    scentStrength: "Strong",
    size: "220g",
    burningTime: "45 hours",
    color: "Cream",

    price: 899,
    stock: 10,
    isBestSeller: true,

    ingredients: ["Soy Wax", "Cotton Wick", "Vanilla Extract"],
    safetyInfo: "Place on heat-resistant surface.",
    occasion: ["Home", "Gift"],

    images: [
      "/images/vanilla-1.jpg",
      "/images/vanilla-2.jpg"
    ]
  },
  {
    id: 5,
    name: "Sandalwood Bliss",
    description: "Earthy sandalwood fragrance with calming notes.",
    usedFor: "Focus, meditation",
    category: "Woody",
    fragrance: "Sandalwood",
    scentStrength: "Medium",
    size: "200g",
    burningTime: "42 hours",
    color: "Natural Beige",

    price: 999,
    stock: 6,
    isBestSeller: false,

    ingredients: ["Soy Wax", "Cotton Wick", "Sandalwood Oil"],
    safetyInfo: "Keep away from flammable materials.",
    occasion: ["Meditation", "Spiritual"],

    images: [
      "/images/sandalwood-1.jpg",
      "/images/sandalwood-2.jpg"
    ]
  },
  {
    id: 6,
    name: "Citrus Spark",
    description: "Fresh citrus blend for instant energy.",
    usedFor: "Energy, freshness",
    category: "Fresh",
    fragrance: "Orange, Lemon",
    scentStrength: "Strong",
    size: "170g",
    burningTime: "30 hours",
    color: "Yellow",

    price: 749,
    stock: 20,
    isBestSeller: false,

    ingredients: ["Soy Wax", "Cotton Wick", "Citrus Oils"],
    safetyInfo: "Do not leave unattended.",
    occasion: ["Morning", "Work"],

    images: [
      "/images/citrus-1.jpg",
      "/images/citrus-2.jpg"
    ]
  },
  {
    id: 7,
    name: "Jasmine Dreams",
    description: "Classic jasmine aroma inspired by nature.",
    usedFor: "Mood lifting",
    category: "Floral",
    fragrance: "Jasmine",
    scentStrength: "Medium",
    size: "200g",
    burningTime: "38 hours",
    color: "Pearl White",

    price: 879,
    stock: 9,
    isBestSeller: false,

    ingredients: ["Soy Wax", "Cotton Wick", "Jasmine Oil"],
    safetyInfo: "Burn on stable surface.",
    occasion: ["Relaxation", "Evening"],

    images: [
      "/images/jasmine-1.jpg",
      "/images/jasmine-2.jpg"
    ]
  },
  {
    id: 8,
    name: "Coffee Woods",
    description: "Rich coffee aroma blended with woody notes.",
    usedFor: "Focus, cozy evenings",
    category: "Woody",
    fragrance: "Coffee, Cedarwood",
    scentStrength: "Strong",
    size: "220g",
    burningTime: "45 hours",
    color: "Dark Brown",

    price: 999,
    stock: 7,
    isBestSeller: true,

    ingredients: ["Soy Wax", "Cotton Wick", "Coffee Extract"],
    safetyInfo: "Trim wick regularly.",
    occasion: ["Work", "Evening"],

    images: [
      "/images/coffee-1.jpg",
      "/images/coffee-2.jpg"
    ]
  },
  {
    id: 9,
    name: "Mint Fresh",
    description: "Cooling mint fragrance for clarity.",
    usedFor: "Refreshment",
    category: "Fresh",
    fragrance: "Mint",
    scentStrength: "Light",
    size: "160g",
    burningTime: "28 hours",
    color: "Mint Green",

    price: 699,
    stock: 18,
    isBestSeller: false,

    ingredients: ["Soy Wax", "Cotton Wick", "Mint Oil"],
    safetyInfo: "Keep wick trimmed.",
    occasion: ["Daytime", "Work"],

    images: [
      "/images/mint-1.jpg",
      "/images/mint-2.jpg"
    ]
  },
  {
    id: 10,
    name: "Amber Glow",
    description: "Warm amber notes with luxurious depth.",
    usedFor: "Evening ambiance",
    category: "Warm",
    fragrance: "Amber",
    scentStrength: "Medium",
    size: "210g",
    burningTime: "44 hours",
    color: "Golden Amber",

    price: 949,
    stock: 11,
    isBestSeller: true,

    ingredients: ["Soy Wax", "Cotton Wick", "Amber Oil"],
    safetyInfo: "Do not burn near drafts.",
    occasion: ["Evening", "Gift"],

    images: [
      "/images/amber-1.jpg",
      "/images/amber-2.jpg"
    ]
  },
  {
    id: 11,
    name: "Botanical Harmony",
    description: "Balanced blend of flowers and herbs.",
    usedFor: "Mindfulness, relaxation",
    category: "Botanical",
    fragrance: "Herbal Floral Mix",
    scentStrength: "Medium",
    size: "200g",
    burningTime: "40 hours",
    color: "Natural Green",

    price: 899,
    stock: 14,
    isBestSeller: false,

    ingredients: ["Soy Wax", "Cotton Wick", "Herbal Oils"],
    safetyInfo: "Never leave candle unattended.",
    occasion: ["Yoga", "Meditation"],

    images: [
      "/images/botanical-1.jpg",
      "/images/botanical-2.jpg"
    ]
  }
];

export const CandleProvider = ({ children }) => {
  return (
    <CandleContext.Provider value={{ candleData }}>
      {children}
    </CandleContext.Provider>
  );
};
