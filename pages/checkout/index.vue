<template>
  <h3 class="text-center mb-3">Checkout</h3>
  <form method="post" action="/" id="checkoutForm" class="row g-3 justify-content-center">
    <div class="col-md-6 gap-3 d-flex flex-column">
      <div class="checkout-nav d-flex justify-content-around">
        <button type="button" class="btn" :class="{ active: step == 1 }">
          <i class="fa-solid fa-home" /><span>Details</span>
        </button>
        <button type="button" class="btn" :class="{ active: step == 2 }">
          <i class="fa-solid fa-credit-card" /><span>Zahlung & Lieferung</span>
        </button>
        <button type="button" class="btn" :class="{ active: step == 3 }">
          <i class="fa-solid fa-check" /><span>Übersicht</span>
        </button>
      </div>

      <div id="checkoutDetails" class="checkout-panels">
        <div :class="{ active: step == 1 }">
          <CheckoutDetails />
        </div>

        <div id="checkoutPaymentDelivery" :class="{ active: step == 2 }">
          <div class="d-flex flex-column gap-3">
            <CheckoutPayment />
            <CheckoutDelivery />
          </div>
        </div>

        <div id="checkoutFinish" :class="{ active: step == 3 }">
          <CheckoutCart />
        </div>
      </div>

      <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-secondary" @click="changeStep(step - 1)">
          <i class="fa-solid fa-angle-left icon-prefix" /> Zurück
        </button>
        <button v-if="step < 3" type="button" class="btn btn-primary" @click="changeStep(step + 1)">
          Weiter <i class="fa-solid fa-angle-right icon-suffix" />
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
const step = ref(1)

const changeStep = (id: number) => {
  let currentStep = step.value
  if (document) {
    currentStep = id

    if (currentStep < 1) {
      document.location.replace('/')
      return
    }

    step.value = currentStep
    window?.scrollTo({ top: 0, behavior: 'smooth' })

    const url = new URL(document.URL)
    url.hash = `#step-${step.value}`

    document.location.href = url.href
  }
}
</script>
