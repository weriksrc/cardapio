<template>
  <v-card max-height="480" height="480" class="scroll">
    <v-list two-line class="mb-12 pa-3">
      <template v-for="(item, key) in produtos">
        <v-list-item :key="key" elevation="10" class="mt-5">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="80"
            max-width="80"
            :src="item.imagem"
          >
          </v-img>
          <v-list-item-content>
            <v-list-item-title
              class="ml-2"
              v-text="formatName(item)"
            ></v-list-item-title>

            <v-list-item-subtitle class="text--primary ml-2">
              <p>R$ {{ calculaTotalProdutoComAdiconais(item) }}</p>
              <p>
                <v-btn
                  small
                  icon
                  @click="selectProdutoEdite(key, item)"
                  color="warning"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </p>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <MinusPlus v-if="item.quantidade" v-model="item.quantidade" />
            <RemoveItem
              v-else
              v-model="item.quantidade"
              @removeItem="removeItem(key)"
            />
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import MinusPlus from "@/components/MinusPlus";
import RemoveItem from "./RemoveItem.vue";
export default {
  components: {
    MinusPlus,
    RemoveItem,
  },
  props: {
    produtos: {
      type: Array,
    },
  },

  methods: {
    ...mapActions({
      actionProdutoSelect: "cardapio/actionProdutoSelect",
      actionDestroyProduto: "cart/actionDestroyProduto",
    }),
    async selectProdutoEdite(key, item) {
      Object.assign(item, { keyCart: key });
      await this.actionProdutoSelect(item);
      this.$router.push("/carrinho/editar-produto");
    },
    async produtoDestroy(key) {
      this.actionDestroyProduto(key);
    },

    formatName(item) {
      if (item.produtos_adicionais.length) return `${item.nome} + adicionais`;
      return item.nome;
    },

    removeItem(key) {
      this.produtos.splice(key, 1);
    },

    calculaTotalProdutoComAdiconais(produto) {
      let totalAdicionais = 0;

      produto.produtos_adicionais.map((produtoAdicional) => {
        if (produtoAdicional.quantidade) {
          totalAdicionais +=
            parseFloat(produtoAdicional.quantidade) *
            parseFloat(produtoAdicional.adicional.valor_venda);
        }
      });

      let valorVenda = parseFloat(produto.valor_venda);
      let quantidade = parseFloat(produto.quantidade);
      let totalProduto = (valorVenda + totalAdicionais) * quantidade;

      return totalProduto;
    },
  },
};
</script>

<style>
.scroll {
  overflow-y: scroll;
}
</style>
