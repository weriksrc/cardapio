<template>
  <div>
    <v-card>
      <BaseCarosel />
    </v-card>
    <span>
      {{ title }}
    </span>
    <div>
      {{ description }}
    </div>
    <v-divider></v-divider>
    <div>
      <span>Adicionais</span>
    </div>

  </div>
</template>

<script>
import BaseCarosel from "./BaseCarosel.vue"
export default {

  components:{
    BaseCarosel
  },

  data(){
    return{
      title: "",
      description: "",
    }
  }

}
</script>

<style>

</style>