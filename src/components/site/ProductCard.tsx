import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { inr, savings, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const entry = product.sizes[0];
  const { percent } = savings(entry.mrp, entry.price);
  return (
    <article className="group chrome-frame metal-surface relative flex h-full flex-col overflow-hidden">
      {product.label && (
        <span className="chrome-text-static absolute top-4 left-4 z-10 border border-chrome/25 px-3 py-1 text-[9px] tracking-[0.3em]">
          {product.label}
        </span>
      )}
      <button
        aria-label="Add to wishlist"
        onClick={() => toast(`${product.name} added to wishlist`)}
        className="absolute top-4 right-4 z-10 text-chrome-dark transition-colors duration-500 hover:text-chrome-bright"
      >
        <Heart strokeWidth={1} className="h-4 w-4" />
      </button>

      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden bg-black"
      >
        <img
          src={product.packImage}
          alt={`${product.name} matte black perfume bottle with chrome cap and matching outer box`}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-[420px] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="track-luxe text-[9px] text-chrome-dark">{product.family}</p>
        <Link to="/product/$slug" params={{ slug: product.slug }}>
          <h3 className="mt-3 font-serif text-2xl text-foreground transition-all duration-700 group-hover:chrome-text-static">
            {product.name}
          </h3>
        </Link>
        <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
          {product.tagline}
        </p>
        <p className="mt-4 text-[10px] tracking-[0.2em] text-chrome-dark">
          {product.sizes.map((s) => s.label.replace(" ", "")).join(" · ")}
        </p>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
          <div>
            <p className="text-[9px] tracking-[0.25em] text-chrome-dark">
              FROM · {entry.label}
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="chrome-text-static font-serif text-xl">
                {inr(entry.price)}
              </span>
              <span className="text-[11px] text-chrome-dark line-through">
                {inr(entry.mrp)}
              </span>
              <span className="text-[9px] tracking-[0.2em] text-chrome">
                {percent}% OFF
              </span>
            </div>
          </div>
          <button
            onClick={() => toast(`${product.name} ${entry.label} added to cart`)}
            className="border border-chrome/25 px-5 py-3 text-[10px] tracking-[0.28em] text-chrome transition-all duration-700 hover:border-chrome/70 hover:text-chrome-bright"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}