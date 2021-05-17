<template>
  <div>
    <Header />
    <Quotes :quote-id="parseInt($route.params.id)" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Header from "@/components/Header.vue";
import Quotes from "@/components/Quotes.vue";

export default Vue.extend({
  name: "Home",
  components: { Header, Quotes },
});
</script>
