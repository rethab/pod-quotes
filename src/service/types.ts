export interface Podcast {
  id: number;
  name: string;
  url: string;
}

export interface Episode {
  id: number;
  podcast: Podcast;
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
  episode: Episode;
  quoteBy: Person;
  quote: string;
  time: string;
  context?: string;
}
