<template>
	<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-4">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
			<!-- Carousel Section -->
			<div class="lg:col-span-9">
				<div class="relative bg-white rounded-lg overflow-hidden shadow-sm">
					<!-- PrimeVue Carousel Container -->
					<div class="relative h-96 overflow-hidden">
						<Carousel
							:value="slides"
							:numVisible="1"
							:numScroll="1"
							:circular="true"
							:autoplayInterval="4000"
							v-model:page="currentSlide"
							:showIndicators="false"
							:showNavigators="false"
							class="h-full">
							<template #item="{ data, index }">
								<img :src="data.image" :alt="data.alt" class="w-full h-96 object-cover" />
							</template>
						</Carousel>

						<!-- Navigation Arrows -->
						<button
							@click="previousSlide"
							class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110">
							<svg class="w-6 h-6 text-[#020039]" fill="currentColor" viewBox="0 0 320 512">
								<path
									d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
							</svg>
						</button>
						<button
							@click="nextSlide"
							class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110">
							<svg class="w-6 h-6 text-[#020039]" fill="currentColor" viewBox="0 0 320 512">
								<path
									d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
							</svg>
						</button>
					</div>
					<!-- Carousel Indicators -->
					<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
						<button
							v-for="(slide, index) in slides"
							:key="`indicator-${index}`"
							@click="currentSlide = index"
							:class="[
								'w-3 h-3 rounded-full transition-all duration-200',
								index === currentSlide ? 'bg-white scale-110' : 'bg-white/60 hover:bg-white/80',
							]" />
					</div>
				</div>
			</div>
			<!-- Media Releases Section -->
			<div class="lg:col-span-3">
				<div class="bg-white border border-gray-400 rounded-md overflow-hidden h-[360px] flex flex-col">
					<!-- Header -->
					<div class="bg-[#020039] text-white py-3">
						<h2 class="text-xl font-semibold text-center">Media Releases</h2>
					</div>
					<!-- Content Area -->
					<div class="flex-1 overflow-hidden p-2">
						<div class="h-full overflow-y-auto space-y-1">
							<div v-for="release in mediaReleases" :key="release.id" class="p-2 hover:bg-gray-50 transition-colors duration-200">
								<NuxtLink :to="release.link" class="block text-decoration-none group">
									<h4 class="text-sky-500 text-sm font-medium mb-1 group-hover:text-sky-600 transition-colors">
										{{ release.date }}
									</h4>
									<h4 class="text-black text-sm leading-tight group-hover:text-gray-800 transition-colors">
										{{ release.title }}
									</h4>
								</NuxtLink>
								<hr class="mt-1 mb-1 border-gray-200" />
							</div>
						</div>
					</div>
					<!-- Read More Button -->
					<div class="p-2 border-t border-gray-100">
						<NuxtLink to="/media-releases">
							<button class="w-full bg-[#020039] hover:bg-[#030048] text-white py-2 px-4 rounded text-sm font-medium transition-colors duration-200">
								Read More
							</button>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import Carousel from "primevue/carousel";

	// Carousel data
	const slides = ref([
		{ image: "/images/slider/05a.jpg", alt: "Slide 1" },
		{ image: "/images/slider/08a.jpg", alt: "Slide 2" },
		{ image: "/images/slider/02.jpg", alt: "Slide 3" },
		{ image: "/images/slider/03.jpg", alt: "Slide 4" },
		{ image: "/images/slider/06a.jpg", alt: "Slide 5" },
		{ image: "/images/slider/07a.jpg", alt: "Slide 6" },
	]);

	// Media releases data
	const mediaReleases = ref([
		{
			id: 1,
			date: "31 May 2020",
			title: "বর্ধিত বাস ভাড়া স্থগিত ও বিআরটিএ'র ব্যয় বিশ্লেষণ কমিটি পুনর্গঠন করুন",
			link: "/বর্ধিত-বাস-ভাড়া-স্থগিত-ও-বিআরটিএ'র-ব্যয়-বিশ্লেষণ-কমিটি-পুনর্গঠন-করুন",
		},
		{
			id: 2,
			date: "27 April 2020",
			title: "ঈদুল ফিতর পর্যন্ত গরুর মাংসসহ নিত্য পণ্যের সর্বোচ্চ মূল্য নির্ধারণের দাবি জানিয়েছে সিসিএস",
			link: "/গরুর-মাংসসহ-নিত্য-পণ্যের-সর্বোচ্চ-মূল্য-নির্ধারণের-দাবি",
		},
		{
			id: 3,
			date: "10 April 2020",
			title: "করোনায় দ্রব্য মূল্য বৃদ্ধি অমানবিক ও শাস্তিযোগ্য; রমজানেরআগেই কার্যকর পদক্ষে নিতে হবে: সিসিএস",
			link: "/করোনায়-দ্রব্য-মূল্য-বৃদ্ধি-অমানবিক-ও-শাস্তিযোগ্য",
		},
	]);

	// Carousel state
	const currentSlide = ref(0);
	const nextSlide = () => {
		currentSlide.value = (currentSlide.value + 1) % slides.value.length;
	};
	const previousSlide = () => {
		currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1;
	};
</script>

<style>
	/* Custom font for Bengali text (if needed) */
	.bengali-font {
		font-family: "SolaimanLipi", "Kalpurush", sans-serif;
	}
</style>
