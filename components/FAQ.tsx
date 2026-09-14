"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const questions = [
  [
    "How do I choose the right country and university?",
    "Start with your goals, preferred subject, budget and lifestyle. We compare realistic options with you, rather than recommending one-size-fits-all choices.",
  ],
  [
    "When should I start my application?",
    "Ideally start six to twelve months before your intended intake so there is time for tests, documents, applications and visa preparation.",
  ],
  [
    "Can you help with scholarships?",
    "Yes. We can explain relevant university and external scholarship opportunities and help you understand the requirements.",
  ],
  [
    "What documents will I need?",
    "Requirements vary, but usually include a passport, academic records, English results, references and financial evidence. We provide a tailored checklist.",
  ],
  [
    "Do you support students after they receive an offer?",
    "Yes. Pre-departure guidance covers practical planning, travel, accommodation and settling into your new environment.",
  ],
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Header Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              Useful answers, <br />
              <span className="text-brand-blue">before you begin.</span>
            </h2>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              Have questions about the application timeline, documents, or choosing a course? Here are clear answers to get you started.
            </p>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-8 space-y-4">
            {questions.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div
                  key={q}
                  className="rounded-xl border border-slate-200/80 bg-surface overflow-hidden transition-all duration-200"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-navy-900 hover:text-brand-blue transition-colors focus:outline-none"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg">{q}</span>
                    <span className="p-1 rounded-lg bg-white text-slate-700 shadow-sm flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-amber-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-navy-900" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
