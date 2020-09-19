<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="page_container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.page_container {
    width : 100%;
    height: 100%;
    background : $grey-3;
}
</style>
