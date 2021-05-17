<template>
  <v-container class="pb-0">
    <v-row dense class="text-center">
      <v-col class="mb-2">
        <h1>Pod Quotes</h1>
        <span class="subtitle-1 font-italic">
          follow <a href="https://twitter.com/podquotesio">@podquotesio</a> for
          daily quotes
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
});
</script>
