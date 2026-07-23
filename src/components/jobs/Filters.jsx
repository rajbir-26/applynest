import React, { useState } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';

export default function Filters({
  selectedJobTypes = [],
  setSelectedJobTypes,
  selectedWorkModes = [],
  setSelectedWorkModes,
  selectedLocation = '',
  setSelectedLocation,
  availableLocations = [],
  clearFilters,
}) {
  const jobTypes = ['Full Time', 'Part Time', 'Internship', 'Contract', 'Govt Jobs'];
  const workModes = ['Remote', 'On-site', 'Hybrid'];

  const [locationSearch, setLocationSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCheckboxChange = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter((val) => val !== item));
    } else {
      setList([...list, item]);
    }
  };

  // Filter available locations based on location search query
  const filteredAvailableLocations = availableLocations.filter((loc) =>
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  );

  return (
    <aside className="w-full lg:w-64 bg-white border border-[#EAD9C9] rounded-2xl p-5 shadow-sm h-fit">
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#F2EDE4]">
        <h3 className="text-xs font-extrabold text-gray-900 tracking-wide uppercase">
          Filters
        </h3>
        <button
          onClick={() => {
            clearFilters();
            setLocationSearch('');
          }}
          className="text-xs font-bold text-[#944E2D] hover:underline cursor-pointer"
        >
          Reset All
        </button>
      </div>

      {/* Job Type Section */}
      <div className="mb-5">
        <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-2.5">
          Job Type
        </h4>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <label
              key={type}
              className="flex items-center gap-2.5 text-xs font-medium text-gray-700 cursor-pointer hover:text-gray-900"
            >
              <input
                type="checkbox"
                checked={selectedJobTypes.includes(type)}
                onChange={() =>
                  handleCheckboxChange(type, selectedJobTypes, setSelectedJobTypes)
                }
                className="w-3.5 h-3.5 rounded border-[#EAD9C9] text-[#944E2D] focus:ring-[#944E2D]"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Work Mode Section */}
      <div className="mb-5">
        <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-2.5">
          Work Mode
        </h4>
        <div className="space-y-2">
          {workModes.map((mode) => (
            <label
              key={mode}
              className="flex items-center gap-2.5 text-xs font-medium text-gray-700 cursor-pointer hover:text-gray-900"
            >
              <input
                type="checkbox"
                checked={selectedWorkModes.includes(mode)}
                onChange={() =>
                  handleCheckboxChange(mode, selectedWorkModes, setSelectedWorkModes)
                }
                className="w-3.5 h-3.5 rounded border-[#EAD9C9] text-[#944E2D] focus:ring-[#944E2D]"
              />
              <span>{mode}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Searchable Synced Location Dropdown */}
      <div className="relative">
        <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-2.5">
          Location
        </h4>

        {/* Custom Dropdown Trigger */}
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between bg-[#F9F6F0] border border-[#EAD9C9] rounded-xl px-3 py-2 text-xs font-medium text-gray-800 cursor-pointer hover:border-[#944E2D] transition-colors"
        >
          <span className="truncate">
            {selectedLocation ? selectedLocation : 'All Locations'}
          </span>
          <div className="flex items-center gap-1">
            {selectedLocation && (
              <X
                size={14}
                className="text-gray-400 hover:text-gray-700"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedLocation('');
                }}
              />
            )}
            <ChevronDown size={14} className="text-gray-500" />
          </div>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-[#EAD9C9] rounded-xl shadow-lg z-30 p-2.5">
            {/* Search Input Inside Dropdown */}
            <div className="relative mb-2">
              <Search size={12} className="absolute left-2.5 top-2.5 text-gray-400" />
              <input
                type="text"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                placeholder="Search location..."
                className="w-full pl-7 pr-2 py-1.5 text-xs border border-[#EAD9C9] rounded-lg focus:outline-none focus:border-[#944E2D]"
              />
            </div>

            {/* Scrollable Options List */}
            <div className="max-h-40 overflow-y-auto space-y-1">
              <button
                type="button"
                onClick={() => {
                  setSelectedLocation('');
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-2.5 py-1.5 text-xs rounded-lg transition-colors ${
                  !selectedLocation
                    ? 'bg-[#F9F6F0] font-bold text-[#944E2D]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                All Locations
              </button>

              {filteredAvailableLocations.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => {
                    setSelectedLocation(loc);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 text-xs rounded-lg transition-colors capitalize ${
                    selectedLocation === loc
                      ? 'bg-[#F9F6F0] font-bold text-[#944E2D]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {loc}
                </button>
              ))}

              {filteredAvailableLocations.length === 0 && (
                <p className="text-[11px] text-gray-400 p-2 text-center">
                  No location found
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}