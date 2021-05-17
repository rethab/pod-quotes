import { Episode, Person, Podcast, Quote } from "@/data/types";

export const podcasts: Array<Podcast> = [
  {
    id: 1,
    name: "Acquired LP Show",
    url: "https://glow.fm/acquired/",
  },
  {
    id: 2,
    name: "The Rational Reminder",
    url: "https://rationalreminder.libsyn.com/",
  },
  {
    id: 3,
    name: "Lex Fridman Podcast",
    url: "https://lexfridman.com/podcast/",
  },
];

export const episodes: Array<Episode> = [
  {
    id: 1,
    podcastId: 1,
    date: "2020-05-05",
    name: "High-performance Hiring & Interviewing with former Amazon Worldwide GM of Prime Membership, Anna Collins",
    url: "https://www.acquired.fm/episodes/high-performance-hiring-interviewing-with-former-amazon-worldwide-gm-of-prime-membership-anna-collins",
  },
  {
    id: 2,
    podcastId: 2,
    date: "2021-04-29",
    name: "Paul Merriman: We're Talking Millions",
    url: "https://rationalreminder.libsyn.com/paul-merriman-were-talking-millions-ep147",
  },
  {
    id: 3,
    podcastId: 1,
    date: "2020-09-29",
    name: "How YC Rewrote the Seed Playbook with Garry Tan",
    url: "https://www.acquired.fm/episodes/how-yc-rewrote-the-seed-playbook-with-garry-tan",
  },
  {
    id: 4,
    podcastId: 1,
    date: "2021-04-29",
    name: "Making your customers your secret weapon (with Highspot's Oliver Sharp)",
    url: "https://www.acquired.fm/episodes/making-your-customers-your-secret-weapon-with-highspots-oliver-sharp",
  },
  {
    id: 5,
    podcastId: 3,
    date: "2020-07-18",
    name: "#109 - Brian Kernighan: UNIX, C, AWK, and Go Programming",
    url: "https://lexfridman.com/brian-kernighan/",
  },
];

export const people: Array<Person> = [
  {
    id: 1,
    name: "Anna Collins",
    linkedin: "https://www.linkedin.com/in/anna-collins-5965/",
  },
  {
    id: 2,
    name: "Warren Buffet",
    twitter: "WarrenBuffett",
  },
  {
    id: 3,
    name: "Paul Merriman",
    twitter: "SavvyInvestorPM",
  },
  {
    id: 4,
    name: "Garry Tan",
    twitter: "garrytan",
  },
  {
    id: 5,
    name: "Matt Cohler",
    twitter: "mattcohler",
  },
  {
    id: 6,
    name: "Oliver Sharp",
    twitter: "ojsharp",
  },
  {
    id: 7,
    name: "Brian Kernighan",
    web: "https://www.cs.princeton.edu/~bwk/",
  },
];
export const quotes: Array<Quote> = [
  {
    id: 1,
    episodeId: 1,
    quoteById: 1,
    quote: "If we did not win a game, I did not look at my individual stats",
    time: "3:55",
    context: "playing basketball at harvard / team vs. individual",
  },
  {
    id: 2,
    episodeId: 1,
    quoteById: 1,
    quote:
      "What people are on the bus? How do you bring the new people onto the bus? What seat on the bus? How do yo udevelop or move them from one seat to the next on the bus? When is the time for someone to get off the bus?",
    time: "20:19",
    context: "the people process, of which interviewing is a part",
  },
  {
    id: 3,
    episodeId: 1,
    quoteById: 1,
    quote: "When in doubt, throw them out",
    time: "34:58",
    context: "deciding whether to hire a candidate",
  },
  {
    id: 4,
    episodeId: 1,
    quoteById: 1,
    quote:
      "The faster I get my data, the faster I can go and sell. [..] I work to be connected and authtentic and also create a good candidate experience where I can",
    time: "37:03",
    context: "whether she ever goes into sell mode during an interview",
  },
  {
    id: 5,
    episodeId: 1,
    quoteById: 1,
    quote:
      "On a scale of zero to 100, what percent fit are you for this opportunity and why? What are the 3-5 factors?",
    time: "41:55",
    context:
      "her first interview question. it tells here how much they know about the business / how prepared/enthousiastic they are",
  },
  {
    id: 6,
    episodeId: 1,
    quoteById: 1,
    quote:
      "On a scale of one to ten, what level of interest do you have and why? Ten is you pay me money to have this job and one is I can pay the money",
    time: "43:04",
    context: "second question in interviews",
  },
  {
    id: 7,
    episodeId: 2,
    quoteById: 2,
    quotedById: 3,
    quote:
      "You don't save what's left over after spending. You spend what's left over after saving.",
    time: "52:55",
    context:
      "the most important habit is the one of saving. important commitment for young investors.",
  },
  {
    id: 8,
    episodeId: 3,
    quoteById: 4,
    quote:
      '"Who can I get?" is the wrong question. You should start with "Who is the smartest person I know?"',
    time: "8:26",
    context: "how to hire the best people",
  },
  {
    id: 9,
    episodeId: 3,
    quoteById: 4,
    quote:
      "Anytime there's a very strong reaction to something, there is something there",
    time: "14:56",
    context:
      "how he realized there's something going on with YC. people around him talked very negatively about them",
  },
  {
    id: 10,
    episodeId: 3,
    quoteById: 4,
    quote:
      "Why startups fail: It's not one thing, it's actually five different things and all come together and they become intractable and the plane crashes and kills everyone.",
    time: "23:25",
    context: "startups fail like planes",
  },
  {
    id: 11,
    episodeId: 3,
    quoteById: 4,
    quote:
      "It would have been just money, but what we got out of YC was actually the network",
    time: "24:23",
    context:
      "how (being stanford graduates) they could have raised money without YC",
  },
  {
    id: 12,
    episodeId: 3,
    quoteById: 4,
    quote:
      "The interesting thing that is happening is not being written about yet. You'll find out about it in like two or three years if you're lucky.",
    time: "30:30",
    context: "how to find stuff before other people are onto it",
  },
  {
    id: 13,
    episodeId: 3,
    quoteById: 4,
    quote:
      "Don't tell me there aren't enough smart people. If anything the people are trapped in these systems - basically machines that don't allow them to fully realize their potential.",
    time: "45:10",
  },
  {
    id: 14,
    episodeId: 3,
    quoteById: 4,
    quote:
      "It's not that things that are hot can't be good. It's that, if it's hot it's not necessarily good",
    time: "51:17",
    context:
      "hotness is not an indicator for whether to put money into something",
  },
  {
    id: 15,
    episodeId: 3,
    quoteById: 5,
    quotedById: 4,
    quote:
      "Venture capital is not about seeing the future, it's about seeing the present very clearly.",
    time: "52:55",
  },
  {
    id: 16,
    episodeId: 3,
    quoteById: 4,
    quote: "Really good engineers are gonna go and remake all of the planet.",
    time: "1:09:16",
    context: "he's very long on software",
  },
  {
    id: 16,
    episodeId: 4,
    quoteById: 6,
    quote:
      "If you're in the middle, you're too big to be protected and too small to matter to the field [sales org].",
    time: "13:41",
    context:
      "Products with this size are difficult to navigate -- very few products become big.",
  },
  {
    id: 17,
    episodeId: 4,
    quoteById: 6,
    quote:
      'In the early days, we learned the most from customers who said "no". Today, we\'re learning the most from customers who are actually on the platform.',
    time: "25:15",
    context:
      "In the early days, they hadn't built the right products. The people who said no, helped realize that.",
  },
  {
    id: 18,
    episodeId: 4,
    quoteById: 6,
    quote:
      "Often, what they say they want isn't right, but the need they have is always right.",
    time: "26:19",
    context: "Talking to customers, understanding what they really need",
  },
  {
    id: 19,
    episodeId: 4,
    quoteById: 6,
    quote:
      "It's not a question of whether you build a strong relationship with your customers, it's when.",
    time: "64:54",
    context: "",
  },
  {
    id: 20,
    episodeId: 4,
    quoteById: 6,
    quote:
      "If you want to get world-class performance out of a team, they have to have some cultural value that has primacy.",
    time: "69:11",
    context:
      "He is not fan of blending multiple functions together in one team. It will be difficult to find a team that is passionately world-class in two things.",
  },
  {
    id: 21,
    episodeId: 5,
    quoteById: 7,
    quote:
      "In terms of programming languages you get the most bang for the buck by learning AWK.",
    time: "36:55",
    context: "One of the inventors of AWK on why it is still relevant today",
  },
];
