import { Quote } from "lucide-react";

export default function QuoteCard() {
  return (
    <div className="w-[195px] bg-[#FCF8F4] px-7 py-8 shadow-editorial">
      <Quote
        size={42}
        className="mb-5 text-terracotta fill-current"
        strokeWidth={2}
      />

      <h3 className="font-heading text-[21px] leading-[1.45] text-neutral-dark">
        The right
        <br />
        opportunity
        <br />
        can change
        <br />
        <span className="italic text-terracotta">
          everything.
        </span>
      </h3>
    </div>
  );
}