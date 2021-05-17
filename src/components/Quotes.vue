<template>
  <v-container>
    <v-overlay :value="!!singleQuote" :opacity="0.85">
      <v-card v-click-outside="closeOverlay" elevation="0" color="transparent">
        <v-card-actions color="white" class="pb-0">
          <v-spacer />
          <v-btn icon large dark @click="closeOverlay">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-text class="pt-0">
          <Quote :quote="singleQuote" :show-context-initial="false" />
        </v-card-text>
      </v-card>
    </v-overlay>
    <v-card elevation="0">
      <v-card-title>
        <v-autocomplete
          v-model="selectedPersonId"
          class="mr-2"
          filled
          rounded
          clearable
          item-value="id"
          item-text="name"
          label="Author"
          :items="people"
        ></v-autocomplete>
        <v-autocomplete
          v-model="selectedPodcastId"
          class="mr-2"
          filled
          rounded
          clearable
          item-value="id"
          item-text="name"
          label="Podcast"
          :items="podcasts"
        ></v-autocomplete>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            v-for="(quote, key) in quotes"
            :key="key"
            class="mb-2"
            cols="12"
            md="6"
          >
            <Quote :quote="quote" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import Quote from "@/components/Quote.vue";
import QuoteService from "@/service/quote-service";
import { Person, Podcast, Quote as QuoteT } from "@/service/types";
import { MetaInfo } from "vue-meta";

export default Vue.extend({
  name: "Quotes",
  components: { Quote },
  props: {
    quoteId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      selectedPodcastId: undefined as number | undefined,
      selectedPersonId: undefined as number | undefined,

      quoteService: new QuoteService(),
    };
  },
  metaInfo(): MetaInfo {
    if (this.singleQuote) {
      const prefix = this.singleQuote.quoteBy.name;

      // trim quote to SEO-friendly length
      const quote = this.singleQuote.quote;
      const trimmedQuote =
        prefix.length + quote.length > 60
          ? `${quote.substring(0, 55 - prefix.length)}..`
          : quote;

      const link = `https://podquotes.io/quote/${this.singleQuote.id}`;
      const title = `${prefix}: "${trimmedQuote}"`;

      return {
        title: title,
        link: [{ rel: "canonical", href: link, vmid: "canonical" }],
        meta: [
          { vmid: "og:url", property: "og:url", content: link },
          {
            vmid: "og:description",
            property: "og:description",
            content: title,
          },
          { vmid: "twitter:card", name: "twitter:card", content: "summary" },
          { vmid: "twitter:site", name: "twitter:site", content: link },
          {
            vmid: "twitter:description",
            name: "twitter:description",
            content: title,
          },
          { vmid: "gs:description", itemprop: "description", content: title },
        ],
      };
    } else {
      return {};
    }
  },
  computed: {
    singleQuote(): QuoteT | undefined {
      if (!this.quoteId) return;
      return this.quotes.find((q) => q.id === this.quoteId);
    },
    quotes(): Array<QuoteT> {
      return this.quoteService
        .getQuotes()
        .filter(
          (q: QuoteT) =>
            this.selectedPodcastId == null ||
            this.selectedPodcastId === q.episode.podcast.id
        )
        .filter(
          (q: QuoteT) =>
            this.selectedPersonId == null ||
            this.selectedPersonId === q.quoteBy.id
        );
    },
    podcasts(): Array<Podcast> {
      return this.quoteService.getPodcasts();
    },
    people(): Array<Person> {
      return this.quoteService.getPeople();
    },
  },
  methods: {
    closeOverlay() {
      this.$router.push({ name: "home" });
    },
  },
});
</script>
