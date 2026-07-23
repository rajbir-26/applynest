import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/footer';
import { fetchJobsFromSheet } from '../services/jobs';
import { ArrowLeft, MapPin, Briefcase, DollarSign, Calendar, ExternalLink } from 'lucide-react';

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadJob() {
      try {
        setLoading(true);
        const jobs = await fetchJobsFromSheet();
        const foundJob = jobs.find((j) => String(j.id) === String(id));
        
        if (foundJob) {
          setJob(foundJob);
        } else {
          setError('Job listing not found or has been removed.');
        }
      } catch (err) {
        console.error('Error fetching job details:', err);
        setError('Failed to load job details. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    loadJob();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-paper text-neutral-dark flex flex-col justify-between">
        <Navbar />
        <div className="py-32 text-center text-gray-500 font-medium text-sm">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#944E2D] border-t-transparent mb-3"></div>
          <p>Loading opportunity details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-paper text-neutral-dark flex flex-col justify-between">
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="bg-white border border-[#EAD9C9] rounded-3xl p-10 shadow-sm">
            <span className="text-4xl mb-3 block">⚠️</span>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Listing Not Found</h2>
            <p className="text-xs text-gray-500 mb-6">{error || "The job you're looking for doesn't exist."}</p>
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 bg-[#944E2D] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#7D3F22] transition-colors"
            >
              <ArrowLeft size={16} /> Back to All Jobs
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Extract variables cleanly with fallbacks
  const rawType = job.type || job.jobType || job['job type'] || 'Full Time';
  const workMode = job.workMode || job.mode || job['work mode'] || 'On-Site';
  const isInternship = rawType.toString().toLowerCase().includes('intern');

  // Pulls compensation value & formats dynamic label
  const compValue = job.stipend || job.salary || 'Competitive';
  const compLabel = isInternship ? 'Stipend' : 'Salary';

  // Format description paragraphs
  const descriptionParagraphs = job.description
    ? job.description.split('\n').filter((p) => p.trim() !== '')
    : ['No detailed description provided for this role.'];

  return (
    <div className="min-h-screen bg-paper text-neutral-dark flex flex-col justify-between antialiased">
      <div>
        <Navbar />

        <main className="max-w-4xl mx-auto px-6 py-10">
          
          {/* Back Navigation */}
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#944E2D] hover:underline mb-6"
          >
            <ArrowLeft size={16} /> Back to Openings
          </Link>

          {/* Top Job Header Card */}
          <div className="bg-white border border-[#EAD9C9] rounded-3xl p-6 sm:p-8 shadow-sm mb-8">
            <div className="flex items-start gap-4 pb-6 border-b border-[#F2EDE4]">
              {/* Logo / Badge */}
              {job.logoUrl ? (
                <img
                  src={job.logoUrl}
                  alt={job.company}
                  className="w-16 h-16 rounded-2xl object-contain border border-[#EAD9C9] p-2 shrink-0 bg-white"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}

              <div
                className="w-16 h-16 rounded-2xl bg-[#526043] text-white flex items-center justify-center font-bold text-xl shrink-0"
                style={{ display: job.logoUrl ? 'none' : 'flex' }}
              >
                {job.company?.charAt(0).toUpperCase() || 'J'}
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                  {job.role || job.title}
                </h1>
                <p className="text-sm font-bold text-[#944E2D] mt-1">
                  {job.company}
                </p>
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              <div className="flex items-center gap-2.5">
                <MapPin size={18} className="text-[#944E2D]" />
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Location</span>
                  <span className="text-xs font-bold text-gray-800">{job.location || 'Remote'}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Briefcase size={18} className="text-[#944E2D]" />
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Job Type</span>
                  <span className="text-xs font-bold text-gray-800 capitalize">
                    {rawType} ({workMode})
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <DollarSign size={18} className="text-[#944E2D]" />
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">{compLabel}</span>
                  <span className="text-xs font-bold text-gray-800">{compValue}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Calendar size={18} className="text-[#944E2D]" />
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Posted</span>
                  <span className="text-xs font-bold text-gray-800">{job.postedTime || 'Recently'}</span>
                </div>
              </div>
            </div>

            {/* Skills / Tags */}
            {job.tags && job.tags.length > 0 && (
              <div className="mt-6 pt-6 border-t border-[#F2EDE4]">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Required Skills</span>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#F9F6F0] text-gray-700 text-xs font-medium px-3 py-1 rounded-lg border border-[#EAD9C9]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Job Description Card */}
          <div className="bg-white border border-[#EAD9C9] rounded-3xl p-6 sm:p-8 shadow-sm mb-8">
            <h2 className="text-lg font-extrabold text-gray-900 mb-4 pb-2 border-b border-[#F2EDE4]">
              Job Description
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
              {descriptionParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Single Action Box at the Bottom */}
          <div className="bg-[#F9F6F0] border border-[#EAD9C9] rounded-3xl p-6 sm:p-8 text-center shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-1">Ready to submit your application?</h3>
            <p className="text-xs text-gray-600 mb-6 font-medium">
              You will be redirected directly to {job.company}'s official application form with zero paywalls.
            </p>

            {job.applyLink && job.applyLink !== '#' ? (
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#944E2D] hover:bg-[#7D3F22] text-white text-xs font-bold px-8 py-3.5 rounded-2xl transition-all shadow-sm"
              >
                <span className="text-white font-bold">Apply Now on Official Site</span> <ExternalLink size={14} className="text-white" />
              </a>
            ) : (
              <span className="text-xs font-bold text-gray-400">Application link unavailable</span>
            )}
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}