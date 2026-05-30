document.querySelector("#year").textContent = new Date().getFullYear();

const themeToggle = document.querySelector("#theme-toggle");
const langToggle = document.querySelector("#lang-toggle");
const langLabel = document.querySelector(".lang-label");
const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.experience": "Expériences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "hero.status": "Étudiante en informatique - à la recherche d'une alternance 💻 ✨",
    "hero.subtitle": "Développement / Réseaux / Data",
    "hero.projects": "Voir mes projets",
    "hero.cv": "Télécharger mon CV",
    "hero.contact": "Me contacter",
    "about.title": "À propos",
    "about.heading": "Bonjour, je suis Taleb Wissame",
    "about.p1": "Étudiante en informatique à Avignon Université, je m'intéresse au développement web, au développement logiciel, aux réseaux informatiques et à l'analyse de données.",
    "about.p2": "J'aime comprendre les besoins d'un projet, organiser les idées et construire des solutions concrètes. Chaque projet est pour moi une occasion d'apprendre, de progresser et de transformer une idée en outil utile. Je suis actuellement à la recherche d'une alternance afin de renforcer mes compétences techniques, développer mon expérience professionnelle et contribuer à des projets concrets au sein d'une équipe.",
    "skills.title": "Compétences techniques",
    "education.title": "Formation",
    "projects.title": "Projets",
    "contact.title": "Contactez-moi",
    "contact.text": "Vous avez une alternance ou un projet en tête ? N'hésitez pas à me contacter.",
    "contact.email": "Envoyer un email",
    "contact.github": "Voir mon GitHub"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.status": "Computer science student - looking for a work-study position 💻 ✨",
    "hero.subtitle": "Development / Networks / Data",
    "hero.projects": "View my projects",
    "hero.cv": "Download my resume",
    "hero.contact": "Contact me",
    "about.title": "About",
    "about.heading": "Hello, I am Taleb Wissame",
    "about.p1": "I am a computer science student at Avignon University, interested in web development, software development, computer networks and data analysis.",
    "about.p2": "I enjoy understanding project needs, organizing ideas and building concrete solutions. Each project is an opportunity to learn, improve and turn an idea into a useful tool. I am currently looking for a work-study position to strengthen my technical skills, develop my professional experience and contribute to concrete projects within a team.",
    "skills.title": "Technical skills",
    "education.title": "Education",
    "projects.title": "Projects",
    "contact.title": "Contact me",
    "contact.text": "Do you have a work-study opportunity or a project in mind? Feel free to contact me.",
    "contact.email": "Send an email",
    "contact.github": "View my GitHub"
  }
};
let currentLang = "fr";

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  langLabel.textContent = currentLang.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[currentLang][key];
  });
});
