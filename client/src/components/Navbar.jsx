import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/content.js";
import ThemeToggle from "./ThemeToggle.jsx";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85"
          : "bg-transparent"
      }`}
    >
      <nav className="section-wrap flex items-center justify-between py-4" aria-label="Primary">
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          Duhita<span className="text-blue-600 dark:text-blue-400">.</span>
        </button>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNav(link.id)}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={profile.resumePath}
            download
            className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400"
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 dark:text-slate-200"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNav(link.id)}
                className="rounded-lg px-2 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {link.label}
              </button>
            ))}
            <a
              href={profile.resumePath}
              download
              className="mt-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-glow"
            >
              Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
