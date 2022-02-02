<template>
  <div>
    <v-btn v-show="value && min < value" @click="model--" class="mr-2" icon>
      <v-icon size="35">mdi-minus</v-icon>
    </v-btn>
    <strong v-show="value">
      {{ model }}
    </strong>

    <v-btn v-show="max > value || max == -1" @click="model++" class="ml-2" icon>
      <v-icon color="error" size="35">mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import MinusPlus from "@/components/MinusPlus.vue";
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
