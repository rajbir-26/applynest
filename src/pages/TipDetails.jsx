import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/footer';
import { fetchTipsFromSheet } from '../services/tipsData';
import { ArrowLeft, Copy, Check, ExternalLink, Play, Sparkles } from 'lucide-react';

// Helper function to auto-convert any YouTube URL format to an embed URL
const getEmbedUrl = (url) => {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11)
    ? `https://www.youtube.com/embed/${match[2]}`
    : url;
};

export default function TipDetails() {
  const { id } = useParams();
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    async function loadTipData() {
      try {
        setLoading(true);
        const categories = await fetchTipsFromSheet();
        const foundTip = categories.find((t) => t.id === id);
        setTip(foundTip || null);
      } catch (err) {
        console.error("Error loading category details:", err);
      } finally {
        setLoading(false);
      }
    }
    loadTipData();
  }, [id]);

  const handleCopyPrompt = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-paper text-neutral-dark flex flex-col justify-between">
        <Navbar />
        <div className="py-32 text-center text-gray-500 font-medium text-sm">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#944E2D] border-t-transparent mb-3"></div>
          <p>Fetching resources from Google Sheets...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!tip) {
    return (
      <div className="min-h-screen bg-paper text-neutral-dark flex flex-col justify-between">
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="bg-white border border-[#EAD9C9] rounded-3xl p-10 shadow-sm">
            <span className="text-4xl mb-3 block">⚠️</span>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Category Not Found</h2>
            <p className="text-xs text-gray-500 mb-6">The requested career tip section does not exist.</p>
            <Link
              to="/tips"
              className="inline-flex items-center gap-2 bg-[#944E2D] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#7D3F22] transition-colors"
            >
              <ArrowLeft size={16} /> Back to All Tips
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper text-neutral-dark flex flex-col justify-between antialiased">
      <div>
        <Navbar />

        <main className="max-w-4xl mx-auto px-6 py-10">
          
          {/* Back Button */}
          <Link
            to="/tips"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#944E2D] hover:underline mb-6"
          >
            <ArrowLeft size={16} /> Back to Career Playbook
          </Link>

          {/* Top Banner Header */}
          <div className="bg-white border border-[#EAD9C9] rounded-3xl p-6 sm:p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl p-2 bg-[#F9F6F0] rounded-2xl border border-[#EAD9C9]">
                {tip.icon}
              </span>
              <span className="text-xs font-bold text-[#944E2D] bg-[#FFF3EC] border border-[#FCDDCF] px-3 py-1 rounded-full uppercase">
                {tip.badge}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
              {tip.title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
              {tip.shortDesc}
            </p>
          </div>

          {/* Section 1: Curated YouTube Videos */}
          {tip.youtubeVideos && tip.youtubeVideos.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Play size={18} className="text-[#944E2D]" />
                <h2 className="text-base sm:text-lg font-extrabold text-gray-900">
                  Recommended YouTube Roadmaps
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tip.youtubeVideos.map((video, idx) => (
                  <div key={idx} className="bg-white border border-[#EAD9C9] rounded-2xl p-4 shadow-sm">
                    <div className="aspect-video w-full rounded-xl overflow-hidden mb-3 bg-gray-100">
                      <iframe
                        src={getEmbedUrl(video.url)}
                        title={video.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h3 className="text-xs font-bold text-gray-900 line-clamp-1">{video.title}</h3>
                    <p className="text-[10px] text-gray-500 font-medium mt-0.5">{video.channel}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 2: Copyable AI Prompts */}
          {tip.prompts && tip.prompts.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} className="text-[#944E2D]" />
                <h2 className="text-base sm:text-lg font-extrabold text-gray-900">
                  Copyable AI Prompts
                </h2>
              </div>

              <div className="space-y-4">
                {tip.prompts.map((p, idx) => (
                  <div key={idx} className="bg-white border border-[#EAD9C9] rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xs font-bold text-gray-900">{p.title}</h3>
                      <button
                        onClick={() => handleCopyPrompt(p.promptText, idx)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#944E2D] bg-[#FFF3EC] hover:bg-[#FCDDCF] border border-[#FCDDCF] px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check size={12} className="text-emerald-600" /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={12} /> Copy Prompt
                          </>
                        )}
                      </button>
                    </div>
                    <div className="bg-[#F9F6F0] border border-[#EAD9C9] rounded-xl p-3 text-xs text-gray-700 font-mono leading-relaxed">
                      {p.promptText}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Resources & Links */}
          {tip.resources && tip.resources.length > 0 && (
            <div className="mb-8">
              <h2 className="text-base sm:text-lg font-extrabold text-gray-900 mb-4">
                Downloads & Direct Links
              </h2>

              <div className="bg-white border border-[#EAD9C9] rounded-2xl p-4 shadow-sm divide-y divide-[#F2EDE4]">
                {tip.resources.map((res, idx) => (
                  <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-800">{res.name}</span>
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#944E2D] hover:underline"
                    >
                      Access Resource <ExternalLink size={12} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty State if no resources exist for this category yet */}
          {(!tip.youtubeVideos?.length && !tip.prompts?.length && !tip.resources?.length) && (
            <div className="bg-white border border-[#EAD9C9] rounded-3xl p-8 text-center shadow-sm">
              <span className="text-3xl mb-2 block">📌</span>
              <h3 className="text-sm font-bold text-gray-900 mb-1">New Resources Coming Soon</h3>
              <p className="text-xs text-gray-500 font-medium">
                We are curating high-quality guides for this category. Check back shortly!
              </p>
            </div>
          )}

        </main>
      </div>

      <Footer />
    </div>
  );
}