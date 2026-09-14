import Link from "next/link";
import { services } from "@/data/services";
import {
  GraduationCap,
  BookOpen,
  Globe,
  FileText,
  ClipboardCheck,
  Award,
  Plane,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "University Selection": GraduationCap,
  "Course Selection Guidance": BookOpen,
  "Country Selection Guidance": Globe,
  "Application Guidance": FileText,
  "Documentation Guidance": ClipboardCheck,
  "Scholarship Information": Award,
  "Pre-Departure Guidance": Plane,
};

export default function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const IconComponent = iconMap[service.title] || Sparkles;

  return (
    <article className="group bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-700 flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:text-gold-400 transition-colors duration-300">
          <IconComponent className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-brand-blue transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed">
          {service.text}
        </p>
      </div>

      <div className="pt-5 mt-4 border-t border-slate-100">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-brand-blue uppercase tracking-wider transition-colors"
        >
          <span>Learn more</span>
          <ArrowUpRight className="w-4 h-4 text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
