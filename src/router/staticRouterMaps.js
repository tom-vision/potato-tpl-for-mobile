const staticRouterMaps = [
  {
    path: "/",
    name: "home",
    meta: {
      name: "home"
    },
    component: () => import("@/views/Home.vue")
  },
  {
    path: "*",
    name: "notFound",
    meta: {
      name: "notFound"
    },
    component: () => import("@/views/NotFound.vue")
  }
];
export default staticRouterMaps;
