import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default ThemeToggle;
