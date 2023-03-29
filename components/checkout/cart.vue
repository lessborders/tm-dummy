<template>
  <h5 class="card-title">Übersicht</h5>

  <TransitionGroup name="list" tag="ul" class="list-group list-group-flush">
    <CartItem v-for="cartItem in cart.items" :key="cartItem.id" :cartItem="cartItem" />
  </TransitionGroup>

  <div class="row justify-content-end my-3">
    <div class="col-md-8">
      <div class="input-group input-group-sm">
        <input class="form-control" placeholder="Gutscheincode eingeben" />
        <button class="btn btn-primary" type="button">Einlösen</button>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-end my-3">
    <div class="text-end">
      Zwischensumme: <strong class="ms-3">{{ total.toFixed(2) }} €</strong>
      <hr class="my-1" />
      Gesamtpreis: <strong class="ms-3">{{ total.toFixed(2) }} €</strong>
    </div>
  </div>
  <div class="d-grid">
    <button class="btn btn-primary">Kostenpflichtig bezahlen</button>
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
