<template>
  <v-list two-line class="mb-12">
    <template v-for="item in produtos">
      <v-list-item class="mt-5" :key="item.id" :to="`produtos/${item.id}`">
        <v-card rounded="2">
          <v-img
            lazy-src="https://image.freepik.com/vetores-gratis/pagina-de-erro-404-nao-encontrada_114341-25.jpg"
            max-height="150"
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
            class="color-font-subtitle ml-5"
            v-text="`A partir de R$ ${item.valor_venda}`"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider :key="item.id" class="ma-4"></v-divider>
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

<style>
.color-font-subtitle {
  color: #00c853 !important;
}
</style>
