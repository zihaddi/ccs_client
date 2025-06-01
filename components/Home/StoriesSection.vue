<template>
	<div class="bg-gradient-to-t from-white to-orange-50 py-10">
		<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-4">
			<!-- Header -->
			<div class="text-center mb-12">
				<h1 class="text-4xl md:text-5xl font-bold text-purple-900 mb-8">Some Remarkable Stories</h1>
			</div>

			<!-- Timeline for Desktop -->
			<div class="hidden md:block mx-auto">
				<Timeline :value="displayStories" align="alternate" class="customized-timeline">
					<template #marker="slotProps">
						<div class="flex w-8 h-8 items-center justify-center bg-red-500 text-white rounded-full shadow-lg">
							<i class="pi pi-star text-sm"></i>
						</div>
					</template>

					<template #opposite="slotProps">
						<!-- Image Section -->

						<div class="flex mt-4 min-h-[300px] max-h-94 flex-col gap-6 items-center">
							<div :class="slotProps.index % 2 === 0 ? 'order-1' : 'order-2 md:order-1'">
								<img
									:src="slotProps.item.image"
									:alt="slotProps.item.title"
									class="w-full rounded-lg shadow-md hover:shadow-lg transition-all duration-300" />
							</div>
						</div>
					</template>

					<template #content="slotProps">
						<Card class="mt-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
							<template #content>
								<div class="flex flex-col gap-6 items-center">
									<!-- Content Section -->
									<div class="max-h-96 min-h-[300px]" :class="slotProps.index % 2 === 0 ? 'order-2' : 'order-1 md:order-2'">
										<h2 class="text-2xl md:text-3xl font-bold text-red-600 mb-4">
											{{ slotProps.item.title }}
										</h2>
										<p class="text-purple-800 text-lg leading-relaxed">
											{{ slotProps.item.description }}
										</p>
										<div class="mt-4">
											<Badge :value="slotProps.item.category || 'Achievement'" severity="success" class="mr-2" />
											<Badge :value="slotProps.item.year || '2020'" severity="info" />
										</div>
									</div>
								</div>
							</template>
						</Card>
					</template>
				</Timeline>
			</div>

			<!-- Mobile View - Cards only -->
			<div class="md:hidden mx-auto">
				<div class="flex flex-col space-y-8">
					<div v-for="story in displayStories" :key="story.id" class="w-full">
						<Card class="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
							<template #content>
								<div class="flex flex-col gap-6 items-center">
									<!-- Image Section -->
									<div>
										<img :src="story.image" :alt="story.title" class="w-full rounded-lg shadow-md hover:shadow-lg transition-all duration-300" />
									</div>

									<!-- Content Section -->
									<div>
										<h2 class="text-2xl font-bold text-red-600 mb-4">
											{{ story.title }}
										</h2>
										<p class="text-purple-800 text-lg leading-relaxed">
											{{ story.description }}
										</p>
										<div class="mt-4">
											<Badge :value="story.category || 'Achievement'" severity="success" class="mr-2" />
											<Badge :value="story.year || '2020'" severity="info" />
										</div>
									</div>
								</div>
							</template>
						</Card>
					</div>
				</div>
			</div>

			<!-- More Stories Button -->
			<div class="text-center mt-12">
				<Button
					label="More Stories"
					severity="secondary"
					outlined
					size="large"
					class="px-8 py-3 text-xl rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105"
					@click="handleMoreStories" />
			</div>
		</div>
	</div>
</template>

<script setup>
	// Define component props if needed
	const props = defineProps({
		stories: {
			type: Array,
			default: () => [],
		},
	});

	// Handle more stories button click
	const handleMoreStories = () => {
		console.log("Navigating to more stories...");
	};

	const defaultStories = [
		{
			id: 1,
			title: "CCS's writ: Consumer Historic Victory",
			description:
				"The High Court on May 12, 2020 banned production and sale of 52 sub-standard food products found to be injurious to human health. A division bench comprising Justice Sheikh Hassan Arif and Justice Razik-Al Jalil made this landmark decision that protected millions of consumers.",
			image: "/images/stories/historic-victory.jpg",
			category: "Legal Victory",
			year: "2020",
			date: "May 12, 2020",
		},
		{
			id: 2,
			title: "CCS receives 'International Youth Award'",
			description:
				"Palash Mahmod has received the 'International Youth Award' in Delhi for his outstanding contribution to preventing adulteration of food and protecting consumer rights. This recognition highlights the global impact of CCS's work in food safety.",
			image: "/images/stories/International Youth Award.jpg",
			category: "International Recognition",
			year: "2021",
			date: "2021",
		},
		{
			id: 3,
			title: "A troop against food adulteration",
			description:
				"Each year, millions of people are affected by different diseases due to unsafe food in Bangladesh. These diseases include kidney-related problems and cancers, among others. CCS continues to lead the fight against food adulteration through systematic campaigns and awareness programs.",
			image: "/images/stories/troop.jpg",
			category: "Public Health",
			year: "Ongoing",
			date: "Ongoing Campaign",
		},
	];

	// Use stories from props or default stories
	const displayStories = computed(() => (props.stories.length > 0 ? props.stories : defaultStories));
</script>

<style scoped>
	.bg-gradient-to-t {
		background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgb(255, 242, 232));
	}

	/* Timeline customization */
	:deep(.customized-timeline .p-timeline-event-marker) {
		border: 2px solid #ef4444;
		background-color: white;
	}

	:deep(.customized-timeline .p-timeline-event-connector) {
		background-color: #fca5a5;
		width: 3px;
	}

	/* Card hover effects */
	:deep(.p-card) {
		border: 1px solid #fecaca;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
	}

	:deep(.p-card:hover) {
		border-color: #ef4444;
		box-shadow: 0 20px 40px rgba(239, 68, 68, 0.1);
	}

	/* Image hover effects */
	img {
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	img:hover {
		transform: scale(1.02);
	}

	/* Badge styling */
	:deep(.p-badge) {
		font-size: 0.875rem;
		padding: 0.5rem 1rem;
	}

	/* Button styling */
	:deep(.p-button.p-button-outlined.p-button-secondary) {
		border-width: 2px;
		font-weight: 600;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.text-4xl {
			font-size: 2rem;
		}

		.text-3xl {
			font-size: 1.875rem;
		}

		/* Stack timeline vertically on mobile */
		:deep(.p-timeline.p-timeline-horizontal) {
			flex-direction: column;
		}
	}

	/* Custom timeline spacing */
	:deep(.p-timeline .p-timeline-event) {
		margin-bottom: 2rem;
	}

	:deep(.p-timeline .p-timeline-event:last-child) {
		margin-bottom: 0;
	}
</style>
