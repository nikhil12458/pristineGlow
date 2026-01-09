import { createContext } from "react";

export const CandleContext = createContext();

const candleData = [
  {
    id: 1,
    slug: "ocean-themed-candle",
    mainImg: "/img/ocean-themed-candle-prop-1.png",
    name: "Ocean Breeze",
    description:
      "A refreshing ocean-themed candle inspired by sea waves and coastal air.",
    category: "Fresh",
    fragrance: "Ocean, Sea Salt",
    price: 799,
    stock: 12,
    prop: "/prop/prop3.png",
    backgroundColor: "#AED6D9",
    images: [
      "/img/ocean-themed-candle-prop-2.png",
      "/img/ocean-themed-candle-prop-1.png",
    ],
  },

  {
    id: 2,
    slug: "bubble-cube-candle",
    mainImg: "/img/bubble-cube-candles-prop-1.png",
    name: "Bubble Cube Candle",
    description:
      "Modern bubble cube candle for aesthetic and minimal interiors.",
    category: "Decorative",
    fragrance: "Mild Vanilla",
    price: 699,
    stock: 15,
    prop: "/prop/prop10.png",
    backgroundColor: "#FDF1F5",
    images: [
      "/img/bubble-cube-candles-prop-2.png",
      "/img/bubble-cube-candles-prop-1.png",
    ],
  },

  {
    id: 3,
    slug: "bubble-cube-small-candle",
    mainImg: "/img/bubble-cube-small-candles-prop-1.png",
    name: "Mini Bubble Cube Candle",
    description:
      "Compact bubble cube candle ideal for shelves and side tables.",
    category: "Decorative",
    fragrance: "Mild Vanilla",
    price: 549,
    stock: 18,
    prop: "/prop/prop6.png",
    backgroundColor: "#FFDEC7",
    images: ["/img/bubble-cube-small-candles-prop-1.png"],
  },

  {
    id: 4,
    slug: "christmas-tree-candle",
    mainImg: "/img/christmas-tree-candle-prop-1.png",
    name: "Christmas Tree Candle",
    description: "Festive tree-shaped candle perfect for holiday decor.",
    category: "Festive",
    fragrance: "Pine",
    price: 899,
    stock: 8,
    prop: "/prop/prop9.png",
    backgroundColor: "#FCECEE",
    images: ["/img/christmas-tree-candle-prop-1.png"],
  },

  {
    id: 5,
    slug: "christmas-wreath-candle",
    mainImg: "/img/christmas-wreath-candle-prop-1.png",
    name: "Christmas Wreath Candle",
    description: "Elegant wreath-shaped candle for warm festive ambience.",
    category: "Festive",
    fragrance: "Cinnamon Pine",
    price: 949,
    stock: 7,
    prop: "/prop/prop5.png",
    backgroundColor: "#FFF1F1",
    images: [
      "/img/christmas-wreath-candle-prop-2.png",
      "/img/christmas-wreath-candle-prop-1.png",
    ],
  },

  {
    id: 6,
    slug: "clay-dia-candle",
    mainImg: "/img/clay-dia-candle-prop-1.png",
    name: "Clay Dia Candle",
    description: "Handcrafted clay-style candle with earthy aesthetics.",
    category: "Minimal",
    fragrance: "Unscented",
    price: 749,
    stock: 10,
    prop: "/prop/prop7.png",
    backgroundColor: "#E7DED6",
    images: ["/img/clay-dia-candle-prop-1.png"],
  },

  {
    id: 7,
    slug: "coconut-shell-candle",
    mainImg: "/img/coconut-shell-candle-prop-1.png",
    name: "Coconut Shell Candle",
    description: "Eco-friendly candle made in a natural coconut shell.",
    category: "Eco",
    fragrance: "Coconut",
    price: 999,
    stock: 6,
    prop: "/prop/prop8.png",
    backgroundColor: "#F5E2D1",
    images: ["/img/coconut-shell-candle-prop-1.png"],
  },

  {
    id: 8,
    slug: "custom-handmade-candle",
    mainImg: "/img/custom-candle-prop-1.png",
    name: "Custom Handmade Candle",
    description: "Hand-poured customizable candle for premium gifting.",
    category: "Custom",
    fragrance: "Custom Blend",
    price: 1099,
    stock: 5,
    prop: "/prop/prop4.png",
    backgroundColor: "#DBDBDB",
    images: ["/img/custom-candle-prop-2.png", "/img/custom-candle-prop-1.png"],
  },

  {
    id: 9,
    slug: "daisy-candle",
    mainImg: "/img/daisy-candle-prop-1.png",
    name: "Daisy Bloom Candle",
    description: "Floral daisy-shaped candle with a soft romantic vibe.",
    category: "Floral",
    fragrance: "Light Floral",
    price: 849,
    stock: 9,
    prop: "/prop/prop3.png",
    backgroundColor: "#FEE0D5",
    images: ["/img/daisy-candle-prop-1.png"],
  },

  {
    id: 10,
    slug: "decorative-rose-candle",
    mainImg: "/img/decorative-rose-candle-prop-1.png",
    name: "Decorative Rose Candle",
    description: "Rose-shaped decorative candle for elegant interiors.",
    category: "Floral",
    fragrance: "Rose",
    price: 899,
    stock: 10,
    prop: "/prop/prop1.png",
    backgroundColor: "#E4D0D1",
    images: ["/img/decorative-rose-candle-prop-1.png"],
  },

  {
    id: 11,
    slug: "fluted-pillar-candle",
    mainImg: "/img/fluted-piller-candle-prop-1.png",
    name: "Fluted Pillar Candle",
    description: "Vertical fluted pillar candle for modern decor styling.",
    category: "Minimal",
    fragrance: "Unscented",
    price: 799,
    stock: 14,
    prop: "/prop/prop2.png",
    backgroundColor: "#DDCCD4",
    images: ["/img/fluted-piller-candle-prop-1.png"],
  },

  {
    id: 12,
    slug: "peacock-gel-candle",
    mainImg: "/img/gel-candle-peacock-prop-1.png",
    name: "Peacock Gel Candle",
    description: "Artistic peacock-themed gel candle with vibrant details.",
    category: "Artistic",
    fragrance: "Jasmine",
    price: 1199,
    stock: 4,
    prop: "/prop/prop5.png",
    backgroundColor: "#FDEDD0",
    images: ["/img/gel-candle-peacock-prop-1.png"],
  },

  {
    id: 13,
    slug: "mandala-tin-candle",
    mainImg: "/img/mandala-tin-candle-2-prop-1.png",
    name: "Mandala Tin Candle",
    description: "Mandala-pattern tin candle ideal for meditation spaces.",
    category: "Spiritual",
    fragrance: "Sandalwood",
    price: 899,
    stock: 11,
    prop: "/prop/prop10.png",
    backgroundColor: "#FCEBF1",
    images: ["/img/mandala-tin-candle-2-prop-1.png"],
  },

  {
    id: 14,
    slug: "modak-candle",
    mainImg: "/img/modak-prop-1.png",
    name: "Modak Candle",
    description: "Traditional modak-shaped candle inspired by Indian culture.",
    category: "Festive",
    fragrance: "Sweet Vanilla",
    price: 649,
    stock: 16,
    prop: "/prop/prop5.png",
    backgroundColor: "#F7D6CA",
    images: ["/img/modak-prop-1.png"],
  },

  {
    id: 15,
    slug: "peony-candle",
    mainImg: "/img/peony-candle-prop-1.png",
    name: "Peony Blossom Candle",
    description: "Luxury peony flower candle crafted for premium decor.",
    category: "Floral",
    fragrance: "Peony Rose",
    price: 899,
    stock: 7,
    prop: "/prop/prop9.png",
    backgroundColor: "#8ABDBD",
    images: ["/img/peony-candle-prop-2.png", "/img/peony-candle-prop-1.png"],
  },

  {
    id: 16,
    slug: "poker-themed-jar-candle",
    mainImg: "/img/poker-themed-jar-candle-prop-1.png",
    name: "Poker Jar Candle",
    description: "Bold poker-themed jar candle with a masculine aesthetic.",
    category: "Theme",
    fragrance: "Woody Musk",
    price: 999,
    stock: 5,
    prop: "/prop/prop8.png",
    backgroundColor: "#F7D6CA",
    images: [
      "/img/poker-themed-jar-candle-prop-2.png",
      "/img/poker-themed-jar-candle-prop-1.png",
    ],
  },

  {
    id: 17,
    slug: "rasgulla-candle",
    mainImg: "/img/rasgulla-candle-prop-1.png",
    name: "Rasgulla Candle",
    description: "Fun rasgulla-inspired candle with a playful design.",
    category: "Novelty",
    fragrance: "Sweet Sugar",
    price: 599,
    stock: 20,
    prop: "/prop/prop6.png",
    backgroundColor: "#FDE4C9",
    images: ["/img/rasgulla-candle-prop-1.png"],
  },

  {
    id: 18,
    slug: "rose-bouquet-candle",
    mainImg: "/img/rose-bouquet-candle-prop-1.png",
    name: "Rose Bouquet Candle",
    description: "Romantic rose bouquet candle perfect for gifting.",
    category: "Floral",
    fragrance: "Rose",
    price: 949,
    stock: 11,
    prop: "/prop/prop7.png",
    backgroundColor: "#FDD2DC",
    images: ["/img/rose-bouquet-candle-prop-1.png"],
  },

  {
    id: 19,
    slug: "rose-mandala-tin-candle",
    mainImg: "/img/rose-scented-mandala-tin-candle-prop-1.png",
    name: "Rose Mandala Tin Candle",
    description: "Rose-scented mandala tin candle with calming vibes.",
    category: "Spiritual",
    fragrance: "Rose",
    price: 899,
    stock: 10,
    prop: "/prop/prop10.png",
    backgroundColor: "#FFABB1",
    images: ["/img/rose-scented-mandala-tin-candle-prop-1.png"],
  },

  {
    id: 20,
    slug: "tealight-candle",
    mainImg: "/img/tealight-candle-prop-1.png",
    name: "Tealight Candle",
    description: "Classic tealight candle for everyday use and decor.",
    category: "Classic",
    fragrance: "Unscented",
    price: 299,
    stock: 50,
    prop: "/prop/prop3.png",
    backgroundColor: "#FEE6C6",
    images: ["/img/tealight-candle-prop-1.png"],
  },

  {
    id: 21,
    slug: "tin-soy-wax-candle",
    mainImg: "/img/tin-soy-wax-candle.png",
    name: "Tin Soy Wax Candle",
    description: "Minimal soy wax candle in a reusable tin container.",
    category: "Classic",
    fragrance: "Lavender",
    price: 799,
    stock: 20,
    prop: "/prop/prop5.png",
    backgroundColor: "#FEECEC",
    images: ["/img/tin-soy-wax-candle.png"],
  },

  {
    id: 22,
    slug: "bell-shaped-novlety-candle",
    mainImg: "/img/bell-shaped-novelty-candle-prop-1.png",
    name: "Bell Shaped Novelty Candle",
    description: "Bold poker-themed jar candle with a masculine aesthetic.",
    category: "Theme",
    fragrance: "Woody Musk",
    price: 999,
    stock: 5,
    prop: "/prop/prop4.png",
    backgroundColor: "#FCF2F0",
    images: [
      "/img/bell-shaped-novelty-candle-prop-1.png",
      "/img/bell-shaped-novelty-candle-prop-2.png",
    ],
  },

  {
    id: 23,
    slug: "tin-soy-wax-candle",
    mainImg: "/img/dia-candle-prop-1.png",
    name: "Tin Soy Wax Candle",
    description: "Minimal soy wax candle in a reusable tin container.",
    category: "Classic",
    fragrance: "Lavender",
    price: 799,
    stock: 20,
    prop: "/prop/prop8.png",
    backgroundColor: "#C5AE9E",
    images: ["/img/dia-candle-prop-1.png"],
  },

  {
    id: 24,
    slug: "bell-shaped-novlety-candle",
    mainImg: "/img/mandala-tin-candle-prop-1.png",
    name: "Poker Jar Candle",
    description: "Bold poker-themed jar candle with a masculine aesthetic.",
    category: "Theme",
    fragrance: "Woody Musk",
    price: 999,
    stock: 5,
    prop: "/prop/prop7.png",
    backgroundColor: "#FEEFD2",
    images: ["/img/mandala-tin-candle-prop-1.png"],
  },
];

const burnData = [
  {
    className: "burn1",
    title: "🕯️ First Burn Is Important",
    description:
      "Always let your candle burn until the entire top layer melts evenly. <br>This prevents tunneling and helps the candle last longer.",
  },
  {
    className: "burn2",
    title: "✂️ Trim the Wick",
    description:
      "Before every burn, trim the wick to ¼ inch. <br>A short wick gives a clean flame, less smoke, and better fragrance.",
  },
  {
    className: "burn3",
    title: "⏳ Burn Time",
    description:
      "Do not burn the candle for more than 3–4 hours at a time.<br>Let the wax cool completely before lighting again.",
  },
  {
    className: "burn4",
    title: "📍 Right Placement",
    description:
      "Place candles on a flat, heat-resistant surface. <br>Avoid fans, AC, or open windows to prevent uneven burning.",
  },
  {
    className: "burn5",
    title: "🕯️ Molded Candle Care",
    description:
      "Molded candles are designed to drip while burning. <br>Always place them on a tray or plate to collect wax.",
  },
  {
    className: "burn6",
    title: "🎨 Custom Candle Care",
    description:
      "Each custom candle is hand-poured, so slight variations in color or texture are normal and make it unique.",
  },
  {
    className: "burn7",
    title: "🔥 Extinguishing the Flame",
    description:
      "Avoid blowing out the candle. Instead, gently dip the wick into the wax or use a candle snuffer to reduce smoke.",
  },
  {
    className: "burn8",
    title: "📦 Storage Tips",
    description:
      "Store candles in a cool, dry place away from direct sunlight to maintain color and fragrance.",
  },
  {
    className: "burn9",
    title: "⚠️ Safety First",
    description:
      "Never leave a burning candle unattended. <br>Keep away from children and pets. <br>Stop using the candle when ½ inch of wax remains.",
  },
  {
    className: "burn10 finalBurn",
    title: "🌿 Final Note",
    description:
      "A little care helps your candle burn cleaner, smell better, and last longer.",
    message: "Enjoy the glow ✨",
  },
];

export const CandleProvider = ({ children }) => {
  return (
    <CandleContext.Provider value={{ candleData, burnData }}>
      {children}
    </CandleContext.Provider>
  );
};
