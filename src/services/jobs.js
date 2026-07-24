const SHEET_ID = "1105C2ugjEOvDVc_octQvAvtwBySEuaWGm81nHjEhAqs";

/**
 * Clean up extra spaces, quotes, or accidental brackets
 */
function cleanString(val) {
  if (!val) return "";
  return val.toString().replace(/[\[\]]/g, "").trim();
}

/**
 * Validates and cleans external URLs to ensure they use safe protocols (http/https).
 * Reverts to "#" or empty string if unsafe (e.g. javascript:).
 */
function cleanLink(url) {
  const cleaned = cleanString(url);
  if (!cleaned) return "";
  if (cleaned.startsWith("http://") || cleaned.startsWith("https://")) {
    return cleaned;
  }
  return "#";
}

/**
 * Calculates relative time (e.g., "Posted today", "3 days ago")
 */
export function getRelativeTime(dateString) {
  const cleanDate = cleanString(dateString);
  if (!cleanDate) return "Recently";
  
  const posted = new Date(cleanDate);
  const now = new Date();
  
  if (isNaN(posted.getTime())) return "Recently";

  const diffInDays = Math.floor((now - posted) / (1000 * 60 * 60 * 24));

  if (diffInDays <= 0) return "Posted today";
  if (diffInDays === 1) return "1 day ago";
  if (diffInDays < 30) return `${diffInDays} days ago`;
  
  const months = Math.floor(diffInDays / 30);
  return months === 1 ? "1 month ago" : `${months} months ago`;
}

/**
 * Main fetch function using tab index '1'
 */
export async function fetchJobsFromSheet() {
  try {
    const response = await fetch(`https://opensheet.elk.sh/${SHEET_ID}/jobs`);
  
    const data = await response.json();

    console.log("Fetched jobs data:", data);

    if (!Array.isArray(data) || data.length === 0) {
      console.warn("OpenSheet returned empty or non-array. Falling back to Google CSV export.");
      return await fetchViaGoogleCSV();
    }

    return data.map((job, index) => {
      const skillsStr = cleanString(job.skills || job.tags);
      const parsedTags = skillsStr 
        ? skillsStr.split(',').map((s) => s.trim()) 
        : [];

      // Extract work mode accurately from "work mode", "workMode", "mode", etc.
      const rawWorkMode =
        job["work mode"] ||
        job["Work Mode"] ||
        job.workMode ||
        job.mode ||
        "On-site";

      return {
        ...job,
        id: parseInt(job.id) || index + 1,
        role: cleanString(job.role || job.title) || "Job Title",
        company: cleanString(job.company) || "Company",
        location: cleanString(job.location) || "Remote",
        type: cleanString(job.type || job["job type"]) || "Full Time",
        workMode: cleanString(rawWorkMode),
        stipend: cleanString(job.stipend || job.salary) || "Competitive",
        deadline: cleanString(job.deadline) || "Open",
        logoUrl: cleanLink(job.logoUrl || job["logo url"]),
        applyLink: cleanLink(job.applyLink || job["apply link"]),
        description: cleanString(job.description),
        tags: parsedTags,
        postedTime: getRelativeTime(job.createdAt || job["created at"])
      };
    });
  } catch (error) {
    console.error("Error fetching jobs via OpenSheet:", error);
    return await fetchViaGoogleCSV();
  }
}

/**
 * Fallback parser directly converting Google's public CSV output
 */
async function fetchViaGoogleCSV() {
  try {
    const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;
    const response = await fetch(csvUrl);
    const text = await response.text();

    const lines = text.split('\n').filter((l) => l.trim() !== '');
    if (lines.length <= 1) return [];

    const headers = lines[0].split(',').map((h) => cleanString(h));

    return lines.slice(1).map((line, index) => {
      const values = line.split(',').map((v) => cleanString(v));
      const row = {};
      headers.forEach((header, i) => {
        row[header] = values[i] || '';
      });

      const skillsStr = row.skills || row.tags || '';
      const parsedTags = skillsStr ? skillsStr.split(';').map((s) => s.trim()) : [];

      const rawWorkMode =
        row["work mode"] ||
        row["Work Mode"] ||
        row.workMode ||
        row.mode ||
        "On-site";

      return {
        ...row,
        id: parseInt(row.id) || index + 1,
        role: row.role || row.title || "Job Title",
        company: row.company || "Company",
        location: row.location || "Remote",
        type: row.type || row["job type"] || "Full Time",
        workMode: cleanString(rawWorkMode),
        stipend: row.stipend || row.salary || "Competitive",
        deadline: row.deadline || "Open",
        logoUrl: cleanLink(row.logoUrl || row["logo url"]),
        applyLink: cleanLink(row.applyLink || row["apply link"]),
        description: row.description,
        tags: parsedTags,
        postedTime: getRelativeTime(row.createdAt || row["created at"])
      };
    });
  } catch (err) {
    console.error("Fallback Google CSV fetch failed:", err);
    return [];
  }
}

export const mockJobs = [];