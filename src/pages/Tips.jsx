import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/footer';
import { fetchTipsFromSheet } from '../services/tipsData';
import { ArrowRight } from 'lucide-react';

export default function Tips() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        setLoading(true);
        const data = await fetchTipsFromSheet();
        setCategories(data);
      } catch (err) {
        console.error("Error loading tips categories:", err);
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  return (
    <div className="min-h-screen bg-paper text-neutral-dark flex flex-col justify-between antialiased">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-6 py-12">
          
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#944E2D] bg-[#FFF3EC] border border-[#FCDDCF] px-3 py-1 rounded-full uppercase tracking-wider">
              Career Playbook
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-3 mb-3">
              Career Tips & Free Resources
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Actionable guides, copyable AI prompts, YouTube roadmaps, and curated tools to fast-track your job search.
            </p>
          </div>

          {/* Loading Indicator */}
          {loading ? (
            <div className="py-20 text-center text-gray-500 font-medium text-sm">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#944E2D] border-t-transparent mb-3"></div>
              <p>Loading career playbook...</p>
            </div>
          ) : (
            /* 2 x 4 Grid Section */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((item) => (
                <Link
                  key={item.id}
                  to={`/tips/${item.id}`}
                  className="bg-white border border-[#EAD9C9] hover:border-[#944E2D] rounded-3xl p-6 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Top Badge & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl p-2.5 bg-[#F9F6F0] rounded-2xl border border-[#EAD9C9]">
                        {item.icon}
                      </span>
                      <span className="text-[10px] font-bold text-[#944E2D] bg-[#FFF3EC] border border-[#FCDDCF] px-2.5 py-1 rounded-full uppercase">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Short Description */}
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#944E2D] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-medium mb-6">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Footer Action Link */}
                  <div className="pt-4 border-t border-[#F2EDE4] flex items-center justify-between text-xs font-bold text-[#944E2D] group-hover:underline">
                    <span>Explore Guides & Resources</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}

        </main>
      </div>

      <Footer />
    </div>
  );
}