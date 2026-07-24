import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/footer';
import SearchBar from '../components/jobs/SearchBar';
import Filters from '../components/jobs/Filters';
import JobCard from '../components/jobs/JobCard';
import Pagination from '../components/jobs/Pagination';
import BackgroundDecor from '../components/BackgroundDecor';
import { fetchJobsFromSheet } from '../services/jobs';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedWorkModes, setSelectedWorkModes] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Fetch Jobs on Mount
  useEffect(() => {
    async function loadJobs() {
      try {
        setLoading(true);
        const data = await fetchJobsFromSheet();
        setJobs(data || []);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to load job listings. Please check back shortly.');
      } finally {
        setLoading(false);
      }
    }
    loadJobs();
  }, []);

  // Dynamically extract all unique locations present in current jobs
  const availableLocations = useMemo(() => {
    const locSet = new Set();
    jobs.forEach((job) => {
      if (job.location && job.location.trim() !== '') {
        locSet.add(job.location.trim());
      }
    });
    return Array.from(locSet);
  }, [jobs]);

  // Robust Filter Logic
  const filteredJobs = jobs.filter((job) => {
    const jobTitle = (job.role || job.title || '').toString().toLowerCase();
    const jobCompany = (job.company || '').toString().toLowerCase();
    const jobLocation = (job.location || '').toString().toLowerCase().trim();
    const jobType = (job.type || job.jobType || '').toString().toLowerCase().trim();
    const jobWorkMode = (job.workMode || job.mode || job['work mode'] || '').toString().toLowerCase().trim();

    const matchesSearch =
      !searchQuery ||
      jobTitle.includes(searchQuery.toLowerCase()) ||
      jobCompany.includes(searchQuery.toLowerCase()) ||
      jobLocation.includes(searchQuery.toLowerCase());

    const matchesJobType =
      selectedJobTypes.length === 0 ||
      selectedJobTypes.some(
        (type) => jobType === type.toLowerCase().trim()
      );

    const matchesWorkMode =
      selectedWorkModes.length === 0 ||
      selectedWorkModes.some((mode) => {
        const targetMode = mode.toLowerCase().trim();
        return (
          jobWorkMode === targetMode ||
          jobWorkMode.replace('-', '') === targetMode.replace('-', '')
        );
      });

    const matchesLocation =
      !selectedLocation ||
      jobLocation === selectedLocation.toLowerCase().trim();

    return matchesSearch && matchesJobType && matchesWorkMode && matchesLocation;
  });

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedJobTypes, selectedWorkModes, selectedLocation]);

  // Pagination Calculations
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedJobTypes([]);
    setSelectedWorkModes([]);
    setSelectedLocation('');
  };

  return (
    <div className="min-h-screen bg-paper text-neutral-dark flex flex-col justify-between antialiased relative overflow-hidden">
      
      {/* Background Vector Patterns & Shapes */}
      <BackgroundDecor />

      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <div>
          <Navbar />

          {/* Top Search Banner - Centered responsively without translate offsets */}
          <section className="w-full pt-6 sm:pt-10 pb-4 px-4 flex flex-col items-center justify-center text-center animate-fade-up">
            <div className="max-w-xl w-full mx-auto flex flex-col items-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-2 text-center">
                Find Opportunities Built For You
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm font-medium mb-6 leading-relaxed text-center px-2">
                Search through active internships, full-time roles, and government listings with direct application routes.
              </p>

              <div className="w-full">
                <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
            </div>
          </section>

          {/* Main Layout Grid */}
          <main className="max-w-[1500px] mx-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-8 animate-fade-up">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
              
              {/* Sidebar Filters - Full width on mobile, fixed width on desktop */}
              <div className="w-full lg:w-56 flex-shrink-0">
                <Filters
                  selectedJobTypes={selectedJobTypes}
                  setSelectedJobTypes={setSelectedJobTypes}
                  selectedWorkModes={selectedWorkModes}
                  setSelectedWorkModes={setSelectedWorkModes}
                  selectedLocation={selectedLocation}
                  setSelectedLocation={setSelectedLocation}
                  availableLocations={availableLocations}
                  clearFilters={clearFilters}
                />
              </div>

              {/* Job Listings Area */}
              <section className="flex-1 w-full min-w-0">
                
                {/* Header Info */}
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F2EDE4]">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    Showing <span className="text-[#944E2D]">{filteredJobs.length}</span> Openings
                  </p>
                  {(selectedJobTypes.length > 0 || selectedWorkModes.length > 0 || selectedLocation || searchQuery) && (
                    <button
                      onClick={clearFilters}
                      className="text-xs font-bold text-[#944E2D] hover:underline active:scale-95 transition-transform"
                    >
                      Clear Active Filters
                    </button>
                  )}
                </div>

                {/* Loading State */}
                {loading && (
                  <div className="py-16 text-center text-gray-500 font-medium text-xs animate-fade-in">
                    <div className="inline-block animate-spin rounded-full h-6 w-6 border-3 border-[#944E2D] border-t-transparent mb-2"></div>
                    <p>Fetching fresh opportunities...</p>
                  </div>
                )}

                {/* Error State */}
                {!loading && error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-semibold p-4 rounded-xl text-center">
                    {error}
                  </div>
                )}

                {/* Empty State */}
                {!loading && !error && filteredJobs.length === 0 && (
                  <div className="bg-white/90 backdrop-blur-sm border border-[#EAD9C9] rounded-2xl p-6 sm:p-8 text-center shadow-sm animate-fade-in">
                    <span className="text-3xl mb-2 block">🔍</span>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      No openings matched your filters
                    </h3>
                    <p className="text-xs text-gray-500 mb-4 font-medium">
                      Try loosening your search query or resetting the filters.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="bg-[#944E2D] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#7D3F22] transition-colors active:scale-95 cursor-pointer shadow-sm"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}

                {/* Stacked Cards Container */}
                {!loading && !error && currentJobs.length > 0 && (
                  <div className="flex flex-col gap-3.5 mb-6">
                    {currentJobs.map((job) => (
                      <div 
                        key={job.id || job._id || Math.random()} 
                        className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md rounded-2xl"
                      >
                        <JobCard job={job} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {!loading && !error && totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                  />
                )}

              </section>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}