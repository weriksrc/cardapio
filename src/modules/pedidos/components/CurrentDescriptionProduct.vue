<template>
  <v-container>
    <v-row class="justify-space-between">
      <div class="pa-2">
        <strong>{{ produto.nome }}</strong>
      </div>
      <div class="pa-2">R$ {{ totalPedido }}</div>
    </v-row>
    <v-row>
      <div class="pa-2">{{ produto.descricao || "Sem descrição" }}</div>
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
      valor_venda: {
        type: String,
        default: "",
      },
      type: Object,
    },
  },
  computed: {
    ...mapGetters({
      getTotalAdicionais: "pedidos/getTotalAdicionais",
    }),

    totalPedido() {
      return (
        parseFloat(this.getTotalAdicionais) +
        parseFloat(this.produto.valor_venda)
      );
    },
  },
  watch: {
    produto() {
      console.log("descripiton", this.produto);
    },
  },
};
</script>

<style></style>
