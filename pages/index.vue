<template>
  <PageHeader>Veranstaltungen</PageHeader>
  <div class="auto-grid gap-4">
    <EventItem v-for="event in filteredEvents" :event="event" />
  </div>
</template>

<script lang="ts" setup>
import { events } from '~/config'

const filteredEvents = events.sort(function (a, b) {
  return new Date(a.start).getTime() - new Date(b.start).getTime()
})
</script>
