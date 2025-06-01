<script setup>
const data = ref([
  {
    id: 1,
    title: "What is CCS?",
    items: [
      {
        id: 1,
       
        description: "Consensus Consumers Society (CCS) is a non-political, non-communal and non-profit voluntary organization. CCS has been working for the creation of public awareness, research, adulteration preventive activities, and to assist the concerned authorities in implementing consumer rights and to create a special team conscious consumer rights. Any person interested in joining this work can be a member of the CCS.",
        type: 1
      },
      
    ]
  },
  {
    id: 2,
    title: "What is CYB?",
    items: [
      {
        id: 4,
       
        description: "'Consumer Youth Bangladesh' (CYB) is a youth organization of CCS. CCS believes that young people will play a key role in establishing consumer-friendly Bangladesh. CYB is working in different educational institutions of the country to create a conscious consumer society by organizing and awaring young consumers.",
        type: 1
      },
      
    ]
  },
  {
    id: 3,
    title: "What is the right of comsumer?",
    items: [
      {
        id: 6,
        
        description: "US President John F. Kennedy focused on first consumer rights in 1962. In 1985, the United Nations recognizes consumer rights. In 2009, Bangladesh Government passed 'Consumer Rights Protection Act-2009'. In this, 8 rights are specified for the consumer. These rights are called consumer rights.",
        type: 1
      },
      
    ]
  },
  {
    id: 4,
    title: "What are consumer rights?",
    items: [
      {
        id: 8,
        description: "A) Right to meet basic needs - The right to access basic, essential goods and services such as food, clothing, shelter, healthcare, education, and sanitation.",
        type: 1
      },
      {
        id: 9,
        description: "B) Right to information - The right to be given accurate information needed to make informed choices according to individual wishes and needs.",
        type: 1
      },
      {
        id: 10,
        description: "C) The right to get a safe product or service - The right to be protected against products, production processes and services that are hazardous to health or life.",
        type: 1
      },
      {
        id: 11,
        description: "D) Right to choose - The right to select from a range of products and services, offered at competitive prices with an assurance of satisfactory quality.",
        type: 1
      },
      {
        id: 12,
        description: "E) Right to know - The right to be informed about product quality, quantity, potency, purity, standard and price to protect against unfair practices.",
        type: 1
      },
      {
        id: 13,
        description: "F) Right to complaint and redress - The right to seek redressal against unfair practices or exploitation and have complaints heard and resolved.",
        type: 1
      },
      {
        id: 14,
        description: "G) The right to learn about consumer rights and responsibilities - The right to acquire knowledge and skills needed to make informed, confident choices about goods and services.",
        type: 1
      },
      {
        id: 15,
        description: "H) The right to a healthy environment - The right to live and work in an environment that is non-threatening to the well-being of present and future generations.",
        type: 1
      }
    ]
  }
]);

const openSections = ref([1]); // Default open the first section

function toggleSection(sectionId) {
  if (openSections.value.includes(sectionId)) {
    openSections.value = openSections.value.filter(id => id !== sectionId);
  } else {
    openSections.value.push(sectionId);
  }
}
</script>

<template>
  <div class="container px-4 pt-20 pb-8 mx-auto md:py-6 md:px-8 lg:py-10 lg:px-16">
    <div class="animate-fade-in-up text-center">
			<h4 class="text-lg font-medium mb-2">
				<span class="bg-gradient-to-r from-[#059dff] via-[#6549d5] via-[#e33fa1] to-[#fb5343] bg-clip-text text-transparent"> Blog Posts</span>
			</h4>
		</div>

		<div class="animate-fade-in-up text-center">
			<h2 class="text-4xl font-semibold mb-6"><span class="text-gray-800 text-orange-400">FAQ</span> </h2>
		</div>

		<!-- Divider -->
		<div class="flex items-center justify-center mb-6">
			<div class="h-px bg-gray-300 flex-1 max-w-52"></div>
			<i class="pi pi-question-circle text-gray-500 text-2xl"></i>
			<div class="h-px bg-gray-300 flex-1 max-w-52"></div>
		</div>


    <div v-for="(section, index) in data" :key="index" class="mb-4">
      <button
        class="flex items-center justify-between w-full px-4 py-3 text-left transition bg-blue-100 rounded-md hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-gray-100"
        @click="toggleSection(section.id)" :aria-expanded="openSections.includes(section.id)">
        <h3 class="text-lg font-semibold">{{ section.title }}</h3>
        <span class="transition-transform transform" :class="{ 'rotate-180': openSections.includes(section.id) }">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="text-gray-900 dark:text-gray-100">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </span>
      </button>

      <div class="overflow-hidden transition-all duration-300"
        :class="{ 'border border-blue-100 dark:border-blue-700 rounded-md mt-2': openSections.includes(section.id), 'max-h-0': !openSections.includes(section.id) }">
        <div v-for="(item, itemIndex) in section.items" :key="itemIndex"
          class="px-4 py-3 border-b last:border-b-0 dark:border-gray-700">
          <h4 class="text-base font-medium text-gray-900 dark:text-gray-100">{{ item.title }}</h4>
          <p v-if="item.type == 1" class="mt-1 text-sm text-gray-600 dark:text-gray-300">{{ item.description }}</p>
          <div v-if="item.type == 2" class="mt-4">
            <NuxtImg :src="item.attachment" :alt="item.title"
              class="w-auto max-w-full h-auto max-h-[400px] mx-auto object-contain rounded-lg" />
          </div>
          <p v-if="item.type == 3" class="mt-1 text-sm text-gray-600 dark:text-gray-300">
            <iframe :src="item.embed_url" frameborder="0"
              class="w-full aspect-video rounded"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </p>
          <p v-if="item.type == 4" class="mt-1 text-sm text-gray-600 dark:text-gray-300">
            <iframe :src="item.embed_url" frameborder="0"
              class="w-full h-[400px] rounded"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.max-h-0 {
  max-height: 0;
}
</style>