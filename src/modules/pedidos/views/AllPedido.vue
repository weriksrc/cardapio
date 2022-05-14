<template>
  <div>
    <ProdutosEmDestaque />
    <v-icon>mdi-account</v-icon>
    <component :pedidos="pedidos" :is="timeline" />
  </div>
</template>
<script>
import servicePedidos from "../../../services/Http/Pedidos/Pedidos";
import TimelinePedidosMesa from "../components/TimelinePedidosMesa.vue";
import TimelinePedidosComanda from "../components/TimelinePedidosComanda.vue";
import ProdutosEmDestaque from "../components/ProdutosEmDestaque.vue";
import { mapGetters } from "vuex";
export default {
  name: "AllPedido",
  components: {
    TimelinePedidosMesa,
    TimelinePedidosComanda,
    ProdutosEmDestaque,
  },
  data() {
    return {
      pedidos: [],
      timeline: "TimelinePedidosComanda",
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
