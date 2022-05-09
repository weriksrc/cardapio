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

Vue.filter("dateTime", function (value) {
  if (!value) return "";
  let date = new Date(value);
  return `${
    date.getDay() + 1
  }/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
});
new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
