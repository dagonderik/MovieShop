import { createRouter, createWebHistory } from "vue-router";
import moviesHome from "../views/moviesHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: moviesHome,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/checkout.vue"),
    },
  ],
});

export default router;
