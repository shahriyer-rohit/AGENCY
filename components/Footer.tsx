import Link from "next/link";
import { site } from "@/data/site";
import { MapPin, Mail, Phone, MessageSquare, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand info */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-navy-950 flex items-center justify-center font-bold text-sm">
                {site.mark}
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                {site.shortName}
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Connecting ambitious students with international education opportunities and helping them take the next step with confidence
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-amber-400">
              <a href={site.facebook} className="hover:underline">Facebook</a>
              <span>·</span>
              <a href={site.instagram} className="hover:underline">Instagram</a>
              <span>·</span>
              <a href={site.linkedin} className="hover:underline">LinkedIn</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-amber-400 transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition-colors">
                  Insights & Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Study Destinations
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinations" className="hover:text-amber-400 transition-colors">
                  Lithuania
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-amber-400 transition-colors">
                  Hungary
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-amber-400 transition-colors">
                  Romania
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-amber-400 transition-colors">
                  Bulgaria
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Get In Touch
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
               
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${site.phone}`} className="hover:text-white transition-colors">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>WhatsApp Counsellor</span>
                  <ArrowUpRight className="w-3 h-3 text-amber-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Build with ❤️ in Bangladesh.
          </p>
        </div>
      </div>
    </footer>
  );
}
