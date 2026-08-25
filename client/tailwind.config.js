/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
        },
        page: "rgb(var(--page) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          soft: "rgb(var(--brand-soft) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgb(27 36 51 / 0.06), 0 8px 24px rgb(27 36 51 / 0.06)",
        lift: "0 12px 40px -12px rgb(15 157 148 / 0.28)",
        card: "0 1px 2px rgb(15 23 42 / 0.04), 0 12px 28px -8px rgb(15 23 42 / 0.10)",
        "card-dark": "0 1px 2px rgb(0 0 0 / 0.2), 0 12px 28px -8px rgb(0 0 0 / 0.45)",
        glow: "0 0 0 1px rgb(37 99 235 / 0.12), 0 16px 40px -12px rgb(37 99 235 / 0.35)",
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
  plugins: [],
};
