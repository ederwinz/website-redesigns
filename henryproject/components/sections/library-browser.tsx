"use client";

import { useMemo, useState } from "react";
import { StarIcon } from "lucide-react";

import type { LibraryItem, LibrarySection, LibraryStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

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

const statusDotColor: Record<LibraryStatus, string> = {
  reading: "bg-primary",
  "to-read": "bg-secondary",
  read: "bg-muted-foreground",
  "to-watch": "bg-accent",
  watched: "bg-muted-foreground",
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
          className="rounded-panel border border-border bg-background px-2 py-1 text-sm"
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
                  className="grid grid-cols-1 items-start gap-x-4 gap-y-1.5 py-3 sm:grid-cols-[minmax(0,1fr)_6.5rem_4.5rem] sm:items-center"
                >
                  <div className="min-w-0 sm:truncate">
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
                      <span className="ml-2 text-sm text-muted-foreground">
                        {item.author}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center">
                    {item.status && (
                      <span className="inline-flex items-center gap-1.5 font-label text-[11px] uppercase text-muted-foreground">
                        <span
                          className={cn(
                            "size-1.5 shrink-0 rounded-full",
                            statusDotColor[item.status]
                          )}
                          aria-hidden
                        />
                        {statusLabel[item.status]}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center">
                    {item.lindy && (
                      <span className="inline-flex items-center gap-1 font-label text-[11px] uppercase text-bronze-600">
                        <StarIcon className="size-3 shrink-0 fill-current" />
                        Lindy
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
