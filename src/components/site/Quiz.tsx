import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { products, type Product } from "@/data/products";

type Mood = Product["mood"];

const questions: { q: string; options: { label: string; mood: Mood }[] }[] = [
  {
    q: "How should a room remember you?",
    options: [
      { label: "Warm and lingering", mood: "VANILLA" },
      { label: "Cool and clean", mood: "WAVES" },
      { label: "Soft and quiet", mood: "FLORAL" },
      { label: "Bright and alive", mood: "FRUITY" },
    ],
  },
  {
    q: "Choose a surface.",
    options: [
      { label: "Black lacquer", mood: "VANILLA" },
      { label: "Wet chrome", mood: "WAVES" },
      { label: "Raw silk", mood: "FLORAL" },
      { label: "Polished glass", mood: "FRUITY" },
    ],
  },
  {
    q: "When do you wear it?",
    options: [
      { label: "After midnight", mood: "VANILLA" },
      { label: "First light", mood: "WAVES" },
      { label: "Long dinners", mood: "FLORAL" },
      { label: "Every single day", mood: "FRUITY" },
    ],
  },
];

export function Quiz() {
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<Mood[]>([]);

  const result =
    picks.length === questions.length
      ? products.find(
          (p) =>
            p.mood ===
            [...picks].sort(
              (a, b) =>
                picks.filter((m) => m === b).length -
                picks.filter((m) => m === a).length,
            )[0],
        )
      : undefined;

  const reset = () => {
    setPicks([]);
    setStep(0);
  };

  const current = questions[step];

  return (
    <div className="chrome-frame metal-surface mx-auto max-w-3xl p-10 lg:p-16">
      {result ? (
        <div className="text-center">
          <p className="track-luxe text-[10px] text-chrome-dark">YOUR SIGNATURE</p>
          <h3 className="chrome-text-static mt-6 font-serif text-5xl">{result.name}</h3>
          <p className="mt-4 text-sm font-light text-muted-foreground">
            {result.family} — {result.tagline}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/product/$slug"
              params={{ slug: result.slug }}
              className="border border-chrome/40 px-8 py-4 text-[10px] tracking-[0.3em] text-chrome transition-all duration-700 hover:border-chrome hover:text-chrome-bright"
            >
              DISCOVER {result.name.toUpperCase()}
            </Link>
            <button
              onClick={reset}
              className="px-8 py-4 text-[10px] tracking-[0.3em] text-chrome-dark transition-colors duration-500 hover:text-chrome-bright"
            >
              START AGAIN
            </button>
          </div>
        </div>
      ) : (
        current && (
          <div>
            <div className="flex items-center justify-between">
              <p className="track-luxe text-[10px] text-chrome-dark">
                {String(step + 1).padStart(2, "0")} / {String(questions.length).padStart(2, "0")}
              </p>
              <div className="flex gap-2">
                {questions.map((_, i) => (
                  <span
                    key={i}
                    className={`h-px w-10 transition-all duration-700 ${
                      i <= step ? "bg-chrome" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
            <h3 className="mt-8 font-serif text-3xl text-foreground lg:text-4xl">
              {current.q}
            </h3>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {current.options.map((o) => (
                <button
                  key={o.label}
                  onClick={() => {
                    setPicks((p) => [...p, o.mood]);
                    setStep((s) => s + 1);
                  }}
                  className="chrome-frame px-6 py-5 text-left text-sm font-light text-muted-foreground transition-colors duration-700 hover:text-chrome-bright"
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}