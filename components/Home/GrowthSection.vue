<template>
	<section class="py-8 section-abt-us bg-cover bg-center" :style="{ backgroundImage: 'url(/img/bg-abt.jpg)' }">
		<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-4">
			<div class="bg-black bg-opacity-70 rounded-lg p-6">
				<div class="flex flex-col lg:flex-row gap-8">
					<!-- Left Cards (About, Mission, Success, Context) -->
					<div class="flex-1 flex flex-col gap-6">
						<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
							<!-- Dynamic Cards -->
							<template v-for="(card, index) in cards" :key="index">
								<Card
									class="cursor-pointer bg-white/10 hover:bg-white/20 transition-all duration-300"
									:class="card.hoverClass"
                                    :style="card.backGroundClass"
									@click="openModal(card.key)">
									<template #content>
										<div class="flex flex-col items-center p-4">
											<img :src="card.image" :alt="card.title" class="w-28 h-28 rounded-full mb-3 object-cover" :class="card.borderClass" />
											<h2 class="text-white text-lg font-semibold text-center mb-2">
												{{ card.title }}
											</h2>
										</div>
									</template>
								</Card>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Modals outside the grid to avoid z-index issues -->
		<template v-for="(card, index) in cards" :key="`modal-${index}`">
			<Dialog
				v-model:visible="modal[card.key]"
				:header="card.dialogTitle || card.title"
				modal
				:closable="true"
				:draggable="false"
				:resizable="false"
				:breakpoints="{ '640px': '90vw', '1024px': '50vw' }"
				:style="{ width: '40rem', maxHeight: '80vh' }"
				class="modal-dialog"
				:pt="{
					root: { class: 'z-50' },
					header: { class: `rounded-t-lg ${card.headerClass} flex items-center gap-2` },
					content: { class: 'pb-0 max-h-96 overflow-y-auto' },
					footer: { class: 'rounded-b-lg' },
				}">
				<template #header>
					<div :class="`flex items-center gap-2 ${card.headerClass} w-full`">
						<i :class="`${card.icon} text-xl mr-2`"></i>
						<span class="font-semibold text-lg">{{ card.dialogTitle || card.title }}</span>
					</div>
				</template>

				<div class="prose prose-sm max-w-none" v-html="card.content"></div>

				<template #footer>
					<div class="flex justify-end">
						<Button label="Close" :severity="card.severity" @click="closeModal(card.key)" class="px-4 py-2" />
					</div>
				</template>
			</Dialog>
		</template>
	</section>
</template>

<script setup>
	const modal = ref({
		aboutCCS: false,
		mission: false,
		success: false,
		context: false,
	});

	
	const openModal = (key) => {
		console.log("Opening modal:", key);
		modal.value[key] = true;
	};

	const closeModal = (key) => {
		console.log("Closing modal:", key);
		modal.value[key] = false;
	};

	const cards = [
		{
			key: "aboutCCS",
			title: "About Us",
			dialogTitle: "About CCS",
			image: "/images/growth/about-us.png",
			borderClass: "border-4 border-green-600",
			hoverClass: "hover:scale-105 ",
            backGroundClass : "background-color : rgba(95, 209, 162,.3)",
			icon: "pi pi-question-circle",
			headerClass: "bg-green-700 text-white",
			severity: "success",
			content: `
                    <h2 class="text-center text-xl font-semibold mb-4">About CCS:</h2>
                    <p class="text-base mb-4 text-justify leading-relaxed">
                        Conscious Consumers Society (CCS), a non-government, non-political, non-profit and voluntary organization is founded in March 2013 at the initiation of some dedicated young entrepreneurs. It is launched with the leadership of Mr. Palash Mahmud (Journalist). CCS is registered with the Department of Social Services, Government of Bangladesh, and reg. No S-12428/2016. CCS takes legal initiatives in case of consumer right violation. This Society is firmly committed to take some special steps if any member of the society is ever confronted with violation of consumer rights. We call upon every consumer all over the country to get united on the platform of Conscious Consumers Society to implement the rights of consumers.
                    </p>
                    <h2 class="text-center text-xl font-semibold mb-4">About CYB:</h2>
                    <p class="text-base text-justify leading-relaxed">
                        Consumer Youth Bangladesh (CYB) is the youth organization of 'Conscious Consumers Society' (CCS). The CYB is the only youth organization that works to promote consumer rights in country. CCS is mainly working together student and youth in different educational institutions. It has 40 branches like Dhaka University, Jahangirnagar University, Jagannath University, Gono Bishwabidyalay. CYB has a central committee. The committee maintains all activities of the organization according to the guidance of CCS. Any student who is agreed with the CCS' mission, vision and values, s/he can join with CYB.
                    </p>
    `,
		},
		{
			key: "mission",
			title: "Our Mission",
			image: "/images/growth/our-Mission.png",
			borderClass: "border-4 border-indigo-400",
			hoverClass: "hover:scale-105",
            backGroundClass : "background-color : rgba(133, 126, 222, 0.3)",
			icon: "pi pi-crosshairs",
			headerClass: "bg-indigo-400 text-white",
			severity: "info",
			content: `
                <h2 class="text-center text-xl font-semibold mb-4">Mission:</h2>
                <p class="text-base mb-4 text-justify leading-relaxed">
                    Conscious Consumers Society's mission is to strengthen consumer awareness through various social activities, taking legal initiative, training, campaign, research etc also cooperation with all about concern organization.
                </p>
                <h2 class="text-center text-xl font-semibold mb-4">Vision:</h2>
                <p class="text-base mb-4 text-justify leading-relaxed">
                    Vision of CCS is to establish the consumer rights, building awareness on consumer responsibility, preventing adulteration and constructing a special group of conscious consumer in the country.
                </p>
                <h2 class="text-center text-xl font-semibold mb-4">Values:</h2>
                <p class="text-base mb-4 text-justify leading-relaxed">
                    The organization is committed to ensure consumer safety, strict observance of consumer right, consumer welfare, health consciousness, rule of law, transparency, accountability, impartiality.
                </p>
                <h2 class="text-center text-xl font-semibold mb-4">Our Objects:</h2>
                <ol class="list-decimal list-inside pl-4 text-base text-justify space-y-2 leading-relaxed">
                    <li>To support government, authority, NGOs or any responsible person or organization or institution related consumer right and interest.</li>
                    <li>Increasing awareness and counseling about consumer rights with consumers, volunteers, consumer right workers and related others.</li>
                    <li>To organize workshop, training programs, educational program on consumer rights.</li>
                    <li>Finding processes of adulteration and prevention, testing systems & processes, laboratory facilities, scientific research or analyses, consumer right law, survey and many others.</li>
                    <li>To arrange dialogue, seminar, symposium, round table program, meet the press, workshop, rally, exhibition, human chain for creation of general awareness.</li>
                    <li>Opening branch, unit, camp, volunteer, familiar, friends, well-wishers, supporters, interested group or forum or community in local and abroad.</li>
                    <li>To provide technical guidance and equipment and coordinate with different consumer, health, welfare or similar other person or agencies.</li>
                </ol>
    `,
		},
		{
			key: "success",
			title: "Our Success",
			image: "/images/growth/what-we-do%20.png",
			borderClass: "border-4 border-cyan-400",
			hoverClass: "hover:scale-105",
            backGroundClass : "background-color : rgba(94, 209, 209,0.3)",
			icon: "pi pi-trophy",
			headerClass: "bg-cyan-400 text-white",
			severity: "info",
			content: `
                <p class="text-base mb-4 text-justify leading-relaxed">
                    CCS has been working on establishing consumer rights since its inception in 29 years. CCS and its youth wing CYB continue playing an extraordinary role in preventing food adulteration.
                </p>
                <p class="text-base mb-4 text-justify leading-relaxed">
                    The CCS has so far arranged 6 seminars, 30 campaign program, 15 workshop, 6 member recruiting week, 11 different days of observation, more than 22 rallies, more than 16 television program, more than 50 article published in daily news paper, more than 80 legal aid, provide 120+ advocacy service. And participated in more than 6 international program.
                </p>
                <p class="text-base text-justify leading-relaxed">
                    The CCS filed a writ petition in the high court last year. In this regard, the court banned 12 substandard products and withdrew products from the market. That was the historic milestone of the establishment of consumer rights in the history of Bangladesh.
                </p>
    `,
		},
		{
			key: "context",
			title: "Context",
			image: "/images/growth/Workshops.png",
			borderClass: "border-4 border-pink-400",
			hoverClass: "hover:scale-105",
            backGroundClass : "background-color : rgba(229, 83, 117, 0.3)",
			icon: "pi pi-cog",
			headerClass: "bg-pink-400 text-white",
			severity: "danger",
			content: `
                <div class="space-y-4 text-base text-justify leading-relaxed">
                    <p>
                    Once a havoc-prone country Bangladesh is now one of the fastest growing economies in the world. In less than five decades of its independence, Bangladesh has achieved all the indicators of millennium development goals several years ago while now it is heading rapidly to reach sustainable development goals (SDGs).
                    </p>
                    <p>
                    However, absence of good practices in production, distribution and sales of goods and services to the consumers are among the major threats to this journey. Adulterated foods and substandard products are causing immense loss in all ways-- health, environment and economic for the nation.
                    </p>
                    <p>
                    A recent study conducted in Chattogram showed that some 54.55 percent of broiler birds (poultry chicken) were infected with multi-drug resistant bacteria.
                    </p>
                    <p>
                    The total number of livestock in the country is 393.14 million, according to department of livestock's data 2017-18.
                    </p>
                    <p>
                    Some eight crore people are suffering from life threatening diseases resulting a big amount of out-of-pocket expenditure as medical cost each year.
                    </p>
                    <p>
                    Physicians say that this disastrous situation has emerged due to different types of contamination in the food cycle of humans and animals.
                    </p>
                    <p>
                    Despite there are numerous laws and regulations to prevent contamination, no initiative is working currently. For example, Bangladesh is the first country in the world to impose ban on using polythene in 2002. But the country is not getting any benefit due to its poor implementation.
                    </p>
                    <p>
                    Around three lakh tonnes of plastic waste are being dumped into water bodies and open places while the fishes are consuming them as micro-plastic and those are entering into human food chain.
                    </p>
                    <p>
                    So only making law is not enough always. Mass awareness is the main key. And CCS has been trying its best to aware people in this regard.
                    </p>
                    <p>
                    In this context, Conscious Consumer Society (CCS) has been working to be a part of nation's effort to make the development safer, sustainable, happier, and accessible to all through creating a social movement to protect the rights of the consumers.
                    </p>
                </div>
    `,
		},
	];
</script>

<style scoped>
	.modal-dialog {
		z-index: 1000;
	}

	/* Enhanced hover effects */
	.hover\\:scale-105:hover {
		transform: scale(1.05);
	}

	/* Custom scrollbar for modal content */
	.max-h-96::-webkit-scrollbar {
		width: 6px;
	}

	.max-h-96::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 3px;
	}

	.max-h-96::-webkit-scrollbar-thumb {
		background: #c1c1c1;
		border-radius: 3px;
	}

	.max-h-96::-webkit-scrollbar-thumb:hover {
		background: #a8a8a8;
	}
</style>
