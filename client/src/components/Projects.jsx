import { motion } from "framer-motion";
import { Check, Github, ExternalLink } from "lucide-react";
import { projects } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Projects"
          title="Featured projects"
          description="A selection of projects I've built, from concept to a working application."
        />
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card card-hover relative overflow-hidden p-6 sm:p-8"
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: project.accent }}
              />
              <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
                      style={{ backgroundColor: project.accent }}
                    >
                      {project.title.charAt(0)}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    Problem
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.problem}</p>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    What I built
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.solution}</p>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    My contribution
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.contribution}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-200"
                      >
                        <Github size={15} />
                        Code
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm font-medium text-slate-400 dark:border-slate-700 dark:text-slate-500">
                        <Github size={15} />
                        Code link coming soon
                      </span>
                    )}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !py-2 !text-sm"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 p-5 dark:bg-slate-950/40">
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    Key features
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <Check size={15} className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
