<template>
  <div>
    <template>
      <v-list two-line>
        <v-list-item-group active-class="pink--text">
          <template v-for="(item, index) in pedidos">
            <v-list-item :key="item.id">
              <template v-slot:default="{ active }">
                <v-list-item-content class="mt-2">
                  <v-list-item-title
                    v-text="`n° - ${item.id}`"
                  ></v-list-item-title>

                  <v-list-item-subtitle
                    class="text--primary"
                    v-text="getProdutosPedido(item)"
                  >
                  </v-list-item-subtitle>

                  <v-list-item-subtitle
                    v-text="`criado em ${item.created_at}`"
                  ></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-chip
                    :color="getStatusPedido(item).color"
                    class="ma-2"
                    small
                  >
                    {{ getStatusPedido(item).text }}
                  </v-chip>

                  <v-icon v-if="!active" color="grey lighten-1">
                    mdi-star-outline
                  </v-icon>
                  <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
                </v-list-item-action>
              </template>
            </v-list-item>
            <v-divider :key="index * 15"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </template>
  </div>
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
