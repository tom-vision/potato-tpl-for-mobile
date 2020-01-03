import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import Api from "./api/install.js";
import myIcon from "@/components/Icon.vue";
import "lib-flexible";
import {
  Toast,
  Dialog,
  Field,
  Cell,
  CellGroup,
  Image,
  Lazyload,
  Button,
  Icon
} from "vant";

Vue.use(Api);
Vue.use(Dialog);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(Image);
Vue.use(Lazyload);
Vue.use(Button);
Vue.use(Icon);

Vue.component("icon", myIcon);

Vue.prototype.$dialog = Dialog;
Vue.prototype.$toast = Toast;
Vue.config.devtools = process.env.NODE_ENV === "development";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
