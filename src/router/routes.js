export default [
  {
    name: "home",
    path: "/",
    component: () => import("@/pages/Home.vue"),
  },
  {
    name: "cart",
    path: "/cart",
    component: () => import("@/pages/Cart.vue"),
  },
];
