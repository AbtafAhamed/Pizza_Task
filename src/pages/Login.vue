<template>
  <q-page class="form_container">
    <q-form @submit.prevent.stop="onLogin" class="q-gutter-md form_page">
      <q-input
        filled
        v-model="form.name"
        label="username *"
        hint="Username"
        lazy-rules
        :rules="[val => (val && val.length > 3) || 'Please type usermail']"
      />

      <q-input
        filled
        type="password"
        v-model="form.password"
        label="password *"
        hint="Password"
        lazy-rules
        :rules="[val => val.length > 5 || 'Please type password']"
      />

      <div>
        <q-btn label="Login" type="submit" color="primary" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { Cookies } from "quasar";
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    onLogin() {
      Cookies.set("user", this.form.name);
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style lang="stylus" scoped>
.form_container{
  display :flex;
  flex-direction :column;
  justify-items : center;
  align-items : center ;
  width : 100%;
}
.form_page{
  min-width : 320px;
  width : 40%;
  height : auto;
  margin : 1em;
}
</style>
