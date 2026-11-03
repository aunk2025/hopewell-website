"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import BlogCard, { type BlogCardPost } from "./BlogCard";
import type { SpecialityKey } from "@/lib/blog-specialities";

export type SearchablePost = BlogCardPost & {
  specialityKey: SpecialityKey;
  specialityLabel: string;
};

export default function HealthLibrarySearch({
  posts,
  specialities,
  basePath = "/blog",
  latestLabel = "Latest Articles",
  allChipLabel = "All Specialities",
  readLabel = "Read",
}: {
  posts: SearchablePost[];
  specialities: { key: SpecialityKey; label: string }[];
  basePath?: string;
  latestLabel?: string;
  allChipLabel?: string;
  readLabel?: string;
}) {
  const [query, setQuery] = useState("");
  const [activeKey, setActiveKey] = useState<SpecialityKey | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (activeKey !== "all" && p.specialityKey !== activeKey) return false;
      if (!q) return true;
      const haystack = `${p.title} ${p.excerpt} ${p.category} ${p.specialityLabel}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [posts, query, activeKey]);

  const isFiltering = query.trim().length > 0 || activeKey !== "all";

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles — e.g. gallbladder, knee pain, IVF, kidney stones…"
            aria-label="Search the Health Library"
            className="w-full rounded-full border border-teal-700 bg-white py-3.5 pl-11 pr-11 text-sm text-ink shadow-sm outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-400/30"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-ink"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveKey("all")}
          aria-pressed={activeKey === "all"}
          className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
            activeKey === "all"
              ? "border-ink bg-ink text-white"
              : "border-teal-700/40 bg-white text-slate-600 hover:border-teal-600 hover:text-ink"
          }`}
        >
          {allChipLabel}
        </button>
        {specialities.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setActiveKey(s.key)}
            aria-pressed={activeKey === s.key}
            className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
              activeKey === s.key
                ? "border-ink bg-ink text-white"
                : "border-teal-700/40 bg-white text-slate-600 hover:border-teal-600 hover:text-ink"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-black tracking-[-.02em] text-ink">
        {isFiltering ? `${filtered.length} article${filtered.length === 1 ? "" : "s"} found` : latestLabel}
      </h2>

      {filtered.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-teal-700/30 bg-white p-8 text-center text-slate-600">
          No articles match your search yet. Try a different term or clear the filter.
        </p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} basePath={basePath} readLabel={readLabel} />
          ))}
        </div>
      )}
    </div>
  );
}
