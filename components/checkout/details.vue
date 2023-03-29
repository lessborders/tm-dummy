<template>
  <h5 class="card-title">Rechnungsanschrift</h5>
  <div>
    <form>
      <div class="row g-3">
        <div class="col-12">
          <select class="form-select" v-model="cart.details.type">
            <option value="private">Privatkunde</option>
            <option value="company">Firma</option>
          </select>
        </div>

        <div v-if="cart.details.type == 'company'" class="col-md-6">
          <label>Firmenname</label>
          <input v-model="cart.details.companyName" class="form-control" />
        </div>
        <div v-if="cart.details.type == 'company'" class="col-md-6">
          <label>Umsatzsteuer-ID</label>
          <div class="input-group">
            <input v-model="cart.details.taxId" class="form-control" />
            <button class="btn btn-secondary" type="button">Prüfen</button>
          </div>
        </div>

        <div class="col-md-6">
          <label>Titel</label>
          <input v-model="cart.details.title" class="form-control" />
        </div>
        <div class="col-md-6">
          <label>Ansprache</label>
          <div class="mt-2">
            <div class="form-check form-check-inline">
              <input
                id="genderMale"
                class="form-check-input"
                type="radio"
                v-model="cart.details.gender"
                value="male"
              />
              <label class="form-check-label" for="genderMale">Herr</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                id="genderFemale"
                class="form-check-input"
                type="radio"
                v-model="cart.details.gender"
                value="female"
              />
              <label class="form-check-label" for="genderFemale">Frau</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                id="genderOther"
                class="form-check-input"
                type="radio"
                v-model="cart.details.gender"
                value="other"
              />
              <label class="form-check-label" for="genderOther">Divers</label>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <label>Vorname</label>
          <input v-model="cart.details.firstName" class="form-control" />
        </div>
        <div class="col-md-6">
          <label>Nachname</label>
          <input v-model="cart.details.lastName" class="form-control" />
        </div>

        <div class="col-md-6">
          <label>E-Mail</label>
          <input type="email" v-model="cart.details.email" class="form-control" />
        </div>
        <div class="col-md-6">
          <label>Telefon</label>
          <input type="tel" v-model="cart.details.phone" class="form-control" />
        </div>
      </div>

      <hr class="my-4" />

      <div class="row g-3">
        <div class="col-md-8">
          <label>Straße</label>
          <input v-model="cart.details.street" class="form-control" />
        </div>
        <div class="col-md-4">
          <label>Hausnummer</label>
          <input v-model="cart.details.streetNumber" class="form-control" />
        </div>

        <div class="col-md-8">
          <label>PLZ</label>
          <input v-model="cart.details.zip" class="form-control" />
        </div>
        <div class="col-md-4">
          <label>Ort</label>
          <input v-model="cart.details.city" class="form-control" />
        </div>

        <div class="col-12">
          <label>Land</label>
          <input v-model="cart.details.country" class="form-control" />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart'
const cart = computed(() => useCartStore().cart)
</script>
