export default [
  {
    path: "/carrinho",
    name: "carrinho",
    component: () => import("@/layout/Index"),
    children: [
      {
        path: "produtos",
        name: "carrinho-produtos",
        component: () => import("@/modules/cart/views/Cart"),
      },
      {
        path: "editar-produto",
        name: "editar-produto",
        component: () => import("@/modules/cart/views/EditProductCart"),
      },
    ],
  },
];
