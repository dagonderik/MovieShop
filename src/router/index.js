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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/checkout.vue"),
    },
    {
      path: "/modal",
      name: "modal",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/modal.vue"),
    },
  ],
});

export default router;
