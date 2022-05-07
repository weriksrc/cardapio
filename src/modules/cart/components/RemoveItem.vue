<template>
  <div>
    <v-btn icon>
      <v-icon large color="error" @click="$emit('removeItem')"
        >mdi-trash-can-outline</v-icon
      >
    </v-btn>
    <v-btn icon>
      <v-icon class="ml-4" large color="primarys" @click="model = 1"
        >mdi-close</v-icon
      >
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
