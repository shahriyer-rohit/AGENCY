import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/data/blog";
import { ArrowLeft, ArrowUpRight, Calendar, Tag } from "lucide-react";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  return post
    ? {
        title: `${post.title} | GlobalEdu Consultancy`,
        description: post.excerpt,
      }
    : { title: "Article not found | GlobalEdu Consultancy" };
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <main className="py-12 sm:py-20 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-navy-900 uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-amber-600" />
          <span>Back to insights</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 border-b border-slate-200/80 pb-8">
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
            <span className="inline-flex items-center gap-1 text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {post.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            {post.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-white">
          <Image
            src={post.image}
            alt={`Illustration for ${post.title}`}
            width={800}
            height={450}
            className="w-full h-auto max-h-[400px] object-cover"
          />
        </div>

        {/* Content Blocks */}
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          {post.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="text-2xl sm:text-3xl font-extrabold text-navy-900 pt-4 tracking-tight"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "list") {
              return (
                <ul
                  key={index}
                  className="space-y-2.5 my-4 pl-4 border-l-2 border-amber-400"
                >
                  {block.items?.map((item) => (
                    <li key={item} className="text-slate-700 text-base flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="bg-amber-50/60 border-l-4 border-amber-500 rounded-r-xl p-6 italic text-navy-900 font-medium my-6 text-lg sm:text-xl leading-relaxed"
                >
                  "{block.text}"
                </blockquote>
              );
            }

            return (
              <p key={index} className="text-slate-600 leading-relaxed">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-900 font-semibold">
            Our counsellors can help you turn these ideas into a clear plan.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-brand-blue text-white text-xs font-bold px-5 py-3 rounded-full shrink-0 shadow-sm transition-all"
          >
            <span>Talk to our team</span>
            <ArrowUpRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>
    </main>
  );
}
