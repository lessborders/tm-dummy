<template>
  <div class="d-flex justify-content-between align-items-center mb-3">
    <h3 class="m-0"><slot /></h3>

    <div class="d-flex gap-3 justify-content-between align-items-center">
      <div
        v-if="route.path == '/' || route.path == '/list' || route.path == '/calendar'"
        class="d-flex align-items-center selector"
      >
        <NuxtLink to="/" class="btn"><i class="fa-solid fa-table-cells-large" /></NuxtLink>
        <NuxtLink to="/list" class="btn"><i class="fa-solid fa-list" /></NuxtLink>
        <NuxtLink to="/calendar" class="btn"><i class="fa-regular fa-calendar-days" /></NuxtLink>
      </div>
      <NuxtLink v-else to="/" class="btn d-none d-md-inline-block">Zurück</NuxtLink>
      <div class="d-none d-md-block">
        <form class="d-flex search">
          <input class="me-2" type="search" placeholder="Suche..." aria-label="Search" />
          <button class="btn" type="submit"><i class="fa-solid fa-search" /></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style scoped>
.router-link-exact-active {
  opacity: 1;
}
</style>
