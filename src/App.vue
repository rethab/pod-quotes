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
};
</script>
