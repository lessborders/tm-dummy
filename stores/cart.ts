import { defineStore } from 'pinia'
import * as Models from 'models'

const cartName = 'tmcart'
export const useCartStore = defineStore('cart', {
  state: (): Models.StoreCart => ({
    cart: {
      items: [],
      details: {
        type: 'private',
        firstName: '',
        lastName: '',
        taxId: '',
        companyName: '',
        title: '',
        gender: 'male',
        email: '',
        phone: '',
        street: '',
        streetNumber: '',
        zip: '',
        city: '',
        country: '',
      },
      payment: 1,
      delivery: 1,
      order: null,
    },
  }),
  actions: {
    initiateCart() {
      if (!localStorage.getItem(cartName)) this.saveCart()

      this.cart = JSON.parse(localStorage.getItem(cartName)!)
    },

    deleteCartItem(id: number) {
      this.cart.items.splice(
        this.cart.items.findIndex((item) => item.id === id),
        1
      )
    },

    addCartItem(cartItem: Models.CartItem) {
      this.cart.items.push(cartItem)
    },

    saveCart() {
      localStorage.setItem(cartName, JSON.stringify(this.cart))
    },

    async submitCart() {
      this.cart.order = { ...this.cart }
      this.cart.items = []
      this.saveCart()
    },
  },
})

const cart = useCartStore()
cart.initiateCart()
watch(
  cart.cart,
  () => {
    cart.saveCart()
  },
  { deep: true }
)
