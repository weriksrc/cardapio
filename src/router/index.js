import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/pedidos",
    name: "pedidos",
    component: () => import("@/layout/Index"),
    children: [
      {
        path: "categorias",
        name: "categorias",
        component: () => import("@/modules/pedidos/views/Categoria"),
      },
      {
        path: "categorias/:idCategorias/cardapios",
        name: "cardapios",
        component: () => import("@/modules/pedidos/views/Cardapio"),
      },
      {
        path: "categorias/:idCaterogia/cardapios/:idPoduto",
        name: "add-pruduto-carrinho",
        component: () => import("@/modules/pedidos/views/AddProductCart"),
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
