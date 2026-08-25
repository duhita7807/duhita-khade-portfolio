import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import { profile } from "../data/content.js";

function Resume() {
  return (
    <section className="relative overflow-hidden border-y border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-16">
      <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="section-wrap relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
        >
          <div>
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Interested in working together?
            </h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
              Let&rsquo;s connect and build something meaningful. My resume covers my education, skills, and
              projects in detail.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={profile.resumePath} download className="btn-primary">
              <Download size={16} />
              Download Resume
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
            >
              <Eye size={16} />
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
