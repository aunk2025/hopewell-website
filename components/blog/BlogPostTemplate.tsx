import Link from "next/link";
import { BadgeCheck, Clock, ShieldAlert, Stethoscope } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Block from "@/components/blog/BlogBlocks";
import type { BlogPost } from "@/lib/blog-content";
import { getRelatedPosts } from "@/lib/blog-content";

export default function BlogPostTemplate({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post.slug);

  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 pt-6 text-sm text-slate-500 lg:px-8">
        <Link href="/blog" className="hover:text-ink">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{post.title}</span>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="section-kicker mb-4 before:content-none">{post.category}</div>
        <h1 className="text-balance text-4xl font-black leading-[1.1] tracking-[-.03em] text-ink sm:text-5xl">
          {post.title}
        </h1>

        <div className="mt-6 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400">
          <Clock size={13} /> {post.readingTime}
        </div>

        <div className="mt-6 grid gap-3 rounded-[1.5rem] border border-teal-700 bg-white p-6 shadow-sm sm:p-8">
          {post.quickAnswer.map((p, i) => (
            <p key={i} className="leading-7 text-slate-700">
              {i === 0 && <span className="font-black text-ink">Quick answer: </span>}
              {p}
            </p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl border border-teal-700/40 bg-teal-50/40 p-5">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Stethoscope size={16} className="text-teal-700" />
            <span>
              <span className="font-bold text-ink">Author:</span> {post.author}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <BadgeCheck size={16} className="text-teal-700" />
            <span>
              <span className="font-bold text-ink">Medical reviewer:</span> {post.reviewer}
            </span>
          </div>
        </div>
      </section>

      {/* Content + TOC */}
      <section className="mx-auto max-w-7xl px-5 pb-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:items-start">
          <aside className="hidden rounded-[1.5rem] border border-teal-700 bg-white p-5 shadow-sm lg:sticky lg:top-28 lg:block">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">On this page</h4>
            <nav className="grid max-h-[60vh] gap-1 overflow-y-auto pr-1">
              {post.sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-lg px-2.5 py-1.5 text-sm text-slate-600 transition hover:bg-teal-50 hover:text-ink"
                >
                  {s.heading}
                </a>
              ))}
              <a href="#faqs" className="rounded-lg px-2.5 py-1.5 text-sm text-slate-600 transition hover:bg-teal-50 hover:text-ink">
                FAQs
              </a>
            </nav>
          </aside>

          <div className="mx-auto grid w-full max-w-3xl gap-6">
            {post.sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28 rounded-[1.5rem] border border-teal-700 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="mb-4 text-xl font-black text-ink sm:text-2xl">{s.heading}</h2>
                <div className="grid gap-4">
                  {s.blocks.map((block, bi) => (
                    <Block key={bi} block={block} />
                  ))}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="rounded-[1.5rem] bg-ink p-8 text-white sm:p-10">
              <h2 className="text-2xl font-black">Have questions about this condition?</h2>
              <p className="mt-2 max-w-xl leading-7 text-white/70">
                Speak with the Hopewell Hospital team for a personalised assessment and treatment plan.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:+919199666246"
                  className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
                >
                  Call Hopewell Hospital
                </a>
              </div>
            </div>

            {/* FAQs */}
            <div id="faqs" className="scroll-mt-28 rounded-[1.5rem] border border-teal-700 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-4 text-xl font-black text-ink sm:text-2xl">Frequently asked questions</h2>
              <div className="grid gap-5">
                {post.faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="text-base font-black text-ink">{faq.q}</h3>
                    <p className="mt-1.5 leading-7 text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex gap-3 rounded-[1.5rem] border border-teal-700/40 bg-teal-50/40 p-6">
              <ShieldAlert size={20} className="mt-0.5 shrink-0 text-teal-700" />
              <div>
                <h3 className="text-sm font-black text-ink">Medical disclaimer</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{post.disclaimer}</p>
              </div>
            </div>

            {/* References */}
            <div className="rounded-[1.5rem] border border-teal-700 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-3 text-sm font-black uppercase tracking-widest text-slate-400">References</h3>
              <ul className="grid gap-2">
                {post.references.map((ref) => (
                  <li key={ref.href} className="text-sm">
                    <a href={ref.href} target="_blank" rel="noopener noreferrer" className="text-teal-800 underline decoration-teal-400 underline-offset-2 hover:text-ink">
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related services */}
            {post.relatedServices.length > 0 && (
              <div>
                <h3 className="mb-3 text-sm font-black uppercase tracking-widest text-slate-400">Related services</h3>
                <div className="flex flex-wrap gap-2">
                  {post.relatedServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="rounded-full border border-teal-700/30 bg-teal-50/60 px-4 py-2 text-sm font-bold text-teal-800 transition hover:bg-teal-100"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related articles */}
            {related.length > 0 && (
              <div>
                <h3 className="mb-3 text-sm font-black uppercase tracking-widest text-slate-400">Related articles</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="rounded-2xl border border-teal-700 bg-white p-5 shadow-sm transition hover:-translate-y-0.5"
                    >
                      <div className="section-kicker mb-2 before:content-none">{r.category}</div>
                      <div className="font-black leading-snug text-ink">{r.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
