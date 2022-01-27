<template>
  <v-list two-line class="mb-12">
    <template v-for="item in produtos">
      <v-list-item class="mt-5" :key="item.id" :to="`produtos/${item.id}`">
        <v-card rounded="2">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="120"
            max-width="150"
            :src="item.imagem"
          >
          </v-img>
        </v-card>
        <v-list-item-content>
          <v-list-item-title
            class="ml-5"
            v-text="item.nome"
          ></v-list-item-title>

          <v-list-item-subtitle
            class="text--primary ml-5"
            v-text="item.valor_venda"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  props: {
    produtos: {
      type: Array,
    },
  },
};
</script>

<style></style>
