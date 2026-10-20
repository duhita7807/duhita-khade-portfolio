import { motion } from "framer-motion";
import { Check, ExternalLink, Github, Sparkles } from "lucide-react";
import { projects } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Projects"
          title="Featured projects"
          description="A selection of projects I've built, from concept to a working application."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (index % 2) * 0.1 }}
              className="card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:shadow-glow"
            >
              <div
                className="relative h-40 overflow-hidden p-6 text-white"
                style={{ background: `linear-gradient(135deg, ${project.accent}, ${project.accent}99 55%, #0f172a)` }}
              >
                <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
                <div className="pointer-events-none absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-white/20 blur-2xl transition duration-500 group-hover:scale-125" />
                <span className="pointer-events-none absolute -bottom-6 right-4 font-display text-[7rem] font-bold leading-none text-white/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                  <Sparkles size={12} />
                  {project.tech[0]}
                </span>
                <h3 className="relative mt-4 max-w-[80%] font-display text-2xl font-semibold leading-tight">
                  {project.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{project.solution}</p>
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-500">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Why: </span>
                  {project.problem}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-500">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">My role: </span>
                  {project.contribution}
                </p>

                <ul className="mt-5 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <span
                        className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: project.accent }}
                      >
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !py-2"
                    >
                      <Github size={15} />
                      Code
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm font-medium text-slate-400 dark:border-slate-700 dark:text-slate-500">
                      <Github size={15} />
                      Code coming soon
                    </span>
                  )}
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2">
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
