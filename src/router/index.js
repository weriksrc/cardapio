import Vue from "vue";
import VueRouter from "vue-router";
import cardapio from "../modules/cardapio/routes";
import auth from "../modules/auth/routes";
import cart from "../modules/cart/routes";
import pedidos from "../modules/pedidos/routes";

Vue.use(VueRouter);

const routes = [...cardapio, ...auth, ...cart, ...pedidos];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
