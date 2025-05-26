<template>
	<div class="advisor-section py-8">
		<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-8">
			<!-- Section Header -->
			<div class="bg-[#020039] text-white text-center py-3 mb-5 rounded">
				<h2 class="text-3xl font-bold tracking-[0.2em]">Advisor Body</h2>
			</div>

			<!-- Advisors Carousel -->
			<Carousel :value="advisors" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="advisor-carousel">
				<template #item="slotProps">
					<div class="advisor-card bg-white rounded-lg shadow-md p-0 m-2 h-full">
						<div class="relative">
							<img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-full h-60 object-cover" />
						</div>
						<div class="p-4 text-center">
							<h3 class="text-xl font-bold text-gray-800 mb-2">{{ slotProps.data.name }}</h3>
							<p class="text-gray-600 mb-2">{{ slotProps.data.title }}</p>
							<p class="text-gray-600 mb-4">{{ slotProps.data.organization }}</p>

							<!-- Social Media Icons -->
							<div class="flex justify-center gap-4 mb-4">
								<a href="#" class="text-gray-500 hover:text-gray-700">
									<i class="pi pi-facebook"></i>
								</a>
								<a href="#" class="text-gray-500 hover:text-gray-700">
									<i class="pi pi-twitter"></i>
								</a>
								<a href="#" class="text-gray-500 hover:text-gray-700">
									<i class="pi pi-linkedin"></i>
								</a>
								<a href="#" class="text-gray-500 hover:text-gray-700">
									<i class="pi pi-whatsapp"></i>
								</a>
							</div>

							<!-- Contact Button -->
							<Button label="Contact" class="w-full bg-navy-900 text-white border-none hover:bg-navy-800" />
						</div>
					</div>
				</template>
			</Carousel>
		</div>
	</div>
</template>

<script setup>



	const advisors = ref([
		{
			id: 1,
			name: "Hossain Zillur Rahman",
			title: "Chief Advisor",
			organization: "Conscious Consumers Society",
			image: "/images/advisors/1.jpg",
			socialLinks: {
				facebook: "#",
				twitter: "#",
				linkedin: "#",
				whatsapp: "#",
			},
			contactInfo: {
				email: "hossain.zillur@example.com",
				phone: "+880 1XX XXX XXXX",
			},
		},
		{
			id: 2,
			name: "Kazi Firoz Rashid",
			title: "Advisor",
			organization: "Conscious Consumers Society",
			image: "/images/advisors/2.jpg",
			socialLinks: {
				facebook: "#",
				twitter: "#",
				linkedin: "#",
				whatsapp: "#",
			},
			contactInfo: {
				email: "kazi.firoz@example.com",
				phone: "+880 1XX XXX XXXX",
			},
		},
		{
			id: 3,
			name: "M. Zakir Hossain Khan",
			title: "Advisor",
			organization: "Conscious Consumers Society",
			image: "/images/advisors/3.jpg",
			socialLinks: {
				facebook: "#",
				twitter: "#",
				linkedin: "#",
				whatsapp: "#",
			},
			contactInfo: {
				email: "zakir.hossain@example.com",
				phone: "+880 1XX XXX XXXX",
			},
		},
		{
			id: 4,
			name: "M. Zakir Hossain Khan",
			title: "Advisor",
			organization: "Conscious Consumers Society",
			image: "/images/advisors/3.jpg",
			socialLinks: {
				facebook: "#",
				twitter: "#",
				linkedin: "#",
				whatsapp: "#",
			},
			contactInfo: {
				email: "zakir.hossain@example.com",
				phone: "+880 1XX XXX XXXX",
			},
		},
		
	]);

	
	const responsiveOptions = ref([
		{
			breakpoint: "1199px",
			numVisible: 3,
			numScroll: 1,
		},
		{
			breakpoint: "991px",
			numVisible: 2,
			numScroll: 1,
		},
		{
			breakpoint: "767px",
			numVisible: 1,
			numScroll: 1,
		},
	]);

	
	const fetchAdvisors = async () => {
		try {
			
		} catch (error) {
			console.error("Error fetching advisors data:", error);
		}
	};

	onMounted(() => {
		// fetchAdvisors();
	});
</script>

<style lang="scss" scoped>
	
	.advisor-section {
		.bg-navy-900 {
			background-color: #0a0a3a; 
		}

		.bg-navy-800 {
			background-color: #111155; 
		}

		
		:deep(.p-carousel-prev),
		:deep(.p-carousel-next) {
			color: #0a0a3a;
			&:hover {
				background-color: rgba(10, 10, 58, 0.1);
			}
		}

		
		.advisor-card {
			transition: transform 0.3s ease;
			&:hover {
				transform: translateY(-5px);
			}
		}
	}
</style>
