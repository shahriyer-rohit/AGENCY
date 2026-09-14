import Link from "next/link";
import { ArrowUpRight, ArrowRight, GraduationCap, Compass, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-surface py-16 lg:py-24 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold tracking-wide uppercase">
              <Compass className="w-3.5 h-3.5 text-amber-600" />
              <span>Your Future Starts Here</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.1]">
              Go further. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-navy-800">
                Dream bigger.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Personal, honest guidance for Bangladeshi students who want to study abroad at globally recognised universities.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-navy-900 hover:bg-brand-blue text-white text-base font-semibold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Start your journey</span>
                <ArrowUpRight className="w-5 h-5 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/destinations"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300/80 text-base font-semibold px-6 py-3.5 rounded-full shadow-sm transition-all duration-200"
              >
                <span>Explore destinations</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>

            {/* Factual Highlights / Trust Chips */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Personalized Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Transparent Information</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Student Focused</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-xl border border-slate-200/80 overflow-hidden group">
              {/* Subtle visual styling card container */}
              <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-xl p-8 text-center relative overflow-hidden space-y-4">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-blue/30 rounded-full blur-xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-gold-500/20 rounded-full blur-lg pointer-events-none" />
                
                <div className="inline-flex p-4 rounded-full bg-white/10 text-gold-400 mb-2">
                  <GraduationCap className="w-10 h-10" />
                </div>
                
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Study abroad guidance and education consultancy.
                </h2>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  Thoughtful support from your first question to your first day on campus.
                </p>
              </div>

              {/* Small floating info card */}
              <div className="mt-4 bg-slate-50 rounded-xl p-4 border border-slate-200/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-700">
                    Counsellors ready to assist
                  </span>
                </div>
                <span className="text-xs font-bold text-navy-900 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                  Dhaka, BD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
