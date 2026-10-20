import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "../data/content.js";
import photoWebp from "../assets/duhita-photo.webp";
import photoJpg from "../assets/duhita-photo.jpg";

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-24 -z-10 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="section-wrap grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 dark:text-slate-300">{profile.role}</p>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-400">
            {profile.shortBio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => scrollTo("projects")} className="btn-primary">
              View Projects
              <ArrowUpRight size={16} />
            </button>
            <a href={profile.resumePath} download className="btn-secondary">
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              <Mail size={20} />
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-slate-500 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 opacity-70 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border-2 border-white/80 bg-slate-100 shadow-glow dark:border-slate-900">
              <picture>
                <source srcSet={photoWebp} type="image/webp" />
                <img
                  src={photoJpg}
                  alt="Duhita Khade - Computer Science Engineering Student"
                  width={340}
                  height={453}
                  loading="eager"
                  decoding="async"
                  className="h-[280px] w-[210px] object-cover sm:h-[340px] sm:w-[255px] lg:h-[380px] lg:w-[285px]"
                />
              </picture>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
