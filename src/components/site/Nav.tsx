import { Link } from "@tanstack/react-router";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "HOME", to: "/" },
  { label: "SHOP", to: "/shop" },
  { label: "COLLECTIONS", to: "/collections" },
  { label: "SETS", to: "/bundles" },
  { label: "OUR STORY", to: "/our-story" },
  { label: "CONTACT", to: "/contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled ? "bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-12">
        <Link to="/" className="chrome-text-static font-serif text-2xl tracking-[0.4em]">
          AURVM
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="group relative text-[11px] font-light tracking-[0.28em] text-muted-foreground transition-colors duration-500 hover:text-chrome-bright"
              activeProps={{ className: "text-chrome-bright" }}
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-chrome transition-all duration-700 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 text-muted-foreground md:flex">
            {[Search, User, Heart, ShoppingBag].map((Icon, i) => (
              <button
                key={i}
                aria-label={["Search", "Account", "Wishlist", "Cart"][i]}
                className="transition-colors duration-500 hover:text-chrome-bright"
              >
                <Icon strokeWidth={1} className="h-[18px] w-[18px]" />
              </button>
            ))}
          </div>
          <button
            className="text-chrome lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
          </button>
        </div>
      </div>
      <div className="chrome-rule opacity-40" />

      {open && (
        <div className="bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col px-6 py-6">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-[11px] tracking-[0.28em] text-muted-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}