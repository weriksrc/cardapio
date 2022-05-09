<template>
  <div class="navigation-bar mt-5">
    <template>
      <v-bottom-navigation
        absolute
        horiozntal
        scroll-target="#hide-on-scroll-example"
      >
        <v-btn color="error accent-5" text>
          <span>Granção</span>

          <v-icon>mdi-bullhorn-outline</v-icon>
        </v-btn>

        <v-btn color="error accent-5" text>
          <span>Comanda</span>

          <v-icon>mdi-smart-card-outline</v-icon>
        </v-btn>

        <v-btn color="error accent-5" to="/pedidos/listar" text>
          <span>Pedidos</span>

          <v-icon>mdi-clipboard-list-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </template>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navigation-bar {
  position: fixed;

  z-index: 2;
  width: 100%;
  bottom: 0;
}

.line-navigation-bar {
  display: flex;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
}
</style>
