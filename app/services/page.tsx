import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import { MessageCircle, Compass, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | GlobalEdu Consultancy",
  description:
    "Explore GlobalEdu Consultancy's practical study abroad guidance services for students.",
};

const processSteps = [
  {
    num: "01",
    title: "Let's talk",
    desc: "Tell us your goals, questions and what makes you tick.",
    icon: MessageCircle,
  },
  {
    num: "02",
    title: "Find your fit",
    desc: "We match your ambitions to the right course and university.",
    icon: Compass,
  },
  {
    num: "03",
    title: "Make it real",
    desc: "Apply with confidence, then get ready for your new life.",
    icon: CheckCircle2,
  },
];

export default function Services() {
  return (
    <>
      <main className="py-12 sm:py-20 space-y-16 sm:space-y-24">
        {/* Page Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white rounded-2xl p-8 sm:p-14 space-y-4 shadow-lg border border-slate-800">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1.5 rounded-full border border-gold-400/20">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              A clearer path to <br />
              <span className="text-gold-400 italic font-serif">your next chapter.</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
              From choosing a course to settling into your new home, thoughtful support at every turn.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-12 space-y-10 shadow-sm">
            <SectionTitle
              eyebrow="Simple steps"
              title="From first thought to first day."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step) => {
                const IconComp = step.icon;
                return (
                  <div
                    key={step.title}
                    className="bg-surface rounded-xl p-6 border border-slate-200/60 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-amber-600">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy-900">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <CTASection />
    </>
  );
}
