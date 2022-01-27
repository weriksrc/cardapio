<template>
  <v-container>
    <v-row class="justify-space-between">
      <div class="pa-2">
        <strong>{{ produto.nome }}</strong>
      </div>
      <div class="pa-2">R$ {{ getTotalCurrentProduto || "Calculando..." }}</div>
    </v-row>
    <v-row>
      <div class="pa-2">
        <v-text-field
          type="number"
          v-model="produto.quantidade"
          name="quantidade"
          label="Quantidade"
        ></v-text-field>
      </div>
    </v-row>
    <v-row>
      <div class="pa-2">{{ produto.descricao || "Sem descrição" }}</div>
    </v-row>
    <v-divider class="mt-2"></v-divider>''
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
