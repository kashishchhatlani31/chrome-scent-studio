import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { Quiz } from "@/components/site/Quiz";
import { products } from "@/data/products";
import heroBottle from "@/assets/hero-bottle.jpg";
import experienceImg from "@/assets/experience.jpg";

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
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
        <img
          src={heroBottle}
          alt="Black glass perfume bottle with chrome cap under studio lighting"
          width={1280}
          height={1600}
          className="pointer-events-none absolute inset-0 mx-auto h-full w-auto max-w-none object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,var(--background)_78%)]" />
        <div className="relative z-10 px-6 pt-28 text-center">
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
              Luxury fragrances designed to leave an impression.
            </p>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
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
