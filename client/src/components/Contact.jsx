import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { profile } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const channels = [
  {
    name: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    color: "from-rose-500 to-orange-400",
  },
  {
    name: "Gmail",
    value: "Compose in Gmail",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
    icon: Send,
    color: "from-red-500 to-amber-400",
    external: true,
  },
  {
    name: "WhatsApp",
    value: "Chat on WhatsApp",
    href: profile.whatsapp,
    icon: MessageCircle,
    color: "from-emerald-500 to-green-400",
    external: true,
  },
  {
    name: "Phone",
    value: `+91 ${profile.phone}`,
    href: `tel:+91${profile.phone}`,
    icon: Phone,
    color: "from-sky-500 to-cyan-400",
  },
  {
    name: "LinkedIn",
    value: "duhita-khade",
    href: profile.linkedin,
    icon: Linkedin,
    color: "from-blue-700 to-blue-500",
    external: true,
  },
  {
    name: "GitHub",
    value: "duhita7807",
    href: profile.github,
    icon: Github,
    color: "from-slate-800 to-slate-600",
    external: true,
  },
  {
    name: "Location",
    value: profile.location,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`,
    icon: MapPin,
    color: "from-violet-600 to-fuchsia-500",
    external: true,
  },
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm font-normal outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-950/60 dark:focus:bg-slate-950";

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // No backend (e.g. static hosting) -> hand the message to the visitor's mail app instead of failing.
  const openMailFallback = () => {
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setStatus({ type: "success", text: "Opening your email app with the message ready to send." });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", text: "" });

    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) {
      openMailFallback();
      return;
    }

    setLoading(true);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000);

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }

      setStatus({ type: "success", text: data.message });
      setForm(initialForm);
    } catch (error) {
      if (error instanceof TypeError || error.name === "AbortError") {
        // Server unreachable — the form contents are still in state, so fall back to email.
        openMailFallback();
      } else {
        setStatus({ type: "error", text: error.message || "Something went wrong. Please try again." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-80 w-80 rounded-full bg-purple-400/15 blur-3xl" />
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Hiring for an internship or a full-time role? Reach me on any app below or send a message directly."
        />

        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {channels.map(({ name, value, href, icon: Icon, color, external }, index) => (
            <motion.a
              key={name}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="card card-hover group relative flex flex-col gap-3 overflow-hidden p-5"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg transition duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                <Icon size={20} />
              </span>
              <span>
                <span className="flex items-center gap-1 font-display font-semibold text-slate-900 dark:text-white">
                  {name}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </span>
                <span className="mt-0.5 block break-all text-xs text-slate-500 dark:text-slate-400">{value}</span>
              </span>
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 p-5 text-white shadow-glow"
          >
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              Available
            </span>
            <span className="mt-2 font-display text-lg font-semibold leading-snug">Open to internships &amp; full-time jobs</span>
          </motion.div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8"
        >
          <div className="sm:col-span-2">
            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Send a message</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">I usually reply within a day.</p>
          </div>
          <label className="grid gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
            Name
            <input name="name" value={form.name} onChange={onChange} required autoComplete="name" placeholder="Your name" className={inputClass} />
          </label>
          <label className="grid gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
            <input type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" placeholder="you@example.com" className={inputClass} />
          </label>
          <label className="grid gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 sm:col-span-2">
            Subject
            <input name="subject" value={form.subject} onChange={onChange} required placeholder="Internship opportunity" className={inputClass} />
          </label>
          <label className="grid gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 sm:col-span-2">
            Message
            <textarea name="message" value={form.message} onChange={onChange} required rows="5" placeholder="Tell me a bit about it..." className={inputClass} />
          </label>
          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <button type="submit" disabled={loading} className="btn-primary justify-center disabled:cursor-not-allowed disabled:opacity-70">
              <Send size={16} />
              {loading ? "Sending..." : "Send Message"}
            </button>
            <p
              className={`text-sm ${
                status.type === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
              }`}
              role="status"
            >
              {status.text}
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
