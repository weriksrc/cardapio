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
      return produtos.filter((element) => {
        element.adicionais = element.adicionais.filter((element) => {
          if (element.check) return element;
        });

        delete element.imagens;
        if (!element.adicionais.length) delete element.adicionais;
        return element;
      });
    },
  },
};
</script>
