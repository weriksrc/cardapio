<template>
  <v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(item, key) in items" :key="key">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<style>
.v-carousel__controls {
  height: 160px !important;
}
</style>
