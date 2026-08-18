import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { PriceBlock } from "@/components/site/PriceBlock";
import { bundles } from "@/data/bundles";

const title = "Gift Sets & Fragrance Bundles — AURVM";
const description =
  "Duo, discovery and complete-collection bundles of AURVM extraits — matte black bottles, chrome caps, matching boxes. Luxury fragrance without the luxury price tag.";

export const Route = createFileRoute("/bundles")({
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
  component: BundlesPage,
});

function BundlesPage() {
  return (
    <SiteLayout>
      <section className="px-6 pt-44 pb-24 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="track-luxe text-[10px] text-chrome-dark">SETS &amp; BUNDLES</p>
            <h1 className="chrome-text-static mt-6 font-serif text-6xl lg:text-8xl">
              MORE SCENT.
              <br />
              LESS SPEND.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed font-light text-muted-foreground">
              Every set arrives in the same architecture — matte black bottles, polished
              chrome caps, matching black outer boxes with silver typography. Luxury
              fragrance without the luxury price tag.
            </p>
          </Reveal>

          <div className="mt-20 space-y-6">
            {bundles.map((b, i) => (
              <Reveal key={b.slug} delay={i * 120}>
                <article className="chrome-frame metal-surface grid gap-0 overflow-hidden lg:grid-cols-2">
                  <div className="relative bg-black">
                    {b.badge && (
                      <span className="chrome-text-static absolute top-5 left-5 z-10 border border-chrome/25 px-3 py-1 text-[9px] tracking-[0.3em]">
                        {b.badge}
                      </span>
                    )}
                    <img
                      src={b.image}
                      alt={`${b.name} — matte black bottles with chrome caps and matching boxes`}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="h-full min-h-[380px] w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-10 lg:p-14">
                    <p className="track-luxe text-[10px] text-chrome-dark">{b.kicker}</p>
                    <h2 className="chrome-text-static mt-4 font-serif text-4xl">
                      {b.name}
                    </h2>
                    <p className="mt-5 max-w-md text-sm leading-relaxed font-light text-muted-foreground">
                      {b.description}
                    </p>
                    <ul className="mt-7 space-y-2">
                      {b.contents.map((c) => (
                        <li
                          key={c}
                          className="flex items-center gap-3 text-xs font-light text-muted-foreground"
                        >
                          <span className="h-px w-5 bg-chrome/50" />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-9">
                      <PriceBlock mrp={b.mrp} price={b.price} size="lg" />
                    </div>
                    <button
                      onClick={() => toast(`${b.name} added to cart`)}
                      className="chrome-frame mt-9 w-full py-5 text-[10px] tracking-[0.35em] text-chrome transition-colors duration-700 hover:text-chrome-bright sm:w-auto sm:px-16"
                    >
                      ADD SET TO CART
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 text-center">
            <Link
              to="/shop"
              className="text-[10px] tracking-[0.3em] text-chrome-dark transition-colors duration-500 hover:text-chrome-bright"
            >
              OR SHOP SINGLE BOTTLES →
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}