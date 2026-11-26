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
    { value: 2, label: "Years Experience" },
    { value: 7, label: "Projects Completed" },
    { value: 0, label: "Happy Clients" },
  ],
};

export type SkillIcon = "code" | "palette" | "rocket" | "star";

export const skills: { icon: SkillIcon; title: string; description: string; tags: string[] }[] = [
  {
    icon: "code",
    title: "Frontend Development & Web Design",
    description:
      "Creating responsive, interactive user interfaces and beautiful web designs with modern frameworks and creative tools.",
    tags: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces that delight users and drive engagement through thoughtful user experience.",
    tags: ["Figma", "Adobe XD", "Book Design", "Prototyping", "Design Systems"],
  },
  {
    icon: "rocket",
    title: "DevOps & Tools",
    description:
      "Streamlining deployment pipelines and maintaining efficient development workflows for scalable projects.",
    tags: ["Docker", "AWS", "CI/CD", "Git"],
  },
  {
    icon: "star",
    title: "Leadership & Mentoring",
    description:
      "Guiding teams and disciples through mentoring in church, teaching God's way, and helping new musicians grow.",
    tags: ["Team Management", "Communication", "Problem Solving", "Mentoring"],
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
  {
    title: "FreshMart POS",
    category: "website",
    description:
      "A full-featured grocery store POS system. Features login authentication, real-time point-of-sale with cart, product management, inventory tracking, sales history with filtering, analytics dashboard, dark mode, live clock, search, and CSV export.",
    tags: ["JavaScript", "POS System", "Inventory", "Dark Mode"],
    link: { label: "Live Demo", href: "https://fresh-mart-pos-six.vercel.app/" },
    cover: { icon: "cart", gradient: "from-[#0c4a6e] via-[#1e40af] to-[#3b82f6]" },
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
