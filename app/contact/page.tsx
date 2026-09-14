import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";
import {
  MapPin,
  Clock,
  Mail,
  Phone,
  MessageSquare,
  ArrowUpRight,
  Globe,
  Navigation,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | GlobalEdu Consultancy",
  description:
    "Contact GlobalEdu Consultancy for clear, student-focused study abroad guidance.",
};

export default function Contact() {
  return (
    <main className="py-12 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <SectionTitle
            eyebrow="Let's talk"
            title="Your questions are a good place to start."
            description="Reach out directly and a counsellor will reply within one working day."
          />
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Info & Actions Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Office Address */}
               

              {/* Office Hours */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Office Hours</span>
                </div>
                <p className="text-sm font-semibold text-navy-900 leading-relaxed">
                  Saturday–Thursday <br />
                  <span className="text-slate-500 font-normal">10:00–18:00 (BST)</span>
                </p>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                  <Mail className="w-4 h-4 text-amber-600" />
                  <span>Email</span>
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm font-semibold text-navy-900 hover:text-brand-blue transition-colors block"
                >
                  {site.email}
                </a>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Phone</span>
                </div>
                <a
                  href={`tel:${site.phone}`}
                  className="text-sm font-semibold text-navy-900 hover:text-brand-blue transition-colors block"
                >
                  {site.phone}
                </a>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-brand-blue text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400" />
              </a>
<a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-navy-900 text-sm font-semibold px-6 py-3 rounded-full border border-slate-300/60 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Location & Social Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Simple Map / Location Card */}
             

            {/* Social Links Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                <Globe className="w-4 h-4" />
                <span>Find Us Online</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-bold text-amber-600">
                <a href={site.facebook} className="hover:underline">Facebook</a>
                <span>·</span>
                <a href={site.instagram} className="hover:underline">Instagram</a>
                <span>·</span>
                <a href={site.linkedin} className="hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
