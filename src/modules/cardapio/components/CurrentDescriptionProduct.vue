<template>
  <v-container>
    <v-row class="justify-space-between">
      <div class="pa-2">
        <strong>{{ produto.nome }}</strong>
      </div>
    </v-row>

    <v-row>
      <div class="pa-2">{{ produto.descricao }}</div>
    </v-row>

    <v-row class="justify-space-between pa-2">
      <v-col cols="6" sm="2" md="6">
        <v-text-field
          type="number"
          v-model="produto.quantidade"
          name="quantidade"
          label="Quantidade"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <div>R$ {{ getTotalCurrentProduto || "..." }}</div>
      </v-col>
    </v-row>
    <v-divider class="mt-2"></v-divider>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    produto: {
      nome: {
        type: String,
        default: "",
      },
      quantidade: {
        type: String,
      },
      type: Object,
    },
  },
  computed: {
    ...mapGetters({
      getTotalCurrentProduto: "cardapio/getTotalCurrentProduto",
    }),
  },
};
</script>

<style></style>
