import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { profile } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

function Education() {
  const { education } = profile;

  return (
    <section id="education" className="py-20">
      <div className="section-wrap">
        <SectionHeading eyebrow="Education" title="Education" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card card-hover flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="flex items-start gap-4">
            <span className="rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 p-2.5 text-white shadow-glow">
              <GraduationCap size={20} />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {education.college}
                <br />
                {education.location}
              </p>
            </div>
          </div>
          <div className="flex gap-6 sm:flex-col sm:items-end sm:gap-2 sm:text-right">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">CGPA</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{education.cgpa}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                Expected Graduation
              </p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{education.graduation}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
