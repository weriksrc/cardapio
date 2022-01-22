<template>
  <v-snackbar :time="time" :color="type" top right v-model="active">
    <v-icon class="mr-1">mdi- {{ icon() }}</v-icon> {{ text }}
  </v-snackbar>
</template>
<script>
import { events } from "./events";
export default {
  data() {
    return {
      active: false,
      type: "",
      time: 5000,
      text: ""
    };
  },

  mounted() {
    events.$on("add", this.show);
  },

  methods: {
    show({ type, text, time = 5000 }) {
      this.type = type;
      this.text = text;
      this.time = time;
      this.active = true;
    },

    icon() {
      if (this.type == "success") {
        return "mdi-checkbox-marked-circle";
      }
      if (this.type == "info") {
        return "mdi-information-outline";
      }
      if (this.type == "warning") {
        return "mdi-alert-outline";
      }
      if (this.type == "error") {
        return "mdi-alert-remove";
      }
      return "mdi-message-alert-outline";
    }
  }
};
</script>
<style scoped>
.teste {
  position: absolute;
}
</style>
