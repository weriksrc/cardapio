import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import loader from "./support/loading";
import response from "./support/reponse";

import Echo from "laravel-echo";
import http from "@/http";

import dateTimeToHours from "./filters/dateTimeToHours";
import formatMoeda from "./filters/formatMoeda";
window.Pusher = require("pusher-js");

window.Echo = new Echo({
  broadcaster: "pusher",
  key: "local",
  wsHost: process.env.VUE_APP_BASE_URL,
  wsPort: 6001,
  disableStats: true,
  //authEndpoint: "http://localhost:8000/broadcasting/auth",
  authorizer: (channel, options) => {
    return {
      authorize: (socketId, callback) => {
        http
          .post("/broadcasting/auth", {
            socket_id: socketId,
            channel_name: channel.name,
          })
          .then((response) => {
            callback(false, response.data);
          })
          .catch((error) => {
            callback(true, error);
          });
      },
    };
  },
});

Vue.config.productionTip = false;
Vue.use(loader);
Vue.use(response);
Vue.use(dateTimeToHours);
Vue.use(formatMoeda);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
