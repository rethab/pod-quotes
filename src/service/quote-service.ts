import { Quote as RawQuote } from "@/data/types";
import { episodes, people, podcasts, quotes } from "@/data/data";

import { Episode, Person, Podcast, Quote } from "@/service/types";

export default class QuoteService {
  getQuotes(): Array<Quote> {
    return (
      this.shuffle(quotes)
        .map(this.joinQuoteData)
        // TODO how to make this nicer?
        .filter((q) => q != undefined)
        .map((q) => q as Quote)
    );
  }

  getPodcasts(): Array<Podcast> {
    return podcasts;
  }

  getPeople(): Array<Person> {
    return people;
  }

  joinQuoteData(quote: RawQuote): Quote | undefined {
    const rawEpisode = episodes.find((e) => e.id === quote.episodeId);
    if (!rawEpisode) return;

    const podcast = podcasts.find((p) => p.id === rawEpisode.podcastId);
    if (!podcast) return;

    const episode: Episode = {
      podcast: podcast,
      ...rawEpisode,
    };

    const by = people.find((p) => p.id === quote.quoteById);
    if (!by) return;

    return {
      id: quote.id,
      episode: episode,
      quoteBy: by,
      quote: quote.quote,
      time: quote.time,
      context: quote.context,
    };
  }

  shuffle(array: Array<RawQuote>): Array<RawQuote> {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
