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
        console.log("pedidos", this.produtos);
        let produtos = this.clearProdutoStore(this.produtos);
        console.log("produtos", produtos);
        let response = await Pedidos().store({ produtos });
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
        return {
          produto_id: produto.id,
          quantidade: produto.quantidade,
          observacao: produto.observacao,
          produtos_adicionais: this.clearProdutosAdicionais(
            produto.produtos_adicionais
          ),
        };
      });
    },

    clearProdutosAdicionais(produtosAdicionais) {
      let adicionais = [];
      produtosAdicionais.map((produtoAdicional) => {
        if (produtoAdicional.check) {
          adicionais.push({
            produto_adicional_id: produtoAdicional.adicional.id,
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
