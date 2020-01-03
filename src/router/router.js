import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import asyncRouterMaps from "./asyncRouterMaps";
import staticRouterMaps from "./staticRouterMaps";

Vue.use(Router);

// 关闭圆圈进度
NProgress.configure({ showSpinner: false });

const router = new Router({
  // mode: "history",
  routes: staticRouterMaps
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
  NProgress.done();
});

router.afterEach(() => {
  console.log(router.options);
});

export default router;
