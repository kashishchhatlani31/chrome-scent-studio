import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { products } from "@/data/products";

const title = "Collections — Four Moods, Four Signatures | AURVM";
const description =
  "Explore the four AURVM mood collections: Vanilla, Waves, Floral and Fruity — each a monochrome study in scent, glass and chrome.";

export const Route = createFileRoute("/collections")({
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
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <SiteLayout>
      <section className="px-6 pt-44 pb-24 lg:px-12">
        <Reveal className="mx-auto max-w-[1600px]">
          <p className="track-luxe text-[10px] text-chrome-dark">COLLECTIONS</p>
          <h1 className="chrome-text-static mt-6 font-serif text-6xl lg:text-8xl">
            FOUR MOODS
          </h1>
        </Reveal>
      </section>

      {products.map((p, i) => (
        <section key={p.slug} className="px-6 pb-24 lg:px-12">
          <Reveal className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-2">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <div className="overflow-hidden bg-black">
                <img
                  src={p.moodImage}
                  alt={`${p.mood} collection imagery`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-[620px] w-full object-cover opacity-80 transition-transform duration-[2000ms] ease-out hover:scale-105"
                />
              </div>
            </div>
            <div className={i % 2 ? "lg:order-1 lg:pr-16" : "lg:pl-16"}>
              <h2 className="chrome-text-static font-serif text-5xl tracking-widest lg:text-6xl">
                {p.mood}
              </h2>
              <div className="chrome-rule my-8 max-w-xs" />
              <p className="text-sm tracking-[0.2em] text-chrome">{p.tagline}</p>
              <p className="mt-6 max-w-md text-sm leading-relaxed font-light text-muted-foreground">
                {p.description}
              </p>
              <Link
                to="/product/$slug"
                params={{ slug: p.slug }}
                className="mt-10 inline-block border border-chrome/30 px-8 py-4 text-[10px] tracking-[0.3em] text-chrome transition-all duration-700 hover:border-chrome/80 hover:text-chrome-bright"
              >
                DISCOVER {p.name.toUpperCase()}
              </Link>
            </div>
          </Reveal>
        </section>
      ))}
    </SiteLayout>
  );
}