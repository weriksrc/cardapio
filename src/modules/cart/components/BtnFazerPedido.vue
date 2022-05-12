<template>
  <v-btn block @click="storePedido()" color="error"
    >Fazer pedido, total: R$
    <strong class="ml-2"> {{ total }} </strong>
  </v-btn>
</template>

<script>
import Pedidos from "../../../services/Http/Pedidos/Pedidos";
import { mapActions } from "vuex";
export default {
  props: {
    produtos: {
      type: Array,
    },
    total: Number,
  },

  methods: {
    ...mapActions({
      actionClearProdutosCart: "cart/actionClearProdutosCart",
    }),
    async storePedido() {
      try {
        this.$loading(true);

        let produtos = this.clearProdutoStore(this.produtos);

        await Pedidos().store({ produtos });
        this.actionClearProdutosCart();
        this.$router.push("/cardapio/categorias");
        this.$response("Pedido criado com sucesso :)");
      } catch (error) {
        this.$response("Error o fazer pedido", error);
        console.log("pedidos", error.response);
      } finally {
        this.$loading(false);
      }
    },

    clearProdutoStore(produtos) {
      return produtos.map((produto) => {
        let produtos_adicionais = this.clearProdutosAdicionais(
          produto.produtos_adicionais
        );

        let clearProduto = {
          produto_id: produto.id,
          quantidade: produto.quantidade,
          observacao: produto.observacao,
        };

        if (!produtos_adicionais.length) return clearProduto;

        return Object.assign(clearProduto, { produtos_adicionais });
      });
    },

    clearProdutosAdicionais(produtosAdicionais) {
      let adicionais = [];
      produtosAdicionais.map((produtoAdicional) => {
        if (produtoAdicional.quantidade) {
          adicionais.push({
            produto_adicional_id: produtoAdicional.id,
            quantidade: produtoAdicional.quantidade,
            observacao: produtoAdicional.observacao,
          });
        }
      });

      return adicionais;
    },
  },
};
</script>
<style scoped></style>
