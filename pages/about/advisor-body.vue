<template>
	<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-8">
		<!-- Section Header -->
		<div class="text-center mb-12">
			<div class="animate-fade-in-up">
				<h4 class="text-lg font-medium mb-2">
					<span class="bg-gradient-to-r from-[#059dff] via-[#6549d5] via-[#e33fa1] to-[#fb5343] bg-clip-text text-transparent"> Our Experts. </span>
				</h4>
			</div>

			<div class="animate-fade-in-up">
				<h2 class="text-4xl font-semibold mb-6 "><span class="text-gray-800 text-orange-400">Advisory</span> Body</h2>
			</div>

			<!-- Divider -->
			<div class="flex items-center justify-center mb-6">
				<div class="h-px bg-gray-300 flex-1 max-w-52"></div>
				<Icon name="mdi:account" class="mx-4 text-gray-500 text-2xl" />
				<div class="h-px bg-gray-300 flex-1 max-w-52"></div>
			</div>
		</div>

		<!-- Team Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <!-- Visible Team Members -->
            <div v-for="(member, index) in visibleMembers" :key="index" class="animate-fade-in-up">
                <Card class="h-full hover:shadow-lg transition-shadow duration-300 bg-[#0101]">
                    <template #content>
                        <div class="text-center p-2">
                            <!-- Profile Image -->
                            <div class="mb-2">
                                <img :src="member.image" :alt="member.name" class="w-28 h-28 rounded-full mx-auto object-cover border-4 border-[#020039]" />
                            </div>

                            <!-- Member Info -->
                            <h3 class="text-xl font-bold mb-1">{{ member.name }}</h3>
                            <p class="bg-gradient-to-r from-[#059dff] via-[#6549d5] via-[#e33fa1] to-[#fb5343] font-bold bg-clip-text text-transparent font-bold mb-2">
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
                                <Button icon="pi pi-facebook" class="p-button-rounded p-button-outlined p-button-sm" style="color:#020039" @click="openSocialLink('facebook')" />
                                <Button icon="pi pi-twitter" class="p-button-rounded p-button-outlined p-button-sm" style="color:#020039" @click="openSocialLink('twitter')" />
                                <Button icon="pi pi-linkedin" class="p-button-rounded p-button-outlined p-button-sm" style="color:#020039" @click="openSocialLink('linkedin')" />
                            </div>

                            <!-- Read More Button -->
                            <Button v-if="member.bio" label="Read About Him" style="background-color: #020039;" @click="showMemberDialog(member)" />
                        </div>
                    </template>
                </Card>
            </div>
        </div>

		<!-- Show More Button -->
		<div class="text-center" v-if="!showAll && teamMembers.length > 6">
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
	

	// Reactive data
	const showAll = ref(false);
	const memberDialogVisible = ref(false);
	const selectedMember = ref(null);

	// Team members data
	const teamMembers = ref([
		{
			name: "Hossain Zillur Rahman",
			role: "Chief Advisor",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/nLXZy1rC/Hossain-Zillur-Rahman.jpg",
			bio: `
      <p class="mb-4">Hossain Zillur Rahman is an academic, economist and policy maker from Bangladesh. Combining degrees in economics (Masters, Dhaka University) and political sociology (Ph.D, Manchester University), Hossain Zillur Rahman is a leading policy voice on poverty, governance, social protection, education, social protection, urbanization and political development. He led the drafting of the poverty reduction strategy of the government in 2005 and was a member of the Independent South Asian Commission on Poverty Alleviation (ISACPA). He founded the Dhaka-based think-tank Power and Participation Research Centre (PPRC) in 1996 and prior to that was for over twenty years a leading researcher at the Bangladesh Institute of development Studies.</p>
      
      <p class="mb-4">On 9 January 2008, he was appointed as an adviser (cabinet minister) to the Caretaker Government of Bangladesh, led by Fakhruddin Ahmed and was entrusted with the ministries of commerce and education. He served in this capacity till evening of 6 January 2009. He was instrumental in driving a political negotiation process between the Caretaker government and the army on one hand and the two major political parties, Awami League and Bangladesh Nationalist Party (BNP) on the other that led to the successful election of 29 December 2008. For this, he is credited with a lead role in the successful return of Bangladesh to electoral democracy. He was an Inspire Fellow at the Institute for Global Leadership at Tufts University, USA and was awarded the Dr. John Meyer Global Citizenship Award by the Institute in November, 2009.</p>
      
      <p>In 2013, he was awarded Gold Medal by Rotary International Bangladesh. Hossain Zillur Rahman has been a regular resource person at the National Defence College in Dhaka since its inception in 1999. In 2011 Hossain Zillur established the research-based civic platform - Chittagong Research Initiative (CRI). He is the convener of two new civic platforms - SROTA (Safe Roads and Transport Alliance) launched on 8 October 2016 and HEALTHY BANGLADESH launched on 13 May 2017. Currently the Executive Chairman of Power and Participation Research Centre (PPRC) (www.pprc-bd.org), Hossain Zillur's newest area of engagement is sustainable health-care, urban poverty and urban innovations.</p>
    `,
		},
		{
			name: "Kazi Firoz Rashid",
			role: "Advisor",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/6qWZwQPj/kazi-firoz-rashid.jpg",
			bio: `
      <p class="mb-4">Kazi Firoz Rashid is an academic, economist and policy maker from Bangladesh. Combining degrees in economics (Masters, Dhaka University) and political sociology (Ph.D, Manchester University), Hossain Zillur Rahman is a leading policy voice on poverty, governance, social protection, education, social protection, urbanization and political development. He led the drafting of the poverty reduction strategy of the government in 2005 and was a member of the Independent South Asian Commission on Poverty Alleviation (ISACPA). He founded the Dhaka-based think-tank Power and Participation Research Centre (PPRC) in 1996 and prior to that was for over twenty years a leading researcher at the Bangladesh Institute of development Studies.</p>
      
      <p class="mb-4">On 9 January 2008, he was appointed as an adviser (cabinet minister) to the Caretaker Government of Bangladesh, led by Fakhruddin Ahmed and was entrusted with the ministries of commerce and education. He served in this capacity till evening of 6 January 2009. He was instrumental in driving a political negotiation process between the Caretaker government and the army on one hand and the two major political parties, Awami League and Bangladesh Nationalist Party (BNP) on the other that led to the successful election of 29 December 2008. For this, he is credited with a lead role in the successful return of Bangladesh to electoral democracy. He was an Inspire Fellow at the Institute for Global Leadership at Tufts University, USA and was awarded the Dr. John Meyer Global Citizenship Award by the Institute in November, 2009.</p>
      
      <p>In 2013, he was awarded Gold Medal by Rotary International Bangladesh. Hossain Zillur Rahman has been a regular resource person at the National Defence College in Dhaka since its inception in 1999. In 2011 Hossain Zillur established the research-based civic platform - Chittagong Research Initiative (CRI). He is the convener of two new civic platforms - SROTA (Safe Roads and Transport Alliance) launched on 8 October 2016 and HEALTHY BANGLADESH launched on 13 May 2017. Currently the Executive Chairman of Power and Participation Research Centre (PPRC) (www.pprc-bd.org), Hossain Zillur's newest area of engagement is sustainable health-care, urban poverty and urban innovations.</p>
    `,
		},
		{
			name: "M. Zakir Hossain Khan",
			role: "Advisor",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/XNsGd4mW/Zakir-Hossain-Khan.jpg",
			bio: `
      <p class="mb-4">Sixteen years of research experiences in the field of governance and policy in climate and public finance, environment, climate change adaptation, climate finance, water and energy sector. Professionally, I am serving as Head of Climate Finance Governance- CFG Unit of Transparency International Bangladesh (TIB) and implementing five year (2015-2019) project with the funds of US$897,435.90. Am responsible to carry out research, writing reports/paper, policy brief, civic and stakeholders' engagement, policy advocacy, administrative, financial e.g. preparing yearly action plan and budget, M&E, supervise the colleagues, join in national and international conferences/dialogue, coordinate with TI-Secretariat, Water Integrity Network., GO, NGOs and CSO like Ministry of Environment and Forest, Department of Environment, Bangladesh Climate Change Trust Fund, Stockholm Environmental Institute (SEI), Adaptationwatch.</p>
      
      <p>Led the "Adaptation Finance Governance Standards for Bangladesh: A New Approach Piloted in Bangladesh and Maldives" in 2018, a "Whole of Governance" in Climate Finance: Developed and Developing Country Perspective focusing on Paris Agreement, contributed to Water Integrity Global Outlook 2016 (with a case study in page 01), some of articles have been published by Oxford University Press and Cambridge University Press, and Journal of Development Economics. Evidence generated have contributed to the seventh five year plan (for fiscal year 2015 to fiscal year 2020) of the Government of Bangladesh to promote a whole-of-government approach for climate readiness and independent monitoring and evaluation engaging the local citizens (page 460) and developed a climate change adaptation project tracking tool to examine level of coherence, relevance, disclosures, accountability, participation of community and integrity practices of the adaptation program/project and now it is being widely used not only in Bangladesh but also in Maldives, Kenya.</p>
    `,
		},
		// Additional duplicate members as shown in original HTML
		{
			name: "M. Zakir Hossain Khan",
			role: "Advisor",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/XNsGd4mW/Zakir-Hossain-Khan.jpg",
			bio: `
      <p class="mb-4">Sixteen years of research experiences in the field of governance and policy in climate and public finance, environment, climate change adaptation, climate finance, water and energy sector. Professionally, I am serving as Head of Climate Finance Governance- CFG Unit of Transparency International Bangladesh (TIB) and implementing five year (2015-2019) project with the funds of US$897,435.90.</p>
      
      <p>Led the "Adaptation Finance Governance Standards for Bangladesh: A New Approach Piloted in Bangladesh and Maldives" in 2018, contributed to Water Integrity Global Outlook 2016, and developed climate change adaptation project tracking tools now used in Bangladesh, Maldives, and Kenya.</p>
    `,
		},
		{
			name: "M. Zakir Hossain Khan",
			role: "Advisor",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/XNsGd4mW/Zakir-Hossain-Khan.jpg",
			bio: null,
		},
		{
			name: "M. Zakir Hossain Khan",
			role: "Advisor",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/XNsGd4mW/Zakir-Hossain-Khan.jpg",
			bio: null,
		},
		// Hidden members (show more content)
		{
			name: "M. Zakir Hossain Khan",
			role: "Advisor",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/XNsGd4mW/Zakir-Hossain-Khan.jpg",
			bio: null,
		},
		{
			name: "M. Zakir Hossain Khan",
			role: "Advisor",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/XNsGd4mW/Zakir-Hossain-Khan.jpg",
			bio: null,
		},
		{
			name: "M. Zakir Hossain Khan",
			role: "Advisor",
			location: "Bangladesh",
			organization: "Conscious Consumers Society",
			image: "https://i.postimg.cc/XNsGd4mW/Zakir-Hossain-Khan.jpg",
			bio: null,
		},
	]);

	// Computed property for visible members
	const visibleMembers = computed(() => {
		return showAll.value ? teamMembers.value : teamMembers.value.slice(0, 6);
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
	.animate-fade-in-up {
		animation: fadeInUp 1s ease-out;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Custom gradient text for older browsers */
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
