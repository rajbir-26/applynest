import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Features", "Jobs", "Pricing", "Tips", "About"];

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-[88px] max-w-[1700px] items-center justify-between px-8 lg:px-16">

        {/* Logo */}
        <a href="/" className="select-none">
          <h1 className="font-heading text-[54px] font-black tracking-[-0.05em] leading-none">
            <span className="text-neutral-dark">Apply</span>
            <span className="text-terracotta">Nest</span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 rounded-full border border-[#eadfd2] bg-white/70 px-10 py-4 shadow-sm backdrop-blur-md">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[17px] font-medium text-neutral-dark transition hover:text-terracotta"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Empty spacer instead of top button */}
        <div className="hidden w-[180px] lg:block" />

        {/* Mobile */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#eadfd2] bg-paper lg:hidden">
          <div className="flex flex-col gap-5 px-8 py-8">
            {links.map((item) => (
              <a
                key={item}
                href="#"
                className="text-lg font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}