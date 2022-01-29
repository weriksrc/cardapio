export default [
  {
    path: "/pedidos",
    name: "pedidos",
    component: () => import("@/layout/Index"),

    children: [
      {
        path: "listar",
        name: "listar",
        component: () => import("@/modules/pedidos/views/AllPedido"),
      },
    ],
  },
];
