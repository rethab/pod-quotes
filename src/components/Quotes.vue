<template>
  <v-container>
    <v-card elevation="0" >
      <v-card-title>
        <v-autocomplete
            class="mr-2"
            filled
            rounded
            clearable
            item-value="id"
            item-text="name"
            label="Author"
            :items="people"
            v-model="selectedPersonId"
        ></v-autocomplete>
        <v-autocomplete
            class="mr-2"
            filled
            rounded
            clearable
            item-value="id"
            item-text="name"
            label="Podcast"
            :items="podcasts"
            v-model="selectedPodcastId"
        ></v-autocomplete>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            class="mb-2"
            v-for="(quote, key) in quotes"
            :key="key"
            cols="12"
            md="6">
            <Quote :quote="quote"/>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import data from '@/data/data.js';
import Quote from '@/components/Quote';

export default {
  name: 'Quotes',
  components: {Quote},
  data() {
    return {
      selectedPodcastId: null,
      selectedPersonId: null,
    }
  },
  computed: {
    quotes: function () {
      return data()
          .quotes()
          .map(this.joinQuoteData)
          .filter(q => this.selectedPodcastId == null || this.selectedPodcastId === q.episode.podcastId)
          .filter(q => this.selectedPersonId == null || this.selectedPersonId === q.quoteById)
    },
    podcasts: () => data().podcasts(),
    people: () => data().people(),
  },
  methods: {
    joinQuoteData(quote) {
      const episode = data().episodes().find(e => e.id === quote.episodeId);
      const podcast = data().podcasts().find(p => p.id === episode.podcastId);

      quote.by = data().people().find(p => p.id === quote.quoteById);
      quote.episode = episode;
      quote.podcast = podcast;
      quote.show = `${podcast.name} / ${episode.name}`

      return quote;
    }
  }
}
</script>
