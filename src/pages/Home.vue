<template>
  <q-page>
    <div class="text-h6 text-center">
      BEST SELLERS
      <q-separator color="orange" inset />
    </div>
    <div class="my__card">
      <pizzacard v-for="item in items" :key="item.id" :product="item" />
    </div>
    <div class="text-h6 text-center">
      VEG PIZZA
      <q-separator color="orange" inset />
    </div>
    <div class="my__card">
      <pizzacard v-for="item in items" :key="item.id" :product="item" />
    </div>
    <div class="text-h6 text-center">
      NON-VEG PIZZA
      <q-separator color="orange" inset />
    </div>
    <div class="my__card">
      <pizzacard v-for="item in items" :key="item.id" :product="item" />
    </div>
  </q-page>
</template>

<script>
import pizzacard from "../components/PizzaCard";
export default {
  components: {
    pizzacard
  },
  data() {
    return {
      items: this.$store.state.module.products
    };
  },
  mounted() {
    this.$store.dispatch("module/resetStatus");
  }
};
</script>

<style lang="stylus" scoped>
.my__card{
    display:grid;
    grid-template-columns : repeat(auto-fit,minmax(15rem,1fr))
    grid-gap :2em;
    margin : 2em;
}
.img__card{
    object-fit : containe ;
    // width : 150px;
    // height : 150px;
}
</style>
