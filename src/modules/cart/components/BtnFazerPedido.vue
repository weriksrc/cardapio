<template>
  <div class="pa-2">
    <v-btn @click="storePedido()" block color="success">Fazer pedido</v-btn>
  </div>
</template>
<script>
import Pedidos from "../../../services/Pedidos/Pedidos";
import { mapActions } from "vuex";
export default {
  props: {
    produtos: {
      type: Array,
    },
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
        this.$response("Error o fazer pedido");
        console.log("pedidos", error.response);
      } finally {
        this.$loading(false);
      }
    },

    clearProdutoStore(produtos) {
      return produtos.map((produto) => {
        let adicionais = this.clearProdutosAdicionais(
          produto.produtos_adicionais
        );

        return {
          produto_id: produto.id,
          quantidade: produto.quantidade,
          observacao: produto.observacao,
          produtos_adicionais: adicionais,
        };
      });
    },

    clearProdutosAdicionais(produtosAdicionais) {
      let adicionais = [];
      produtosAdicionais.map((produtoAdicional) => {
        if (produtoAdicional.check) {
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
