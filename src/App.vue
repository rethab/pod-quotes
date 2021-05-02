<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <span>Pod Quotes</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
          href="https://github.com/rethab/pod-quotes"
          target="_blank"
          text
      >
        <span class="mr-2">Add Quotes</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- <Header/> -->
      <Quotes/>
    </v-main>
  </v-app>
</template>

<script>
import Quotes from './components/Quotes';

export default {
  name: 'App',

  components: {
    Quotes,
  },

};
</script>
