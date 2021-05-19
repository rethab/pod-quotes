import { episodes, people, podcasts, quotes } from "../data";

test("quotes are linked to existing people", () => {
  const peopleIds = people.map((p) => p.id);
  quotes.forEach((q) => {
    expect(peopleIds).toEqual(expect.arrayContaining([q.quoteById]));
    if (q.quotedById) {
      expect(peopleIds).toEqual(expect.arrayContaining([q.quotedById]));
    }
  });
});

test("quotes are linked to existing episodes", () => {
  const episodeIds = episodes.map((e) => e.id);
  quotes.forEach((q) => {
    expect(episodeIds).toEqual(expect.arrayContaining([q.episodeId]));
  });
});

test("episodes are linked to existing podcasts", () => {
  const podcastIds = podcasts.map((p) => p.id);
  episodes.forEach((e) => {
    expect(podcastIds).toEqual(expect.arrayContaining([e.podcastId]));
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
