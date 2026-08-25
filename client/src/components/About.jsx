import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles, Target } from "lucide-react";
import { profile } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

const facts = [
  { icon: GraduationCap, label: "Degree", value: profile.education.degree, color: "text-blue-600 bg-blue-50 dark:bg-blue-500/10 dark:text-blue-400" },
  { icon: MapPin, label: "College", value: profile.education.college, color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-500/10 dark:text-cyan-400" },
  { icon: Target, label: "CGPA", value: profile.education.cgpa, color: "text-purple-600 bg-purple-50 dark:bg-purple-500/10 dark:text-purple-400" },
  { icon: Sparkles, label: "Expected Graduation", value: profile.education.graduation, color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400" },
];

function About() {
  return (
    <section id="about" className="py-20">
      <div className="section-wrap">
        <SectionHeading eyebrow="About" title="About me" />
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="card grid grid-cols-2 gap-px overflow-hidden bg-slate-200 dark:bg-slate-800 sm:grid-cols-1"
          >
            {facts.map((fact) => (
              <div key={fact.label} className="bg-white p-5 dark:bg-slate-900">
                <span className={`inline-flex rounded-lg p-2 ${fact.color}`}>
                  <fact.icon size={16} />
                </span>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {fact.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{fact.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <div className="space-y-4 text-base leading-7 text-slate-600 dark:text-slate-400">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.interests.map((tag, i) => {
                const palette = [
                  "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300",
                  "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300",
                  "border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-300",
                ];
                return (
                  <span
                    key={tag}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-medium ${palette[i % palette.length]}`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
