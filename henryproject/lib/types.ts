export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Footnote = {
  id: string;
  text: string;
};

export type LibraryStatus =
  | "reading"
  | "to-read"
  | "read"
  | "to-watch"
  | "watched";

export type LibraryItem = {
  title: string;
  author?: string;
  status?: LibraryStatus;
  lindy?: boolean;
  href?: string;
};

export type LibrarySection = {
  category: "Books" | "Movies" | "TV Shows" | "Podcasts" | "Essays";
  items: LibraryItem[];
};

export type IdeaCategory = "Creativity" | "Uncategorized";

export type Idea = {
  title: string;
  category: IdeaCategory;
  slug: string;
};

export type Quote = {
  text: string;
  attribution: string;
};

export type EssayBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "blockquote"; text: string; cite: string };

export type Essay = {
  slug: string;
  title: string;
  date: string;
  substackUrl?: string;
  blocks: EssayBlock[];
};

