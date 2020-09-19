<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-avatar>
          <img src="../assets/logo.jpg" />
        </q-avatar>

        <q-toolbar-title class="menu__link">
          <router-link :to="{ name: 'Home' }">{{ $t("pizza") }} </router-link>
        </q-toolbar-title>
        <q-tabs v-model="tab" shrink stretch>
          <q-route-tab :to="{ name: 'DisplayItems' }" exact replace>
            {{ cart }} Cart
          </q-route-tab>
        </q-tabs>

        <q-separator vertical />
        <q-btn-dropdown split class="q-ml-md" color="orange" :label="user">
          <q-list>
            <q-item clickable v-close-popup @click="onLogout">
              <q-item-section>
                <q-item-label caption> logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { Cookies } from "quasar";
export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      user: Cookies.get("user"),
      tab: ""
    };
  },
  computed: {
    cart() {
      return this.$store.state.module.cart.length;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("module/logout");
    }
  }
};
</script>
<style lang="stylus" scoped>
.menu__link a {
  color: white;
 text-decoration: none;
}
</style>
