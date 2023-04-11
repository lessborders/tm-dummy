<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Wie möchten Sie bezahlen?</h5>

      <div>
        <label class="custom-check">
          <input type="radio" value="1" id="paymentPaypal" v-model="cart.payment" />
          <span>
            <i class="fa-brands fa-paypal" />
            <div>Paypal <small>(+ 0,00 €)</small></div>
          </span>
        </label>
        <label class="custom-check">
          <input type="radio" value="2" id="paymentCreditCard" v-model="cart.payment" />
          <span>
            <i class="fa-brands fa-cc-visa" />
            <div>Kreditkarte</div>
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart'
const cart = computed(() => useCartStore().cart)
</script>
