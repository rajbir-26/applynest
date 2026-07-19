import QuoteCard from "./QuoteCard";

function HeroPhoto() {
  return (
    <img
      src="/images/hero-student.webp"
      alt="Student using laptop"
      draggable={false}
      className="block w-full h-auto select-none"
    />
  );
}

export default function HeroRight() {
  return (
    <div className="relative flex h-full items-center justify-end overflow-visible">

      <div className="relative w-[132%] translate-x-[14%] -translate-y-[0px]">

        <HeroPhoto />

       <div className="absolute top-[16%] left-[50%] z-30">
    <QuoteCard />
</div>

      </div>

    </div>
  );
}