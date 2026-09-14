import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { CheckCircle2, ShieldCheck, Target, HeartHandshake, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About | GlobalEdu Consultancy",
  description:
    "Learn how GlobalEdu Consultancy provides transparent, student-focused study abroad guidance.",
};

const values = [
  {
    num: "01",
    title: "Transparency",
    desc: "We explain options, requirements and limitations clearly without hidden fine print.",
    icon: CheckCircle2,
  },
  {
    num: "02",
    title: "Guidance",
    desc: "We help you compare choices with practical, relevant information tailored to your profile.",
    icon: Compass,
  },
  {
    num: "03",
    title: "Student success",
    desc: "We keep your goals, preparation and confidence at the center of every conversation.",
    icon: Target,
  },
  {
    num: "04",
    title: "Responsible counselling",
    desc: "We avoid guarantees and encourage realistic, well-informed academic plans.",
    icon: ShieldCheck,
  },
];

const steps = [
  {
    num: "01",
    title: "Understand Your Goals",
    desc: "We learn about your goals, strengths, budget and questions to set clear expectations.",
  },
  {
    num: "02",
    title: "Choose Country & Course",
    desc: "We create a realistic shortlist of destinations, courses and universities that fit your ambitions.",
  },
  {
    num: "03",
    title: "Prepare Your Application",
    desc: "We guide your documents and application step-by-step so every detail is complete.",
  },
  {
    num: "04",
    title: "Prepare for Your Journey",
    desc: "We help you feel ready for travel, accommodation, and your first day abroad.",
  },
];

export default function About() {
  return (
    <>
      <main className="py-12 sm:py-20 space-y-16 sm:space-y-24">
        {/* Page Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white rounded-2xl p-8 sm:p-14 space-y-4 shadow-lg border border-slate-800">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1.5 rounded-full border border-gold-400/20">
              About GlobalEdu
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              We make the world <br />
              <span className="text-gold-400 italic font-serif">feel a little closer.</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
              GlobalEdu Consultancy helps ambitious students make informed, confident decisions about studying abroad.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="Who we are"
                title="Personal advice. Global perspective."
              />
            </div>

            <div className="lg:col-span-7 space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                We are education counsellors who understand the questions you are asking. Our student-focused mission is to make complex choices easier to understand and act on.
              </p>
              <p>
                We listen first, then build a plan around your strengths, ambitions and circumstances. Our role is to help you make informed decisions, not to make promises about outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <SectionTitle
              eyebrow="What we believe"
              title="Our values, in practice."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => {
                const IconComp = v.icon;
                return (
                  <div
                    key={v.title}
                    className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-amber-600">
                        {v.num}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy-900">
                      {v.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How We Help / Process */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 sm:p-12 space-y-10">
            <SectionTitle
              eyebrow="How we help students"
              title="Four clear steps forward."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-sm space-y-3"
                >
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
                    Step {step.num}
                  </span>
                  <h3 className="text-base font-bold text-navy-900 pt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTASection />
    </>
  );
}
