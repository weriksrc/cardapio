<template>
  <div>
    <v-btn
      elevation="1"
      circle
      v-show="value && min < value"
      @click="model--"
      class="mr-2"
      icon
    >
      <v-icon color="error" size="25">mdi-minus</v-icon>
    </v-btn>
    <strong v-show="value">
      {{ model }}
    </strong>

    <v-btn
      elevation="1"
      circle
      v-show="max > value || max == -1"
      @click="model++"
      class="ml-2"
      icon
    >
      <v-icon color="success" size="25">mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: -1,
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style></style>
