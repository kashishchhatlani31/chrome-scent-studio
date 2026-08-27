import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import experienceImg from "@/assets/experience.webp";

const title = "Our Story — The House of AURVM";
const description =
  "AURVM is a niche perfume house built on black glass, polished chrome and slow, uncompromising composition. This is how we work.";

export const Route = createFileRoute("/our-story")({
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
  component: StoryPage,
});

const pillars = [
  {
    n: "01",
    t: "Composition",
    d: "Every formula is built over eighteen months with a single perfumer, revised until nothing can be removed.",
  },
  {
    n: "02",
    t: "Concentration",
    d: "Extrait strength only. Between 24% and 30% perfume oil, so the trail stays for hours, not minutes.",
  },
  {
    n: "03",
    t: "Object",
    d: "Hand-finished black glass, machined chrome collars, refillable by design. The bottle should outlive the scent.",
  },
];

function StoryPage() {
  return (
    <SiteLayout>
      <section className="px-6 pt-44 pb-24 lg:px-12">
        <Reveal className="mx-auto max-w-[1600px]">
          <p className="track-luxe text-[10px] text-chrome-dark">OUR STORY</p>
          <h1 className="chrome-text-static mt-6 max-w-4xl font-serif text-6xl leading-[1.02] lg:text-8xl">
            SCENT AS ARCHITECTURE.
          </h1>
          <p className="mt-10 max-w-xl text-base leading-relaxed font-light text-muted-foreground">
            AURVM began in a darkroom studio with one instruction to its perfumer:
            make something that behaves like polished metal — cold at first
            contact, warm once it is worn.
          </p>
        </Reveal>
      </section>

      <section className="overflow-hidden">
        <img
          src={experienceImg}
          alt="Black perfume bottle in studio smoke"
          loading="lazy"
          width={1920}
          height={1088}
          className="h-[70vh] w-full object-cover opacity-70"
        />
      </section>

      <section className="px-6 py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 140}>
              <span className="chrome-text-static font-serif text-5xl">{p.n}</span>
              <div className="chrome-rule my-8" />
              <h2 className="font-serif text-3xl text-foreground">{p.t}</h2>
              <p className="mt-5 text-sm leading-relaxed font-light text-muted-foreground">
                {p.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}