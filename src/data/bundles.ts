import bundleDuo from "@/assets/bundle-duo.jpg";
import bundleDiscovery from "@/assets/bundle-discovery.jpg";
import bundleCollection from "@/assets/bundle-collection.jpg";

export type Bundle = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  contents: string[];
  mrp: number;
  price: number;
  image: string;
  badge?: string;
};

export const bundles: Bundle[] = [
  {
    slug: "discovery-set",
    name: "THE DISCOVERY SET",
    kicker: "4 × 10 ML",
    description:
      "All four signatures in travel-size chrome-capped vials, seated in a matte black presentation tray. The easiest way to find yours.",
    contents: [
      "Vanille Noire 10 ML",
      "Onde Argent 10 ML",
      "Fleur Obscure 10 ML",
      "Fruit Noir 10 ML",
    ],
    mrp: 3596,
    price: 1199,
    image: bundleDiscovery,
    badge: "START HERE",
  },
  {
    slug: "signature-duo",
    name: "THE SIGNATURE DUO",
    kicker: "2 × 50 ML",
    description:
      "Choose any two full-size extraits in their matching matte black boxes. One for daylight, one for after dark.",
    contents: [
      "Any two 50 ML extraits",
      "Two matte black outer boxes",
      "Chrome-sealed gift sleeve",
    ],
    mrp: 5398,
    price: 2099,
    image: bundleDuo,
    badge: "MOST POPULAR",
  },
  {
    slug: "complete-collection",
    name: "THE COMPLETE COLLECTION",
    kicker: "4 × 50 ML",
    description:
      "The entire wardrobe — vanilla, waves, floral and fruity — full size, fully boxed, in one chrome-lined case.",
    contents: [
      "All four 50 ML extraits",
      "Four matching outer boxes",
      "Collector case + 4 × 10 ML travel vials free",
    ],
    mrp: 10796,
    price: 3799,
    image: bundleCollection,
    badge: "BEST VALUE",
  },
];