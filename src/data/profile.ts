// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Kenneth Abejuela",
  age: 21,
  badge: "Available for freelance work",
  tagline:
    "Frontend Developer & UI/UX Designer crafting beautiful, interactive web experiences with modern technologies. Passionate about design, leadership, and creating products that make a difference.",
  photo: "https://i.imgur.com/4DIYrrg.jpeg",
  modalRole: "Frontend Developer & Graphic Designer",
  modalBio:
    "I craft visually stunning web designs and book layouts. With a passion for clean code, bold design, and servant leadership, I bring ideas to life through modern technologies while serving in my church through mentoring and music ministry.",
  email: "abejuelakenneth28@gmail.com",
  location: "Davao City, Tibungco",
  availability: "Open for freelance",
};

export type SocialKey = "github" | "facebook" | "instagram" | "linkedin" | "upwork";

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: "github", label: "GitHub", href: "https://github.com/abejuelakenneth28-ship-it" },
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/kenny.abejuela.3/" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/mr.abejuela/" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ken-abejuela-a72794405/" },
  { key: "upwork", label: "Upwork", href: "https://www.upwork.com/freelancers/~015167d42f32995737?mp_source=share" },
];

export const about = {
  heading: "Frontend Developer, Designer & Servant Leader",
  paragraphs: [
    "I'm a passionate frontend developer and web designer with a heart for leadership. During the pandemic, I spent 2 years doing book design work. I also serve in my church through mentoring and teaching disciples about God's way, and I guide new musicians by playing musical instruments.",
    "When I'm not designing or coding, you'll find me serving in my church — mentoring disciples, teaching God's word, and guiding new musicians in their journey.",
  ],
  stats: [
    { value: 4, label: "Years Experience" },
    { value: 7, label: "Projects Completed" },
    { value: 4, label: "Happy Clients" },
  ],
};

// Tech stack grouped by area (Skills section).
// Only tools NOT already shown as a Skill Levels bar below.
export const techStack: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["CSS/SASS", "Inertia.js", "Responsive design", "Figma"] },
  { group: "Backend & Data", items: ["Node.js / Express", "Laravel / PHP", "REST APIs", "Supabase", "PostgreSQL", "SQLite"] },
  { group: "Desktop & AI", items: ["PySide6 (Qt)", "PyInstaller", "Gemini API", "Whisper"] },
  { group: "Ship & collaborate", items: ["Pull-request workflow", "Vercel", "Render", "Railway", "Cloudflare Workers"] },
];

// Skill-level bars (Skills section). Edit the numbers (0–100) to taste.
// Class strings must stay literal so Tailwind can see them.
export const skillLevels: { label: string; value: number; color: { indicator: string; track: string } }[] = [
  {
    label: "React / Next.js",
    value: 90,
    color: {
      indicator: "**:data-[slot='progress-indicator']:bg-red-500!",
      track: "**:data-[slot='progress-track']:bg-red-500/20!",
    },
  },
  {
    label: "TypeScript",
    value: 82,
    color: {
      indicator: "**:data-[slot='progress-indicator']:bg-orange-400!",
      track: "**:data-[slot='progress-track']:bg-orange-400/20!",
    },
  },
  {
    label: "Tailwind CSS",
    value: 88,
    color: {
      indicator: "**:data-[slot='progress-indicator']:bg-sky-400!",
      track: "**:data-[slot='progress-track']:bg-sky-400/20!",
    },
  },
  {
    label: "UI/UX & Book Design",
    value: 85,
    color: {
      indicator: "**:data-[slot='progress-indicator']:bg-amber-300!",
      track: "**:data-[slot='progress-track']:bg-amber-300/20!",
    },
  },
  {
    label: "Python Desktop Apps",
    value: 75,
    color: {
      indicator: "**:data-[slot='progress-indicator']:bg-teal-400!",
      track: "**:data-[slot='progress-track']:bg-teal-400/20!",
    },
  },
  {
    label: "Git & Deployment",
    value: 72,
    color: {
      indicator: "**:data-[slot='progress-indicator']:bg-violet-400!",
      track: "**:data-[slot='progress-track']:bg-violet-400/20!",
    },
  },
];

export type ProjectIcon =
  | "tent"
  | "cart"
  | "music"
  | "teacher"
  | "book"
  | "assistant"
  | "classrecord"
  | "payroll";

export type ProjectCategory = "website" | "app" | "creative";

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "website", label: "Websites" },
  { id: "app", label: "Apps" },
  { id: "creative", label: "Creative" },
];

export type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  /** Omit for projects with no public link (desktop apps, private systems). */
  link?: { label: string; href: string };
  /** Small label shown when there's no link, e.g. "Windows desktop app". */
  note?: string;
  image?: string;
  /** Used when there is no image: an icon on a gradient. */
  cover?: { icon: ProjectIcon; gradient: string };
};

export const projects: Project[] = [
  // ── Websites ──────────────────────────────────────────────
  {
    title: "TeacherHub",
    category: "website",
    description:
      "An all-in-one platform for teachers: lesson plans, learning materials, a student roster, a planning calendar, document generation, and interactive classroom games (Bingo, Jeopardy, Anagram, Spin Wheel, Word Search) hosted live with a leaderboard.",
    tags: ["Laravel", "React", "Inertia.js", "Tailwind CSS"],
    link: { label: "Live Site", href: "https://teacherhub-dv.onrender.com/" },
    cover: { icon: "teacher", gradient: "from-[#064e3b] via-[#047857] to-[#10b981]" },
  },
  {
    title: "HHFC Youth Camp 2027",
    category: "website",
    description:
      "A youth camp event website for Harvest House Family Church with online registration for camp sign-ups, backed by an Express + Supabase API.",
    tags: ["React", "Vite", "Express", "Supabase", "Railway"],
    link: { label: "Live Site", href: "https://youthcamp-production.up.railway.app/" },
    cover: { icon: "tent", gradient: "from-[#4c1d95] via-[#6d28d9] to-[#7c3aed]" },
  },
  {
    title: "ZionRaah",
    category: "website",
    description:
      "A website and management system for Zion-Raah Reading and Tutorial Services: session logging with automatic payroll splits, teacher roster and payouts, teacher availability, and a public booking page where parents reserve a slot by QR code — no account needed.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    link: { label: "Live Site", href: "https://zion-raah-rho.vercel.app/" },
    cover: { icon: "book", gradient: "from-[#78350f] via-[#b45309] to-[#f59e0b]" },
  },

  // ── Apps ──────────────────────────────────────────────────
  {
    title: "VISION — AI Assistant",
    category: "app",
    description:
      "A Jarvis-style personal AI assistant you talk to in English, Tagalog, or Bisaya. It handles Gmail, reminders and a calendar, controls the screen, watches cameras, and syncs with its own Android app and cloud version.",
    tags: ["Python", "PySide6", "Gemini AI", "Whisper", "React", "Kotlin"],
    note: "Windows + Android app",
    cover: { icon: "assistant", gradient: "from-[#082f49] via-[#0e7490] to-[#22d3ee]" },
  },
  {
    title: "HHLCSP Class Record",
    category: "app",
    description:
      "An electronic class record for teachers: enter scores per term and the app computes, transmutes, and describes grades automatically, tracks attendance, and imports/exports the school's Excel class record.",
    tags: ["Python", "PySide6", "SQLite", "Excel"],
    note: "Windows desktop app",
    cover: { icon: "classrecord", gradient: "from-[#1e1b4b] via-[#3730a3] to-[#6366f1]" },
  },
  {
    title: "HHLCSP Payroll",
    category: "app",
    description:
      "A payroll system for a school: imports employee attendance, computes pay with SSS, PhilHealth, and Pag-IBIG deductions, and lets the admin schedule when each deduction applies.",
    tags: ["Python", "PySide6", "SQLite"],
    note: "Windows desktop app",
    cover: { icon: "payroll", gradient: "from-[#14532d] via-[#15803d] to-[#4ade80]" },
  },

  // ── Creative ──────────────────────────────────────────────
  {
    title: "Book Design Project",
    category: "creative",
    description:
      "A professional book cover design created during the pandemic, showcasing typography, visual hierarchy, and layout skills.",
    tags: ["Book Cover", "Layout Design", "Typography"],
    link: { label: "View Full Album", href: "https://imgur.com/a/SDmMNn0" },
    image: "https://i.imgur.com/SDmMNn0.jpg",
  },
  {
    title: "Book Design Project 2",
    category: "creative",
    description:
      "Another creative book design project showcasing cover design, interior layout, and print-ready formatting skills.",
    tags: ["Photoshop", "Illustrator", "Print Design"],
    link: { label: "View Full Image", href: "https://imgur.com/zqYn6KI" },
    image: "https://i.imgur.com/zqYn6KI.jpg",
  },
  {
    title: "Church Music Ministry",
    category: "creative",
    description:
      "Leading and mentoring new musicians in church, guiding them through their musical journey and spiritual growth.",
    tags: ["Leadership", "Mentoring", "Music"],
    link: { label: "View Full Album", href: "https://imgur.com/a/92F2YJw" },
    cover: { icon: "music", gradient: "from-[#7f1d1d] via-[#b91c1c] to-[#f97316]" },
  },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
