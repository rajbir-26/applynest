const SHEET_ID = "1105C2ugjEOvDVc_octQvAvtwBySEuaWGm81nHjEhAqs";

// Default category structure (Icons, Titles & Descriptions)
export const defaultCategories = [
  {
    id: "linkedin-optimization",
    title: "LinkedIn Profile Makeover",
    icon: "💼",
    shortDesc: "Optimize your headline, summary, and profile to get noticed by recruiters.",
    badge: "Profile & Personal Branding",
    youtubeVideos: [],
    prompts: [],
    resources: []
  },
  {
    id: "resume-ats-hacks",
    title: "ATS Resume & Portfolio Build",
    icon: "📄",
    shortDesc: "Format your resume to pass automated ATS filters and stand out.",
    badge: "Resume Building",
    youtubeVideos: [],
    prompts: [],
    resources: []
  },
  {
    id: "communication-interview-prep",
    title: "Communication & Interview Prep",
    icon: "🗣️",
    shortDesc: "Master behavioral questions, HR rounds, and mock interview practice.",
    badge: "Interviewing",
    youtubeVideos: [],
    prompts: [],
    resources: []
  },
  {
    id: "free-courses-certificates",
    title: "Best Free Courses & Certificates",
    icon: "🎓",
    shortDesc: "Handpicked YouTube playlists and free certifications for Web Dev, Data, and AI.",
    badge: "Upskilling",
    youtubeVideos: [],
    prompts: [],
    resources: []
  },
  {
    id: "govt-exam-alerts-prep",
    title: "Government Exam Alerts & Prep",
    icon: "🏛️",
    shortDesc: "Top YouTube notification channels, syllabus breakdowns, and exam roadmaps.",
    badge: "Govt Jobs",
    youtubeVideos: [],
    prompts: [],
    resources: []
  },
  {
    id: "projects-proof-of-work",
    title: "Projects & Proof-of-Work Showcase",
    icon: "🛠️",
    shortDesc: "Build real projects, host them for free on GitHub/Vercel, and write case studies.",
    badge: "Projects",
    youtubeVideos: [],
    prompts: [],
    resources: []
  },
  {
    id: "cold-outreach-networking",
    title: "Cold Outreach & Networking Strategies",
    icon: "✉️",
    shortDesc: "Copyable cold email and DM templates to message recruiters without spamming.",
    badge: "Networking",
    youtubeVideos: [],
    prompts: [],
    resources: []
  },
  {
    id: "internship-alerts-fast-track",
    title: "Internship Alerts & Fast-Track Hacks",
    icon: "🚀",
    shortDesc: "Off-campus portals, cold DM scripts for founders, and application trackers.",
    badge: "Internships",
    youtubeVideos: [],
    prompts: [],
    resources: []
  }
];

/**
 * Clean string helper
 */
function cleanString(val) {
  if (!val) return "";
  return val.toString().trim();
}

/**
 * Main fetch function that reads resources from Tab 2 of Google Sheets
 */
export async function fetchTipsFromSheet() {
  // Deep clone default categories
  const categoriesMap = {};
  defaultCategories.forEach((cat) => {
    categoriesMap[cat.id] = {
      ...cat,
      youtubeVideos: [],
      prompts: [],
      resources: []
    };
  });

  try {
    // Fetch Tab 2 from OpenSheet API
    const response = await fetch(`https://opensheet.elk.sh/${SHEET_ID}/tips`);
    const sheetRows = await response.json();

    if (Array.isArray(sheetRows) && sheetRows.length > 0) {
      sheetRows.forEach((row) => {
        const catId = cleanString(row.category_id || row.categoryId);
        const type = cleanString(row.type).toLowerCase(); // 'video', 'prompt', 'resource'
        const status = cleanString(row.status).toLowerCase();

        // Skip outdated or inactive items
        if (status === 'outdated' || status === 'inactive' || status === 'disabled') {
          return;
        }

        if (categoriesMap[catId]) {
          if (type === 'video') {
            categoriesMap[catId].youtubeVideos.push({
              title: cleanString(row.title) || 'Tutorial Video',
              url: cleanString(row.content),
              channel: cleanString(row.sub_text) || 'Recommended Channel'
            });
          } else if (type === 'prompt') {
            categoriesMap[catId].prompts.push({
              title: cleanString(row.title) || 'AI Prompt',
              promptText: cleanString(row.content)
            });
          } else if (type === 'resource') {
            categoriesMap[catId].resources.push({
              name: cleanString(row.title) || 'Resource Link',
              link: cleanString(row.content)
            });
          }
        }
      });
    }
  } catch (err) {
    console.error("Error fetching tips from Google Sheet:", err);
  }

  return Object.values(categoriesMap);
}