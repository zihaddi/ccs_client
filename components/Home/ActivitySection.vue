<template>
  <div class="w-full mt-0 mb-5">
    <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-8">
        <!-- Upcoming Events Header -->
				<div class="bg-[#020039] text-white text-center py-3 mb-5 rounded">
					<h2 class="text-3xl font-bold tracking-[0.2em]">Recent Activity</h2>
				</div>
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Left Column -->
        <div class="w-full md:w-1/2 flex flex-col gap-4">
          <ActivityCard
            img="/images/activity/CCS published report on onion price hiking.jpg"
            title="Regional training for 1500 students at BSMRSTU"
          />
          <ActivityCard
            img="/images/activity/CCS published report on onion price hiking.jpg"
            title="Training for 500 students at RU"
          />
          <ActivityCard
            img="/images/activity/CCS published report on onion price hiking.jpg"
            title="CCS published report on onion price hiking:"
          />
        </div>
        <!-- Right Column -->
        <div class="w-full md:w-1/2 flex flex-col gap-4">
          <ActivityCard
            img="/images/activity/CCS published report on onion price hiking.jpg"
            title="Regional training for 1500 students at BSMRSTU"
          />
          <ActivityCard
            img="/images/activity/CCS published report on onion price hiking.jpg"
            title="Training for 500 students at RU"
          />
          <ActivityCard
            img="/images/activity/CCS published report on onion price hiking.jpg"
            title="CCS published report on onion price hiking:"
          />
        </div>
      </div>

      <div class="bg-[#020039] w-full md:w-1/4 mt-3 mx-auto text-white text-center py-2 mb-5 rounded">
					<h2 class="text-md font-bold tracking-[0.2em]">See All Activity</h2>
				</div>
    </div>
  </div>
</template>

<script setup>
import ActivityCard from './ActivityCard.vue'
</script>