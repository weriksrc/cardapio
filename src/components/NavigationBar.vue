<template>
  <div class="navigation-bar">
    <v-row class="line-navigation-bar">
      <v-col class="d-flex justify-center pt-0">
        <v-btn icon>
          <v-icon> mdi-home </v-icon>
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-center pt-0">
        <v-btn icon>
          <v-icon> mdi-file </v-icon>
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-center pt-0">
        <v-btn icon>
          <v-icon> mdi-bullhorn </v-icon>
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-center pt-0">
        <v-btn icon>
          <v-icon> mdi-account </v-icon>
        </v-btn>
      </v-col>
    </v-row>
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
