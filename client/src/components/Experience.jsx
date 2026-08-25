import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-20 dark:bg-slate-900/40">
      <div className="section-wrap">
        <SectionHeading eyebrow="Experience" title="Experience" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card card-hover p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-2.5 text-white shadow-glow">
                <Briefcase size={18} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {experience.title}
                </h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{experience.organization}</p>
              </div>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              {experience.period}
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">{experience.summary}</p>

          <ul className="mt-5 space-y-2.5">
            {experience.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
