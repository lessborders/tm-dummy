<template>
  <div class="card">
    <TicketSelect :event="event" />
    <div class="card-body">
      <h5 class="mb-3">Details</h5>
      <div class="row">
        <div class="col-md">
          <p>
            <strong><i class="fa-solid fa-hourglass-start icon-prefix" />Beginn: </strong>
            <br />
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
          </p>
          <p>
            <strong><i class="fa-solid fa-flag-checkered icon-prefix" />Ende:</strong>
            <br />
            {{
              event.end.toLocaleDateString('de-DE', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              })
            }}
          </p>
        </div>
        <div class="col-md">
          <strong>Ort:</strong>
          <br />
          <div>
            Dachauerstr. 272<br />
            80992 München<br />
            Deutschland
          </div>
        </div>
      </div>
    </div>
  </div>
  <iframe
    width="100%"
    height="300"
    id="mapcanvas"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDQKxz2vCNLs6OI6Ztnt2romPcEopjQt0w&amp;q=Test Arena+Musterstr.+1+Deutschland+80331+München"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    class="rounded"
  ></iframe>
</template>

<script lang="ts" setup>
import * as Models from '~/models'

const props = defineProps<{ event: Models.Event }>()
const event = ref(props.event)
</script>
