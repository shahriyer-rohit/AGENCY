import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/blog";
import { ArrowUpRight, Calendar } from "lucide-react";

export default function BlogCard({
  post,
}: {
  post: (typeof posts)[number];
}) {
  return (
    <article className="group bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between">
      <div>
        <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
          <Image
            src={post.image}
            alt={`Illustration for ${post.title}`}
            width={600}
            height={340}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-navy-900 font-semibold text-xs px-3 py-1 rounded-full shadow-sm border border-slate-200/60">
            {post.category}
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </div>

          <h3 className="text-lg font-bold text-navy-900 leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-brand-blue uppercase tracking-wider transition-colors"
        >
          <span>Read article</span>
          <ArrowUpRight className="w-4 h-4 text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
