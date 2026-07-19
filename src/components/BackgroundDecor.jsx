import { ShieldCheck } from "lucide-react";

export default function FloatingCard() {
  return (
    <div className="flex items-center gap-5 rounded-[18px] bg-white p-7 shadow-editorial">

      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#F8EFE8]">
        <ShieldCheck
          size={42}
          className="text-terracotta"
          strokeWidth={1.8}
        />
      </div>

      <div>
        <h3 className="mb-2 text-[30px] font-semibold text-neutral-dark">
          Verified &amp; Safe
        </h3>

        <p className="max-w-[280px] text-[21px] leading-9 text-neutral-600">
          Every job is verified
          <br />
          so you can apply
          <br />
          with confidence.
        </p>
      </div>

    </div>
  );
}