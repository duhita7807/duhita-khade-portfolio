import { motion } from "framer-motion";
import { Award, Trophy, Users } from "lucide-react";
import { achievements } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

const styles = [
  { icon: Trophy, dot: "bg-gradient-to-br from-amber-500 to-orange-500" },
  { icon: Award, dot: "bg-gradient-to-br from-purple-600 to-fuchsia-500" },
  { icon: Users, dot: "bg-gradient-to-br from-blue-600 to-cyan-500" },
];

function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="section-wrap">
        <SectionHeading eyebrow="Achievements" title="Achievements" />
        <div className="relative space-y-5 border-l border-slate-200 pl-6 dark:border-slate-800 sm:pl-8">
          {achievements.map((item, index) => {
            const style = styles[index % styles.length];
            const Icon = style.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="relative"
              >
                <span
                  className={`absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-white dark:ring-slate-950 sm:-left-[39px] ${style.dot}`}
                >
                  <Icon size={9} className="text-white" />
                </span>
                <div className="card card-hover p-5">
                  <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    {item.context}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
