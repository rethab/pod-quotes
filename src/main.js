import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueMeta from "vue-meta";

Vue.config.productionTip = false;

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
