import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const columns = [
  {
    title: "SHOP",
    items: [
      { label: "All Fragrances", to: "/shop" as const },
      { label: "Collections", to: "/collections" as const },
      { label: "Discovery Set", to: "/shop" as const },
    ],
  },
  {
    title: "HOUSE",
    items: [
      { label: "Our Story", to: "/our-story" as const },
      { label: "Contact", to: "/contact" as const },
      { label: "FAQ", to: "/contact" as const },
    ],
  },
  {
    title: "CARE",
    items: [
      { label: "Shipping & Returns", to: "/contact" as const },
      { label: "Privacy Policy", to: "/contact" as const },
      { label: "Terms & Conditions", to: "/contact" as const },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background px-6 pt-24 pb-12 lg:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="chrome-rule" />
        <div className="grid gap-14 py-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="chrome-text-static font-serif text-3xl tracking-[0.4em]">
              AURVM
            </span>
            <p className="mt-6 max-w-xs text-sm leading-relaxed font-light text-muted-foreground">
              A niche fragrance house working in black glass, polished chrome and
              scent that stays.
            </p>
            <div className="mt-8 flex gap-5 text-chrome-dark">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={["Instagram", "Twitter", "Youtube", "Facebook"][i]}
                  className="transition-colors duration-500 hover:text-chrome-bright"
                >
                  <Icon strokeWidth={1} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="track-luxe text-[10px] text-chrome">{col.title}</h3>
              <ul className="mt-6 space-y-4">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm font-light text-muted-foreground transition-colors duration-500 hover:text-chrome-bright"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="chrome-rule opacity-50" />
        <p className="pt-8 text-[10px] tracking-[0.25em] text-chrome-dark">
          © {new Date().getFullYear()} AURVM PARFUMS — ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}