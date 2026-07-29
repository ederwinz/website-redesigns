import type {
  Essay,
  Idea,
  LibrarySection,
  NavLink,
  Quote,
  SocialLink,
} from "./types";

export const siteName = "Henry Pan";

export const tagline =
  "work at everything with all your heart, as working for the Lord and not human masters.";

export const navLinks: NavLink[] = [
  { label: "Essays", href: "/writings" },
  { label: "About", href: "/about" },
  { label: "Now", href: "/now" },
  { label: "Library", href: "/library" },
  { label: "Ideas", href: "/ideas" },
  { label: "Quotes", href: "/quotes" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:work@henrybpan.com", handle: "work@henrybpan.com" },
  { label: "Instagram", href: "https://www.instagram.com/henrybpan", handle: "@henrybpan" },
  { label: "YouTube", href: "https://www.youtube.com/@henrybpan", handle: "@henrybpan" },
  { label: "TikTok", href: "https://www.tiktok.com/@henrybpan", handle: "@henrybpan" },
  { label: "X", href: "https://x.com/henrypanonx", handle: "@henrypanonx" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/henrybpan/", handle: "in/henrybpan" },
];

// --- About ---

export const aboutFootnotes = [
  { id: "1", text: "shameless plug." },
  { id: "2", text: "ladies, you can contact me here." },
];

// --- Now ---

export const nowLastUpdated = "Last updated July 4th, 2026";

export const nowFootnotes = [
  { id: "1", text: "asian sugar mommies can disregard this statement" },
];

// --- Library ---

export const librarySections: LibrarySection[] = [
  {
    category: "Books",
    items: [
      { title: "How to Win Friends and Influence People", author: "Dale Carnegie", status: "reading" },
      { title: "Red Notice", author: "Bill Browder", status: "reading" },
      { title: "The Creative Act", author: "Rick Rubin", status: "reading" },
      { title: "A Little Life", author: "Hanya Yanagihara", status: "read" },
      { title: "Kitchen Confidential", author: "Anthony Bourdain", status: "to-read" },
      { title: "Ogilvy on Advertising", author: "David Ogilvy", status: "to-read" },
      { title: "Antifragile", author: "Nassim Nicholas Taleb", status: "to-read" },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", status: "to-read" },
      { title: "Confessions", author: "Augustine of Hippo", status: "to-read" },
      { title: "Augustine of Hippo: A Biography", author: "Peter Brown", status: "to-read" },
      { title: "Christ and Culture", author: "H. Richard Niebuhr", status: "to-read" },
      { title: "The Sports Gene", author: "David Epstein", status: "to-read" },
      { title: "Zero to One", author: "Peter Thiel", status: "read" },
    ],
  },
  {
    category: "Movies",
    items: [
      { title: "The Godfather", author: "Francis Ford Coppola", status: "watched" },
      { title: "Good Will Hunting", status: "watched" },
    ],
  },
  {
    category: "TV Shows",
    items: [{ title: "The Last Dance", author: "Jason Hehir", status: "watched" }],
  },
  {
    category: "Podcasts",
    items: [{ title: "Founders Podcast", author: "David Senra", lindy: true, status: "reading" }],
  },
  {
    category: "Essays",
    items: [
      { title: "High Agency in 30 Minutes", author: "George Mack", lindy: true, href: "https://highagency.com" },
      { title: "This is Water", author: "David Foster Wallace", status: "read", lindy: true },
      { title: "Against Taste", author: "Will Manidis", href: "https://minutes.substack.com/p/against-taste" },
      { title: "The Self Help Trap", author: "Tim Ferriss", href: "https://tim.blog/2026/03/04/the-self-help-trap/" },
      {
        title: "The Laboratory and the Artist",
        author: "Lucas Gelfond",
        status: "to-read",
        href: "https://clereviewofbooks.com/the-laboratory-and-the-artist/",
      },
      {
        title: "Shooting an Elephant",
        author: "George Orwell",
        href: "https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/shooting-an-elephant/",
      },
      {
        title: "Politics and the English Language",
        author: "George Orwell",
        href: "https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/",
      },
      {
        title: "My Goal Alignment Problem",
        author: "Bryan Johnson",
        href: "https://medium.com/future-literacy/my-goal-alignment-problem-d90e0c14b717",
      },
      {
        title: "SITUATIONAL AWARENESS: The Decade Ahead",
        author: "Leopold Ashenbrenner",
        status: "to-read",
        href: "https://situational-awareness.ai/",
      },
    ],
  },
];

// --- Ideas ---

export const ideas: Idea[] = [
  { title: "Fleeting Inspiration", category: "Creativity", slug: "fleeting-inspiration" },
  { title: "Intentional Consumption", category: "Uncategorized", slug: "intentional-consumption" },
];

// --- Quotes ---

export const quotes: Quote[] = [
  {
    text: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    attribution: "Shakespeare, As You Like It",
  },
  {
    text: "Seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you",
    attribution: "Matthew 6:33 (KJV)",
  },
  {
    text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.",
    attribution: "Colossians 3:23-24 (NIV)",
  },
  {
    text: "If you can save someone time, save them money, or make them money, you will never have to worry about finding a job.",
    attribution: "My Dad",
  },
  {
    text: "Immature poets imitate; mature poets steal; bad poets deface what they take, and good poets make it into something better, or at least something different.",
    attribution: "T.S. Eliot",
  },
  {
    text: "I did not succeed in life by intelligence. I succeeded because I have a long attention span.",
    attribution: "Charlie Munger",
  },
  {
    text: "All I want to know is where I'm going to die so I'll never go there",
    attribution: "Charlie Munger",
  },
  {
    text: "Imagine going to live on a mountaintop by yourself, forever. You build a home that no one will ever visit. Still, you invest the time and effort to shape the space in which you'll spend your days. The wood, the plates, the pillows—all magnificent. Curated to your taste. This is the essence of great art. We make it for no other purpose than creating our version of the beautiful, bringing all of ourself to every project, whatever its parameters and constraints. Consider it an offering, a devotional act. We do the best, as we see the best—with our own taste. No one else's. We create our art so we may inhabit it ourselves.",
    attribution: "Rick Rubin, The Creative Act: A Way of Being",
  },
  {
    text: "New York was populated by the ambitious... only here did you have to apologize for having faith in something other than yourself.",
    attribution: "Hanya Yanagihara, A Little Life",
  },
  {
    text: "People demand freedom of speech as a compensation for the freedom of thought they rarely use",
    attribution: "Soren Kierkegaard",
  },
  {
    text: "In order to write about life first you must live it",
    attribution: "Ernest Hemingway",
  },
  {
    text: "You can always understand the son by the story of his father. The story of the father is embedded in the son",
    attribution: "Francis Ford Coppola",
  },
];

// --- Writings / Essays ---

export const essays: Essay[] = [
  {
    slug: "how-to-make-your-first-video",
    title: "how to make your first video",
    date: "Nov 13, 2025",
    blocks: [
      {
        type: "paragraph",
        text: "So you want to make content. That's pretty cool. But I can only assume that since you are reading this document right now, you have no clue what you are doing.",
      },
      { type: "paragraph", text: "Don't worry, I didn't either." },
      { type: "paragraph", text: "Here's exactly what you need to do:" },
      { type: "heading", text: "Step 1: Be confident." },
      {
        type: "paragraph",
        text: "This sounds generic and stocky, and honestly it kinda is, but the reason I say this is because a very common barrier to content creation is the fear of being perceived. But isn't that what you want? To be perceived? You just don't want to be perceived as a loser, a loser with less than 10k followers who's making stupid videos on Instagram.",
      },
      {
        type: "paragraph",
        text: "News flash: every creator had no followers at a certain point. None of us started out magically with 10K on our profiles, we all had to grind to get there. But I understand that doesn't make the task of starting any less scary.",
      },
      {
        type: "paragraph",
        text: "So let me ask you this: do you believe you are going to be successful? If you don't, well, stop reading this and continue to scroll on Instagram accepting the fact that your life will amount to nothing. But if you do, then when you become successful, people are going to see you anyway. Why does it matter if they see you at the bottom or at the top or halfway there? All they can do is watch.",
      },
      { type: "heading", text: "Step 2: Be shit." },
      {
        type: "paragraph",
        text: "Excuse my language. Even as a Christian, I feel like this is the most effective way to get my next point across. You need to be okay with being shit. Most people are either 0 or 100, they have to be all-in and perfect, or not at all. Successful people are in the middle, they are okay with being 1% as long as the next time they are 1.1%. Your first video is not going to be the next Godfather okay? It's probably going to get 268 views and 50 of them are going to be people you know who sent it to their group chats and all of them are laughing at you. That's okay though, because you're going to fix up some things. Maybe you change your hook, maybe you speak with a little bit more emotion, maybe you add some nice music. The next video will be better. That's all that matters. If the next video is always better, then your success is guaranteed. But you have to make the previous video for the next one to exist.",
      },
      { type: "heading", text: "Step 3: Be honest." },
      {
        type: "paragraph",
        text: "Social media is fake. I don't think that comes as a surprise to anyone. In a world full of AI generated slop and edited IG baddie profiles, people yearn for real human connection. That's why personality streamers have exploded over the past few years. People just like seeing people now. No one really likes the know-it-all, the guru, the guy that has a nice car and a hot girlfriend. It's unattainable, it's unrealistic. But you can be the realistic one, you can show them that it is really possible to do the things you are about to do. Whatever content you make, don't hide your struggles or vulnerabilities, embrace them. It is the thing that makes you special.",
      },
      {
        type: "paragraph",
        text: "Alright those are the 3 steps to making your first video. If you came here looking for technical advice, I'm sorry to say that there's none here. It's not like I don't have it, it's just that you don't need it right now. The technical stuff can come after you start, just focus on actually doing that.",
      },
      {
        type: "paragraph",
        text: "After you posted your first video, come back to this document and click this link. It's a link to get in touch. Now I'm gonna be honest, I'm only looking to get on call with people that are willing to actually pay to work with me, but if you want your first video to be reviewed, you can shoot me a DM and I'll look at it for free.",
      },
    ],
  },
  {
    slug: "why-do-people-watch-me",
    title: "why do people watch me?",
    date: "Jul 22, 2025",
    substackUrl: "https://henrybpan.substack.com/p/why-do-people-watch-me",
    blocks: [
      { type: "paragraph", text: "My dad thinks my videos are cringe." },
      {
        type: "paragraph",
        text: "I attribute this to the fact that he is the typical Gen X Asian dad who is not in touch with his feelings.",
      },
      { type: "paragraph", text: "However this does bring up a fair question:" },
      { type: "paragraph", text: "Why do people watch my videos?" },
      {
        type: "paragraph",
        text: "I think it's fair to say that a majority of my videos are somber, introspective, and philosophical.",
      },
      { type: "paragraph", text: "At least I'd like to think so." },
      { type: "paragraph", text: "My mom calls them whiney." },
      {
        type: "paragraph",
        text: "(I'd like to clarify that I'm not writing this to disparage against my parents. I love them to death, and I honestly think it's good that they disagree with my openness on social media.)",
      },
      {
        type: "paragraph",
        text: "No matter what you would like to call my videos, it's clear that (some) people like to watch.",
      },
      { type: "paragraph", text: "My hypothesis is that it's because people love seeing emotional vulnerability." },
      {
        type: "paragraph",
        text: "We love it because we can understand it, we can empathize with it. Unlike the billions of videos on social media, it feels real.",
      },
      {
        type: "paragraph",
        text: "Now, this is basically me admitting that I use my emotional struggle for digital clout. I'd be lying if I said that statement wasn't partially true.",
      },
      {
        type: "paragraph",
        text: "But I do think sharing my struggles has a positive impact apart from providing me emotional validation. There are many people who have reached out in my comments or DMs to say that they are going through exactly what I'm feeling as well. I think my videos provide value in the fact that I am able to articulate particular emotional experiences that my particular demographic experiences.",
      },
      {
        type: "paragraph",
        text: "That's because once a specific emotion is put into words, it becomes tangible. Tangible problems are much easier to solve than intangible ones. There's a reason why journaling works so well to organize and process your thoughts. Thoughts are fleeting, ephemeral things that return every once in a while to torment you then disappear as fast as they came. Writing them down chains them to permanence, so you can understand how and why you are thinking these things.",
      },
      {
        type: "paragraph",
        text: "So, I think that people watch me because I am able to articulate my emotional experiences, which they often relate to. I of course want to get better at doing this. I want to become more succinct, more thoughtful. I don't just want to be able to articulate my emotional troubles, I want to also be able to solve them, so that others can do the same. This will come with more reading, thinking, journaling, and time.",
      },
      { type: "paragraph", text: "That's it from me today." },
    ],
  },
  {
    slug: "on-burnout",
    title: "on burnout",
    date: "Jul 17, 2025",
    substackUrl: "https://henrybpan.substack.com/p/on-burnout",
    blocks: [
      { type: "paragraph", text: "I used to think the term burnout was ridiculous." },
      {
        type: "paragraph",
        text: "Yes, I suppose I could understand one's eventual fatigue working a job they hated or doing mountains of busywork for a degree they didn't even want.",
      },
      {
        type: "paragraph",
        text: "But how could you ever burnout if you were doing something you love? Obviously, those who burnout just don't work the right jobs, they just don't pursue their true passions.",
      },
      {
        type: "paragraph",
        text: "I know, I know, I just changed your entire life outlook. You're welcome. I would be remiss to not use my infinite wisdom as a 18 year old who just graduated high school to tell you how to live your life.",
      },
      {
        type: "paragraph",
        text: "But seriously, I used to think burnout was just for soulless people who worked soulless jobs to provide for their soulless life.",
      },
      {
        type: "paragraph",
        text: "However, after living in San Francisco for the past two weeks, and creating 4–6 pieces of short form content every day, I'm burning out.",
      },
      { type: "paragraph", text: "It's kind of crazy to say that given that" },
      { type: "paragraph", text: "A) My job is literally to create 90 second Instagram Reels." },
      { type: "paragraph", text: "B) I really really love doing my job." },
      {
        type: "paragraph",
        text: "But when you spend every waking minute of your day focusing, thinking, and stressing about one thing, you are going to burn out. I believe in some part it is due to my shift to a results based framework of success. That's what happens when you start working for someone — you feel like you have to hit these goals and view targets or else you don't provide any value. I recognized that early on, and was okay with it, until it started to leak into my personal content.",
      },
      {
        type: "paragraph",
        text: "I have become increasingly obsessive over the wrong things. Instead of being obsessed with the process, I've been fixated on the results. When I should be researching and experimenting with hooks, pacing, and tonality, I instead compare follower counts, average views, and likes.",
      },
      {
        type: "paragraph",
        text: "I'm afraid of falling behind. So I create for the sake of creation, blindly throwing a dart and hoping it hits. Even worse, I begin to muse to myself on what has worked for me in the past. The answer is Christ. And so I begin brainstorming ways to create Christian content, ones that will drive engagement and views to my page. Thank God I never pressed record.",
      },
      {
        type: "paragraph",
        text: "It was at this point that I realized social media for what it was to me: a false idol. It is something I worship, something I seek validation from, something that I believe will give me fulfillment.",
      },
      {
        type: "paragraph",
        text: "I require another shift in mindset. True fulfillment will never come from money, prestige, or online clout. It comes from our Lord and savior, Jesus Christ. Focus on Him, and let his will be executed. I know by strengthening my relationship with God, by praying and reading His Word, then everything else will fall into place.",
      },
      {
        type: "paragraph",
        text: "I still believe that burnout is due to working for something useless, because if you don't have Christ as your first and upmost priority, you won't find true happiness.",
      },
    ],
  },
  {
    slug: "pursuing-greatness",
    title: "pursuing greatness",
    date: "Jul 17, 2025",
    substackUrl: "https://henrybpan.substack.com/p/pursuing-greatness",
    blocks: [
      { type: "paragraph", text: "I want to be great." },
      { type: "paragraph", text: "I'm not ashamed to say it." },
      {
        type: "paragraph",
        text: "I believe I am one of the very few people in this world that understands what greatness takes and is willing to do what it takes to achieve it.",
      },
      {
        type: "paragraph",
        text: "Most people don't actually want greatness, or more accurately, they don't want the sacrifice that comes with it.",
      },
      { type: "paragraph", text: "And that's okay." },
      { type: "paragraph", text: "But I want to be great." },
      { type: "paragraph", text: "But why do I want this?" },
      { type: "paragraph", text: "Will becoming great make me happy?" },
      {
        type: "paragraph",
        text: "Recently Scottie Scheffler (the best golf player in the world) said something in a press conference that intrigued me.",
      },
      {
        type: "blockquote",
        text: "This [golfing] is not a fulfilling life, it's fulfilling from the sense of accomplishment, but it's not fulfilling from a sense of like, you know, the deepest places of your heart.",
        cite: "Scottie Scheffler",
      },
      {
        type: "paragraph",
        text: "I think he's right. There are so many people, who are great, who are the best at what they do, who are by all accounts, the masters of their respective universes. Yet they remain unhappy and unfulfilled. True fulfillment won't come from being the best at what you do, but through following God.",
      },
      { type: "paragraph", text: "I know that." },
      { type: "paragraph", text: "But I want to be great." },
      {
        type: "blockquote",
        text: "No servant can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other. Ye cannot serve God and mammon.",
        cite: "Luke 16:13 KJV",
      },
      {
        type: "paragraph",
        text: "I cannot serve both God and content creation as equal masters. Content creation must be subservient to the Lord. A tool, a method to glorify His greatness.",
      },
      { type: "paragraph", text: "I will be great, but it won't be my greatness, it will be the Lord's." },
    ],
  },
];

// --- Contact ---

export const contactIntro =
  "Collaborations, partnerships, speaking, or just saying hi — send me a note.";

export const contactTopics = [
  "General inquiry",
  "Collaboration",
  "Brand partnership",
  "Speaking / podcast",
  "Something else",
];

// --- Newsletter ---

export const newsletterBlurb =
  "Notes from my life. Sharing my recommendations and other anecdotes.";

export const newsletterUnsubscribeHref =
  "mailto:henry@henrybpan.com?subject=Unsubscribe&body=Please%20remove%20me%20from%20your%20newsletter%20list.";

export const homeNewsletterBlurb = "Just little notes from my life.";
