export interface Event {
  image: string
  id: number
  name: string
  start: Date
  end: Date
  location: string
  badge?: string
  seated?: boolean
  tags: string[]
}

export interface CartItem {
  id: number
  eventId: number
  price: number
  category: string
}

export interface ResolvedCartItem extends Event {
  id: number
  price: number
  category: string
}

export interface Category {
  price: number
  name: string
  count?: number
}

export interface Customer {
  type: 'private' | 'company'
  firstName: string
  lastName: string
  companyName: string
  taxId: string
  title: string
  gender: 'male' | 'female' | 'other'
  email: string
  phone: string
  street: string
  streetNumber: string
  zip: string
  city: string
  country: string
}

export interface Cart {
  items: CartItem[]
  details: Customer
  payment: number
  delivery: number
}

export interface StoreCart {
  cart: Cart
}
