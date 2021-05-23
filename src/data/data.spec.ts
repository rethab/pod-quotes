import { episodes, people, podcasts, quotes } from "./data";

test("quotes are linked to existing people", () => {
  quotes.forEach((q) => {
    expect(people.map((p) => p.id)).toEqual(
      expect.arrayContaining([q.quoteById])
    );
    if (q.quotedById) {
      expect(people.map((p) => p.id)).toEqual(
        expect.arrayContaining([q.quotedById])
      );
    }
  });
});

test("quotes are linked to existing episodes", () => {
  quotes.forEach((q) => {
    expect(episodes.map((e) => e.id)).toEqual(
      expect.arrayContaining([q.episodeId])
    );
  });
});

test("episodes are linked to existing podcasts", () => {
  episodes.forEach((e) => {
    expect(podcasts.map((p) => p.id)).toEqual(
      expect.arrayContaining([e.podcastId])
    );
  });
});
