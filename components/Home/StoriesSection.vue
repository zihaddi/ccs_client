<template>
  <div class="bg-gradient-to-t from-white to-orange-50 py-10">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl md:text-5xl font-bold text-purple-900 mb-8">
          Some Remarkable Stories
        </h1>
      </div>

      <!-- Stories Grid -->
      <div class="space-y-12">
        <!-- Story 1: Consumer Historic Victory -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="relative">
            <div class="absolute -left-4 top-0 bottom-0 w-px bg-red-300 hidden md:block"></div>
            <div class="border-r border-red-300 pr-6 md:pr-8">
              <img 
                src="/images/stories/historic-victory.jpg" 
                alt="Historic Victory"
                class="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
          <div class="border-l border-red-300 pl-6 md:pl-8">
            <h2 class="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              CCS's writ: Consumer Historic Victory
            </h2>
            <p class="text-purple-800 text-lg leading-relaxed">
              The High Court on May 12, 2020 banned production and sale of 52 sub-standard food products found to be injurious to human health.<br>
              A division bench comprising Justice Sheikh Hassan Arif and Justice Razik-Al Jalil.....
            </p>
          </div>
        </div>

        <!-- Story 2: International Youth Award -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 border-r border-red-300 pr-6 md:pr-8">
            <h2 class="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              CCS receives 'International Youth Award'
            </h2>
            <p class="text-purple-800 text-lg leading-relaxed">
              Palash Mahmod has received the 'International Youth Award' in Delhi for his contribution to preventing adulteration of food...
            </p>
          </div>
          <div class="order-1 md:order-2 relative">
            <div class="absolute -right-4 top-0 bottom-0 w-px bg-red-300 hidden md:block"></div>
            <div class="border-l border-red-300 pl-6 md:pl-8">
              <img 
                src="/images/stories/International Youth Award.jpg" 
                alt="International Youth Award"
                class="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>

        <!-- Story 3: Troop Against Food Adulteration -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="relative">
            <div class="absolute -left-4 top-0 bottom-0 w-px bg-red-300 hidden md:block"></div>
            <div class="border-r border-red-300 pr-6 md:pr-8">
              <img 
                src="/images/stories/troop.jpg" 
                alt="Troop Against Food Adulteration"
                class="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
          <div class="border-l border-red-300 pl-6 md:pl-8">
            <h2 class="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              A troop against food adulteration
            </h2>
            <p class="text-purple-800 text-lg leading-relaxed">
              Each year, millions of people are affected by different diseases due to unsafe food in Bangladesh. These diseases include kidney-related problems and cancers, among others.
            </p>
          </div>
        </div>
      </div>

      <!-- More Stories Button -->
      <div class="text-center mt-12">
        <PrimeButton 
          label="More Stories"
          severity="secondary"
          outlined
          size="large"
          class="px-8 py-3 text-xl rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          @click="handleMoreStories"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Define component props if needed
const props = defineProps({
  stories: {
    type: Array,
    default: () => []
  }
})

// Handle more stories button click
const handleMoreStories = () => {
  // Add your navigation logic here
  console.log('Navigating to more stories...')
  // Example: await navigateTo('/stories')
}

// You can also make this dynamic with props
const defaultStories = [
  {
    id: 1,
    title: "CCS's writ: Consumer Historic Victory",
    description: "The High Court on May 12, 2020 banned production and sale of 52 sub-standard food products found to be injurious to human health. A division bench comprising Justice Sheikh Hassan Arif and Justice Razik-Al Jalil.....",
    image: "/images/stories/historic-victory.jpg",
    imagePosition: "left"
  },
  {
    id: 2,
    title: "CCS receives 'International Youth Award'",
    description: "Palash Mahmod has received the 'International Youth Award' in Delhi for his contribution to preventing adulteration of food...",
    image: "/images/stories/International Youth Award.jpg",
    imagePosition: "right"
  },
  {
    id: 3,
    title: "A troop against food adulteration",
    description: "Each year, millions of people are affected by different diseases due to unsafe food in Bangladesh. These diseases include kidney-related problems and cancers, among others.",
    image: "/images/stories/troop.jpg",
    imagePosition: "left"
  }
]

// Use stories from props or default stories
const displayStories = computed(() => props.stories.length > 0 ? props.stories : defaultStories)
</script>

<style scoped>
/* Custom styles if needed */
.container {
  max-width: 1200px;
}

/* Custom gradient override if needed */
.bg-gradient-to-t {
  background-image: linear-gradient(to top, rgba(255,255,255,1), rgb(255, 242, 232));
}

/* Hover effects */
img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.02);
}

/* Responsive font adjustments */
@media (max-width: 768px) {
  .text-4xl {
    font-size: 2rem;
  }
  
  .text-3xl {
    font-size: 1.875rem;
  }
}
</style>