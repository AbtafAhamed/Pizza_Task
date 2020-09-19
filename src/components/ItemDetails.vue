<template>
  <q-item>
    <q-item-section top thumbnail class="q-ml-none">
      <img :src="items.product.image" />
    </q-item-section>

    <q-item-section>
      <q-item-label> {{ items.product.title }} </q-item-label>
      <q-item-label caption>
        {{ items.product.description }}
      </q-item-label>
    </q-item-section>
    <q-item-section side top>
      <q-item-label caption
        ><q-btn flat>
          {{ items.quantity }}
        </q-btn></q-item-label
      >
    </q-item-section>
    <q-item-section side top>
      <q-item-label caption
        ><q-btn flat icon="fas fa-rupee-sign">
          {{ items.product.prize }}
        </q-btn></q-item-label
      >
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
