<template>
  <v-app-bar app color="error" class="pa-1">
    <div class="d-flex align-center white--text">
      Lucas <strong class="ml-3">Bars</strong>
    </div>

    <v-spacer></v-spacer>
    <v-btn icon @click="$vuetify.theme.dark = dark = !dark">
      <v-icon>mdi-brightness-4</v-icon>
    </v-btn>

    <v-badge
      :value="!!getProdutos.length"
      dark
      class="mr-1"
      :content="getProdutos.length"
      color="success"
    >
      <v-icon size="24" @click="toCarrinho()">mdi-cart-variant</v-icon>
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
      getProdutos: "cart/getProdutos",
    }),
  },
  methods: {
    toCarrinho() {
      this.$router.push("/carrinho/produtos");
    },
  },
};
</script>
