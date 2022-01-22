import Vue from "vue";
import Vuex from "vuex";
import auth from "@/modules/auth/store";

Vue.use(Vuex);
console.log("state", auth);
export default new Vuex.Store({
  modules: {
    auth,
  },
});
