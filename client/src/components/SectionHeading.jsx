function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <div className={`mb-3 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
        <span className="h-px w-6 bg-blue-500" />
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
