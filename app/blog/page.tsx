import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | GlobalEdu Consultancy",
  description:
    "Practical study abroad advice on destinations, applications, documents and scholarships.",
};

export default function Blog() {
  return (
    <>
      <main className="py-12 sm:py-20 space-y-16 sm:space-y-24">
        {/* Page Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white rounded-2xl p-8 sm:p-14 space-y-4 shadow-lg border border-slate-800">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1.5 rounded-full border border-gold-400/20">
              The Journal
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Useful things to know <br />
              <span className="text-gold-400 italic font-serif">before you go.</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
              Practical advice and honest stories to help you make your next move with confidence.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <SectionTitle
              eyebrow="Latest insights"
              title="A little clarity, whenever you need it."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTASection />
    </>
  );
}
