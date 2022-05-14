<template>
  <v-card dark flat max-width="100%">
    <v-btn absolute bottom color="error" right fab to="/cardapio/categorias">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-img
      src="https://hamburguerdesucesso.com.br/wp-content/uploads/2021/05/lanches-mais-vendidos-no-brasil.jpg"
      gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
    >
      <v-container class="fill-height">
        <v-row align="center">
          <!-- <strong class="text-h1 font-weight-regular mr-6">8</strong> -->
          <v-row justify="center">
            <div class="text-h4 font-weight-light">x-tudo</div>
            <div class="text-uppercase font-weight-light">
              por apenas R$ 100,00
            </div>
          </v-row>
        </v-row>
        <v-row class="align-center" justify="center">
          <v-btn class="font-weight-light" outlined>Adicionar ao Carinho</v-btn>
        </v-row>
      </v-container>
    </v-img>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
