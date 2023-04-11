<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasCart"
    aria-labelledby="offcanvasCartLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasCartLabel">Warenkorb ({{ cart.items.length }})</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div class="offcanvas-body">
      <TransitionGroup name="list" tag="ul" class="list-group list-group-flush">
        <CartItem
          v-for="cartItem in cart.items"
          :key="cartItem.id"
          :cartItem="cartItem"
          :isOverview="false"
        />
      </TransitionGroup>
    </div>
    <div class="offcanvas-footer">
      <div class="text-center mb-2">
        Zwischensumme: <strong>{{ total.toFixed(2) }} €</strong>
      </div>
      <div
        class="d-grid gap-2"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasCart"
        aria-controls="offcanvasCart"
      >
        <NuxtLink v-if="cart.items?.length" to="/checkout" class="btn btn-primary">
          Zur Kasse
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart'
const cart = computed(() => useCartStore().cart)

const total = computed(() => {
  let sum = 0
  cart.value.items.forEach((cartItem) => {
    sum += cartItem.price
  })
  return sum
})
</script>
