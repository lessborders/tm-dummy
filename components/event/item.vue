<template>
  <NuxtLink :to="'event/' + event.id" class="card" v-if="event">
    <div class="event-img zoom-img card-img-top ratio ratio-16x9">
      <div class="img"></div>
      <div class="d-flex justify-content-end align-items-start p-1">
        <div v-if="event.badge" class="badge rounded-pill text-bg-dark">
          {{ event.badge }}
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="text-meta">
        <span>
          {{
            event.start.toLocaleDateString('de-DE', {
              weekday: 'short',
              year: '2-digit',
              month: '2-digit',
              day: '2-digit',
            })
          }}
        </span>
        <span v-if="event.end.getDate() !== event.start.getDate()"> - </span>
        <span v-if="event.end.getDate() !== event.start.getDate()">
          {{
            event.end.toLocaleDateString('de-DE', {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit',
            })
          }}
        </span>
      </div>

      <h6 class="card-title">
        {{ event.name }}
      </h6>

      <div class="text-meta"><i class="fa-solid fa-map-pin icon-prefix" />{{ event.location }}</div>
    </div>

    <div class="card-footer d-flex justify-content-between align-items-center">
      <div class="text-meta">
        <i class="fa-solid fa-clock icon-prefix" />
        {{
          event.start.getDate() == new Date().getDate()
            ? 'Ganztägig'
            : event.start.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
        }}
      </div>
      <a href="#">Tickets</a>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import * as Models from '~/models'

interface Props {
  event: Models.Event | null
}

const props = defineProps<Props>()
const event = ref(props.event)
const image = `url(${event.value?.image})`
</script>

<style scoped>
.event-img > .img {
  background-image: v-bind('image');
}
</style>
