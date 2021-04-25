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
          dense="true"
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
        {text: 'Date', value: 'episode.date'},
        {text: 'Episode', value: 'episode.name'},
        {text: 'By', value: 'by.name'},
        {text: 'Time', value: 'time'},
        {text: 'Quote', value: 'quote'},
        {text: 'Context', value: 'context'},
      ],
    }
  },
  computed: {
    quotes: function () {
      return data().quotes().map(quote => {
        quote.by = data().people().find(p => p.id === quote.byId);
        quote.episode = data().episodes().find(e => e.id === quote.episodeId);
        return quote;
      })
    }
  }
}
</script>
