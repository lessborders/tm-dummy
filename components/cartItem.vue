<template>
  <li v-if="cartItem" class="cart-item list-group-item px-0 py-3 d-flex gap-3 align-items-start">
    <div class="event-img zoom-img ratio ratio-1x1">
      <div class="img"></div>
      <button
        class="btn d-flex justify-content-center align-items-center bg-glass show-on-hover delete"
        @click="cart.deleteCartItem(cartItem.id)"
      >
        <i class="fa-solid fa-times text-danger" />
      </button>
    </div>
    <div class="d-flex w-100 gap-3">
      <div>
        <h6>
          <NuxtLink :to="'/event/' + cartItem.eventId" class="text-default">
            <strong>{{ cartItem.name }}</strong>
          </NuxtLink>
        </h6>
        <div class="text-meta">
          <span>
            {{
              cartItem.start.toLocaleDateString('de-DE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}
          </span>
          &middot;
          <span>
            {{
              cartItem.start.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
            }}</span
          >
        </div>
      </div>

      <div class="text-end ms-auto">
        <h6>{{ cartItem.category }}</h6>
        <div class="text-meta">{{ cartItem.price }} €</div>
      </div>
    </div>
  </li>
</template>

<script lang="ts" setup>
import * as Models from '~/models'
import { getEvent } from '~/config'
import { useCartStore } from '~/stores/cart'
const cart = computed(() => useCartStore())

interface Props {
  cartItem: Models.CartItem | null
}

const props = defineProps<Props>()
const propsItem = ref(<Models.CartItem>props.cartItem)

const cartItem = ref({
  ...propsItem.value,
  ...getEvent(propsItem.value.eventId),
})

const image = `url(${cartItem.value?.image})`
</script>

<style scoped>
.event-img > .img {
  background-image: v-bind('image');
}
</style>
