<template>
  <v-container>
    <div class="mb-8 pa-1" v-if="produto.produtos_adicionais.length > 0">
      <strong>Adicionias</strong>
      <v-list>
        <v-list-item
          v-for="item in produto.produtos_adicionais"
          :key="item.id"
          :value="item.id"
          class="justify-space-around mt-1"
        >
          <!-- <v-list-item-action>
              <v-checkbox v-model="item.check" color="primary"></v-checkbox>
            </v-list-item-action> -->

          <v-list-item-content>
            <v-list-item-title>
              {{ item.adicional.nome }}
            </v-list-item-title>

            <v-list-item-subtitle class="text--primary mt-2">
              {{ item.adicional.valor_venda }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <MinusPlus :max="3" v-model="item.quantidade" />
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script>
import MinusPlus from "@/components/MinusPlus.vue";
export default {
  props: {
    produto: {
      type: Object,
    },
  },
  components: {
    MinusPlus,
  },
};
</script>

<style scopde>
.whidt-qt {
  width: 30px;
}
</style>
