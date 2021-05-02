<template>

  <v-card dark dense color="primary">
    <v-card-title class="caption font-weight-light">{{ quote.podcast.name }}</v-card-title>
    <v-card-text class="pb-0 white--text">
      <span class="headline font-weight-bold white--text">
      "{{ quote.quote }}"
      </span>
      <br/>
      <span>- {{ quote.by.name }}</span>
    </v-card-text>
    <v-card-actions class="">
      <v-btn
          text
          @click="showContext = !showContext"
          class="blue--text text--lighten-2"
      >
        <span v-if="!showContext"><v-icon>mdi-chevron-down</v-icon> Context</span>
        <span v-else><v-icon>mdi-chevron-up</v-icon> Hide</span>
      </v-btn>
      <v-spacer/>
      <span class="">
        <v-btn :href="tweetLink" color="secondary" target="_blank">
          Tweet this <v-icon class="ml-2">mdi-twitter</v-icon>
        </v-btn>
      </span>
    </v-card-actions>
    <v-card-text v-if="showContext">
      <span class="font-weight-bold">Episode:</span> {{ quote.episode.name }}<br/>
      <span class="font-weight-bold">Time:</span> {{ quote.time }}<br/>
      <span class="font-weight-bold">Context:</span> {{ quote.context }}<br/>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Quote',
  props: ['quote', 'showContextInitial'],
  data() {
    return {
      showContext: this.showContextInitial,
    }
  },
  computed: {
    tweetLink: function () {
      let by = this.quote.by.name;
      if (this.quote.by.twitter) {
        by += ` (@${this.quote.by.twitter})`;
      }
      let link = `https://podquotes.io/quote/${this.quote.id}`;

      const text = `"${this.quote.quote}"\n- ${by}\n\n${link}`;
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    }
  }
}
</script>

<style scoped>

</style>
