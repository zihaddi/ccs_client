<template>
	<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-8">
		<!-- Section Header -->
		<div class="row">
			<div>
				<div class="section-title text-center mb-12">
					<div class="animated fadeInUp" style="animation-duration: 1s">
						<h4 class="subtitle">
							<span class="theme-gradient bg-gradient-to-r from-[#059dff] via-[#6549d5] via-[#e33fa1] to-[#fb5343] bg-clip-text text-transparent"
								>Our Experts.</span
							>
						</h4>
					</div>
					<div class="animated fadeInUp" style="animation-duration: 1s">
						<h2 class="title w-600 mb--20 text-4xl font-semibold mb-6"><span class="title_1 text-orange-400">Executive</span> Body</h2>
					</div>
					<!-- Divider -->
					<div class="flex items-center justify-center mb-6">
						<div class="h-px bg-gray-300 flex-1 max-w-52"></div>
						<Icon name="mdi:account" class="mx-4 text-gray-500 text-2xl" />
						<div class="h-px bg-gray-300 flex-1 max-w-52"></div>
					</div>
				</div>
			</div>
		</div>

		<!-- Team Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
			<!-- Visible Team Members -->
			<div v-for="(member, index) in visibleMembers" :key="index" class="animated fadeInUp" style="animation-duration: 1s">
				<Card class="h-full hover:shadow-lg transition-shadow duration-300 bg-[#0101]">
					<template #content>
						<div class="text-center p-2">
							<!-- Profile Image -->
							<div class="mb-2">
								<img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full mx-auto object-fit border-4 border-[#020039]" />
							</div>

							<!-- Member Info -->
							<h3 class="text-xl font-bold mb-1">{{ member.name }}</h3>
							<p
								class="theme-gradient bg-gradient-to-r from-[#059dff] via-[#6549d5] via-[#e33fa1] to-[#fb5343] font-bold bg-clip-text text-transparent font-bold mb-2">
								{{ member.role }}
							</p>

							<!-- Location -->
							<div class="flex italic items-center justify-center mb-2 text-gray-600">
								<Icon name="mdi:map-marker" class="mr-1" />
								<span>{{ member.location }}</span>
							</div>

							<p class="text-gray-600 mb-3">{{ member.organization }}</p>

							<!-- Social Icons -->
							<div class="flex justify-center space-x-3 mb-3">
								<Button
									icon="pi pi-facebook"
									class="p-button-rounded p-button-outlined p-button-sm"
									style="color: #020039"
									@click="openSocialLink('facebook')" />
								<Button
									icon="pi pi-twitter"
									class="p-button-rounded p-button-outlined p-button-sm"
									style="color: #020039"
									@click="openSocialLink('twitter')" />
								<Button
									icon="pi pi-linkedin"
									class="p-button-rounded p-button-outlined p-button-sm"
									style="color: #020039"
									@click="openSocialLink('linkedin')" />
							</div>

							<!-- Read More Button -->
							<Button v-if="member.bio" label="Read About Him" style="background-color: #020039" @click="showMemberDialog(member)" />
						</div>
					</template>
				</Card>
			</div>
		</div>

		<!-- Show More Button -->
		<div class="text-center" v-if="!showAll && executiveMembers.length > 6">
			<Button label="Show More" class="p-button-outlined p-button-danger px-8 py-2 text-lg" @click="toggleShowAll" />
		</div>

		<!-- Member Details Dialog -->
		<Dialog v-model:visible="memberDialogVisible" :modal="true" :closable="true" :style="{ width: '50vw' }" class="p-fluid">
			<template #header>
				<h2 class="text-xl font-bold text-red-600">{{ selectedMember?.name }}, {{ selectedMember?.role }}</h2>
			</template>

			<div v-if="selectedMember" class="text-base leading-relaxed">
				<div v-html="selectedMember.bio"></div>
			</div>

			<template #footer>
				<Button label="Close" class="p-button-secondary" @click="memberDialogVisible = false" />
			</template>
		</Dialog>
	</div>
</template>

<script setup>
	import { ref, computed } from "vue";

	// Reactive data
	const showAll = ref(false);
	const memberDialogVisible = ref(false);
	const selectedMember = ref(null);

	// Executive members data
	const executiveMembers = ref([
		{
			name: "Mr. Ahsan Habib",
			role: "Acting President",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/RZjSy6PK/Ahsan-Habib.jpg",
			bio: `
      <p class="mb-4">Mr. Ahsan Habib is the acting President of Conscious Consumers Society (CCS). He is a Master of Social Science from Jahangirnagar. He is from Madaripur, a southern district of Bangladesh. Mr. Habib is profession in teaching now Senior Lecturer of Green University of Bangladesh. He has completed different research on social issues and some of that has been published in national and international research journal.</p>
    `,
		},
		{
			name: "Mr. Palash Mahmud",
			role: "Executive Director",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/Y98wrhxX/Palash-Mahmud.jpg",
			bio: `
      <p class="mb-4">Mr. Palash Mahmud Is the founder of ‘Conscious Consumers Society’ (CCS). Now he is serving as the Executive Director. He is an M.A. from Jahangirnagar University. He is from Khulna, a southern district of Bangladesh now residence in Dhaka. Mr. Palash is profession in journalism at a reputed leading news paper of the country. He has bright organizing background from childhood. Mr. Palash is former President of ‘Jahangirnagar University Journalist Association’ (JUJA) and General Secretary (GS) of ‘Student Union of History Department’. He is also the founder of different student and social organization. He is a member of ‘Dhaka Reporters Unity’ (DRU).</p>
    `,
		},
		{
			name: "Kamal Hossain",
			role: "Executive Member",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/4dHFMyS7/Kamal-Hosain.jpg",
			bio: `
      <p class="mb-4">Md. Kamal Hosain is and youth organizer from Khulna, Southern district of Bangladesh now residence in Dhaka. He is serving as the treasurer with CCS. He has completed M.A. from Dhaka University. Kamal Hosain is private job holder also a dedicated consumer activist. He worked with different social organization in student life also now.</p>
      
    
    `,
		},
		{
			name: "Khandaker Rashedul Haque",
			role: "Executive Member",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/XNsGd4mW/Zakir-Hossain-Khan.jpg",
			bio: `
      <p class="mb-4">Khandaker Rashedul Haque, PhD is the Chairman of Consumer Care Society (CCS). He is an additional secretary (Retired.) of Bangladesh Government. Hecompleted Post Graduation from the University of Birmingham, England in Development Administration. He received PhD degree from the University of Dhakaalso graduation and Master Degree from the University, both in major English Language and Literature.

After completing Master Degree, Dr. Haque joined Ministry of Establishment, Bangladesh Government as a BCS (Bangladesh Civil Service Commission) cadre. During his 28 years’ service, he served with several national and international institution and organization.

Dr. Hoque served in the National Institute of Population Research & Training (NIPORT), Center for Development Studies (CDS), Small & Medium Enterprise Foundation (SMEF), the Ministry of Industries, Center for Women and Child Development (CWCD), Center for Human Development (CHD) etc.</p>
      
    
    `,
		},
		{
			name: "Dina Rashid",
			role: "Executive Member",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/XNsGd4mW/Zakir-Hossain-Khan.jpg",
			bio: `
      <p class="mb-4">Ms. Dina Rashid is an energetic and conscious women entrepreneur. He is an M.A. from Jahangirnagar University. She is from Savar, beside Dhaka city now residence in Dhaka. Dina Rashid is dedicated consumer activist.</p>
      
  
    `,
		},
		{
			name: "Mahfuzur Rahman",
			role: "Treasurer",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/XNsGd4mW/Zakir-Hossain-Khan.jpg",
			bio: `
        <p class="mb-4">Mr. Mahfuzur Rahman is a Master of Social Science from Jahangirnagar University. He is from Natore northern district of Bangladesh. He is Former President of ‘Jahangirnagar Sanskritik Jote’ and vice-president of ‘Bangladesh Student Union’, Jahangirnagar University. Now he is profession in journalism at Television Media in Dhaka city also residence here. Mr. Mahfuzur is a young, energetic and dedicated consumer activist.</p>
        `,
		},
		// Hidden members (show more content)
		{
			name: "Muhammad Jamal Hossain",
			role: "Vice President",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/XNsGd4mW/Zakir-Hossain-Khan.jpg", // Replace with actual image
			bio: `
        <p class="mb-4">Muhammad Jamal Hossain is the Vice-President of Conscious Consumers Society (CCS) He is a reputed journalist leader in the country. He is from Pirojpur, a southern district of Bangladesh now residence in Dhaka. He is an M.A. from Jagannath University. He has bright journalism background with various leading news paper in Bangladesh. Mr. Jamal Hossain is former Organizing Secretary (OS) of ‘Dhaka Reporters Unity’ (DRU) and Former ‘Office Secretary’ of ‘Dhaka Reporters Unity’ (DRU). Mr. Jamal is a Member of ‘National Press Club’, Dhaka Union of Journalist’ (DUJ), ‘Law Reporters Forum’ (LRF)’, ‘Reporters Against Corruption’ (RAC) and many others.</p>
        `,
		},
		{
			name: "Muhammad Jamal Hossain",
			role: "Vice President",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/XNsGd4mW/Zakir-Hossain-Khan.jpg", // Replace with actual image
			bio: `
        <p class="mb-4">Muhammad Jamal Hossain is the Vice-President of Conscious Consumers Society (CCS) He is a reputed journalist leader in the country. He is from Pirojpur, a southern district of Bangladesh now residence in Dhaka. He is an M.A. from Jagannath University. He has bright journalism background with various leading news paper in Bangladesh. Mr. Jamal Hossain is former Organizing Secretary (OS) of ‘Dhaka Reporters Unity’ (DRU) and Former ‘Office Secretary’ of ‘Dhaka Reporters Unity’ (DRU). Mr. Jamal is a Member of ‘National Press Club’, Dhaka Union of Journalist’ (DUJ), ‘Law Reporters Forum’ (LRF)’, ‘Reporters Against Corruption’ (RAC) and many others.</p>
        `,
		},
		{
			name: "Muhammad Jamal Hossain",
			role: "Vice President",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/XNsGd4mW/Zakir-Hossain-Khan.jpg", // Replace with actual image
			bio: `
        <p class="mb-4">Muhammad Jamal Hossain is the Vice-President of Conscious Consumers Society (CCS) He is a reputed journalist leader in the country. He is from Pirojpur, a southern district of Bangladesh now residence in Dhaka. He is an M.A. from Jagannath University. He has bright journalism background with various leading news paper in Bangladesh. Mr. Jamal Hossain is former Organizing Secretary (OS) of ‘Dhaka Reporters Unity’ (DRU) and Former ‘Office Secretary’ of ‘Dhaka Reporters Unity’ (DRU). Mr. Jamal is a Member of ‘National Press Club’, Dhaka Union of Journalist’ (DUJ), ‘Law Reporters Forum’ (LRF)’, ‘Reporters Against Corruption’ (RAC) and many others.</p>
        `,
		},
	]);

	// Computed property for visible members
	const visibleMembers = computed(() => {
		return showAll.value ? executiveMembers.value : executiveMembers.value.slice(0, 6);
	});

	// Methods
	const toggleShowAll = () => {
		showAll.value = !showAll.value;
	};

	const showMemberDialog = (member) => {
		selectedMember.value = member;
		memberDialogVisible.value = true;
	};

	const openSocialLink = (platform) => {
		// Handle social media links
		console.log(`Opening ${platform} link`);
	};
</script>

<style scoped>
	.animated {
		animation-fill-mode: both;
	}

	.fadeInUp {
		animation-name: fadeInUp;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translate3d(0, 30px, 0);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	/* Custom gradient text for older browsers */
	.theme-gradient {
		-webkit-background-clip: text;
		background-clip: text;
	}

	.bg-clip-text {
		-webkit-background-clip: text;
		background-clip: text;
	}

	/* Ensure proper spacing and hover effects */
	.p-card {
		transition: all 0.3s ease;
	}

	.p-card:hover {
		transform: translateY(-2px);
	}

	/* Custom dialog styling */
	:deep(.p-dialog-header) {
		border-bottom: 1px solid #e5e7eb;
	}

	:deep(.p-dialog-content) {
		padding: 1.5rem;
	}

	:deep(.p-dialog-footer) {
		border-top: 1px solid #e5e7eb;
		padding: 1rem 1.5rem;
	}
</style>
