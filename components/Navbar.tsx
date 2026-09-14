"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";
import { Menu, X, ArrowUpRight, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Destinations", href: "/destinations" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center">
         <Image
    src="/images/Logo.png"
    alt="GlobalEdu Consultancy"
               width={150}
               height={50}
             priority
            className="h-12 w-auto object-contain"
  />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-navy-900 text-lg leading-tight tracking-tight">
              {site.shortName}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Study abroad, made clear.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-navy-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-brand-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-b border-slate-200/80 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-navy-900 border-b border-slate-100"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-navy-900 text-white text-sm font-semibold py-3 rounded-xl shadow-sm w-full"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
