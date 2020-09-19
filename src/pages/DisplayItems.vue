<template>
  <q-page class="card__container">
    <q-list v-if="items.length > 0" class="my__card light-blue-1">
      <ItemDetails v-for="(item, index) in items" :key="index" :items="item" />
    </q-list>
    <div v-else class="text-h6 text-center">
      No Item found Go to Home page
    </div>
    <q-card class="my-total">
      <q-card-section align="right">
        <q-btn flat>Grand Total :</q-btn>
        <q-btn flat icon="fas fa-rupee-sign">{{ totalPrize }}</q-btn>
      </q-card-section>
      <q-card-section align="right">
        <q-btn flat color="light-green-14" @click="placeOrder"
          >Place Order</q-btn
        >
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { date } from "quasar";
import ItemDetails from "../components/ItemDetails";
export default {
  components: {
    ItemDetails
  },
  data() {
    return {
      items: this.$store.state.module.cart
    };
  },
  computed: {
    totalPrize() {
      let total = 0;
      this.$store.state.module.cart.map(item => {
        total += item.product.prize * item.quantity;
      });
      console.log(total);
      return total;
    }
  },
  methods: {
    placeOrder() {
      if (this.totalPrize > 0) {
        this.$router.push({ name: "OrderStatus" });
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.card__container{
    margin : 2em;
}
.my__card{
    background : $grey-1;
    display:grid;
    grid-template-rows : repeat(auto-fit,minmax(5rem,1fr))
    grid-gap :2em;
    padding: 1em;
}
</style>
