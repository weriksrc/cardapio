<template>
  <div class="pa-2">
    <v-btn @click="storePedido()" block color="success">Fazer pedido</v-btn>
  </div>
</template>
<script>
import Pedidos from "../../../services/Pedidos/Pedidos";

export default {
  props: {
    produtos: {
      type: Object,
    },
  },
  methods: {
    async storePedido() {
      try {
        console.log("pedidos");
        this.$loading(true);
        let response = await Pedidos().store({ produtos: this.produtos });
      } catch (error) {
        console.log("pedidos", error);
      } finally {
        this.$loading(false);
      }
    },
  },
};
</script>
