<template>
  <div v-if="event" class="row g-4">
    <div class="col-lg-7 d-flex flex-column flex-column-inverse gap-3">
      <EventLeft :event="event" />
    </div>
    <div class="col-lg-5 d-flex flex-column gap-3">
      <EventRight :event="event" />
    </div>
  </div>

  <div class="toast-container position-fixed top-0 end-0 mt-5 p-3">
    <div
      id="liveToast"
      class="toast text-success text-bg-success border-0 overflow-hidden"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header align-items-top border-0">
        <div>
          <strong>{{ event.name }}</strong> wurde zum Warenkorb hinzugefügt
        </div>
        <button
          type="button"
          class="btn-close me-2"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as Models from '~/models'
import { getEvent } from '~~/config'

const route = useRoute()
const event: Ref<Models.Event> = ref(getEvent(parseInt(route.params.id?.toString())))
</script>
