<template>
  <div class="bg-white rounded-lg shadow p-3 flex items-center gap-4 recent-activity">
    <img
      :src="img"
      :alt="title"
      class="w-1/2 object-cover rounded"
      style="max-height:150px"
    />
    <div class="recent-activity-text w-1/2 flex items-center">
      <h2 class="text-lg font-semibold">
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: String,
  title: String
})
</script>

<style scoped>
/* Optionally add your custom styles or PrimeVue classes here */
</style>