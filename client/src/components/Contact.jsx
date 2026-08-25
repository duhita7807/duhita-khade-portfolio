import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", text: "" });
    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        throw new Error("API URL is not configured.");
      }

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
      setStatus({
        type: "error",
        text:
          error.name === "AbortError"
            ? "The request took too long. Please check your connection and try again."
            : error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Have an internship, project or opportunity in mind? Send a message."
        />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card card-hover p-6"
          >
            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Contact details</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              You can also reach me directly through the channels below.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={`mailto:${profile.email}`} className="block font-medium text-blue-600 dark:text-blue-400">
                Email · {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="block text-slate-600 hover:text-blue-600 dark:text-slate-400">
                Phone · {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-600 hover:text-blue-600 dark:text-slate-400"
              >
                LinkedIn · linkedin.com/in/duhita-khade
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-600 hover:text-blue-600 dark:text-slate-400"
              >
                GitHub · github.com/duhita7807
              </a>
              <p className="text-slate-500 dark:text-slate-500">{profile.location}</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card grid gap-4 p-6"
          >
            <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Name
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                autoComplete="name"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none ring-blue-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
              />
            </label>
            <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                autoComplete="email"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none ring-blue-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
              />
            </label>
            <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Subject
              <input
                name="subject"
                value={form.subject}
                onChange={onChange}
                required
                className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none ring-blue-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
              />
            </label>
            <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows="5"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none ring-blue-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary justify-center disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status.text ? (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
                }`}
                role="status"
              >
                {status.text}
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
