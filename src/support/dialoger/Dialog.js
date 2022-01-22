import VDialog from "./Dialoger.vue";
import { events } from "./events";

const Dialog = {
  install(Vue) {
    if (this.installed) return;

    this.installed = true;

    Vue.component("dialoger", VDialog);

    const dialog = params => {
      if (typeof params === "string") {
        params = { title: "", text: params };
      }

      if (typeof params === "object") {
        events.$emit("show", params);
      }
    };

    dialog.close = id => {
      events.$emit("close", id);
    };

    Vue.prototype["$dialog"] = dialog;
    Vue["dialog"] = dialog;
  }
};

export default Dialog;
