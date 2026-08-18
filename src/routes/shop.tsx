import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
import { bundles } from "@/data/bundles";
import { PriceBlock } from "@/components/site/PriceBlock";
import { Link } from "@tanstack/react-router";

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
              chrome and boxed in matching matte black. Four sizes — 10, 30, 50 and
              100 ML. Luxury fragrance without the luxury price tag.
            </p>
          </Reveal>
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-32">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="chrome-text-static font-serif text-4xl lg:text-5xl">
                SAVE MORE IN SETS
              </h2>
              <Link
                to="/bundles"
                className="text-[10px] tracking-[0.3em] text-chrome-dark transition-colors duration-500 hover:text-chrome-bright"
              >
                VIEW ALL SETS
              </Link>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {bundles.map((b) => (
                <Link
                  key={b.slug}
                  to="/bundles"
                  className="group chrome-frame metal-surface flex flex-col overflow-hidden"
                >
                  <div className="overflow-hidden bg-black">
                    <img
                      src={b.image}
                      alt={`${b.name} gift set in matte black packaging`}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="h-64 w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <p className="track-luxe text-[9px] text-chrome-dark">{b.kicker}</p>
                    <h3 className="chrome-text-static mt-3 font-serif text-2xl">
                      {b.name}
                    </h3>
                    <div className="mt-auto pt-8">
                      <PriceBlock mrp={b.mrp} price={b.price} size="sm" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}