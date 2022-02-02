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

    <v-row class="justify-space-around">
      <v-col cols="6" class="center">
        <div class="text-center">R$ {{ getTotalCurrentProduto || "..." }}</div>
      </v-col>
      <v-col cols="6" sm="2" md="6" class="center">
        <MinusPlus class="text-center" :min="1" v-model="produto.quantidade" />
      </v-col>
    </v-row>

    <v-divider class="mt-2"></v-divider>
  </v-container>
</template>

<script>
import MinusPlus from "@/components/MinusPlus.vue";
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
  components: {
    MinusPlus,
  },
  computed: {
    ...mapGetters({
      getTotalCurrentProduto: "cardapio/getTotalCurrentProduto",
    }),
  },
};
</script>

<style></style>
