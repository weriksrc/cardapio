<template>
  <div>
    <CurrentCaroselProduct />
    <CurrentDescriptionProduct />
    <ListCurrentAdditionalProduct />
  </div>
</template>

<script>
import CurrentCaroselProduct from "../components/CurrentCaroselProduct"
import CurrentDescriptionProduct from "../components/CurrentDescriptionProduct"
import ListCurrentAdditionalProduct from "../components/CurrentDescriptionProduct"

export default {

  components: {
    CurrentCaroselProduct,
    CurrentDescriptionProduct,
    ListCurrentAdditionalProduct
  }
}
</script>

<style>

</style>