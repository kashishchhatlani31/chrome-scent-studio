import bottle1 from "@/assets/bottle-1.jpg";
import bottle2 from "@/assets/bottle-2.jpg";
import bottle3 from "@/assets/bottle-3.jpg";
import bottle4 from "@/assets/bottle-4.jpg";
import moodVanilla from "@/assets/mood-vanilla.jpg";
import moodWaves from "@/assets/mood-waves.jpg";
import moodFloral from "@/assets/mood-floral.jpg";
import moodFruity from "@/assets/mood-fruity.jpg";

export type Product = {
  slug: string;
  name: string;
  family: string;
  mood: "VANILLA" | "WAVES" | "FLORAL" | "FRUITY";
  tagline: string;
  description: string;
  price: number;
  image: string;
  moodImage: string;
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
    price: 210,
    image: bottle1,
    moodImage: moodVanilla,
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
    price: 195,
    image: bottle2,
    moodImage: moodWaves,
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
    price: 225,
    image: bottle3,
    moodImage: moodFloral,
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
    price: 200,
    image: bottle4,
    moodImage: moodFruity,
    label: "BESTSELLER",
    notes: {
      top: ["Lime", "Blackcurrant", "Bergamot"],
      heart: ["Plum", "Blackberry", "Osmanthus"],
      base: ["Leather", "Benzoin", "Patchouli"],
    },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);