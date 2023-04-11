<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Wie möchten Sie Ihre Tickets erhalten?</h5>

      <div class="d-flex flex-column gap-1">
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
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="2"
            id="deliveryPost"
            v-model="cart.delivery"
          />
          <label class="form-check-label" for="deliveryPost">Postversand</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart'
const cart = computed(() => useCartStore().cart)
</script>
