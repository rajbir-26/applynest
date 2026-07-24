import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/footer';
import BackgroundDecor from '../components/BackgroundDecor';

export default function About() {
  return (
    <div className="min-h-screen bg-paper text-neutral-dark flex flex-col justify-between antialiased relative overflow-hidden">
      
      {/* Background Vector Patterns & Shapes */}
      <BackgroundDecor />

      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <div>
          <Navbar />

          <main className="max-w-5xl mx-auto px-6 py-12 animate-fade-up">
            
            {/* Hero Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-[#F9F6F0]/90 border border-[#EAD9C9] px-4 py-1.5 rounded-full text-xs font-bold text-[#944E2D] mb-4 shadow-sm hover:scale-105 transition-transform backdrop-blur-sm">
                <span>🪺</span> Built for Students & Job Seekers
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
                Reinventing How You Find <br />
                <span className="text-[#944E2D]">Your Next Big Opportunity</span>
              </h1>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                No hidden paywalls, no endless application loops, and zero fake listings. ApplyNest was built out of pure frustration with modern job portals.
              </p>
            </div>

            {/* Grid Layout for Q&A Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              
              {/* 1. What Problem Does ApplyNest Solve? */}
              <div className="bg-white/80 backdrop-blur-sm border border-[#EAD9C9] rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#944E2D]">
                <div className="text-2xl mb-3">🛠️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">What problem do we solve?</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  Traditional job portals force job seekers through endless registration steps, paywalls, and outdated listings. We eliminate the noise by serving verified, real-time job feeds and direct application links without asking for money or wasting your time.
                </p>
              </div>

              {/* 2. Why Choose ApplyNest over LinkedIn, Internshala, & Indeed? */}
              <div className="bg-white/80 backdrop-blur-sm border border-[#EAD9C9] rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#944E2D]">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Why choose us over legacy platforms?</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  Unlike traditional job portals that are cluttered with social media noise, hidden paywalls, or endless application loops, ApplyNest cuts straight to what matters: verified roles, zero fluff, and direct application links.
                </p>
              </div>

              {/* 3. What Makes ApplyNest Memorable? */}
              <div className="bg-white/80 backdrop-blur-sm border border-[#EAD9C9] rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#944E2D]">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">What makes ApplyNest memorable?</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  We respect your intelligence and time. From transparent "Free Forever" values to direct employer links and clean UI, ApplyNest doesn't try to lock you inside a portal—we help you leave with an application submitted!
                </p>
              </div>

              {/* 4. What Emotions Should Users Feel? */}
              <div className="bg-white/80 backdrop-blur-sm border border-[#EAD9C9] rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#944E2D]">
                <div className="text-2xl mb-3">🕊️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">How should you feel using ApplyNest?</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  Relief and clarity. Job hunting is stressful enough without deceptive ads or paywalls. We want every user to feel empowered, confident, and calm while searching for their next career milestone.
                </p>
              </div>

            </div>

            {/* Banner: What First-Time Users Say */}
            <div className="bg-[#F9F6F0]/90 backdrop-blur-sm border border-[#EAD9C9] rounded-3xl p-8 mb-16 text-center max-w-3xl mx-auto shadow-sm transition-all duration-300 hover:shadow-md">
              <span className="text-xs font-bold uppercase tracking-widest text-[#944E2D]">First Impression</span>
              <blockquote className="text-lg sm:text-xl font-extrabold text-gray-900 mt-3 mb-2 italic">
                "Finally... a job portal that doesn't waste my time or ask for my credit card."
              </blockquote>
              <p className="text-xs text-gray-500 font-medium">
                — What every first-time ApplyNest user should say.
              </p>
            </div>

            {/* Goals Section */}
            <div className="bg-white/90 backdrop-blur-sm border-2 border-[#944E2D] rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg">
              <h2 className="text-xl font-extrabold text-gray-900 mb-6 text-center">
                Our Core Goals 🎯
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="space-y-1.5 p-3 rounded-xl transition-colors hover:bg-[#F9F6F0]">
                  <div className="text-base font-bold text-[#944E2D]">1. Zero-Paywall Access</div>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    Keep job search tools 100% free for students and job seekers, permanently.
                  </p>
                </div>

                <div className="space-y-1.5 p-3 rounded-xl transition-colors hover:bg-[#F9F6F0]">
                  <div className="text-base font-bold text-[#944E2D]">2. Direct Verification</div>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    Filter out scam listings and ensure applicants reach legitimate hiring portals.
                  </p>
                </div>

                <div className="space-y-1.5 p-3 rounded-xl transition-colors hover:bg-[#F9F6F0]">
                  <div className="text-base font-bold text-[#944E2D]">3. Frictionless Design</div>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    Provide the fastest, cleanest job hunting interface built specifically for modern candidates.
                  </p>
                </div>
              </div>
            </div>

          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}