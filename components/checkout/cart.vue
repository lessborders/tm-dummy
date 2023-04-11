<template>
  <div class="card mb-3">
    <div class="card-body">
      <div class="row cols-2">
        <div class="col-md">
          <h5>Rechnungsanschrift</h5>
          <p>
            <div v-if="cart.details.type === 'company'">{{ cart.details.companyName }}</div>
            <div>{{ cart.details.firstName }} {{ cart.details.lastName }}</div>
            <div>{{ cart.details.street }} {{ cart.details.streetNumber }}</div>
            <div>{{ cart.details.zip }} {{ cart.details.city }}</div>
            <div>{{ cart.details.country }}</div>
          </p>
        </div>

        <div class="col-md">
          <h5>Zahlungsmittel</h5>
          <p>{{ calculatedPayment }}</p>

          <h5>Versandart</h5>
          <p>{{ calculatedDelivery }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Übersicht</h5>

      <TransitionGroup name="list" tag="ul" class="list-group list-group-flush">
        <CartItem
          v-for="cartItem in cart.items"
          :key="cartItem.id"
          :cartItem="cartItem"
          :isOverview="true"
        />
      </TransitionGroup>
    </div>
  </div>

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

  <div class="my-3">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="acceptTerms"
        required
      />
      <label class="form-check-label" for="acceptTerms">
        Ich habe die <a href="#">AGBs</a> gelesen und bin damit einverstanden.
      </label>
    </div>
    
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="acceptPrivacy"
        required
      />
      <label class="form-check-label" for="acceptPrivacy">
        Ich habe die <a href="#">Datenschutzerklärung</a> zur Kenntnis genommen und akzeptiert.
      </label>
    </div>
  </div>

  <div class="d-grid">
    <input
      @click="submitCart"
      type="submit"
      name="checkoutSubmit"
      class="btn btn-primary"
      value="Kostenpflichtig bezahlen"
    />
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

const submitCart = async () => {
  await useCartStore().submitCart()
  await navigateTo({ path: '/checkout/complete' })
}

const calculatedDelivery = cart.value.delivery == 1 ? "E-Mail" : "Postversand"
const calculatedPayment = cart.value.payment == 1 ? "PayPal" : "Kreditkarte"
</script>
