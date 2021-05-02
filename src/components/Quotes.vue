<template>
  <v-container>
    <v-overlay :value="!!singleQuote" :opacity="0.85">
      <v-card elevation="0" color="transparent" v-click-outside="closeOverlay">
        <v-card-actions color="white" class="pb-0">
          <v-spacer/>
          <v-btn icon large dark @click="closeOverlay"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-actions>
        <v-card-text class="pt-0">
          <Quote :quote="singleQuote" :show-context-initial="false"/>
        </v-card-text>
      </v-card>
    </v-overlay>
    <v-card elevation="0">
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
  props: ['quoteId'],
  data() {
    return {
      selectedPodcastId: null,
      selectedPersonId: null,
    }
  },
  computed: {
    singleQuote: function () {
      if (!this.quoteId) return;
      return this.quotes.find(q => q.id === parseInt(this.quoteId));
    },
    quotes: function () {
      return this.shuffle(data().quotes())
          .map(this.joinQuoteData)
          .filter(q => this.selectedPodcastId == null || this.selectedPodcastId === q.episode.podcastId)
          .filter(q => this.selectedPersonId == null || this.selectedPersonId === q.quoteById)
    },
    podcasts: () => data().podcasts(),
    people: () => data().people(),
  },
  methods: {
    closeOverlay() {
      this.$router.push({name: 'home'});
    },
    joinQuoteData(quote) {
      const episode = data().episodes().find(e => e.id === quote.episodeId);
      const podcast = data().podcasts().find(p => p.id === episode.podcastId);

      quote.by = data().people().find(p => p.id === quote.quoteById);
      quote.episode = episode;
      quote.podcast = podcast;
      quote.show = `${podcast.name} / ${episode.name}`

      return quote;
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  }
}
</script>
