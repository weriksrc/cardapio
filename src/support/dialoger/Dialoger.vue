<template>
  <v-row justify="center">
    <v-dialog v-model="active" persistent max-width="600">
      <v-card class="overflow-hidden">
        <v-card-title
          v-if="type"
          color="#333"
          class="d-flex justify-center mt-5 "
        >
          <v-icon size="160" :color="icons[type].color">{{
            icons[type].icon
          }}</v-icon>
        </v-card-title>

        <v-card-subtitle
          class="d-flex justify-center display-1 black--text mt-3"
        >
          {{ title }}
        </v-card-subtitle>
        <v-card-text class="d-flex justify-center headline text-justify">
          {{ text }}</v-card-text
        >
        <v-card-actions class="d-flex justify-center mb-5">
          <v-btn
            class="mr-10"
            color="blue darken-1"
            width="120"
            dark
            @click.native="agree"
          >
            {{ confirmText }}
          </v-btn>
          <v-btn color="red darken-1" width="120" dark @click.native="cancel">
            {{ rejectText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "Dialog",
  data() {
    return {
      active: false,
      title: "Dialog",
      text: "teste",
      confirmText: "Sim",
      rejectText: "Não",
      type: "",
      resolve: null,
      reject: null,
      action: null,
      icons: {
        warning: {
          color: "warning",
          icon: "mdi-alert-outline"
        },
        info: {
          color: "primary",
          icon: "mdi-information-outline"
        },
        approve: {
          color: "success",
          icon: "mdi-check-outline"
        },
        reprove: {
          color: "error",
          icon: "mdi-cancel"
        }
      }
    };
  },

  methods: {
    show({ type, title, text, confirmText, rejectText }) {
      this.active = true;
      this.type = type;
      this.title = title;
      this.text = text;
      this.confirmText = confirmText;
      this.rejectText = rejectText;
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },

    agree() {
      this.resolve(true);
      this.active = false;
    },
    cancel() {
      this.reject(true);
      this.active = false;
    },

    resetState() {
      this.active = false;
      this.resolve = null;
      this.resolve = null;
      this.title = "";
      this.text = "";
      this.confirmText = "Sim";
      this.rejectText = "Não";
      this.type = "";
    }
  }
};
</script>
