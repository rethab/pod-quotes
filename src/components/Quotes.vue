<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="quotes"
          :search="search"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import data from '@/data/data.js';

export default {
  name: 'Quotes',
  data() {
    return {
      search: '',
      headers: [
        {text: 'Quote', value: 'quote', cellClass: 'font-weight-medium'},
        {text: 'By', value: 'by.name', cellClass: 'text-caption'},
        {text: 'Date', value: 'episode.date', cellClass: 'text-caption'},
        {text: 'Show', value: 'show', cellClass: 'text-caption'},
        {text: 'Context', value: 'context', cellClass: 'text-caption'},
        {text: 'Time', value: 'time', cellClass: 'text-caption'},
      ],
    }
  },
  computed: {
    quotes: function () {
      return data().quotes().map(quote => {
        const episode = data().episodes().find(e => e.id === quote.episodeId);
        const podcast = data().podcasts().find(p => p.id === episode.podcastId);

        quote.by = data().people().find(p => p.id === quote.byId);
        quote.episode = episode;
        quote.show = `${podcast.name} / ${episode.name}`

        return quote;
      })
    }
  }
}
</script>
