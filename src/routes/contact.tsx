import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

const title = "Contact & Client Care — AURVM";
const description =
  "Speak with AURVM client care about fragrance consultations, orders, shipping and returns.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="px-6 pt-44 pb-32 lg:px-12">
        <div className="mx-auto grid max-w-[1600px] gap-20 lg:grid-cols-2">
          <Reveal>
            <p className="track-luxe text-[10px] text-chrome-dark">CONTACT</p>
            <h1 className="chrome-text-static mt-6 font-serif text-6xl lg:text-7xl">
              CLIENT CARE
            </h1>
            <div className="chrome-rule my-10 max-w-sm" />
            <dl className="space-y-8 text-sm font-light text-muted-foreground">
              <div>
                <dt className="track-luxe text-[10px] text-chrome">EMAIL</dt>
                <dd className="mt-2">care@aurvm.com</dd>
              </div>
              <div>
                <dt className="track-luxe text-[10px] text-chrome">ATELIER</dt>
                <dd className="mt-2">14 Rue Noire, Paris</dd>
              </div>
              <div>
                <dt className="track-luxe text-[10px] text-chrome">HOURS</dt>
                <dd className="mt-2">Monday — Saturday, 10:00 to 19:00 CET</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={160}>
            <form
              className="chrome-frame metal-surface space-y-8 p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast("Message received. Client care will reply shortly.");
              }}
            >
              {[
                { label: "NAME", type: "text" },
                { label: "EMAIL", type: "email" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="track-luxe text-[10px] text-chrome-dark">
                    {f.label}
                  </label>
                  <input
                    required
                    type={f.type}
                    className="mt-3 w-full border-b border-border bg-transparent pb-3 text-sm font-light text-foreground outline-none transition-colors duration-500 focus:border-chrome"
                  />
                </div>
              ))}
              <div>
                <label className="track-luxe text-[10px] text-chrome-dark">MESSAGE</label>
                <textarea
                  required
                  rows={4}
                  className="mt-3 w-full resize-none border-b border-border bg-transparent pb-3 text-sm font-light text-foreground outline-none transition-colors duration-500 focus:border-chrome"
                />
              </div>
              <button
                type="submit"
                className="w-full border border-chrome/30 py-5 text-[10px] tracking-[0.3em] text-chrome transition-all duration-700 hover:border-chrome/80 hover:text-chrome-bright"
              >
                {sent ? "MESSAGE SENT" : "SEND MESSAGE"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}