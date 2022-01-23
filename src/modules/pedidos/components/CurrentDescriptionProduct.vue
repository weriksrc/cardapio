<template>
  <v-container>
    <v-row class="justify-space-between pa-3" color="red">
      <div>{{ produto.nome }}</div>
      <div>R$ {{ produto.valor_venda }}</div>
    </v-row>
  </v-container>
</template>

<script>
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
  watch: {
    produto() {
      console.log("descripiton", this.produto);
    },
  },
};
</script>

<style></style>
