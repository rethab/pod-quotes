import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/quote/:id",
    name: "quote-details",
    component: Home,
  },
];

const router: VueRouter = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // retain position on browser back
      return savedPosition;
    } else {
      // scroll to top when navigating
      return { x: 0, y: 0 };
    }
  },
});

export default router;
