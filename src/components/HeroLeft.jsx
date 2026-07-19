import { ArrowRight } from "lucide-react";

export default function HeroLeft() {
  return (
    <div className="flex w-full flex-col justify-center lg:pr-8">

      {/* Label */}
      <div className="mb-8 flex items-center gap-4">
        <div className="h-[2px] w-12 rounded-full bg-terracotta" />
        <span className="font-body text-[15px] font-semibold uppercase tracking-[0.22em] text-terracotta">
          For Students. By Students.
        </span>
      </div>

      {/* Heading */}
      <h1 className="font-heading text-[76px] font-medium leading-[0.95] tracking-[-0.05em] text-neutral-dark">

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
        className="mt-6"
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

      {/* Paragraph */}
      <p className="mt-8 max-w-[470px] font-body text-[22px] leading-[1.8] text-neutral-600">
        Stop jumping between dozens of websites.
        <br />
        Discover verified opportunities in one clean,
        <br />
        focused place built for students and freshers.
      </p>

      {/* CTA */}
      <div className="mt-14">
        <a
          href="#"
          className="inline-flex items-center gap-4 rounded-full bg-terracotta px-10 py-5 font-body text-[20px] font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          Explore Jobs
          <ArrowRight size={22} strokeWidth={2.2} />
        </a>
      </div>

    </div>
  );
}