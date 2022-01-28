import Response from "./Response.vue";
import { events } from "./events";

const response = {
  install(Vue) {
    if (this.installed) return;

    this.installed = true;

    Vue.component("response", Response);

    const response = (messagen = "alert") => {
      console.log("indes ", messagen);
      events.$emit("show", messagen);
    };

    Vue.prototype["$response"] = response;
    Vue["response"] = response;
  },
};

export default response;
