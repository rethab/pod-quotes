<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center font-weight-bold">
        <span>Pod Quotes</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/rethab/pod-quotes"
        target="_blank"
        text
        class="caption font-weight-light"
      >
        <span class="mr-2">Add Quotes</span>
        <v-icon small class="mb-1">mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "Pod Quotes: Memorable Quotes from Inspiring Podcasts",
    link: [
      { rel: "canonical", href: "https://podquotes.io", vmid: "canonical" },
    ],
    meta: [
      { vmid: "og:title", property: "og:title", content: "Pod Quotes" },
      {
        vmid: "og:site_name",
        property: "og:site_name",
        content: "podquotes.io",
      },
      { vmid: "og:type", property: "og:type", content: "website" },
      { vmid: "og:url", property: "og:url", content: "https://podquotes.io" },
      {
        vmid: "og:description",
        property: "og:description",
        content: "Memorable Quotes from Inspiring Podcasts",
      },
      { vmid: "twitter:card", name: "twitter:card", content: "summary" },
      {
        vmid: "twitter:site",
        name: "twitter:site",
        content: "https://podquotes.io",
      },
      { vmid: "twitter:title", name: "twitter:title", content: "Pod Quotes" },
      {
        vmid: "twitter:description",
        name: "twitter:description",
        content: "Memorable Quotes from Inspiring Podcasts",
      },
      {
        vmid: "twitter:creator",
        name: "twitter:creator",
        content: "@podquotesio",
      },
      { vmid: "gs:name", itemprop: "name", content: "Pod Quotes" },
      {
        vmid: "gs:description",
        itemprop: "description",
        content: "Memorable Quotes from Inspiring Podcasts",
      },
    ],
  },
};
</script>
