<template>

  <v-card dark dense color="primary">
    <v-card-title class="pb-1 caption font-weight-light">{{ quote.episode.name }}</v-card-title>
    <v-card-title class="pt-0 caption font-weight-light">{{ quote.podcast.name }}</v-card-title>
    <v-card-text class="pb-0 white--text">
      <span class="headline font-weight-bold white--text">
      "{{ quote.quote }}"
      </span>
      <br/>
      <span>- {{ quote.by.name }}</span>
    </v-card-text>
    <v-card-actions class="pr-4 pb-4">
      <v-spacer/>
      <span>
        <v-btn :href="tweetLink" color="secondary" target="_blank">
        Tweet this <v-icon class="ml-2">mdi-twitter</v-icon>
        </v-btn>
      </span>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Quote',
  props: ['quote'],

  computed: {
    tweetLink: function () {
      let by = this.quote.by.name;
      if (this.quote.by.twitter) {
        by += ` (@${this.quote.by.twitter})`;
      }

      const text = `"${this.quote.quote}"\n- ${by}\n\nvia @podquotesio`;
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    }
  }
}
</script>

<style scoped>

</style>
