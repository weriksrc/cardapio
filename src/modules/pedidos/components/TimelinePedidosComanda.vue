<template>
  <v-timeline align-top dense>
    <template v-for="(comanda, index) in pedidosComanda">
      <v-timeline-item :key="index" small>
        <template x-small v-slot:icon>
          <!-- <v-icon>mdi-account</v-icon> -->
        </template>
        <v-row class="pt-0">
          <v-col cols="6" md="4">
            <strong>
              {{
                index == "null" ? "Sem comanda" : `Comanda n° ${index}`
              }}</strong
            >
          </v-col>
          <v-col>
            <strong> {{ calculaValorComanda(comanda) | formatMoeda }}</strong>
          </v-col>
        </v-row>
      </v-timeline-item>
      <template v-for="(produto, index) in comanda">
        <v-timeline-item hide-dot :key="index">
          <v-row class="pb-4 pt-4">
            <v-badge
              color="green"
              :value="produto.produtos_adicionais_pedidos.length"
              :content="`+${produto.produtos_adicionais_pedidos.length}`"
            >
              <v-chip small class="mr-1">{{ produto.quantidade }} x</v-chip>
              <div class="d-inline">
                {{ produto.produto.nome }}
              </div>
            </v-badge>
          </v-row>
        </v-timeline-item>
      </template>
    </template>
  </v-timeline>
</template>
<script>
export default {
  props: {
    pedidos: {
      type: Array,
      required: true,
    },
  },

  computed: {
    pedidosComanda() {
      let pedidosComanda = {};
      this.pedidos.map((pedido) => {
        pedido.produtos_pedidos.map((produto) => {
          if (!pedidosComanda[produto.comanda_id]) {
            pedidosComanda[produto.comanda_id] = [];
          }
          pedidosComanda[produto.comanda_id].push(produto);
        });
      });
      return pedidosComanda;
    },
  },

  methods: {
    colorStatusPedido(statusId) {
      const statusColor = {
        1: "warning",
        2: "info",
        3: "teal lighten-3",
        4: "success",
        5: "error",
      };
      return statusColor[statusId];
    },

    calculaValorComanda(comanda) {
      console.log(comanda);
      let totalComanda = 0;
      comanda.map((produto) => {
        let totalAdicionais = 0;
        produto.produtos_adicionais_pedidos.map((adicional) => {
          if (adicional.quantidade) {
            totalAdicionais +=
              parseFloat(adicional.quantidade) *
              parseFloat(adicional.valor_venda);
          }
        });

        let valorVenda = parseFloat(produto.valor_venda);
        let quantidade = parseFloat(produto.quantidade);
        let totalProduto = (valorVenda + totalAdicionais) * quantidade;
        totalComanda = totalComanda + totalProduto;
      });
      return totalComanda;
    },
  },
};
</script>
