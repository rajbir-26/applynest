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
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-[88px] max-w-[1700px] items-center justify-between px-8 lg:px-16">

        {/* Logo */}
        <Link to="/" className="select-none">
          <h1 className="font-heading text-[54px] font-black tracking-[-0.05em] leading-none">
            <span className="text-neutral-dark">Apply</span>
            <span className="text-terracotta">Nest</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 rounded-full border border-[#eadfd2] bg-white/70 px-10 py-4 shadow-sm backdrop-blur-md">
          {links.map((item) => {
            // Checks if this link matches the current window URL route path
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-[17px] font-medium text-neutral-dark transition hover:text-terracotta py-1"
              >
                {item.name}
                {/* Visual Active Underline element */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-terracotta rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Empty spacer instead of top button */}
        <div className="hidden w-[180px] lg:block" />

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="border-t border-[#eadfd2] bg-paper lg:hidden">
          <div className="flex flex-col gap-5 px-8 py-8">
            {links.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium transition flex items-center justify-between ${
                    isActive ? 'text-terracotta' : 'text-neutral-dark'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 bg-terracotta rounded-full" />}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}