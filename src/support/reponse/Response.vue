<template>
  <v-snackbar v-model="alert" :timeout="10000">
    {{ message }}

    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="alert = false">
        Fexar
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { events } from "./events";
export default {
  name: "Response",

  data() {
    return {
      alert: false,
      message: "sem mensagem",
    };
  },
  mounted() {
    events.$on("show", this.show);
  },
  methods: {
    show(message) {
      this.alert = true;
      this.message = message;
    },
  },
};
</script>
