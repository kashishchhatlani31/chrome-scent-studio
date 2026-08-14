import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { products, getProduct, type Product } from "@/data/products";

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

const sizes = ["30 ML", "50 ML", "100 ML"];

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
  const [size, setSize] = useState(sizes[1]);
  const [qty, setQty] = useState(1);

  const related = products.filter((p) => p.slug !== product.slug);

  return (
    <SiteLayout>
      <section className="px-6 pt-36 pb-28 lg:px-12">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-2">
          <Reveal className="bg-black">
            <img
              src={product.image}
              alt={`${product.name} perfume bottle`}
              width={1024}
              height={1280}
              className="h-full max-h-[860px] w-full object-cover"
            />
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
            <p className="mt-8 font-serif text-3xl text-chrome">${product.price}</p>
            <p className="mt-8 max-w-md text-sm leading-relaxed font-light text-muted-foreground">
              {product.description}
            </p>

            <Notes product={product} />

            <div className="mt-12 flex flex-wrap items-center gap-10">
              <div>
                <p className="track-luxe text-[10px] text-chrome-dark">SIZE</p>
                <div className="mt-4 flex gap-3">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`border px-5 py-3 text-[10px] tracking-[0.2em] transition-all duration-500 ${
                        size === s
                          ? "border-chrome text-chrome-bright"
                          : "border-border text-muted-foreground hover:border-chrome/50"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
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
                  toast(`${qty} × ${product.name} (${size}) added to cart`)
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