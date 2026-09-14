import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { ArrowUpRight } from "lucide-react";

export default function DestinationCard({
  destination,
}: {
  destination: (typeof destinations)[number];
}) {
  return (
    <article className="group bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between">
      <div>
        <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
          <Image
            src={destination.image}
            alt={`${destination.name} destination image`}
            width={600}
            height={340}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 bg-navy-900/90 backdrop-blur-sm text-gold-400 font-bold text-xs px-2.5 py-1 rounded-md shadow-sm">
            {destination.code}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-brand-blue transition-colors">
            {destination.name}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {destination.text}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2">
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-brand-blue uppercase tracking-wider transition-colors"
        >
          <span>Explore options</span>
          <ArrowUpRight className="w-4 h-4 text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
