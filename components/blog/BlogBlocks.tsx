import Link from "next/link";
import type { BlogBlock } from "@/lib/blog-content";

// Article copy uses a minimal `[label](/href)` markdown-link syntax so
// editorial content can carry the internal cross-links the medical review
// process specifies without the data file needing JSX.
function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) return <span key={i}>{part}</span>;
        const [, label, href] = match;
        return (
          <Link key={i} href={href} className="font-semibold text-teal-800 underline decoration-teal-400 underline-offset-2 hover:text-ink">
            {label}
          </Link>
        );
      })}
    </>
  );
}

export default function Block({ block }: { block: BlogBlock }) {
  switch (block.kind) {
    case "text":
      return <p className="leading-7 text-slate-600"><InlineText text={block.text} /></p>;

    case "subheading":
      return <h3 className="mt-1 text-base font-black text-ink">{block.text}</h3>;

    case "bullets":
      return (
        <ul className="grid gap-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-6 text-slate-600">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
              <span><InlineText text={item} /></span>
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div className="overflow-hidden rounded-2xl border border-teal-700">
          {block.rows.map((row, i) => (
            <div key={i} className={`grid gap-1 p-4 sm:grid-cols-2 ${i % 2 === 0 ? "bg-teal-50/40" : "bg-white"} ${i !== 0 ? "border-t border-teal-700/30" : ""}`}>
              <div className="text-sm font-bold text-ink">{row.left}</div>
              <div className="text-sm text-slate-600">{row.right}</div>
            </div>
          ))}
        </div>
      );

    case "image":
      return (
        <figure>
          <img
            src={block.src}
            alt={block.alt}
            title={block.alt}
            className="w-full rounded-2xl border border-teal-700/30 object-cover"
          />
          {block.caption && (
            <figcaption className="mt-2 text-center text-xs text-slate-500">{block.caption}</figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
}
