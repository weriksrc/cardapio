export default [
  {
    path: "/cardapio",
    name: "cardapio",
    component: () => import("@/layout/Index"),
    children: [
      {
        path: "categorias",
        name: "categorias",
        component: () => import("@/modules/cardapio/views/Categoria"),
      },
      {
        path: "categorias/:idCategorias/produtos",
        name: "cardapios",
        component: () => import("@/modules/cardapio/views/Produto"),
      },
      {
        path: "categorias/:idCaterogia/produtos/:idProduto",
        name: "add-pruduto-carrinho",
        component: () => import("@/modules/cardapio/views/AddProductCart"),
      },
    ],
  },
];
