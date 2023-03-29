<template>
  <h5 class="card-title">Wie möchten Sie bezahlen?</h5>

  <div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        value="1"
        id="paymentPaypal"
        v-model="cart.payment"
      />
      <label class="form-check-label" for="paymentPaypal">Paypal <small>(+ 0,00 €)</small></label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        value="2"
        id="paymentCreditCard"
        v-model="cart.payment"
      />
      <label class="form-check-label" for="paymentCreditCard"> Kreditkarte</label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart'
const cart = computed(() => useCartStore().cart)
</script>
