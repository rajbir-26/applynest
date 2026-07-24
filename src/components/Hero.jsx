import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="relative -mt-[72px] sm:-mt-[88px] min-h-screen lg:h-screen lg:max-h-[950px] overflow-hidden bg-paper pt-[72px] sm:pt-[88px] flex items-center py-8 lg:py-0">
      <div className="mx-auto flex w-full h-full max-w-none items-center px-4 sm:px-8 lg:px-16">

        {/* Stacks vertically on mobile/tablet (grid-cols-1), restores your custom ratio on desktop (lg:) */}
        <div className="grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-[0.75fr_1.25fr]">

          <HeroLeft />

          <HeroRight />

        </div>

      </div>
    </section>
  );
}