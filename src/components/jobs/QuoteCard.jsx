import React from 'react';

export default function QuoteCard() {
  return (
    <div className="relative w-72 min-h-[420px] bg-white border border-[#F2EDE4] rounded-3xl p-8 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-all duration-300">
      
      {/* Decorative Accent Line on the Left */}
      <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#944E2D] rounded-l-3xl"></div>

      {/* Background Shapes / Geometric Aesthetics */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F9F6F0] rounded-full blur-xl pointer-events-none opacity-70"></div>
      <div className="absolute bottom-12 right-6 w-20 h-20 border-2 border-dashed border-[#EAD9C9] rounded-full pointer-events-none opacity-40 group-hover:rotate-45 transition-transform duration-700"></div>

      {/* Top Section: Quotation Icon & Quote */}
      <div className="relative z-10">
        <div className="text-5xl font-serif text-[#944E2D] opacity-80 leading-none mb-4">
          “
        </div>
        <p className="text-lg font-serif italic text-gray-800 leading-relaxed">
          The right opportunity can change <span className="text-[#944E2D] font-bold not-italic underline decoration-1 underline-offset-4">everything</span>.
        </p>
      </div>

      {/* Middle Decorative Dot Grid */}
      <div className="my-6 grid grid-cols-4 gap-2 w-16 opacity-30">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#944E2D]"></div>
        ))}
      </div>

      {/* Bottom Section: Arch Shape & Tagline */}
      <div className="relative z-10 pt-4 border-t border-[#F2EDE4] flex items-center justify-between">
        <div>
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#944E2D]">
            ApplyNest
          </span>
          <p className="text-[11px] text-gray-400 font-medium">Your next career step</p>
        </div>

        {/* Arch Vector Decorative Element */}
        <div className="w-10 h-12 bg-[#F9F6F0] border border-[#EAD9C9] rounded-t-full flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#944E2D]"></div>
        </div>
      </div>

    </div>
  );
}