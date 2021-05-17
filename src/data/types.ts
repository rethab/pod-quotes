export interface Podcast {
  id: number;
  name: string;
  url: string;
}

export interface Episode {
  id: number;
  podcastId: number;
  date: string;
  name: string;
  url: string;
}

export interface Person {
  id: number;
  name: string;
  linkedin?: string;
  twitter?: string;
  web?: string;
}

export interface Quote {
  id: number;
  episodeId: number;
  quoteById: number;
  quotedById?: number;
  quote: string;
  time: string;
  context?: string;
}
