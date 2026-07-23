import React from 'react';

export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 mt-8 mb-12">
      <button className="w-10 h-10 rounded-full border border-[#E6DFD5] flex items-center justify-center text-gray-600 hover:bg-[#F9F6F0] transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button className="w-10 h-10 rounded-full bg-[#944E2D] text-white font-medium text-sm flex items-center justify-center">
        1
      </button>
      
      <button className="w-10 h-10 rounded-full border border-transparent text-gray-600 hover:border-[#E6DFD5] hover:bg-[#F9F6F0] font-medium text-sm flex items-center justify-center transition-colors">
        2
      </button>
      
      <button className="w-10 h-10 rounded-full border border-transparent text-gray-600 hover:border-[#E6DFD5] hover:bg-[#F9F6F0] font-medium text-sm flex items-center justify-center transition-colors">
        3
      </button>
      
      <span className="text-gray-400 px-1 font-sans">...</span>
      
      <button className="w-10 h-10 rounded-full border border-transparent text-gray-600 hover:border-[#E6DFD5] hover:bg-[#F9F6F0] font-medium text-sm flex items-center justify-center transition-colors">
        52
      </button>

      <button className="w-10 h-10 rounded-full border border-[#E6DFD5] flex items-center justify-center text-gray-600 hover:bg-[#F9F6F0] transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}