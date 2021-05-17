<template>
  <v-card dark dense color="primary">
    <v-card-title class="caption font-weight-light">{{
      quote.episode.podcast.name
    }}</v-card-title>
    <v-card-text class="pb-0 white--text">
      <span class="headline font-weight-bold white--text">
        "{{ quote.quote }}"
      </span>
      <br />
      <span>- {{ quote.quoteBy.name }}</span>
    </v-card-text>
    <v-card-actions class="">
      <v-btn
        text
        class="blue--text text--lighten-2"
        @click="showContext = !showContext"
      >
        <span v-if="!showContext"
          ><v-icon>mdi-chevron-down</v-icon> Context</span
        >
        <span v-else><v-icon>mdi-chevron-up</v-icon> Hide</span>
      </v-btn>
      <v-spacer />
      <span class="">
        <v-btn :href="tweetLink" color="secondary" target="_blank">
          Tweet this <v-icon class="ml-2">mdi-twitter</v-icon>
        </v-btn>
      </span>
    </v-card-actions>
    <v-card-text v-if="showContext">
      <span class="font-weight-bold">Episode:</span> {{ quote.episode.name
      }}<br />
      <span class="font-weight-bold">Time:</span> {{ quote.time }}<br />
      <span class="font-weight-bold">Context:</span> {{ quote.context }}<br />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Quote as QuoteT } from "@/service/types";
export default Vue.extend({
  name: "Quote",
  props: {
    quote: { type: Object as PropType<QuoteT>, required: true },
    showContextInitial: { type: Boolean, default: false },
  },
  data() {
    return {
      showContext: this.showContextInitial,
    };
  },
  computed: {
    tweetLink(): string {
      let by = this.quote.quoteBy.name;
      if (this.quote.quoteBy.twitter) {
        by += ` (@${this.quote.quoteBy.twitter})`;
      }
      let link = `https://podquotes.io/quote/${this.quote.id}`;

      const text = `"${this.quote.quote}"\n- ${by}\n\n${link}`;
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}`;
    },
  },
});
</script>
