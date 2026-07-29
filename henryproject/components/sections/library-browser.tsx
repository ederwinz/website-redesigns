"use client";

import { useMemo, useState } from "react";
import { StarIcon } from "lucide-react";

import type { LibraryItem, LibrarySection, LibraryStatus } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type Filter = "all" | "lindy" | LibraryStatus;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "lindy", label: "★ Lindy" },
  { value: "reading", label: "Reading" },
  { value: "to-read", label: "To read" },
  { value: "read", label: "Read" },
  { value: "to-watch", label: "To watch" },
  { value: "watched", label: "Watched" },
];

type Sort = "default" | "lindy-first" | "status" | "az";

const sortOptions: { value: Sort; label: string }[] = [
  { value: "default", label: "Default" },
  { value: "lindy-first", label: "Lindy first" },
  { value: "status", label: "By status" },
  { value: "az", label: "A–Z" },
];

const statusLabel: Record<LibraryStatus, string> = {
  reading: "Reading",
  "to-read": "To read",
  read: "Read",
  "to-watch": "To watch",
  watched: "Watched",
};

const statusVariant: Record<LibraryStatus, "default" | "secondary" | "outline"> = {
  reading: "default",
  "to-read": "secondary",
  read: "outline",
  "to-watch": "secondary",
  watched: "outline",
};

const statusOrder: Record<LibraryStatus, number> = {
  reading: 0,
  "to-read": 1,
  "to-watch": 2,
  read: 3,
  watched: 4,
};

function matchesFilter(item: LibraryItem, filter: Filter) {
  if (filter === "all") return true;
  if (filter === "lindy") return Boolean(item.lindy);
  return item.status === filter;
}

function sortItems(items: LibraryItem[], sort: Sort) {
  const copy = [...items];
  if (sort === "az") {
    copy.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "lindy-first") {
    copy.sort((a, b) => Number(Boolean(b.lindy)) - Number(Boolean(a.lindy)));
  } else if (sort === "status") {
    copy.sort((a, b) => {
      const aOrder = a.status ? statusOrder[a.status] : 99;
      const bOrder = b.status ? statusOrder[b.status] : 99;
      return aOrder - bOrder;
    });
  }
  return copy;
}

export function LibraryBrowser({ sections }: { sections: LibrarySection[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("default");

  const filteredSections = useMemo(() => {
    return sections
      .map((section) => ({
        ...section,
        items: sortItems(
          section.items.filter((item) => matchesFilter(item, filter)),
          sort
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [sections, filter, sort]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={cn(
              "rounded-pill border px-3 py-1 font-label text-xs uppercase transition-colors",
              filter === f.value
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="font-label text-xs uppercase text-muted-foreground">
          Sort
        </span>
        <select
          value={sort}
          onChange={(event) => setSort(event.target.value as Sort)}
          className="border border-border bg-background px-2 py-1 text-sm"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-10 space-y-10">
        {filteredSections.map((section) => (
          <div key={section.category}>
            <h2 className="font-label text-xs uppercase text-muted-foreground">
              {section.category} ({section.items.length})
            </h2>
            <ul className="mt-4 divide-y divide-border border-t border-border">
              {section.items.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-wrap items-center gap-x-3 gap-y-1 py-3"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground underline decoration-transparent underline-offset-2 hover:decoration-foreground"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span className="font-medium text-foreground">
                      {item.title}
                    </span>
                  )}
                  {item.author && (
                    <span className="text-sm text-muted-foreground">
                      {item.author}
                    </span>
                  )}
                  {item.status && (
                    <Badge variant={statusVariant[item.status]}>
                      {statusLabel[item.status]}
                    </Badge>
                  )}
                  {item.lindy && (
                    <Badge
                      variant="secondary"
                      className="gap-1 bg-bronze-400 text-ink-950"
                    >
                      <StarIcon className="size-3 fill-current" />
                      Lindy
                    </Badge>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
