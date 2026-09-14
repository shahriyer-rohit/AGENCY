import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import DestinationCard from "@/components/DestinationCard";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import { services } from "@/data/services";
import { destinations } from "@/data/destinations";
import { posts } from "@/data/blog";
import {
  UserCheck,
  Compass,
  Target,
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GlobalEdu Consultancy | Study Abroad Guidance",
  description:
    "Clear, student-focused guidance for choosing study destinations, courses and universities abroad.",
};

const trustItems = [
  {
    icon: UserCheck,
    num: "01",
    title: "Personalized Guidance",
    desc: "Every student's profile is unique. We tailor our advice around your academic background, career ambitions, and budget.",
  },
  {
    icon: Compass,
    num: "02",
    title: "Clear Information",
    desc: "Transparent details about entry requirements, deadlines, fees, and post-study opportunities without hidden surprises.",
  },
  {
    icon: Target,
    num: "03",
    title: "Student Focused",
    desc: "Your goals come first. We focus on finding the institution and course where you can truly thrive.",
  },
  {
    icon: ShieldCheck,
    num: "04",
    title: "Ongoing Support",
    desc: "From initial course selection through offer letters, visa documentation, and pre-departure preparation.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <main className="space-y-16 sm:space-y-24 py-16 sm:py-24">
        {/* Intro Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
            <div className="lg:col-span-7">
              <SectionTitle
                eyebrow="A little about us"
                title="Big dreams deserve the right direction."
                description="We believe studying abroad should feel exciting, not overwhelming. Our team combines global expertise with a genuinely personal approach—so every decision feels like yours."
              />
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200/60 space-y-4">
              <p className="text-navy-900 font-semibold text-lg leading-relaxed">
                Thoughtful guidance from your first question to your first day on campus.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-brand-blue"
              >
                <span>Get to know us</span>
                <ArrowUpRight className="w-4 h-4 text-amber-600" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <SectionTitle
              eyebrow="How we help"
              title="Everything you need to go further."
              description="Clear advice, thoughtful support, and a team that is always in your corner."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.slice(0, 4).map((s) => (
                <ServiceCard key={s.title} service={s} />
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <SectionTitle
                eyebrow="Where could you go?"
                title="The world is waiting."
              />
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-brand-blue shrink-0"
              >
                <span>View all destinations</span>
                <ArrowRight className="w-4 h-4 text-amber-600" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((d) => (
                <DestinationCard key={d.name} destination={d} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-navy-950 text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-2xl">
              <SectionTitle
                eyebrow="Why GlobalEdu"
                title="Guidance that feels like it was made for you."
                description="Personalized guidance, transparent information, experienced support and a student-centered approach."
                light
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustItems.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-gold-400 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-amber-400/80">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <SectionTitle
                eyebrow="From the journal"
                title="Useful things to know."
              />
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-brand-blue shrink-0"
              >
                <span>Read all insights</span>
                <ArrowRight className="w-4 h-4 text-amber-600" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.slice(0, 3).map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>

      <CTASection />
    </>
  );
}
