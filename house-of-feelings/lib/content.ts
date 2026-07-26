import type { NavLink, Post, Tier, VideoItem } from "./types";

export const siteConfig = {
  name: "House of Feelings",
  tagline: "The messiest confessions land here first.",
  copyrightYear: 2026,
};

export const navLinks: NavLink[] = [{ label: "Home", href: "/" }];

export const membersDropdownLinks: NavLink[] = [
  { label: "Perks", href: "/perks" },
  { label: "Feed", href: "/feed" },
  { label: "Videos", href: "/videos" },
];

export const tiers: Tier[] = [
  {
    id: "my-homies",
    name: "My Homies",
    priceMonthly: 10,
    memberCount: 168,
    recommended: false,
    benefits: [
      "Exclusive bonus videos (including 1hr+ extended cuts)",
      "Dating advice and scene breakdowns",
      "iPhone behind the scenes",
      "Members Q&A — DM your questions",
      "Full length panel reactions",
    ],
  },
  {
    id: "inner-circle",
    name: "Inner Circle",
    priceMonthly: 25,
    memberCount: 599,
    recommended: true,
    benefits: [
      "Early access to House of Feelings episodes",
      "Bonus episode at the end of the season",
      "1-2 hour long extended cuts",
      "Dating advice and scene breakdowns",
      "iPhone behind the scenes",
      "Members Q&A — DM your questions",
      "Full length panel reactions",
    ],
  },
];

export const videos: VideoItem[] = [
  {
    id: "v1",
    title: "House of Feelings BRUTALLY RANK EACH OTHER",
    youtubeId: "DVRyViSfs1Q",
  },
  {
    id: "v2",
    title: "UNHINGED ASIANS PLAY: Friendship Trivia",
    youtubeId: "6U5IxuRti-c",
  },
  {
    id: "v3",
    title: "The Cast of 'House of Feelings' Play Giant Dare Jenga",
    youtubeId: "tXuY26kbInM",
  },
];

export const posts: Post[] = [
  {
    id: "p1",
    title: "what he said in the group chat after the reunion",
    excerpt:
      "so we all agreed to never speak of this again and then someone screenshotted it anyway...",
    likeCount: 214,
    commentCount: 38,
    locked: true,
  },
  {
    id: "p2",
    title: "the Jenga round nobody wanted to finish",
    excerpt:
      "by round three it stopped being a game and started being couples therapy live on camera",
    likeCount: 176,
    commentCount: 24,
    locked: true,
  },
  {
    id: "p3",
    title: "ranking each other, unedited",
    excerpt:
      "the extended cut has forty extra seconds of silence that the episode cut for a reason",
    likeCount: 302,
    commentCount: 51,
    locked: true,
  },
  {
    id: "p4",
    title: "behind the scenes: the trivia buzzer incident",
    excerpt:
      "someone rigged the buzzer and we have iPhone footage proving exactly who",
    likeCount: 145,
    commentCount: 19,
    locked: true,
  },
  {
    id: "p5",
    title: "the dating advice segment that went off the rails",
    excerpt:
      "started as advice, ended as a full breakdown of everyone's situationship history",
    likeCount: 261,
    commentCount: 44,
    locked: true,
  },
  {
    id: "p6",
    title: "reading the comments live",
    excerpt:
      "we read the meanest comment out loud and someone had to leave the room",
    likeCount: 198,
    commentCount: 33,
    locked: true,
  },
];

export const footerLinks: NavLink[] = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact Support", href: "/support" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Returns & FAQ", href: "/faq" },
];
