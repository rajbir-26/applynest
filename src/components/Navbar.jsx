import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Tracks what URL path the user is currently viewing

  const links = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Pricing", path: "/pricing" },
    { name: "Tips", path: "/tips" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-[72px] sm:h-[88px] max-w-[1700px] items-center justify-between px-4 sm:px-8 lg:px-16">

        {/* Logo - Scales smoothly from 32px on phone up to 54px on desktop */}
        <Link to="/" className="select-none transition-transform hover:scale-[1.02] active:scale-95">
          <h1 className="font-heading text-[32px] sm:text-[42px] lg:text-[54px] font-black tracking-[-0.05em] leading-none">
            <span className="text-neutral-dark">Kareer</span>
            <span className="text-terracotta">Kafe</span>
          </h1>
        </Link>

        {/* Desktop Nav - Floating Pill Menu */}
        <nav className="hidden lg:flex items-center gap-8 rounded-full border border-[#eadfd2] bg-white/80 px-10 py-4 shadow-sm backdrop-blur-md transition-all hover:shadow-md hover:border-terracotta/40">
          {links.map((item) => {
            // Checks if this link matches the current window URL route path
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-[17px] font-medium text-neutral-dark transition-colors duration-200 hover:text-terracotta py-1 active:scale-95"
              >
                {item.name}
                {/* Visual Active Underline element with smooth width animation */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-terracotta rounded-full animate-fade-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Empty spacer instead of top button for layout balance */}
        <div className="hidden w-[180px] lg:block" />

        {/* Mobile / Tablet Toggle */}
        <button
          className="lg:hidden text-neutral-dark hover:text-terracotta transition-transform active:scale-90 p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Navigation Menu"
        >
          {open ? <X size={28} className="sm:w-[30px] sm:h-[30px]" /> : <Menu size={28} className="sm:w-[30px] sm:h-[30px]" />}
        </button>
      </div>

      {/* Mobile / Tablet Menu Dropdown */}
      {open && (
        <div className="border-t border-[#eadfd2] bg-paper/95 backdrop-blur-md lg:hidden animate-fade-up shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col gap-5 px-6 sm:px-8 py-6 sm:py-8">
            {links.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-base sm:text-lg font-medium transition-all duration-200 active:scale-95 flex items-center justify-between ${
                    isActive ? 'text-terracotta font-bold' : 'text-neutral-dark hover:text-terracotta'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 bg-terracotta rounded-full animate-pulse" />}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}