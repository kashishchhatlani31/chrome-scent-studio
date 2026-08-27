import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { Quiz } from "@/components/site/Quiz";
import { products } from "@/data/products";
import { bundles } from "@/data/bundles";
import { PriceBlock } from "@/components/site/PriceBlock";
import packVanilla from "@/assets/pack-vanilla.webp";
import heroBottle from "@/assets/hero-bottle.webp";
import experienceImg from "@/assets/experience.webp";

const title = "AURVM — Your Scent. Your Signature.";
const description =
  "A black-and-chrome niche fragrance house. Four moods, four signatures — vanilla, waves, floral and fruity extraits de parfum.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-background pt-32">
        <div className="relative z-10 px-6 text-center">
          <Reveal>
            <p className="track-luxe text-[10px] text-chrome-dark">EXTRAIT DE PARFUM</p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="chrome-text mt-8 font-serif text-[13vw] leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
              YOUR SCENT.
              <br />
              YOUR SIGNATURE.
            </h1>
          </Reveal>
          <Reveal delay={320}>
            <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed font-light tracking-wide text-muted-foreground">
              Luxury fragrance without the luxury price tag. From ₹399.
            </p>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#collection"
                className="chrome-frame bg-background/60 px-10 py-5 text-[10px] tracking-[0.3em] text-chrome backdrop-blur-sm transition-colors duration-700 hover:text-chrome-bright"
              >
                EXPLORE FRAGRANCES
              </a>
              <Link
                to="/shop"
                className="chrome-frame bg-background/60 px-10 py-5 text-[10px] tracking-[0.3em] text-chrome backdrop-blur-sm transition-colors duration-700 hover:text-chrome-bright"
              >
                SHOP COLLECTION
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <img
            src={heroBottle}
            alt="Black glass perfume bottle with chrome cap under studio lighting"
            width={1280}
            height={1600}
            className="pointer-events-none h-[56vh] w-auto object-contain opacity-90 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_82%)]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </section>

      {/* COLLECTION — four moods */}
      <section id="collection" className="px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="text-center">
            <h2 className="chrome-text-static font-serif text-5xl lg:text-7xl">
              THE COLLECTION
            </h2>
            <p className="mt-5 text-sm font-light tracking-[0.2em] text-muted-foreground">
              Four moods. Four signatures.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <Link
                  to="/product/$slug"
                  params={{ slug: p.slug }}
                  className="group chrome-frame relative block overflow-hidden bg-black"
                >
                  <img
                    src={p.moodImage}
                    alt={`${p.mood} mood imagery`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-[560px] w-full object-cover opacity-75 transition-all duration-[1800ms] ease-out group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-8">
                    <h3 className="chrome-text-static font-serif text-4xl tracking-widest">
                      {p.mood}
                    </h3>
                    <p className="mt-3 text-xs font-light tracking-[0.2em] text-muted-foreground">
                      {p.tagline}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE EXPERIENCE */}
      {/* PACKAGING */}
      <section className="px-6 pb-32 lg:px-12">
        <div className="mx-auto grid max-w-[1600px] items-center gap-16 lg:grid-cols-2">
          <Reveal className="bg-black">
            <img
              src={packVanilla}
              alt="Matte black perfume bottle with polished chrome cap beside its matching matte black outer box"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-[620px] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={140}>
            <p className="track-luxe text-[10px] text-chrome-dark">THE PACKAGING</p>
            <h2 className="chrome-text-static mt-6 font-serif text-5xl lg:text-6xl">
              ONE ARCHITECTURE.
              <br />
              FOUR MOODS.
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed font-light text-muted-foreground">
              Matte black glass. A weighted, polished chrome cap and chrome mark. A
              matching matte black outer box with minimal silver foil typography —
              identical across Vanilla, Waves, Floral and Fruity, so the shelf reads as
              one collection.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                ["10 · 30 · 50 · 100 ML", "Practical sizes, one price ladder"],
                ["FROM ₹399", "MRP ₹899 · save 55%"],
                ["EXTRAIT STRENGTH", "20–30% concentration"],
                ["FREE SHIPPING", "On every order, always"],
              ].map(([t, d]) => (
                <div key={t} className="chrome-frame p-6">
                  <p className="text-[10px] tracking-[0.25em] text-chrome">{t}</p>
                  <p className="mt-2 text-xs font-light text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={experienceImg}
          alt="Cinematic black perfume bottle in smoke"
          loading="lazy"
          width={1920}
          height={1088}
          className="h-[90vh] w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-background/10" />
        <div className="absolute inset-0 flex items-center px-6 lg:px-24">
          <Reveal className="max-w-2xl">
            <p className="track-luxe text-[10px] text-chrome-dark">THE EXPERIENCE</p>
            <h2 className="chrome-text mt-8 font-serif text-5xl leading-[1.05] lg:text-7xl">
              MORE THAN
              <br />A FRAGRANCE.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed font-light text-muted-foreground">
              A scent becomes unforgettable when it becomes part of you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SIGNATURE SCENTS carousel */}
      <section className="py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="chrome-text-static font-serif text-5xl lg:text-6xl">
              SIGNATURE SCENTS
            </h2>
            <Link
              to="/shop"
              className="text-[10px] tracking-[0.3em] text-chrome-dark transition-colors duration-500 hover:text-chrome-bright"
            >
              VIEW ALL
            </Link>
          </Reveal>
        </div>
        <div className="no-scrollbar mt-16 flex gap-6 overflow-x-auto px-6 pb-4 lg:px-12">
          {[...products, ...products].map((p, i) => (
            <div key={`${p.slug}-${i}`} className="w-[340px] shrink-0">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* QUIZ */}
      {/* BUNDLES */}
      <section className="px-6 pb-32 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="chrome-text-static font-serif text-5xl lg:text-6xl">
              SETS &amp; BUNDLES
            </h2>
            <Link
              to="/bundles"
              className="text-[10px] tracking-[0.3em] text-chrome-dark transition-colors duration-500 hover:text-chrome-bright"
            >
              VIEW ALL SETS
            </Link>
          </Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {bundles.map((b, i) => (
              <Reveal key={b.slug} delay={i * 120}>
                <Link
                  to="/bundles"
                  className="group chrome-frame metal-surface flex h-full flex-col overflow-hidden"
                >
                  <div className="relative overflow-hidden bg-black">
                    {b.badge && (
                      <span className="chrome-text-static absolute top-5 left-5 z-10 border border-chrome/25 px-3 py-1 text-[9px] tracking-[0.3em]">
                        {b.badge}
                      </span>
                    )}
                    <img
                      src={b.image}
                      alt={`${b.name} set of matte black bottles with chrome caps and matching boxes`}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="h-72 w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <p className="track-luxe text-[9px] text-chrome-dark">{b.kicker}</p>
                    <h3 className="chrome-text-static mt-3 font-serif text-2xl">
                      {b.name}
                    </h3>
                    <p className="mt-4 text-xs leading-relaxed font-light text-muted-foreground">
                      {b.description}
                    </p>
                    <div className="mt-auto pt-8">
                      <PriceBlock mrp={b.mrp} price={b.price} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-32 lg:px-12">
        <Reveal className="mx-auto max-w-[1600px] text-center">
          <p className="track-luxe text-[10px] text-chrome-dark">FRAGRANCE PROFILING</p>
          <h2 className="chrome-text-static mt-6 font-serif text-5xl lg:text-6xl">
            WHAT'S YOUR SIGNATURE?
          </h2>
        </Reveal>
        <div className="mt-16">
          <Quiz />
        </div>
      </section>
    </SiteLayout>
  );
}
