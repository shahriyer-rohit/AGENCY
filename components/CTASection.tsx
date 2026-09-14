import Link from "next/link";
import { site } from "@/data/site";
import { ArrowUpRight, MessageSquare, PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 py-16 lg:py-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.15),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3 py-1 rounded-full border border-gold-400/20">
              Let's Make It Happen
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Ready to Start Your <br className="hidden sm:inline" />
              <span className="text-gold-400">Study Abroad Journey?</span>
            </h2>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Talk directly with our experienced counsellors in Dhaka for clear, honest guidance tailored to your goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-navy-950 font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-full border border-white/20 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
