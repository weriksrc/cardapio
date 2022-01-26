<template>
  <v-list two-line class="mb-12">
    <template v-for="(item, key) in produtos">
      <v-list-item class="mt-5" :key="key">
        <v-card rounded="2">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="100"
            max-width="100"
            :src="item.imagem"
          >
          </v-img>
        </v-card>
        <v-list-item-content>
          <v-list-item-title
            class="ml-5"
            v-text="item.nome"
          ></v-list-item-title>

          <v-list-item-subtitle
            class="text--primary ml-5"
            v-text="item.valor_venda"
          ></v-list-item-subtitle>
        </v-list-item-content>
        <v-btn @click="selectProdutoEdite(key)" color="warning">editar</v-btn>
        <v-btn
          class="ml-2"
          @click="actionSelectProdutoCarForDestroy(key)"
          color="error"
          >excluir</v-btn
        >
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    produtos: {
      type: Array,
    },
  },

  methods: {
    ...mapActions({
      actionSelectProdutoCarForEdition:
        "pedidos/actionSelectProdutoCarForEdition",
      actionSelectProdutoCarForDestroy:
        "pedidos/actionSelectProdutoCarForDestroy",
    }),
    selectProdutoEdite(key) {
      this.actionSelectProdutoCarForEdition(key);
      this.$router.push("/pedidos/carrinho/aditar-pedido");
    },
  },
};
</script>

<style></style>
