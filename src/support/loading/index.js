import Loader from "./Loader.vue";
import { events } from "./events";

const Pageloader = {
  install(Vue) {
    if (this.installed) return;

    this.installed = true;

    Vue.component("loading", Loader);

    const loading = (params) => {
      events.$emit("show", params);
    };

    Vue.prototype["$loading"] = loading;
    Vue["loading"] = loading;
  },
};

export default Pageloader;
