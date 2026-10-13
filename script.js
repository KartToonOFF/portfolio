/* ====== Edit these links ====== */
const LINKS = {
  resume: "#",                       // e.g. "resume.pdf"
  github: "https://github.com/KartToonOFF",                       // your GitHub profile URL
  linkedin: "https://www.linkedin.com/in/arthur-gacon-lagaye/",                       // your LinkedIn URL
  email: "mailto:artgaclag@gmail.com",  // your email
  talk: "mailto:artgaclag@gmail.com",  // "Talk To Me Personally" target
  moreProjects: "https://github.com/KartToonOFF?tab=repositories"                    // e.g. your GitHub repositories page
};

/* ====== Content ====== */
const IS_ENGLISH = document.documentElement.lang === "en";
const NAV = [
  { label: IS_ENGLISH ? "Home" : "Accueil", id: "home" },
  { label: IS_ENGLISH ? "About" : "À propos", id: "about" },
  { label: IS_ENGLISH ? "Skills" : "Compétences", id: "skills" },
  { label: IS_ENGLISH ? "Education" : "Formation", id: "education" },
  { label: IS_ENGLISH ? "Contact" : "Contact", id: "contact" }
];

const ABOUT_CHIPS = [
  [IS_ENGLISH ? "Student" : "Étudiant", "red"],
  [IS_ENGLISH ? "Computer Science" : "Informatique", "green"],
  [IS_ENGLISH ? "Application Development" : "Développement d'applications", "yellow"]
];

// const CORE = [
//   ["shield-scale", IS_ENGLISH ? "Scalability" : "Évolutivité", IS_ENGLISH ? "Creating consistent, optimized systems that perform well under load" : "Créer des systèmes cohérents et optimisés qui restent performants sous charge"],
//   ["lock", IS_ENGLISH ? "Security" : "Sécurité", IS_ENGLISH ? "Building systems with security as a priority" : "Concevoir des systèmes où la sécurité est une priorité"],
//   ["chat", IS_ENGLISH ? "Communication" : "Communication", IS_ENGLISH ? "Building connections and communicating effectively with others" : "Créer du lien et communiquer efficacement avec les autres"],
//   ["wrench", IS_ENGLISH ? "Engineering" : "Ingénierie", IS_ENGLISH ? "Designing and testing systems in a disciplined and timely manner" : "Concevoir et tester des systèmes avec méthode et efficacité"]
// ];

// [name, filled dots (0-5)]
const SKILLS = [
  {
    title: "", desc: "", items: [
      ["NodeJs", 2], ["Python", 4], ["MySQL", 3], ["Java", 3], ["JavaScript", 3],
      ["NumPy", 1], ["MatPlotLib", 2], ["Bash", 4], ["Linux", 4], ["GitHub", 3],
      ["Git", 3], ["Postman", 2]]
  },
  { title: IS_ENGLISH ? "Interests" : "Centres d'intérêt", desc: IS_ENGLISH ? "Things I enjoy doing in my free time." : "Ce que j'aime faire pendant mon temps libre.", chips: IS_ENGLISH ? ["Drawing", "Taekwondo", "Video games", "Volleyball", "Game development"] : ["Dessin", "Taekwondo", "Jeux vidéo", "Volleyball", "Développement de jeux"] }
];

const EXPERIENCE = [
  {
    date: "Aug 2025 - Oct 2025", role: "Backend And AI Engineer", org: "Outceedo Inc.", points: [
      "Built and shipped microservices in TypeScript for an admin panel — handling stuff like media moderation, banning users, paying experts, and tracking analytics. Created paginated REST APIs with JWT auth, all Dockerized and running on AWS EC2.",
      "Also fixed backend bugs messing with reports and payments (like wrong averages and one-time payments turning into subs), kept the Git history clean, and tested 10+ PRs along the way."]
  },
  {
    date: "May 2025", role: "Linux Programmer", org: "TinyNaturals Inc.", points: [
      "Built and deployed an API powering IoT-based digital ads, scaling to 10 devices and analyzing 10K+ data points to refine ad targeting and business logic.",
      "Automated setup for 500+ Raspberry Pi devices using a single .nix config — creating a plug-and-play environment for consistent ad delivery across all digital screens."]
  },
  {
    date: "Mar 2025 - May 2025", role: "Software Developer Intern", org: "PCBCupid Inc.", points: [
      "Built and maintained a documentation hub for all PCBCupid components using Docusaurus, with TinaCMS integration to let manufacturers manage content with ease.",
      "Developed an API to convert PCB design files to editable SVGs, enabling seamless integration for component developers across platforms."]
  }
];

const PROJECTS = [
  {
    name: "K0MPLEXinary", status: "Ongoing", date: "Oct, 2025", url: "#",
    desc: "An object-storage service that I provide over my own infrastructure. Has a generous free tier.",
    tags: ["JavaScript", "Express", "RabbitMQ", "Drizzle", "SQLite"]
  },
  {
    name: "DataWhisperer", status: "Completed", date: "Apr, 2023", url: "#",
    desc: "An insight generator for large datasets, that also models classification data.",
    tags: ["Python", "Streamlit", "Dask", "Scikit-Learn", "AutoML"]
  },
  {
    name: "CodeEditor", status: "Completed", date: "Nov, 2024", url: "#",
    desc: "A simple code editor that runs on the web.",
    tags: ["JavaScript", "Ace.js", "PistonAPI"]
  },
  {
    name: "CodeCompile", status: "Completed", date: "Jan, 2025", url: "#",
    desc: "A discord bot that can compile a program in any language.",
    tags: ["Python", "discord.py", "PistonAPI"]
  }
];

const EDUCATION = [
  {
    date: "2025 - 2028", title: IS_ENGLISH ? "Bachelor's Degree in Computer Science - Application Development" : "BUT Informatique - Parcours A : Réalisation d'applications",
    org: IS_ENGLISH ? "Toulouse - Auch - Castres Institute of Technology, University of Toulouse" : "IUT Toulouse - Auch - Castres de l'Université de Toulouse",
    courses: IS_ENGLISH ? ["Web development", "Software quality", "Optimization", "APIs", "Back-end (JS)", "Front-end (JS)", "GDPR / Data protection"] : ["Développement web", "Qualité de développement", "Optimisation", "API", "Back-end (JS)", "Front-end (JS)", "RGPD / Protection des données"]
  }
];

/* ====== Icons (simple inline SVG) ====== */
const P = {
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  up: '<path d="m18 15-6-6-6 6"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  brief: '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  cap: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  "shield-scale": '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>'
};
function icon(name, size = 20) {
  const lg = name === "mail-lg";
  const key = lg ? "mail" : name;
  const s = lg ? 96 : size;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${lg ? 1.25 : 2}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[key] || ""}</svg>`;
}
const el = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

/* ====== Render ====== */
function render() {
  // nav
  const navHtml = NAV.map(({ label, id }) => `<button data-target="${id}">${label}</button>`).join("");
  el("navLinks").innerHTML = navHtml;
  el("mobileMenu").innerHTML = navHtml;

  // about
  el("aboutChips").innerHTML = ABOUT_CHIPS.map(([t, c]) => `<div class="chip ${c}">${esc(t)}</div>`).join("");
  // el("coreGrid").innerHTML = CORE.map(([i, t, d], n) =>
  //   `<div class="core-card reveal" style="animation-delay:${n * 0.1}s"><div class="core-icon">${icon(i, 32)}</div><h4>${t}</h4><p>${d}</p></div>`).join("");

  // skills
  el("skillGroups").innerHTML = SKILLS.map((g, n) => {
    const body = g.chips
      ? `<div class="chips chips-lg">${g.chips.map(c => `<div class="chip aqua">${esc(c)}</div>`).join("")}</div>`
      : `<div class="skill-grid">${g.items.map(([name, lvl]) => `
          <div class="skill">
            <div class="skill-top"><span>${esc(name)}</span>
              <div class="dots">${[1, 2, 3, 4, 5].map(i => `<i class="dot ${i <= lvl ? "on" : ""}"></i>`).join("")}</div></div>
            <div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${lvl * 20}"><div data-w="${lvl * 20}"></div></div>
          </div>`).join("")}</div>`;
    return `<div class="skill-group reveal" style="animation-delay:${n * 0.1}s"><h3>${g.title}</h3><p>${g.desc}</p>${body}</div>`;
  }).join("");

  // experience
  // el("experienceList").innerHTML = EXPERIENCE.map((e, n) => `
  //   <div class="tl-item reveal" style="animation-delay:${n * 0.1}s">
  //     <div class="tl-date">${e.date}</div>
  //     <div class="tl-head"><div class="tl-icon">${icon("brief", 24)}</div>
  //       <div><div class="tl-title">${e.role}</div><div class="tl-org">${e.org}</div></div></div>
  //     <ul>${e.points.map(p => `<li><span class="b">•</span><span>${esc(p)}</span></li>`).join("")}</ul>
  //   </div>`).join("");

  // projects
  // el("projectGrid").innerHTML = PROJECTS.map((p, n) => `
  //   <div class="project reveal" style="animation-delay:${n * 0.1}s">
  //     <div class="status ${p.status === "Ongoing" ? "ongoing" : ""}">${p.status}</div>
  //     <h3>${esc(p.name)}</h3>
  //     <p>${esc(p.desc)}</p>
  //     <div class="chips">${p.tags.map(t => `<div class="chip orange">${esc(t)}</div>`).join("")}</div>
  //     <div class="project-foot"><span>${p.date}</span>
  //       <a class="btn btn-outline btn-sm" href="${p.url}" target="_blank" rel="noopener">${icon("code", 16)}View Code</a></div>
  //   </div>`).join("");

  // education
  el("educationList").innerHTML = EDUCATION.map((e, n) => `
    <div class="tl-item reveal" style="animation-delay:${n * 0.1}s">
      <div class="tl-date">${e.date}</div>
      <div class="tl-head"><div class="tl-icon">${icon("cap", 24)}</div>
        <div><div class="tl-title">${esc(e.title)}</div><div class="tl-org">${e.org}</div></div></div>
      <h5>${IS_ENGLISH ? "Coursework:" : "Cours :"}</h5>
      <div class="edu-course">${e.courses.map(c => `<div class="chip aqua">${esc(c)}</div>`).join("")}</div>
    </div>`).join("");

  // icons in static markup
  document.querySelectorAll("[data-icon]").forEach(n => { n.innerHTML = icon(n.dataset.icon); n.style.display = "inline-flex"; });
}

function wireLinks() {
  const set = (id, href) => { const a = el(id); if (a) a.href = href; };
  // set("btnResume", LINKS.resume);
  set("btnGithub", LINKS.github); set("btnLinkedin", LINKS.linkedin);
  set("cGithub", LINKS.github); set("cLinkedin", LINKS.linkedin); set("cEmail", LINKS.email);
  set("btnTalk", LINKS.talk); set("btnMore", LINKS.moreProjects);
}

function wireNav() {
  const go = (id) => {
    const t = document.getElementById(id);
    if (t) t.scrollIntoView({ behavior: "smooth" });
    el("mobileMenu").classList.remove("open");
    el("menuBtn").setAttribute("aria-expanded", "false");
  };
  document.querySelectorAll("[data-target]").forEach(b => b.addEventListener("click", () => go(b.dataset.target)));
  el("menuBtn").addEventListener("click", () => {
    const open = el("mobileMenu").classList.toggle("open");
    el("menuBtn").setAttribute("aria-expanded", String(open));
  });
  el("toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // highlight active section
  const sections = NAV.map(({ id }) => document.getElementById(id));
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll("[data-target]").forEach(b =>
          b.classList.toggle("active", b.dataset.target === e.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => s && spy.observe(s));
}

function wireReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visible");
      e.target.querySelectorAll("[data-w]").forEach(b => b.style.width = b.dataset.w + "%");
      io.unobserve(e.target);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(n => io.observe(n));
}

document.addEventListener("DOMContentLoaded", () => {
  render(); wireLinks(); wireNav(); wireReveal();
  el("year").textContent = new Date().getFullYear();
});
