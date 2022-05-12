<template>
  <div class="mb-12">
    <v-card dark flat max-width="100%">
      <v-btn absolute bottom color="error" right fab to="/cardapio/categorias">
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <v-img
        src="https://hamburguerdesucesso.com.br/wp-content/uploads/2021/05/lanches-mais-vendidos-no-brasil.jpg"
        gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
      >
        <v-container class="fill-height">
          <v-row align="center">
            <!-- <strong class="text-h1 font-weight-regular mr-6">8</strong> -->
            <v-row justify="center">
              <div class="text-h4 font-weight-light">x-tudo</div>
              <div class="text-uppercase font-weight-light">
                por apenas R$ 100,00
              </div>
            </v-row>
          </v-row>
          <v-row class="align-center" justify="center">
            <v-btn class="font-weight-light" outlined
              >Adicionar ao Carinho</v-btn
            >
          </v-row>
        </v-container>
      </v-img>
    </v-card>
    <v-card-text class="py-0">
      <v-timeline align-top dense>
        <template v-for="(pedido, index) in pedidos">
          <v-timeline-item
            :color="colorStatusPedido(pedido.status_pedido_id)"
            :key="index"
            small
          >
            <template x-small v-slot:icon>
              <!-- <v-icon>mdi-account</v-icon> -->
            </template>
            <v-row class="pt-0">
              <v-col cols="3">
                <strong>n° {{ pedido.id }}</strong>
              </v-col>
              <v-col>
                <strong>{{ pedido.created_at | dateTimeToHours }}</strong>
              </v-col>
              <v-col>
                <strong>{{ calculaValorPedido(pedido) | formatMoeda }}</strong>
              </v-col>
            </v-row>
          </v-timeline-item>
          <template v-for="(produtoPedido, index) in pedido.produtos_pedidos">
            <v-timeline-item hide-dot :key="index">
              <v-row class="pb-4 pt-4">
                <v-badge
                  color="green"
                  :value="produtoPedido.produtos_adicionais_pedidos.length"
                  :content="`+${produtoPedido.produtos_adicionais_pedidos.length}`"
                >
                  <v-chip small class="mr-1"
                    >{{ produtoPedido.quantidade }} x</v-chip
                  >
                  <div class="d-inline">
                    {{ produtoPedido.produto.nome }}
                  </div>
                </v-badge>
              </v-row>
            </v-timeline-item>
          </template>
        </template>
      </v-timeline>
    </v-card-text>
  </div>
</template>
<script>
export default {
  props: {
    pedidos: Array,
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

    calculaValorPedido(pedido) {
      let totalPedido = 0;
      pedido.produtos_pedidos?.map((produtoPedido) => {
        let totalAdicionais = 0;
        produtoPedido.produtos_adicionais?.map((produtoAdicional) => {
          if (produtoAdicional.quantidade) {
            totalAdicionais +=
              parseFloat(produtoAdicional.quantidade) *
              parseFloat(produtoAdicional.adicional.valor_venda);
          }
        });
        let valorVenda = parseFloat(produtoPedido.valor_venda);
        let quantidade = parseFloat(produtoPedido.quantidade);
        let totalProduto = (valorVenda + totalAdicionais) * quantidade;
        totalPedido = totalPedido + totalProduto;
      });
      return totalPedido;
    },
  },
};
</script>
