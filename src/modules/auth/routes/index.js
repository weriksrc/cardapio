export default [
  {
    path: "/auth/qrcode/:token",
    name: "auth-qrcode",
    component: () => import("@/modules/auth/views/Qrcode"),
  },
];
