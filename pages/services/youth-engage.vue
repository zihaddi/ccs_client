<template>
	<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 z-[1]">
		<div class="split-carousel-container">
			<!-- Header Section -->
			<div class="text-center mb-8 pt-10 text-white">
				<h1 class="text-4xl md:text-3xl font-bold mb-2">Conscious Consumers Society (CCS)</h1>
				<h2 class="text-yellow-400 text-2xl md:text-3xl font-semibold">Dhaka</h2>
			</div>

			<!-- Carousel Section with Split Background -->
			<div class="z-[100] rounded-lg overflow-hidden shadow-xl mb-8">
				<Carousel
					:value="carouselImages"
					:numVisible="1"
					:numScroll="1"
					:showIndicators="true"
					:showNavigators="true"
					:autoplayInterval="5000"
					:circular="true"
					class="carousel-custom-styling">
					<template #item="slotProps">
						<div class="carousel-item-wrapper split-background">
							<img :src="slotProps.data.src" :alt="slotProps.data.alt" class="w-full h-80 md:h-96 lg:h-[500px] object-cover" />
						</div>
					</template>
				</Carousel>
			</div>
		</div>

		<!-- Button Section -->
		<div class="text-center">
			<div class="flex flex-wrap justify-center gap-2">
				<Button
					v-for="(button, index) in buttons"
					:key="index"
					:label="button.label"
					outlined
					severity="danger"
					class="mb-2 mx-1 px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-red-500 hover:text-white hover:border-red-500 hover:shadow-lg"
					@click="handleButtonClick(button.action)" />
			</div>
		</div>

		<div class="flex flex-wrap my-6">
			<!-- President Secretary Cards Section -->
			<div class="w-full md:w-2/3 px-4 ">
				<div class="p-0 ">
					<h1 class="text-2xl bg-[#020039] text-white text-center py-3 mb-5 rounded font-bold mb-4">Islami University Branch Committee</h1>
					<hr class="mb-4 border-t border-blue-900" />

					<div class="flex flex-wrap -mx-3">
						<!-- President Card -->
						<div class="w-full md:w-1/2 px-3 mb-3">
							<Card class="w-full">
								<template #header>
									<img src="/images/slots/cs-blank.jpg" class="w-full  object-cover" alt="President" />
								</template>
								<template #content>
									<div class="text-center">
										<div class="text-xl -mt-4 mb-2">Coming Soon</div>
										<div class="text-base text-gray-500 mb-4">President</div>

										<div class="flex justify-center space-x-2 -mb-2">
											<a href="#" class="p-2 hover:text-blue-600 transition-colors">
												<i class="pi pi-facebook text-lg"></i>
											</a>
											<a href="#" class="p-2 hover:text-blue-400 transition-colors">
												<i class="pi pi-twitter text-lg"></i>
											</a>
											<a href="#" class="p-2 hover:text-blue-700 transition-colors">
												<i class="pi pi-linkedin text-lg"></i>
											</a>
										</div>
									</div>
								</template>
							</Card>
						</div>

						<!-- Secretary Card -->
						<div class="w-full md:w-1/2 px-3 mb-3">
							<Card class="w-full">
								<template #header>
									<img src="/images/slots/cs-blank.jpg" class="w-full  object-cover" alt="Secretary" />
								</template>
								<template #content>
									<div class="text-center">
										<div class="text-xl -mt-4 mb-2">Coming Soon</div>
										<div class="text-base text-gray-500 mb-4">Secretary</div>

										<div class="flex justify-center space-x-2 -mb-2">
											<a href="#" class="p-2 hover:text-blue-600 transition-colors">
												<i class="pi pi-facebook text-lg"></i>
											</a>
											<a href="#" class="p-2 hover:text-blue-400 transition-colors">
												<i class="pi pi-twitter text-lg"></i>
											</a>
											<a href="#" class="p-2 hover:text-blue-700 transition-colors">
												<i class="pi pi-linkedin text-lg"></i>
											</a>
										</div>
									</div>
								</template>
							</Card>
						</div>
					</div>
				</div>
			</div>

			<!-- Branch Notice and Central Notice Section -->
			<div class="w-full md:w-1/3 px-4">
				<!-- Branch Notice -->
				<div class="border-2 border-orange-500 rounded-lg mb-4">
					<div class="bg-orange-500 text-white text-center py-2">
						<div class="text-xl font-semibold">Branch Notice</div>
					</div>

					<div class="p-4 text-center">
						<div class="py-1">
							<a href="#" class="text-black no-underline hover:text-blue-600 transition-colors">
								<div class="text-red-700 text-sm font-medium mb-1">27 April 2020</div>
								<div class="text-base">Branch Notice will goes here Branch Notice will goes here</div>
							</a>
							<hr class="my-2 border-gray-300" />
						</div>

						<div class="py-1">
							<a href="#" class="text-black no-underline hover:text-blue-600 transition-colors">
								<div class="text-red-700 text-sm font-medium mb-1">27 April 2020</div>
								<div class="text-base">Branch Notice will goes here Branch Notice will goes here</div>
							</a>
							<hr class="my-2 border-gray-300" />
						</div>

						<Button label="Read More" class="w-full mt-2 mb-2" size="small" outlined />
					</div>
				</div>

				<!-- Central Notice -->
				<div class="bg-white border border-gray-500 rounded-sm overflow-hidden" style="height: 310px">
					<div class="bg-gray-600 text-white text-center py-2">
						<h2 class="text-xl font-semibold m-0">Central Notice</h2>
					</div>

					<div class="p-2" style="height: 220px; overflow: hidden">
						<div class="p-2">
							<a href="#" class="text-black no-underline hover:text-blue-600 transition-colors">
								<div class="text-sky-500 text-base font-medium mb-1">27 April 2020</div>
								<div class="text-base leading-tight">ঈদুল ফিতর পর্যন্ত গরুর মাংসসহ নিত্য পণ্যের সর্বোচ্চ মূল্য নির্ধারণের দাবি জানিয়েছে সিসিএস</div>
							</a>
							<hr class="my-2 border-gray-300" />
						</div>

						<div class="p-2">
							<a href="#" class="text-black no-underline hover:text-blue-600 transition-colors">
								<div class="text-sky-500 text-base font-medium mb-1">10 April 2020</div>
								<div class="text-base leading-tight">
									করোনায় দ্রব্য মূল্য বৃদ্ধি অমানবিক ও শাস্তিযোগ্য; রমজানেরআগেই কার্যকর পদক্ষে নিতে হবে: সিসিএস
								</div>
							</a>
							<hr class="my-2 border-gray-300" />
						</div>

						<div class="p-2">
							<a href="#" class="text-black no-underline hover:text-blue-600 transition-colors">
								<div class="text-sky-500 text-base font-medium mb-1">30 March 2020</div>
								<div class="text-base leading-tight">করোনায় স্বেচ্ছাসেবী'দের উদ্যোগে দুই শাতাধিক পরিবারকে খাদ্য সামগ্রি প্রদান</div>
							</a>
							<hr class="my-2 border-gray-300" />
						</div>
					</div>

					<div class="p-2">
						<Button label="Read More" severity="secondary" class="w-full" size="small" @click="handleReadMore('central')" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	// Carousel images data
	const carouselImages = ref([
		{
			src: "/images/slots/sl-01.jpg",
			alt: "CCS Dhaka Branch Image 1",
		},
		{
			src: "/images/slots/sl-02.jpg",
			alt: "CCS Dhaka Branch Image 2",
		},
		{
			src: "/images/slots/sl-03.jpg",
			alt: "CCS Dhaka Branch Image 3",
		},
	]);

	// Button data
	const buttons = ref([
		{ label: "Member List", action: "memberList" },
		{ label: "Events", action: "events" },
		{ label: "Activities", action: "activities" },
		{ label: "Resources", action: "resources" },
		{ label: "Contact", action: "contact" },
	]);

	// Handle button clicks
	const handleButtonClick = (action) => {
		console.log(`Button clicked: ${action}`);
		// Add your navigation logic here
		// For example: navigateTo(`/${action}`)
	};

	// Handle read more actions
	const handleReadMore = (type) => {
		console.log(`Read more clicked for: ${type}`);
		// Add your navigation logic here
		// For example: navigateTo(`/${type}-notices`)
	};

	// Handle social media links
	const handleSocialClick = (platform, member) => {
		console.log(`${platform} clicked for ${member}`);
		// Add your social media logic here
	};
</script>

<style scoped>
	/* Split Background Styling for Carousel */
	.split-carousel-container {
		position: relative;
		background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 52%, rgb(255 127 0) 52%, rgba(14, 32, 114, 1) 100%);
	}

	.carousel-item-wrapper {
		position: relative;
       
	}

	.carousel-item-wrapper::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 50%;
        
		z-index: 100;
		pointer-events: none;
	}

	.carousel-item-wrapper::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		bottom: 0;
		/* background: rgba(255, 255, 255, 0.3); */
		z-index: 100;
		pointer-events: none;
	}

	/* Custom styling for carousel */
	.carousel-custom-styling {
		border-radius: 0.5rem;
	}
</style>
