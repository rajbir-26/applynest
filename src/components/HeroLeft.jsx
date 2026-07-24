import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroLeft() {
  return (
    <div className="flex w-full flex-col justify-center lg:pr-8">

      {/* Label */}
      <div className="mb-4 sm:mb-8 flex items-center gap-3 sm:gap-4">
        <div className="h-[2px] w-8 sm:w-12 rounded-full bg-terracotta" />
        <span className="font-body text-[12px] sm:text-[14px] lg:text-[15px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-terracotta">
          For Students. By Students.
        </span>
      </div>

      {/* Heading - Scales smoothly from 38px on phones to 76px on desktop */}
      <h1 className="font-heading text-[38px] sm:text-[54px] md:text-[66px] lg:text-[76px] font-medium leading-[1.02] sm:leading-[0.98] lg:leading-[0.95] tracking-[-0.04em] sm:tracking-[-0.05em] text-neutral-dark">
        Jobs should be
        <br />
        <span className="italic text-terracotta">
          easier to find.
        </span>
        <br />
        Not harder.
      </h1>

      {/* Decorative underline */}
      <svg
        className="mt-4 sm:mt-6 w-[80px] sm:w-[110px]"
        width="110"
        height="20"
        viewBox="0 0 110 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 10C12 2 22 18 32 10C42 2 52 18 62 10C72 2 82 18 92 10"
          stroke="#A44E2D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Paragraph - Scales text size and hides hard breaks on small phones */}
      <p className="mt-5 sm:mt-8 max-w-[470px] font-body text-[16px] sm:text-[18px] lg:text-[22px] leading-[1.6] sm:leading-[1.7] lg:leading-[1.8] text-neutral-600">
        Stop jumping between dozens of websites.
        <br className="hidden sm:inline" />
        Discover verified opportunities in one clean,
        <br className="hidden sm:inline" />
        focused place built for students and freshers.
      </p>

      {/* CTA Button */}
      <div className="mt-8 sm:mt-14 w-full sm:w-auto">
        <Link
          to="/jobs"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-3 sm:gap-4 rounded-full bg-terracotta px-8 sm:px-10 py-4 sm:py-5 font-body text-[17px] sm:text-[20px] font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
        >
          Explore Jobs
          <ArrowRight size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={2.2} />
        </Link>
      </div>

    </div>
  );
}