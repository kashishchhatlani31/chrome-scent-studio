import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";

const title = "Shop All Fragrances — AURVM";
const description =
  "Shop the full AURVM range of extrait de parfum in black glass and polished chrome. Vanilla, aquatic, floral and dark fruity signatures.";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <SiteLayout>
      <section className="px-6 pt-44 pb-32 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="track-luxe text-[10px] text-chrome-dark">SHOP</p>
            <h1 className="chrome-text-static mt-6 font-serif text-6xl lg:text-8xl">
              ALL FRAGRANCES
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed font-light text-muted-foreground">
              Every AURVM composition is bottled in black glass, capped in polished
              chrome and blended at extrait concentration.
            </p>
          </Reveal>
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}