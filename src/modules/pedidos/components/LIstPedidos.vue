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
                  <v-list-item-action-text
                    v-text="item.id"
                  ></v-list-item-action-text>

                  <v-icon v-if="!active" color="grey lighten-1">
                    mdi-star-outline
                  </v-icon>
                  <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
                </v-list-item-action>
              </template>
            </v-list-item>
            <v-divider :key="index"></v-divider>
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

      item?.relationships?.produtos.map((element) => {
        produtos += "," + element.nome;
      });
      return produtos;
    },
  },
};
</script>

<style></style>
