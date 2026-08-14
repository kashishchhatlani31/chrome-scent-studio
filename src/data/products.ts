import bottle1 from "@/assets/bottle-1.jpg";
import bottle2 from "@/assets/bottle-2.jpg";
import bottle3 from "@/assets/bottle-3.jpg";
import bottle4 from "@/assets/bottle-4.jpg";
import moodVanilla from "@/assets/mood-vanilla.jpg";
import moodWaves from "@/assets/mood-waves.jpg";
import moodFloral from "@/assets/mood-floral.jpg";
import moodFruity from "@/assets/mood-fruity.jpg";
import packVanilla from "@/assets/pack-vanilla.jpg";
import packWaves from "@/assets/pack-waves.jpg";
import packFloral from "@/assets/pack-floral.jpg";
import packFruity from "@/assets/pack-fruity.jpg";

export type SizeOption = {
  ml: 10 | 30 | 50 | 100;
  label: string;
  mrp: number;
  price: number;
  note?: string;
};

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const savings = (mrp: number, price: number) => ({
  amount: mrp - price,
  percent: Math.round(((mrp - price) / mrp) * 100),
});

/* One packaging architecture across every mood: matte black bottle,
   chrome cap, matching matte black outer box. Only the juice changes. */
const sizeLadder: SizeOption[] = [
  { ml: 10, label: "10 ML", mrp: 899, price: 399, note: "Pocket / travel" },
  { ml: 30, label: "30 ML", mrp: 1699, price: 799, note: "Everyday" },
  { ml: 50, label: "50 ML", mrp: 2699, price: 1199, note: "Most loved" },
  { ml: 100, label: "100 ML", mrp: 4499, price: 1799, note: "Best value" },
];

export type Product = {
  slug: string;
  name: string;
  family: string;
  mood: "VANILLA" | "WAVES" | "FLORAL" | "FRUITY";
  tagline: string;
  description: string;
  image: string;
  packImage: string;
  moodImage: string;
  sizes: SizeOption[];
  label?: "BESTSELLER" | "NEW" | "LIMITED";
  notes: { top: string[]; heart: string[]; base: string[] };
};

export const products: Product[] = [
  {
    slug: "vanille-noire",
    name: "Vanille Noire",
    family: "Oriental Vanilla",
    mood: "VANILLA",
    tagline: "Warm. Dark. Addictive.",
    description:
      "Bourbon vanilla smouldered over black resins and smoked woods. A skin scent with the weight of velvet and the memory of candlelight.",
    image: bottle1,
    packImage: packVanilla,
    moodImage: moodVanilla,
    sizes: sizeLadder,
    label: "BESTSELLER",
    notes: {
      top: ["Bergamot", "Pink pepper", "Candied citrus"],
      heart: ["Orchid", "Tonka blossom", "Cocoa absolute"],
      base: ["Bourbon vanilla", "Musk", "Amber", "Sandalwood"],
    },
  },
  {
    slug: "onde-argent",
    name: "Onde Argent",
    family: "Aquatic Mineral",
    mood: "WAVES",
    tagline: "Fresh. Cold. Effortless.",
    description:
      "Cold salt air over polished stone. A liquid-metal freshness that lingers like sea mist on chrome.",
    image: bottle2,
    packImage: packWaves,
    moodImage: moodWaves,
    sizes: sizeLadder,
    label: "NEW",
    notes: {
      top: ["Sea salt", "Grapefruit", "Aldehydes"],
      heart: ["Marine accord", "Violet leaf", "Iris"],
      base: ["Driftwood", "White musk", "Ambergris"],
    },
  },
  {
    slug: "fleur-obscure",
    name: "Fleur Obscure",
    family: "White Floral",
    mood: "FLORAL",
    tagline: "Elegant. Soft. Unforgettable.",
    description:
      "Night-blooming jasmine and rose absolute shadowed by black tea and clean woods. Monochrome floral, never sweet.",
    image: bottle3,
    packImage: packFloral,
    moodImage: moodFloral,
    sizes: sizeLadder,
    label: "LIMITED",
    notes: {
      top: ["Neroli", "Black tea", "Green mandarin"],
      heart: ["Jasmine sambac", "Rose de mai", "Tuberose"],
      base: ["Cashmere wood", "Musk", "Vetiver"],
    },
  },
  {
    slug: "fruit-noir",
    name: "Fruit Noir",
    family: "Dark Fruity",
    mood: "FRUITY",
    tagline: "Bright. Juicy. Addictive.",
    description:
      "Blackcurrant and lime cut with glossy plum, dried down into resin and leather. High contrast, high impact.",
    image: bottle4,
    packImage: packFruity,
    moodImage: moodFruity,
    sizes: sizeLadder,
    label: "BESTSELLER",
    notes: {
      top: ["Lime", "Blackcurrant", "Bergamot"],
      heart: ["Plum", "Blackberry", "Osmanthus"],
      base: ["Leather", "Benzoin", "Patchouli"],
    },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);