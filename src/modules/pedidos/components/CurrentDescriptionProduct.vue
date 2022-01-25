<template>
  <v-container>
    <v-row class="justify-space-between">
      <div class="pa-2">
        <strong>{{ produto.nome }}</strong>
      </div>
      <div class="pa-2">R$ {{ getTotalCurrentProduto }}</div>
    </v-row>
    <v-row>
      <div class="pa-2">
        <v-text-field
          type="number"
          v-model="quantidade"
          name="quantidade"
          label="Quantidade"
        ></v-text-field>
      </div>
    </v-row>
    <v-row>
      <div class="pa-2">{{ produto.descricao || "Sem descrição" }}</div>
    </v-row>
    <v-divider class="mt-2"></v-divider>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
      getQuantidadeCurrentProduto: "pedidos/getQuantidadeCurrentProduto",
      getTotalCurrentProduto: "pedidos/getTotalCurrentProduto",
    }),
    quantidade: {
      // getter
      get() {
        return this.getQuantidadeCurrentProduto;
      },
      // setter
      set(newValue) {
        this.actionQuantidadeCurrentProduto(newValue);
      },
    },
  },

  methods: {
    ...mapActions({
      actionQuantidadeProdutoSelect: "pedidos/actionQuantidadeProdutoSelect",
      actionQuantidadeCurrentProduto: "pedidos/actionQuantidadeCurrentProduto",
    }),
  },
};
</script>

<style></style>
