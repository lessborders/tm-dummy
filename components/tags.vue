<template>
  <div class="d-flex gap-2">
    <div v-for="tag in tags" :key="tag">
      <a href="#">#{{ tag }}</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  tags: string[]
}>()
const tags = ref(props.tags)
</script>
