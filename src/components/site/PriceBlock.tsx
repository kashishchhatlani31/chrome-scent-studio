import { inr, savings } from "@/data/products";

export function PriceBlock({
  mrp,
  price,
  size = "md",
}: {
  mrp: number;
  price: number;
  size?: "sm" | "md" | "lg";
}) {
  const { amount, percent } = savings(mrp, price);
  const priceClass =
    size === "lg" ? "text-4xl" : size === "md" ? "text-2xl" : "text-lg";

  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-3">
        <span className={`chrome-text-static font-serif ${priceClass}`}>
          {inr(price)}
        </span>
        <span className="text-xs font-light text-chrome-dark line-through">
          {inr(mrp)}
        </span>
        <span className="border border-chrome/30 px-2 py-0.5 text-[9px] tracking-[0.2em] text-chrome">
          {percent}% OFF
        </span>
      </div>
      <p className="mt-2 text-[10px] tracking-[0.2em] text-muted-foreground">
        YOU SAVE {inr(amount)}
      </p>
    </div>
  );
}