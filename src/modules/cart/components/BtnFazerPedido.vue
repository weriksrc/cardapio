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
        let response = await Pedidos().store({ produtos: this.produtos });
        this.actionClearProdutosCart();
        this.$router.push("/cardapio/categorias");
        this.$response("error");
      } catch (error) {
        this.$response("Error o fasez pedido");
        console.log("pedidos", error.response);
      } finally {
        this.$loading(false);
      }
    },
  },
};
</script>
