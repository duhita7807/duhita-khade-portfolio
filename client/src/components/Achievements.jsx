import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, BadgeCheck, ExternalLink, Medal, Trophy, Users } from "lucide-react";
import { achievements, certifications } from "../data/content.js";

const achievementStyles = [
  { icon: Trophy, color: "from-amber-400 to-orange-500", glow: "group-hover:shadow-amber-500/30" },
  { icon: Medal, color: "from-fuchsia-500 to-purple-600", glow: "group-hover:shadow-fuchsia-500/30" },
  { icon: Users, color: "from-cyan-400 to-blue-600", glow: "group-hover:shadow-cyan-500/30" },
];

const certStyles = [
  "from-blue-500 to-cyan-400",
  "from-violet-500 to-fuchsia-500",
  "from-emerald-400 to-teal-500",
];

const stats = [
  { value: "Top 25", label: "Smart India Hackathon" },
  { value: "3rd", label: "Prize at MINDSCAPES 2026" },
  { value: `${certifications.length}+`, label: "Certifications" },
];

const tabs = [
  { id: "awards", label: "Achievements", icon: Trophy },
  { id: "certs", label: "Certifications", icon: BadgeCheck },
];

function Card({ index, children }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="group relative rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-white/10 p-px transition duration-300 hover:-translate-y-1.5 hover:from-cyan-400/60 hover:via-blue-500/30 hover:to-purple-500/60"
    >
      <div className="relative h-full overflow-hidden rounded-2xl bg-slate-900/90 p-6 backdrop-blur">
        <span className="pointer-events-none absolute -right-2 -top-6 font-display text-8xl font-bold text-white/[0.04] transition group-hover:text-white/[0.08]">
          0{index + 1}
        </span>
        {children}
      </div>
    </motion.article>
  );
}

function Achievements() {
  const [active, setActive] = useState("awards");

  return (
    <section id="achievements" className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/25 blur-3xl" />

      <div className="section-wrap relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
            <Award size={14} />
            Recognition
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Achievements &amp; <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-400">
            Milestones from hackathons, competitions and continuous learning.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          {stats.map((stat) => (
            <div key={stat.label} className="px-3 py-5 text-center">
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div role="tablist" className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active === id}
                onClick={() => setActive(id)}
                className="relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition"
              >
                {active === id ? (
                  <motion.span
                    layoutId="recognition-tab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-glow"
                  />
                ) : null}
                <span className={`relative flex items-center gap-2 ${active === id ? "text-white" : "text-slate-400 hover:text-white"}`}>
                  <Icon size={16} />
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-10 grid gap-5 md:grid-cols-3"
          >
            {active === "awards"
              ? achievements.map((item, index) => {
                  const style = achievementStyles[index % achievementStyles.length];
                  const Icon = style.icon;
                  return (
                    <Card key={item.title} index={index}>
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${style.color} shadow-lg transition duration-300 group-hover:scale-110 group-hover:shadow-xl ${style.glow}`}
                      >
                        <Icon size={22} />
                      </span>
                      <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">{item.context}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                    </Card>
                  );
                })
              : certifications.map((cert, index) => (
                  <Card key={cert.title} index={index}>
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${certStyles[index % certStyles.length]} shadow-lg transition duration-300 group-hover:scale-110`}
                      >
                        <BadgeCheck size={22} />
                      </span>
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                        Certified
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold">{cert.title}</h3>
                    <p className="mt-1 text-sm font-medium text-cyan-300">{cert.issuer}</p>
                    {cert.detail ? <p className="mt-3 text-sm leading-6 text-slate-400">{cert.detail}</p> : null}
                    {cert.date || cert.credentialId ? (
                      <p className="mt-3 text-xs text-slate-500">
                        {cert.date ? `Completed ${cert.date}` : null}
                        {cert.date && cert.credentialId ? " · " : null}
                        {cert.credentialId ? `ID: ${cert.credentialId}` : null}
                      </p>
                    ) : null}
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-cyan-300 hover:underline"
                      >
                        View credential
                        <ExternalLink size={12} />
                      </a>
                    ) : null}
                  </Card>
                ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Achievements;
