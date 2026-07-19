import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="relative -mt-[88px] h-screen overflow-hidden bg-paper pt-[88px]">
      <div className="mx-auto flex h-full max-w-none items-center px-8 lg:px-16">

        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">

          <HeroLeft />

          <HeroRight />

        </div>

      </div>
    </section>
  );
}