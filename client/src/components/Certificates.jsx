import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

const badgeStyles = [
  "bg-gradient-to-br from-blue-600 to-cyan-500",
  "bg-gradient-to-br from-purple-600 to-fuchsia-500",
  "bg-gradient-to-br from-emerald-500 to-teal-500",
];

function Certificates() {
  return (
    <section id="certifications" className="bg-slate-50 py-20 dark:bg-slate-900/40">
      <div className="section-wrap">
        <SectionHeading eyebrow="Certifications" title="Certifications" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="card card-hover p-5"
            >
              <span
                className={`inline-flex rounded-lg p-2 text-white shadow-glow ${badgeStyles[index % badgeStyles.length]}`}
              >
                <Award size={17} />
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-slate-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-blue-600 dark:text-blue-400">{cert.issuer}</p>
              {cert.detail ? (
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{cert.detail}</p>
              ) : null}
              {cert.date ? (
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">Completed {cert.date}</p>
              ) : null}
              {cert.credentialId ? (
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">ID: {cert.credentialId}</p>
              ) : null}
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  View credential
                  <ExternalLink size={12} />
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
