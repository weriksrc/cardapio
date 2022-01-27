<template>
  <v-container>
    <div class="mb-8 pa-1" v-if="produto.relationships.adicionais.length > 0">
      <v-list subheader two-line flat>
        <strong>Adicionias</strong>
        <v-list-item-group multiple>
          <v-list-item
            v-for="item in produto.relationships.adicionais"
            :key="item.id"
            :value="item.id"
            class="justify-space-around"
          >
            <v-list-item-action>
              <v-checkbox v-model="item.check" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                {{ item.nome }}
                {{ item.valor_venda }}
              </v-list-item-title>

              <v-list-item-subtitle class="text--primary">
                {{
                  item.descricao || "Sem descrição para esta produto"
                }}</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-text-field
                class="whidt-qt"
                value="1"
                name="quantidade"
                label="QT"
                id="quantidade"
                type="number"
                v-model="item.quantidade"
              ></v-text-field>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    produto: {
      type: Object,
    },
  },
};
</script>

<style scopde>
.whidt-qt {
  width: 30px;
}
</style>
