export interface NavLink {
  label: string;
  href: string;
}

export interface Tier {
  id: string;
  name: string;
  priceMonthly: number;
  memberCount: number;
  recommended: boolean;
  benefits: string[];
}

export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
}

export interface Post {
  id: string;
  title: string;
  imageUrl: string;
  duration: string;
  likeCount: number;
  commentCount: number;
  locked: boolean;
}
