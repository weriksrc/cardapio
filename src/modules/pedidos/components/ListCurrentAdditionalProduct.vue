<template>
  <div>
    <template v-if="adicionais.length > 0">
      Adicionais
      <v-list two-line>
        <template v-for="item in adicionais">
          <v-list-item :key="item.id">
            <v-list-item-content>
              <v-list-item-title v-text="item.nome"></v-list-item-title>
              <v-list-item-subtitle
                class="text--primary"
                v-text="item.valor_venda"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </template>
    <template> nao possui adicionais </template>
  </div>
</template>

<script>
export default {
  props: {
    adicionais: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
