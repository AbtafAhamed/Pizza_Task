<template>
  <q-page>
    <q-list class="my__card">
      <q-item>
        <q-item-section class="text-h6 text-center">
          {{ stateChange.title }}...
          <q-separator color="orange" inset />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section class="text-h6">
          Order Summary
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section class="text-body">
          <q-item-label> {{ user }} </q-item-label>
          <q-item-label> K.K.Halli, Banglaore </q-item-label>
          <q-item-label> Karnataka </q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section class="text-h6">
          Items
        </q-item-section>
      </q-item>
      <q-item v-for="(item, index) in items" :key="index">
        <q-item-section>
          <q-item-label> {{ item.product.title }} </q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption
            ><q-btn flat>
              {{ item.quantity }}
            </q-btn></q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption
            ><q-btn flat icon="fas fa-rupee-sign">
              {{ item.product.prize }}
            </q-btn></q-item-label
          >
        </q-item-section>
      </q-item>
    </q-list>
    <q-card class="my-total">
      <q-card-section align="right">
        <q-btn flat>Grand Total :</q-btn>
        <q-btn flat icon="fas fa-rupee-sign">{{ totalPrize }}</q-btn>
      </q-card-section>
    </q-card>
    <q-list>
      <q-item>
        <q-item-section class="text-h6">
          Status of the Order
        </q-item-section>
        <q-item-section class="text-body">
          {{ stateChange.title }}
        </q-item-section>
        <q-item-section class="text-h6">
          <q-btn color="light-green-14" @click="chageStatus"
            >Change Status</q-btn
          >
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { Cookies } from "quasar";
export default {
  components: {},
  data() {
    return {
      items: this.$store.state.module.cart,
      user: Cookies.get("user")
    };
  },
  mounted() {},
  computed: {
    stateChange() {
      const count = this.$store.state.module.count;
      return {
        title: this.$store.state.module.status[count].title
      };
    },
    totalPrize() {
      let total = 0;
      this.$store.state.module.cart.map(item => {
        total += item.product.prize * item.quantity;
      });
      return total;
    }
  },
  methods: {
    chageStatus() {
      const count = this.$store.state.module.count;
      if (count < 2) {
        this.$store.dispatch("module/statusChange");
      }
    }
  }
};
</script>

<style></style>
