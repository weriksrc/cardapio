<template>
  <div>
    <TimelinePedidosMesa :pedidos="pedidos" />
  </div>
</template>
<script>
import servicePedidos from "../../../services/Http/Pedidos/Pedidos";
import TimelinePedidosMesa from "../components/TimelinePedidosMesa.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TimelinePedidosMesa,
  },
  data() {
    return {
      pedidos: [],
    };
  },
  computed: {
    ...mapGetters({
      getUser: "auth/getUser",
    }),
  },
  methods: {
    async showPedidos() {
      try {
        this.$loading(true);
        let { data } = await servicePedidos().show({
          includes:
            "produtosPedidos.produto,produtosPedidos.produtosAdicionaisPedidos",
        });
        this.pedidos = data.data;
      } catch (error) {
        this.$response("Erro ao lista pedidos");
      } finally {
        this.$loading(false);
      }
    },
  },
  mounted() {
    console.log("pedidos");
    Echo.private("store-pedido.4").listen(".StorePedido", (e) => {
      console.log("DEU CETO", e);
    });
  },
  created() {
    this.showPedidos();
  },
};
</script>
<style scoped></style>
