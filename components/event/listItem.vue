<template>
  <NuxtLink
    :to="'event/' + event.id"
    v-if="event"
    class="list-group-item d-flex align-items-start px-0 py-3 gap-3"
  >
    <div class="event-img zoom-img ratio ratio-16x9">
      <div class="img"></div>
    </div>
    <div class="w-100 text-default">
      <div class="d-flex justify-content-between">
        <div>
          <div class="text-meta d-flex gap-1 align-items-center">
            <div v-if="event.badge" class="badge rounded-pill text-bg-dark me-1">
              {{ event.badge }}
            </div>
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
          <div>
            <h6 class="text-default mb-1">
              {{ event.name }}
            </h6>
          </div>
        </div>
      </div>

      <div class="d-flex gap-2 text-meta">
        Lorem ipsum dolar sit amet. Lorem ipsum dolar sit amet. Lorem ipsum dolar sit amet. Lorem
        ipsum dolar...
      </div>
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
