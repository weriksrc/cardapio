<template>
  <v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover>
    <!-- <template v-slot:prev="{ on, attrs }">
      <v-btn color="success" v-bind="attrs" v-on="on">Previous slide</v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn color="info" v-bind="attrs" v-on="on">Next slide</v-btn>
    </template> -->
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
//import produtos from '../services/Estoque/Produtos'
// import categorias from '../services/Estoque/Categorias'
export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
    }
  },

  created() {
    //
    // produtos().show({ teste: 'cabeca de cavalo' }) lista por query string
    // trocar po destroy, update ou store
    // produtos(1).show() lista por id
    // categorias(1).produtos(1).show()
    // categorias(1).produtos({teste: 'cabeca de cavalo'})
  }
}
</script>

<style>
.v-carousel__controls {
  height: 160px !important;
}
</style>