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
    title: "Jay's Full Reunion Confessional",
    imageUrl:
      "https://imgproxy.fourthwall.dev/gecaRAhX6seN2TPbYPRUZExwFm92M2FKq2qGK8OqhZE/rs:fill:422:237/sm:1/enc/ay2zcHdJAhv6xTxd/PKqDQnXz7kVAusM0/k-9kgdl3TaI3HeFy/coASZRqJM2Lr3wM5/WVYRq_ITGFCkTCFg/kQmNtaHHa6T7Hwgc/I0GcoWVUiR-qmZ2a/IHO7MevByYMoxl9X/cI-GXKjF1JuvEOKQ/wfvIiQVS-E0F4znl/mKT-ooFX9zA.jpg",
    duration: "33:39",
    likeCount: 3,
    commentCount: 6,
    locked: true,
  },
  {
    id: "p2",
    title: "Kimmi's Full Reunion Confessional",
    imageUrl:
      "https://imgproxy.fourthwall.dev/zXCNit8NnnXFYMgmUgkqAl3_ZRtAxc0kKfEcONd6uaA/rs:fill:422:237/sm:1/enc/PfKztV8HqcVg54IU/Chq3q64F54FLSY5t/tUz5sk55clEkVWbr/Ze2hWtN5DrwVCdpk/pPEKFnxVboJTbcxJ/yAN6x-V-Tj5Cfn0m/vmlu0zVz3etUeQNt/08rwNE_FV71lZoLp/9dPT0qdPcs80VM3i/QruR6_byKHFh4PyJ/InZJ7n4hlaY.jpg",
    duration: "31:51",
    likeCount: 6,
    commentCount: 4,
    locked: true,
  },
  {
    id: "p3",
    title: "Mack's Full Reunion Confessional",
    imageUrl:
      "https://imgproxy.fourthwall.dev/KbPp2bYomG4yYx8WN1sLIPEryk-eC-FtsqJLBQVZWx8/rs:fill:422:237/sm:1/enc/ng503HEJNrjGSv3p/YYeieWV5CovaxPM3/sTaRaPrF4ISlpCtO/I2iirZ9ILooLKaL-/-XV-rAuPFyWkeGbV/gm6LjH4uPrwyZLSS/P8vT77gKapPrGrde/hkLDcx1HSDvU04KK/nDikPSRrDE8R8Bif/7nOMncADJw8gcT-N/17JjR1sBYUE.jpg",
    duration: "43:04",
    likeCount: 10,
    commentCount: 1,
    locked: true,
  },
];

export const footerLinks: NavLink[] = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact Support", href: "/support" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Returns & FAQ", href: "/faq" },
];
