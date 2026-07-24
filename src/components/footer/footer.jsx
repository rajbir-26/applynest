import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-[#EAD9C9] mt-24 border-t border-[#2A2A2A] antialiased">
      {/* Upper Footer Container */}
      <div className="max-w-[1700px] mx-auto px-8 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand & Value Proposition */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black text-white tracking-tight">
                Kareer<span className="text-[#D97745]">Kafe</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-[#2A2A2A] text-[#D97745] px-2.5 py-1 rounded-full">
                Job Feed
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed mb-6">
              Empowering job seekers with verified, real-time career opportunities. Find your next role with confidence and simplicity.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Data Sync Active</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
            <li>
              <Link to="/jobs" className="hover:text-white transition-colors">
                Browse All Jobs
              </Link>
            </li>
            <li>
              <a href="#filters" className="hover:text-white transition-colors">
                Location Search
              </a>
            </li>
            <li>
              <a href="#top" className="hover:text-white transition-colors">
                Back to Top ↑
              </a>
            </li>
          </ul>
        </div>

        {/* Recruiter / Employer Action Box */}
        <div className="md:col-span-4 bg-[#222222] border border-[#2E2E2E] rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
              <span>🛡️</span> Employers & Recruiters
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Want to update a posting or request listing removal? We respect employer rights and process takedown requests quickly.
            </p>
          </div>
          
          {/* UPDATED EMAIL LINK */}
          <a
            href="mailto:baatkosamjhoo@gmail.com?subject=ApplyNest%20Listing%20Inquiry%20/%20Takedown"
            className="mt-4 inline-flex items-center justify-center bg-[#D97745] hover:bg-[#B85C2B] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-sm w-fit"
          >
            Contact Support ✉️
          </a>
        </div>

      </div>

      {/* Lower Legal & Disclaimer Banner */}
      <div className="border-t border-[#262626] bg-[#141414] py-8 px-8 lg:px-16 text-[11px] text-gray-500">
        <div className="max-w-[1700px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 leading-relaxed">
          
          <div className="max-w-4xl space-y-1.5">
            <p>
              <strong className="text-gray-400">Legal Disclaimer:</strong> ApplyNest is an independent job aggregation portal. All job postings, company details, salaries, and application requirements are sourced from direct employer submissions or public channels. We strongly encourage applicants to independently verify opportunity details directly on the hiring organization's official career portal.
            </p>
            <p>
              All trademarks, product names, company names, and logos displayed on this site are property of their respective owners and are used purely for identification and informational reference.
            </p>
          </div>

          <div className="whitespace-nowrap text-gray-400 font-semibold border-t md:border-t-0 border-[#222222] pt-4 md:pt-0 w-full md:w-auto">
            © {new Date().getFullYear()} ApplyNest • Built for Job Seekers
          </div>

        </div>
      </div>
    </footer>
  );
}