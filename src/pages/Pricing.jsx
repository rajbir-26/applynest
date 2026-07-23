import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/footer';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-paper text-neutral-dark flex flex-col justify-between antialiased">
      <div>
        <Navbar />

        <main className="max-w-4xl mx-auto px-6 py-6 text-center">
          
          {/* Top Emotional Banner */}
          <div className="inline-flex items-center gap-2 bg-[#F9F6F0] border border-[#EAD9C9] px-4 py-1.5 rounded-full text-xs font-bold text-[#944E2D] mb-4 shadow-sm">
            <span>❤️</span> Save that subscription money and buy something special for your family instead.
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-2">
            Ladies and Gentlemen, <br />
            <span className="text-[#944E2D]">It’s 100% Free Forever.</span>
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed mb-6 font-medium">
            No hidden subscriptions. No "Upgrade to Pro to apply". No credit card required. Just find your job, apply, and make your loved ones proud! 🚀
          </p>

          {/* Pricing Grid (Compact Free Card) */}
          <div className="max-w-md mx-auto bg-white border-2 border-[#944E2D] rounded-2xl p-5 shadow-md relative overflow-hidden">
            
            {/* Top Right Ribbon */}
            <div className="absolute top-3 -right-12 bg-[#944E2D] text-white text-[9px] font-bold uppercase tracking-widest px-12 py-0.5 rotate-45 shadow-sm">
              BEST DEAL
            </div>

            <div className="text-left mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">The Student & Job Seeker Plan</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl font-black text-gray-900">₹0</span>
                <span className="text-gray-500 font-bold text-xs">/ forever</span>
              </div>
            </div>

            {/* Feature List - Compact Grid */}
            <ul className="space-y-2 text-left text-xs font-semibold text-gray-700 mb-5 border-t border-[#F2EDE4] pt-4">
              <li className="flex items-center gap-2.5">
                <span className="text-emerald-500 font-bold text-sm">✓</span> Unlimited job searching & filtering
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-emerald-500 font-bold text-sm">✓</span> Direct application links with zero paywalls
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-emerald-500 font-bold text-sm">✓</span> Zero annoying "Buy Premium" popups
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-emerald-500 font-bold text-sm">✓</span> 100% free resume & career tips
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-emerald-500 font-bold text-sm">✓</span> Peace of mind for your bank account
              </li>
            </ul>

            <Link
              to="/jobs"
              className="block w-full bg-[#944E2D] hover:bg-[#7D3F22] text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-sm text-center"
            >
              Start Applying Now (For ₹0) ↗
            </Link>
          </div>

          {/* Social Support Section */}
          <div className="mt-6 max-w-md mx-auto bg-[#F9F6F0] border border-[#EAD9C9] rounded-2xl p-4 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-1">
              Want to support us anyway? ❤️
            </h3>
            <p className="text-[11px] text-gray-600 mb-3 font-medium leading-relaxed">
              If ApplyNest helped you find a job, support us by following our social channels!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {/* WhatsApp */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] px-3 py-2 rounded-lg transition-colors shadow-sm"
              >
                <span>💬</span> WhatsApp
              </a>

              {/* Instagram */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white font-bold text-[11px] px-3 py-2 rounded-lg transition-opacity shadow-sm"
              >
                <span>📸</span> Instagram
              </a>

              {/* YouTube */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] px-3 py-2 rounded-lg transition-colors shadow-sm"
              >
                <span>▶️</span> YouTube
              </a>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}