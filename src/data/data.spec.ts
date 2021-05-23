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

test("all people are referenced", () => {
  const referencedPeople = collectUniqueIds(quotes, (q) => [
    q.quoteById,
    q.quotedById,
  ]);
  people.forEach((p) => {
    expect(referencedPeople).toEqual(expect.arrayContaining([p.id]));
  });
});

test("all podcasts are referenced", () => {
  const referencedPodcasts = collectUniqueIds(episodes, (e) => [e.podcastId]);
  podcasts.forEach((p) => {
    expect(referencedPodcasts).toEqual(expect.arrayContaining([p.id]));
  });
});

test("all episodes are referenced", () => {
  const referencedEpisodes = collectUniqueIds(quotes, (q) => [q.episodeId]);
  episodes.forEach((e) => {
    expect(referencedEpisodes).toEqual(expect.arrayContaining([e.id]));
  });
});

function collectUniqueIds<T>(
  elems: Array<T>,
  getIds: (obj: T) => Array<number | undefined>
): Array<number> {
  const result: Set<number> = new Set();
  elems.forEach((e) => {
    getIds(e).forEach((id) => {
      if (id) result.add(id);
    });
  });
  return Array.from(result);
}
