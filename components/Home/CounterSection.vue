<template>
	<div class="relative bg-cover bg-center bg-no-repeat" style="background-image: url('/images/counter/counter-bg.jpg')">
		<!-- Overlay -->
		<div class="absolute inset-0 bg-black bg-opacity-50"></div>

		<!-- Content -->
		<div class="relative z-10 container mx-auto px-4 py-24">
			<div ref="counterContainer" class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<!-- Branches Card -->
				<Card class="bg-black bg-opacity-30 border border-white rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300">
					<template #content>
						<div class="p-8">
							<div class="mb-6">
								<img src="/images/counter/branches.png" alt="Branches" class="w-20 h-20 mx-auto object-contain" />
							</div>

							<div class="text-5xl font-bold text-white mb-4">
								{{ animatedBranches }}
							</div>

							<h2 class="text-xl font-semibold text-white mb-2">Branches</h2>

							<Divider class="my-2" />

							<p class="text-sm text-blue-100">Conscious Consumers Society's</p>
						</div>
					</template>
				</Card>

				<!-- District Card -->
				<Card class="bg-black bg-opacity-30 border border-white rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300">
					<template #content>
						<div class="p-8">
							<div class="mb-6">
								<img src="/images/counter/distric.png" alt="District" class="w-20 h-20 mx-auto object-contain" />
							</div>

							<div class="text-5xl font-bold text-white mb-4">
								{{ animatedDistricts }}
							</div>

							<h2 class="text-xl font-semibold text-white mb-2">District</h2>

							<Divider class="my-2" />

							<p class="text-sm text-blue-100">Conscious Consumers Society's</p>
						</div>
					</template>
				</Card>

				<!-- Events Card -->
				<Card class="bg-black bg-opacity-30 border border-white rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300">
					<template #content>
						<div class="p-8">
							<div class="mb-6">
								<img src="/images/counter/event.png" alt="Events" class="w-20 h-20 mx-auto object-contain" />
							</div>

							<div class="text-5xl font-bold text-white mb-4">
								{{ animatedEvents }}
							</div>

							<h2 class="text-xl font-semibold text-white mb-2">Events</h2>

							<Divider class="my-2" />

							<p class="text-sm text-blue-100">Conscious Consumers Society's</p>
						</div>
					</template>
				</Card>

				<!-- Members Card -->
				<Card class="bg-black bg-opacity-30 border border-white rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300">
					<template #content>
						<div class="p-8">
							<div class="mb-6">
								<img src="/images/counter/members.png" alt="Members" class="w-20 h-20 mx-auto object-contain" />
							</div>

							<div class="text-5xl font-bold text-white mb-4">
								{{ animatedMembers }}
							</div>

							<h2 class="text-xl font-semibold text-white mb-2">Members</h2>

							<Divider class="my-2" />

							<p class="text-sm text-blue-100">Conscious Consumers Society's</p>
						</div>
					</template>
				</Card>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const counters = ref({
	branches: 40,
	districts: 26,
	events: 80,
	members: 8000,
});

const animatedBranches = ref(0);
const animatedDistricts = ref(0);
const animatedEvents = ref(0);
const animatedMembers = ref(0);

const counterContainer = ref(null);
const lastScrollY = ref(0);
let observer = null;

const animateCounter = (target, current, setter, duration = 2000) => {
	const start = Date.now();
	const startValue = current.value;

	const animate = () => {
		const elapsed = Date.now() - start;
		const progress = Math.min(elapsed / duration, 1);

		// Easing function (ease out)
		const easeOut = 1 - Math.pow(1 - progress, 3);

		const currentValue = Math.floor(startValue + (target - startValue) * easeOut);
		setter.value = currentValue;

		if (progress < 1) {
			requestAnimationFrame(animate);
		}
	};

	requestAnimationFrame(animate);
};


const updateScrollPosition = () => {
	lastScrollY.value = window.scrollY;
};

onMounted(() => {
	
	lastScrollY.value = window.scrollY;

	// Set up scroll tracking
	window.addEventListener("scroll", updateScrollPosition);

	// Set up intersection observer
	observer = new IntersectionObserver(
		(entries) => {
			const entry = entries[0];
			const currentScrollY = window.scrollY;

			if (entry.isIntersecting && currentScrollY >= lastScrollY.value) {
				// Reset counters to 0 before animating
				animatedBranches.value = 0;
				animatedDistricts.value = 0;
				animatedEvents.value = 0;
				animatedMembers.value = 0;

				// Start animations with staggered delays
				setTimeout(() => animateCounter(counters.value.branches, animatedBranches, animatedBranches), 0);
				setTimeout(() => animateCounter(counters.value.districts, animatedDistricts, animatedDistricts), 200);
				setTimeout(() => animateCounter(counters.value.events, animatedEvents, animatedEvents), 400);
				setTimeout(() => animateCounter(counters.value.members, animatedMembers, animatedMembers), 600);
			}
		},
		{
			threshold: 0.3, 
		}
	);

	if (counterContainer.value) {
		observer.observe(counterContainer.value);
	}
});

onBeforeUnmount(() => {
	// Clean up
	if (observer) {
		observer.disconnect();
	}
	window.removeEventListener("scroll", updateScrollPosition);
});
</script>

<style scoped>

.container {
	scroll-behavior: smooth;
}


img {
	filter: brightness(1.1);
}


:deep(.p-divider) {
	border-color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 640px) {
	.text-5xl {
		font-size: 2.5rem;
	}
}
</style>