<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="item in items" :key="item.id">
      <v-img
        lazy-src="https://image.freepik.com/vetores-gratis/pagina-de-erro-404-nao-encontrada_114341-25.jpg"
        :src="item.imagem"
      >
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    produto: {
      type: Object,
    },
  },
  computed: {
    items() {
      if (this.produto.relationships.imagens.length > 0)
        return this.produto.relationships.imagens;
      return [
        {
          imagem: this.produto.imagem,
        },
      ];
    },
  },
  methods: {},
};
</script>

<style></style>
