import Vue from "vue";
import Vuex from "vuex";
import auth from "@/modules/auth/store";
import pedidos from "@/modules/pedidos/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    pedidos,
  },
});
