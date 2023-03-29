<template>
  <h5 class="card-title">Wie möchten Sie Ihre Tickets erhalten?</h5>

  <div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        value="1"
        id="deliveryEmail"
        v-model="cart.delivery"
      />
      <label class="form-check-label" for="deliveryEmail">E-Mail</label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart'
const cart = computed(() => useCartStore().cart)
</script>
