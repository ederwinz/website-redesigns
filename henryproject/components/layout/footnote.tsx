import type { Footnote } from "@/lib/types";

export function FootnoteRef({ id }: { id: string }) {
  return (
    <sup>
      <a
        href={`#fn${id}`}
        id={`fnref${id}`}
        className="font-label ml-0.5 text-[0.7em] text-muted-foreground hover:text-foreground"
      >
        [{id}]
      </a>
    </sup>
  );
}

export function FootnoteList({ footnotes }: { footnotes: Footnote[] }) {
  return (
    <ol className="mt-12 space-y-1 border-t border-border pt-6 text-sm text-muted-foreground">
      {footnotes.map((footnote) => (
        <li key={footnote.id} id={`fn${footnote.id}`}>
          {footnote.id}. {footnote.text}{" "}
          <a
            href={`#fnref${footnote.id}`}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Back to text"
          >
            ↩
          </a>
        </li>
      ))}
    </ol>
  );
}
