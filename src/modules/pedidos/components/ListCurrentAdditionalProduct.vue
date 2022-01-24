<template>
  <v-container>
    <div class="mb-8 pa-1" v-if="adicionais.length > 0">
      <v-list subheader two-line flat>
        <strong>Adicionais</strong>
        {{ total }}
        <v-list-item-group multiple>
          <v-list-item
            v-for="item in items"
            :key="item.id"
            :value="item.id"
            class="justify-space-around"
          >
            <v-list-item-action>
              <v-checkbox
                @click="addProdutoAdicional()"
                v-model="item.check"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                {{ item.nome }}
                {{ item.valor_venda }}
              </v-list-item-title>

              <v-list-item-subtitle class="text--primary">
                {{
                  item.descricao || "Sem descrição para esta produtos"
                }}</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-text-field
                class="whidt-qt"
                @click="addProdutoAdicional()"
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
import { mapActions } from "vuex";
export default {
  props: {
    adicionais: {
      type: Array,
    },
    default: [],
  },
  data() {
    return {
      settings: [],
      total: 0,
    };
  },

  computed: {
    items() {
      return this.adicionais.map((element) =>
        Object.assign(element, { quantidade: 1, check: false })
      );
    },
  },

  methods: {
    ...mapActions({
      actionTotalAdicionais: "pedidos/actionTotalAdicionais",
      actionAdicionaisCheck: "pedidos/actionAdicionaisCheck",
    }),
    addProdutoAdicional() {
      let total = 0;
      let adicionais = [];
      this.items.map((element) => {
        if (element.check) {
          total +=
            parseFloat(element.valor_venda) * parseFloat(element.quantidade);
          adicionais.push(element);
        }
      });

      this.total = total;

      this.actionTotalAdicionais(total);
      this.actionAdicionaisCheck(adicionais);
    },
  },
};
</script>

<style scopde>
.whidt-qt {
  width: 30px;
}
</style>
