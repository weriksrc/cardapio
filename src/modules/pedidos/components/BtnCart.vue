<template>
  <div>
    <v-btn
      class="absolute"
      @click="dialog = !dialog"
      fab
      dark
      large
      color="error"
    >
      <v-icon dark> mdi-cart-arrow-down </v-icon>
    </v-btn>

    <v-dialog class="v-dialog-margin" max-width="600" v-model="dialog">
      <v-card class="justify-center">
        <v-card-title class="lighten-2">
          <v-btn @click="dialog = false" icon>
            <v-icon>mdi-arrow-left-bold-outline</v-icon>
          </v-btn>
          <div class="ml-2">
            {{ getCurrentProduto.nome }}, total R$ {{ getTotalCurrentProduto }}
          </div>
        </v-card-title>
        <v-card-text class="text-h6 lighten-2">
          Adicione alguma observação ao pedido como: A carne dever ser mal
          passada, tirar cebola ect... Isso é opcional ;)
        </v-card-text>
        <div class="pa-5">
          <v-textarea
            v-model="observacao"
            name="observacao"
            label="Observação"
          ></v-textarea>
        </div>
        <v-card-text class="text-h6 lighten-2">
          Voce pode fazer seu pedido direto ou adicionar ao carinho para pedir
          varios produtos de uma vez
        </v-card-text>
        <v-card-actions class="justify-space-between">
          <v-btn
            class="justify-center"
            color="success"
            text
            @click="dialog = false"
            >Pedir
          </v-btn>
          <v-btn
            color="success"
            text
            @click="
              actionAddCurrentProdutoInCart();
              dialog = false;
            "
            >Adicionar ao carinho
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    ...mapGetters({
      getCurrentProduto: "pedidos/getCurrentProduto",
      getTotalCurrentProduto: "pedidos/getTotalCurrentProduto",
      getObservacaoCurrentProduto: "pedidos/getObservacaoCurrentProduto",
    }),

    observacao: {
      get() {
        return this.getObservacaoCurrentProduto;
      },
      set(newValue) {
        this.actionObervacaoCurrentProduto(newValue);
      },
    },
  },

  methods: {
    ...mapActions({
      actionObervacaoCurrentProduto: "pedidos/actionObervacaoCurrentProduto",
      actionAddCurrentProdutoInCart: "pedidos/actionAddCurrentProdutoInCart",
    }),
  },
};
</script>

<style scoped>
.absolute {
  position: fixed;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
}
.center {
  justify-content: center;
}
</style>
