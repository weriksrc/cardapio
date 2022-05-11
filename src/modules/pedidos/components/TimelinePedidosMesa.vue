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
        </v-container>
      </v-img>
    </v-card>
    <v-card-text class="py-0">
      <v-timeline align-top dense>
        <template v-for="(pedido, index) in pedidos">
          <v-timeline-item color="teal lighten-3" small :key="index">
            <v-row class="pt-1">
              <v-col align-self="start" cols="3">
                <strong>n° {{ pedido.id }}</strong>
              </v-col>
              <v-col>
                <strong>{{ pedido.created_at | dateTime }}</strong>
              </v-col>
            </v-row>
          </v-timeline-item>
          <template v-for="(produtoPedido, index) in pedido.produtos_pedidos">
            <v-timeline-item color="pink" small hide-dot :key="index">
              <v-row class="pb-4 pt-4">
                <v-badge
                  color="green"
                  :value="produtoPedido.produtos_adicionais_pedidos.length"
                  :content="`+${produtoPedido.produtos_adicionais_pedidos.length}`"
                >
                  <v-chip x-small class="mr-1"
                    >{{ produtoPedido.quantidade }} x</v-chip
                  >
                  <strong>{{ produtoPedido.produto.nome }}</strong>
                </v-badge>
                <!-- <v-chip x-small class="ml-3">comanda 10</v-chip> -->
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
};
</script>
