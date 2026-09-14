export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="space-y-3">
      <span
        className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
          light
            ? "bg-amber-400/10 text-gold-400 border border-gold-400/20"
            : "bg-amber-50 text-amber-800 border border-amber-200/80"
        }`}
      >
        {eyebrow}
      </span>

      <h2
        className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-base leading-relaxed max-w-2xl ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
