<template>
  <div v-if="event.seated" class="card-img-top ratio ratio-16x9 overflow-hidden">
    <div class="img d-flex justify-content-center align-items-center">
      <i class="fa-solid fa-map-location-dot" />
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <button class="btn btn-primary">Zum Saalplan</button>
    </div>
  </div>

  <div v-if="!event.seated || selectedCategories.length > 0" class="card-body">
    <h5 class="mb-3">Tickets</h5>
    <form v-if="!event.seated">
      <div class="responsive-table">
        <table class="table table-hover align-middle m-0">
          <thead>
            <tr>
              <th scope="col">Kategorie</th>
              <th scope="col">Preis</th>
              <th scope="col">Anzahl</th>
              <th scope="col" class="text-end hidden-mobile">Summe</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.name">
              <td scope="row">{{ category.name }}</td>
              <td>{{ category.price.toFixed(2) }} €</td>
              <td>
                <select v-model="category.count" class="form-select form-select-sm">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </td>
              <td class="text-end hidden-mobile">
                {{ (category.count * category.price).toFixed(2) }} €
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-end px-2 py-3">
          Gesamtpreis:
          <strong>{{ total.toFixed(2) }} €</strong>
        </div>
      </div>
    </form>

    <TransitionGroup name="list">
      <div v-for="category in selectedCategories" :key="category.name" class="card mb-3">
        <div class="card-body">
          <div class="card-title">
            <i class="fa-solid fa-user icon-prefix" /><strong>{{ category.name }}</strong> -
            Teilnehmer Daten
          </div>
          <form class="row row-cols-1 row-cols-md-2 g-3">
            <div class="col">
              <input type="text" class="form-control" placeholder="Vorname" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Name" />
            </div>
          </form>
        </div>
      </div>
    </TransitionGroup>

    <div class="d-grid">
      <button class="btn btn-primary" @click="addItems">In den Warenkorb</button>
    </div>
  </div>

  <SeatingChart v-if="event.seated" />
</template>

<script lang="ts" setup>
import * as Models from '~/models'
import { useCartStore } from '~/stores/cart'
import { Toast } from 'bootstrap'

const props = defineProps<{ event: Models.Event }>()
const event = ref(props.event)

const cart = computed(() => useCartStore())

const categories = ref([
  {
    name: 'Frühbucher',
    price: 14.99,
    count: 0,
  },
  {
    name: 'Standard',
    price: 19.99,
    count: 0,
  },
  {
    name: 'VIP',
    price: 49.99,
    count: 0,
  },
])

const total = computed(() => {
  let sum = 0
  categories.value.forEach((category) => {
    sum += category.count * category.price
  })
  return sum
})

const selectedCategories = computed(() => {
  const selected: Models.Category[] = []
  categories.value.forEach((category) => {
    for (let i = 0; i < category.count; i++) {
      selected.push(category)
    }
  })
  return selected
})

const addItems = () => {
  selectedCategories.value.forEach((category: any) => {
    addItem(category)
  })
}

const addItem = (category: Models.Category) => {
  const cartItem: Models.CartItem = {
    id: new Date().getTime() + Math.random() * 100,
    eventId: event.value.id,
    price: category.price,
    category: category.name,
  }

  cart.value.addCartItem(cartItem)
  category.count = 0
  const toastLiveExample = document.getElementById('liveToast')!
  const toast = new Toast(toastLiveExample)
  toast.show()
}
</script>

<style scoped>
.card-img-top {
  border-bottom: 1px solid var(--tm-surface-border-color);
}
.img > i {
  font-size: 300px;
  opacity: 0.1;
}
</style>
