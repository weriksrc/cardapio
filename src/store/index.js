import Vue from "vue";
import Vuex from "vuex";
import auth from "@/modules/auth/store";
import cardapio from "@/modules/cardapio/store";
import cart from "@/modules/cart/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    cart,
    cardapio,
  },
});
