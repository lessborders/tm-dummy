<template>
  <div class="card">
    <div class="event-img card-img-top ratio ratio-16x9">
      <div class="img"></div>
      <div class="d-flex justify-content-end align-items-start p-2">
        <div v-if="event.badge" class="badge badge-lg rounded-pill text-bg-dark">
          {{ event.badge }}
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="d-flex gap-4 align-items-center">
        <div class="event-top-date d-none d-md-flex">
          <span class="event-month">
            {{
              event.start.toLocaleDateString('de-DE', {
                month: 'short',
              })
            }}</span
          >
          <span class="event-date">
            {{
              event.start.toLocaleDateString('de-DE', {
                day: '2-digit',
              })
            }}</span
          >
        </div>
        <div>
          <h3>{{ event.name }}</h3>
          <div class="d-flex flex-column-reverse flex-sm-row gap-2">
            <div>
              <i class="fa-solid fa-map-pin icon-prefix" />{{ event.location }}
              <span class="ms-1 d-none d-sm-inline-block">&middot;</span>
            </div>
            <div>
              {{
                event.start.toLocaleDateString('de-DE', {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })
              }}
            </div>
            <div class="d-none d-xl-block">
              <span class="me-1">&middot;</span>
              {{ duration }}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Description />
      <Tags v-if="event.tags.length > 0" :tags="event.tags" />
    </div>
  </div>
  <SocialShare />
</template>

<script lang="ts" setup>
import * as Models from '~/models'
import { getDuration } from '~~/utils'

const props = defineProps<{ event: Models.Event }>()
const event = ref(props.event)
const duration = getDuration(event.value.start, event.value.end)
const image = `url(${event.value?.image})`
</script>

<style scoped>
.event-img > .img {
  background-image: v-bind('image');
}
</style>
