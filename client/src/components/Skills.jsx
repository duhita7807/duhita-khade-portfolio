import { motion } from "framer-motion";
import { BarChart3, Boxes, Braces, Code2, Database, LineChart, Server } from "lucide-react";
import { skillGroups, softSkills } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

const categoryStyles = [
  { icon: Code2, badge: "text-blue-600 bg-blue-50 dark:bg-blue-500/10 dark:text-blue-400", chip: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300" },
  { icon: Braces, badge: "text-cyan-600 bg-cyan-50 dark:bg-cyan-500/10 dark:text-cyan-400", chip: "bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300" },
  { icon: Server, badge: "text-purple-600 bg-purple-50 dark:bg-purple-500/10 dark:text-purple-400", chip: "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300" },
  { icon: Database, badge: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400", chip: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300" },
  { icon: BarChart3, badge: "text-amber-600 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400", chip: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300" },
  { icon: LineChart, badge: "text-rose-600 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400", chip: "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300" },
  { icon: Boxes, badge: "text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400", chip: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300" },
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-20 dark:bg-slate-900/40">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Skills"
          title="Technical skills"
          description="Technologies and tools I work with regularly, across development and data."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const style = categoryStyles[index % categoryStyles.length];
            const Icon = style.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="card card-hover p-5"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <span className={`inline-flex rounded-lg p-2 ${style.badge}`}>
                    <Icon size={16} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className={`rounded-md px-2.5 py-1 text-xs font-medium ${style.chip}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="card mt-4 p-5"
        >
          <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">Soft Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
