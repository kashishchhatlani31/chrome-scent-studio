import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { PriceBlock } from "@/components/site/PriceBlock";
import { products, getProduct, inr, type Product } from "@/data/products";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable — AURVM" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.product;
    const title = `${p.name} — ${p.family} Extrait de Parfum | AURVM`;
    return {
      meta: [
        { title },
        { name: "description", content: p.description },
        { property: "og:title", content: title },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
});

function Notes({ product }: { product: Product }) {
  const groups = [
    { title: "TOP NOTES", list: product.notes.top },
    { title: "HEART NOTES", list: product.notes.heart },
    { title: "BASE NOTES", list: product.notes.base },
  ];
  return (
    <div className="mt-14">
      {groups.map((g) => (
        <div key={g.title}>
          <div className="chrome-rule" />
          <div className="grid gap-2 py-6 sm:grid-cols-[160px_1fr]">
            <p className="track-luxe text-[10px] text-chrome">{g.title}</p>
            <p className="text-sm font-light text-muted-foreground">
              {g.list.join(" • ")}
            </p>
          </div>
        </div>
      ))}
      <div className="chrome-rule" />
    </div>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [sizeIndex, setSizeIndex] = useState(2);
  const [qty, setQty] = useState(1);
  const size = product.sizes[sizeIndex] ?? product.sizes[0]!;

  const related = products.filter((p) => p.slug !== product.slug);

  return (
    <SiteLayout>
      <section className="px-6 pt-36 pb-28 lg:px-12">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="bg-black">
              <img
                src={product.packImage}
                alt={`${product.name} matte black bottle with chrome cap beside its matching matte black outer box`}
                width={1024}
                height={1280}
                className="h-full max-h-[860px] w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-black">
                <img
                  src={product.image}
                  alt={`${product.name} bottle detail`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-56 w-full object-cover"
                />
              </div>
              <div className="bg-black">
                <img
                  src={product.moodImage}
                  alt={`${product.mood} mood imagery`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-56 w-full object-cover opacity-80"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:py-10">
            <Link
              to="/shop"
              className="track-luxe text-[10px] text-chrome-dark transition-colors duration-500 hover:text-chrome-bright"
            >
              ← BACK TO SHOP
            </Link>
            <h1 className="chrome-text-static mt-8 font-serif text-6xl leading-none">
              {product.name}
            </h1>
            <p className="mt-4 text-[11px] tracking-[0.28em] text-chrome-dark">
              {product.family.toUpperCase()}
            </p>
            <div className="mt-8">
              <PriceBlock mrp={size.mrp} price={size.price} size="lg" />
            </div>
            <p className="mt-4 text-[10px] tracking-[0.2em] text-chrome-dark">
              MRP {inr(size.mrp)} INCL. OF ALL TAXES · FREE SHIPPING
            </p>
            <p className="mt-8 max-w-md text-sm leading-relaxed font-light text-muted-foreground">
              {product.description}
            </p>

            <Notes product={product} />

            <div className="mt-12 flex flex-wrap items-center gap-10">
              <div>
                <p className="track-luxe text-[10px] text-chrome-dark">SIZE</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.sizes.map((s, i) => (
                    <button
                      key={s.label}
                      onClick={() => setSizeIndex(i)}
                      className={`border px-5 py-3 text-left transition-all duration-500 ${
                        sizeIndex === i
                          ? "border-chrome text-chrome-bright"
                          : "border-border text-muted-foreground hover:border-chrome/50"
                      }`}
                    >
                      <span className="block text-[10px] tracking-[0.2em]">{s.label}</span>
                      <span className="mt-1 block text-[11px] font-light">
                        {inr(s.price)}
                      </span>
                    </button>
                  ))}
                </div>
                {size.note && (
                  <p className="mt-3 text-[10px] tracking-[0.2em] text-chrome-dark">
                    {size.note.toUpperCase()}
                  </p>
                )}
              </div>
              <div>
                <p className="track-luxe text-[10px] text-chrome-dark">QUANTITY</p>
                <div className="mt-4 flex items-center gap-5 border border-border px-5 py-3">
                  <button
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="text-chrome-dark transition-colors hover:text-chrome-bright"
                  >
                    <Minus className="h-3.5 w-3.5" strokeWidth={1} />
                  </button>
                  <span className="w-5 text-center text-sm text-foreground">{qty}</span>
                  <button
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => q + 1)}
                    className="text-chrome-dark transition-colors hover:text-chrome-bright"
                  >
                    <Plus className="h-3.5 w-3.5" strokeWidth={1} />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <button
                onClick={() =>
                  toast(
                    `${qty} × ${product.name} (${size.label}) added to cart — ${inr(size.price * qty)}`,
                  )
                }
                className="chrome-frame flex-1 py-6 text-[10px] tracking-[0.35em] text-chrome transition-colors duration-700 hover:text-chrome-bright"
              >
                ADD TO CART
              </button>
              <button
                aria-label="Add to wishlist"
                onClick={() => toast(`${product.name} added to wishlist`)}
                className="chrome-frame p-6 text-chrome-dark hover:text-chrome-bright"
              >
                <Heart strokeWidth={1} className="h-4 w-4" />
              </button>
            </div>

            <div className="chrome-frame mt-10 grid gap-4 p-8 sm:grid-cols-3">
              {[
                ["MATTE BLACK GLASS", "Soft-touch bottle, no fingerprints"],
                ["POLISHED CHROME CAP", "Weighted metal, engraved mark"],
                ["MATCHING BOX", "Rigid black board, silver foil type"],
              ].map(([t, d]) => (
                <div key={t}>
                  <p className="text-[9px] tracking-[0.25em] text-chrome">{t}</p>
                  <p className="mt-2 text-xs font-light text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="chrome-text-static font-serif text-4xl">YOU MAY ALSO WEAR</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}