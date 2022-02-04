<template>
  <v-card class="mx-auto" max-width="500">
    <v-list>
      <v-list-group
        v-for="pedido in pedidos"
        :key="pedido.id"
        v-model="pedido.active"
        :prepend-icon="pedido.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="`nº ${pedido.id}`"></v-list-item-title>
            <v-list-tile-sub-title v-show="!pedido.active"
              >{{ getProdutosPedido(pedido) }}
            </v-list-tile-sub-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-chip :color="getStatusPedido(pedido).color" small>
              {{ getStatusPedido(pedido).text }}
            </v-chip>
          </v-list-item-action>
        </template>

        <v-list-item
          v-for="(produtoPedido, index) in pedido.produtos_pedidos"
          :key="index"
        >
          <v-list-item-avatar>
            <v-icon class="grey lighten-1" dark> mdi-card-text </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              v-text="
                `${produtoPedido.produto.nome} ${isAdicionais(produtoPedido)}`
              "
            ></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            R$ {{ produtoPedido.produto.valor_venda }}
          </v-list-item-action>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  props: {
    pedidos: {
      type: Array,
    },
  },

  data() {
    return {
      selected: [],
    };
  },

  methods: {
    getProdutosPedido(item) {
      let produtos = "";

      item?.produtos_pedidos.map((element) => {
        produtos += "," + element.produto.nome;
      });
      return produtos.substring(1);
    },

    isAdicionais(produtoPedido) {
      return produtoPedido.produtos_adicionais_pedidos.length
        ? "+ Adicionais"
        : "";
    },
    getStatusPedido(item) {
      let status = {
        1: {
          color: "warning",
          text: "Aguardando aprovação",
        },
        2: {
          color: "accent",
          text: "Pedido aprovado",
        },
        3: {
          color: "primary",
          text: "Saiu para Entrega",
        },
        4: {
          color: "success",
          text: "Entrege",
        },
        5: {
          color: "error",
          text: "Cancelado",
        },
      };

      return status[item.status_pedido_id];
    },
  },
};
</script>

<style></style>
