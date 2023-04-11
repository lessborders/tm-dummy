<template>
  <nav class="navbar fixed-top justify-content-between">
    <div class="container align-items-center">
      <NuxtLink class="navbar-brand me-3" to="/">
        <img
          src="https://ticketmachine.de/wp-content/uploads/2022/09/tm_klein-e1662746427960.png"
        />
      </NuxtLink>
      <div class="d-flex ms-auto gap-2">
        <button class="btn d-none d-md-block">
          <i class="fa-regular fa-comment" /> <a href="#">EN</a> | DE
        </button>
        <button v-if="cart?.items.length" class="btn"><small>09:59</small></button>
        <button
          class="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasCart"
          aria-controls="offcanvasCart"
        >
          <i class="fa-solid fa-bag-shopping icon-prefix"></i>
          <small>{{ cart?.items.length }}</small>
        </button>
      </div>
      <TemplateCart />
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart'
const cart = computed(() => useCartStore().cart)
</script>
