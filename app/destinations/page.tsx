import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import DestinationCard from "@/components/DestinationCard";
import CTASection from "@/components/CTASection";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Study Destinations | GlobalEdu Consultancy",
  description:
    "Explore study destinations including the UK, Canada, Australia and the United States.",
};

export default function Destinations() {
  return (
    <>
      <main className="py-12 sm:py-20 space-y-16 sm:space-y-24">
        {/* Page Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white rounded-2xl p-8 sm:p-14 space-y-4 shadow-lg border border-slate-800">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1.5 rounded-full border border-gold-400/20">
              Choose Your Horizon
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Find your place <br />
              <span className="text-gold-400 italic font-serif">in the world.</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
              Explore destinations chosen for their education, opportunity and the welcome they offer international students.
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <SectionTitle
              eyebrow="Our destinations"
              title="A world of possibilities."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((d) => (
                <DestinationCard key={d.name} destination={d} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTASection />
    </>
  );
}
