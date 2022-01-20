import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/cardapios",
    name: "cardapios",
    component: () => import("@/layout/Index"),
    children: [
      {
        path: "pedidos",
        name: "pedidos",
        component: () => import("@/modules/cardapio/views/Index"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
