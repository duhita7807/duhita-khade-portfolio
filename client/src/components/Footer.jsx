import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "../data/content.js";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="section-wrap flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">{profile.name}</p>
          <p className="mt-1 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
            CSE Student / Developer · {profile.location}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-2 hover:text-blue-600">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2 hover:text-blue-600">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-full p-2 hover:text-blue-600">
            <Mail size={18} />
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full p-2 hover:text-emerald-600">
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
      <p className="section-wrap mt-6 text-xs text-slate-500">
        © {year} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
