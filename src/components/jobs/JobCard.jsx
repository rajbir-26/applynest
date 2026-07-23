import React from 'react';
import { Link } from 'react-router-dom';

export default function JobCard({ job }) {
  // Generate logo background color dynamically if no image is provided
  const bgColors = {
    N: 'bg-[#F2EDE4] text-black',
    SW: 'bg-[#EAD9C9] text-[#7D3F22]',
    G: 'bg-[#5B6346] text-white',
    Z: 'bg-[#F2EDE4] text-black',
    L: 'bg-[#F9F6F0] text-black'
  };

  const logoStyle = bgColors[job.logoText] || 'bg-[#5B6346] text-white';

  // Fallback checks for property name variations coming from API/Google Sheet
  const roleTitle = job.role || job.title || 'Position';
  const workMode = job.workMode || job.mode || job['work mode'] || 'Remote';
  const rawType = job.type || job.jobType || job['job type'] || 'Full Time';
  const tagsList = job.tags || job.skills || [];
  const postedDate = job.postedTime || job.postedDate || job.date || 'Recently';

  // Compensation Label
  const isInternship = rawType.toString().toLowerCase().includes('intern');
  const compValue = job.stipend || job.salary || 'Competitive';
  const compLabel = isInternship ? `Stipend: ${compValue}` : `Salary: ${compValue}`;

  return (
    <Link 
      to={`/jobs/${job.id}`}
      className="bg-white border border-[#F2EDE4] hover:border-[#944E2D] rounded-2xl p-4 sm:p-5 transition-all duration-200 shadow-sm hover:shadow-md block group cursor-pointer"
    >
      <div className="flex items-center justify-between gap-4">
        
        {/* Left Side: Logo & Main Info */}
        <div className="flex items-start gap-3.5 min-w-0 flex-1">
          
          {/* Logo Badge / Image */}
          {job.logoUrl ? (
            <img 
              src={job.logoUrl} 
              alt={job.company} 
              className="w-11 h-11 rounded-xl object-contain border border-[#F2EDE4] p-1 shrink-0"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextSibling) {
                  e.target.nextSibling.style.display = 'flex';
                }
              }}
            />
          ) : null}

          {/* Logo Fallback Badge */}
          <div 
            className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${logoStyle}`}
            style={{ display: job.logoUrl ? 'none' : 'flex' }}
          >
            {job.logoText || job.company?.charAt(0) || 'J'}
          </div>

          <div className="min-w-0 flex-1">
            {/* Role Title */}
            <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#944E2D] transition-colors truncate">
              {roleTitle}
            </h3>

            {/* Company & Details Row (Job Type now directly in the middle!) */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 mt-1 text-xs text-gray-500 font-medium">
              <span className="font-semibold text-gray-800">{job.company}</span>
              
              <span>•</span>
              
              {/* Prominent Job Type Tag directly in the row */}
              <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#FFF3EC] text-[#944E2D] border border-[#FCDDCF] capitalize">
                {rawType}
              </span>

              <span>•</span>
              <span>📍 {job.location || 'Remote'}</span>

              <span>•</span>
              <span className="font-semibold text-[#944E2D]">🖥️ {workMode}</span>

              <span>•</span>
              <span className="font-bold text-gray-900">💵 {compLabel}</span>
            </div>

            {/* Skills / Tags */}
            {tagsList.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {tagsList.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#F9F6F0] text-gray-600 border border-[#F2EDE4]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Posted Time Only */}
        <div className="shrink-0 text-right">
          <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap block">
            {postedDate}
          </span>
        </div>

      </div>
    </Link>
  );
}