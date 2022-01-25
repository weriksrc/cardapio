<template>
  <v-app-bar app color="primary" class="pa-1">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
    </div>

    <v-spacer></v-spacer>
    <v-btn icon @click="$vuetify.theme.dark = dark = !dark">
      <v-icon>mdi-brightness-4</v-icon>
    </v-btn>

    <v-badge
      :value="!!getCart.produtos.length"
      dark
      class="mr-1"
      :content="getCart.produtos.length"
      color="success"
    >
      <v-icon size="24" @click="toCarrinho">mdi-cart-variant</v-icon>
    </v-badge>
  </v-app-bar>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dark: false,
    };
  },
  computed: {
    ...mapGetters({
      getCart: "pedidos/getCart",
    }),
  },
  methods: {
    toCarrinho() {
      this.$router.push("/pedidos/carrinho");
    },
  },
};
</script>
