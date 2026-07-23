import React from 'react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-8">
      <div className="flex items-center bg-white rounded-full shadow-sm border border-[#F2EDE4] p-2 pl-6 gap-3 w-full">
        
        {/* Search Icon */}
        <svg 
          className="w-5 h-5 text-gray-400 shrink-0" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>

        {/* Full-width Search Input */}
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by role, company or skills (e.g. React, Notion, Python)"
          className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-sm py-2"
        />

        {/* Clear Search Query Button (Shows when typing) */}
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="text-gray-400 hover:text-gray-600 text-xs px-2 py-1 rounded-full font-semibold"
          >
            Clear
          </button>
        )}

      </div>
    </div>
  );
}