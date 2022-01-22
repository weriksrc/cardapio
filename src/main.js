import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import loader from "./support/loading";

Vue.config.productionTip = false;
Vue.use(loader);
new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
