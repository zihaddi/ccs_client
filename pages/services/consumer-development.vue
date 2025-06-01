<template>
  <div class="container mx-auto px-4 py-16">
    <!-- Main Heading -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        <span class="text-[#F06E00]">Our</span> Services
      </h1>
      <h4 class="text-xl text-gray-600">What We Doing</h4>
    </div>

    <!-- Divider -->
    <div class="flex items-center justify-center mb-8">
      <div class="h-px bg-gray-300 flex-1 max-w-32"></div>
      <div class="mx-6">
        <i class="pi pi-cog text-2xl text-gray-500"></i>
      </div>
      <div class="h-px bg-gray-300 flex-1 max-w-32"></div>
    </div>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Visible Services -->
      <div
        v-for="(service, index) in visibleServices"
        :key="index"
        class="group cursor-pointer"
      >
        <Card class="h-full hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2">
          <template #content>
            <div class="p-6">
              <div class="flex flex-col justify-center items-center space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <i :class="service.icon" class="text-xl text-red-600"></i>
                  </div>
                </div>
                <div class="flex justify-center items-center flex-col text-center mt-5">
                  <h3 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {{ service.title }}
                  </h3>
                  <p class="text-gray-600 leading-relaxed">
                    {{ service.description }}
                  </p>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>

    <!-- Show More Button -->
    <div class="text-center mt-12" v-if="!showAll && allServices.length > initialServicesCount">
      <Button
        @click="toggleShowMore"
        outlined
        severity="danger"
        class="px-8 py-3 text-lg font-medium"
      >
        {{ showAll ? 'Show Less' : 'Show More' }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'

const showAll = ref(false)
const initialServicesCount = 6

const allServices = ref([
  {
    icon: 'pi pi-chart-line',
    title: 'Business Strategy',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority.'
  },
  {
    icon: 'pi pi-desktop',
    title: 'Website Development',
    description: 'It is a long established fact that a reader will be distracted by the readable.'
  },
  {
    icon: 'pi pi-users',
    title: 'Marketing & Reporting',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in all.'
  },
  {
    icon: 'pi pi-mobile',
    title: 'Mobile Development',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority.'
  },
  {
    icon: 'pi pi-chart-bar',
    title: 'Marketing & Reporting',
    description: 'The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section.'
  },
  {
    icon: 'pi pi-box',
    title: 'App Development',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
  },
  {
    icon: 'pi pi-cloud',
    title: 'Cloud Solutions',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
  },
  {
    icon: 'pi pi-shield',
    title: 'Security Services',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
  },
  {
    icon: 'pi pi-cog',
    title: 'Technical Support',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
  }
])

const visibleServices = computed(() => {
  return showAll.value ? allServices.value : allServices.value.slice(0, initialServicesCount)
})

const toggleShowMore = () => {
  showAll.value = !showAll.value
}
</script>

<style scoped>
/* Custom styles if needed */
.container {
  max-width: 1200px;
}

/* Smooth animations for card hover effects */
.group:hover .group-hover\:bg-blue-200 {
  background-color: rgb(219 234 254);
}

.group:hover .group-hover\:text-blue-600 {
  color: rgb(37 99 235);
}
</style>