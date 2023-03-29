<template>
  <PageHeader>Veranstaltungen</PageHeader>
  <div id="calendar"></div>
</template>

<script lang="ts" setup>
import { events } from '~/config'
import { Calendar, EventInput } from '@fullcalendar/core'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import dayGridPlugin from '@fullcalendar/daygrid'
import allLocales from '@fullcalendar/core/locales-all'

onMounted(() => {
  const calendarEl = document?.getElementById('calendar')
  if (calendarEl) {
    const calendar = new Calendar(calendarEl, {
      plugins: [bootstrap5Plugin, dayGridPlugin],
      themeSystem: 'bootstrap5',
      initialView: 'dayGridMonth',
      locales: allLocales,
      locale: 'de',
      events: filteredEvents,
      eventColor: 'var(--tm-primary)',
      buttonIcons: {
        prev: ' fa-solid fa-angle-left',
        next: ' fa-solid fa-angle-right',
      },
    })
    calendar.render()
  } else {
    console.log(calendarEl)
  }
})

const filteredEvents = events.map((event): EventInput => {
  return {
    id: event.id.toString(),
    title: event.name,
    start: event.start,
    end: event.end,
    url: '/event/' + event.id,
  }
})
</script>
