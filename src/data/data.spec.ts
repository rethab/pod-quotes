import { episodes, people, podcasts, quotes } from "./data";

test("quotes are linked to existing people", () => {
  quotes.forEach((q) => {
    const quoteBy = people.find((p) => p.id === q.quoteById);
    expect(quoteBy).toBeDefined();
    if (q.quotedById) {
      const quotedBy = people.find((p) => p.id === q.quotedById);
      expect(quotedBy).toBeDefined();
    }
  });
});

test("quotes are linked to existing episodes", () => {
  quotes.forEach((q) => {
    const episode = episodes.find((e) => e.id === q.episodeId);
    expect(episode).toBeDefined();
  });
});

test("episodes are linked to existing podcasts", () => {
  episodes.forEach((e) => {
    const podcast = podcasts.find((p) => p.id === e.podcastId);
    expect(podcast).toBeDefined();
  });
});
