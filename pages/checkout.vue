<template>
  <h3>Checkout</h3>
  <div class="row g-3">
    <div class="col-md-7 gap-3 d-flex flex-column">
      <div class="card">
        <div class="card-body">
          <CheckoutDetails />
        </div>
      </div>
    </div>
    <div class="col-md-5">
      <div class="card">
        <div class="card-body">
          <CheckoutPayment />
        </div>
        <div class="card-body">
          <CheckoutDelivery />
        </div>
        <div class="card-body">
          <CheckoutCart />
        </div>
      </div>
    </div>
  </div>
</template>
