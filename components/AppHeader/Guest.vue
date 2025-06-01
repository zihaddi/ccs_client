<script setup>
	const { admin_user = {} } = adminAuth();
	const { citizen_user = {} } = citizenAuth();

	const isMobileMenuOpen = ref(false);
	const isScrolled = ref(false);
	const isOverflowMenuOpen = ref(false);

	// Track which mobile dropdowns are open
	const openMobileDropdowns = ref({});

	// Toggle mobile dropdown menu
	const toggleMobileDropdown = (itemName) => {
		openMobileDropdowns.value = {
			...openMobileDropdowns.value,
			[itemName]: !openMobileDropdowns.value[itemName],
		};
	};

	const menuItems = [
		// { name: "Home", path: "/" },
		{
			name: "About",
			path: "/about",
			children: [
				{ name: "The Context", path: "/about/context" },
				{ name: "About CCS", path: "/about/about" },
				{ name: "Mission", path: "/about/mission" },
				{ name: "Advisor Body", path: "/about/advisor-body" },
				{ name: "Executive Body", path: "/about/executive-body" },
				{ name: "Member Of CCS", path: "/about/ccs-member" },
				{ name: "Administration", path: "/about/administration" },
				{ name: "Branch", path: "/about/branches" },
				{ name: "Information", path: "/about/information" },
			],
		},
		{
			name: "Services",
			path: "/services",
			children: [
				{ name: "Consumer Development", path: "/services/consumer-development" },
				{ name: "Youth Engagement", path: "/services/youth-engage" },
				{ name: "CCS Digital Lab", path: "/services/digital-lab" },
				{ name: "CCS Housing Project", path: "/services/housing-project" },
				{ name: "CCS Blood Bank", path: "/services/blood-bank" },
				{ name: "CCS Volunteers", path: "/services/volunteers" },
				{ name: "Journalists Awards", path: "/services/jounalist-awards" },
			],
		},
		{
			name: "Get Involve",
			path: "/career",
			children: [
				{ name: "Vacancy", path: "/career/vacancy" },
				{ name: "Internship", path: "/career/internship" },
				{ name: "Fellowship", path: "/career/fellowship" },
				{ name: "Membership", path: "/career/membership" },
				{ name: "Partnership", path: "/career/partnership" },
				{ name: "Sposorship", path: "/career/sposorship" },
				{ name: "Advisorship", path: "/career/advisorship" },
				{ name: "Donorship", path: "/career/donorship" },
			],
		},
		{ name: "At a Glance", path: "/at-a-glace" },
		{
			name: "Resources",
			path: "/resources",
			children: [
				{ name: "Press Release", path: "/resources/press" },
				{ name: "TV Coverage", path: "/resources/tv" },
				{ name: "News Paper Coverage", path: "/resources/news-paper" },
				{ name: "Online Coverage", path: "/resources/online-coverage" },
				{ name: "Magazine Coverage", path: "/resources/magazine" },
				{ name: "Photo Arcieve", path: "/resources/photo" },
				{ name: "Video Archieve", path: "/resources/video" },
			],
		},
		{ name: "Blogs", path: "/blogs" },
		// { name: "Compliance", path: "/compliance" },

		// { name: "Contact", path: "/contact" },

		{ name: "FAQ", path: "/faq" },
	];

	const handleScroll = () => {
		isScrolled.value = window.scrollY > 0;
	};

	const toggleMenu = () => {
		isMobileMenuOpen.value = !isMobileMenuOpen.value;
	};

	const toggleOverflowMenu = () => {
		isOverflowMenuOpen.value = !isOverflowMenuOpen.value;
	};

	const closeOverflowMenu = () => {
		isOverflowMenuOpen.value = false;
	};

	// Watch for mobile menu state changes
	watch(isMobileMenuOpen, (newValue) => {
		document.body.style.overflow = newValue ? "hidden" : "auto";
	});

	
	onMounted(() => {
		window.addEventListener("scroll", handleScroll);
		// Close overflow menu on outside click
		document.addEventListener("click", (e) => {
			const overflowContainer = document.getElementById("overflow-menu-container");
			const overflowButton = document.getElementById("overflow-menu-button");
			if (isOverflowMenuOpen.value && overflowContainer && overflowButton && !overflowContainer.contains(e.target) && !overflowButton.contains(e.target)) {
				closeOverflowMenu();
			}
		});
	});

	// Clean up event listeners
	onUnmounted(() => {
		window.removeEventListener("scroll", handleScroll);
	});
</script>

<template>
	<nav
		:class="[
			'fixed top-0 w-full transition-all duration-300 z-50 ',
			isScrolled ? 'py-2 bg-white/95 shadow-md dark:bg-gray-900/95' : 'py-4 bg-white dark:bg-gray-900',
		]">
		<div class="flex items-center justify-between container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
			<!-- logo portion -->
			<NuxtLink to="/" :class="['transition-transform duration-300', isScrolled ? 'scale-90' : 'scale-100']">
				<ApplicationLogo :width="'100%'" :height="isScrolled ? '40px' : '50px'" />
			</NuxtLink>

			<div class="flex items-center space-x-4">
				<!-- Desktop Menu -->
				<div class="items-center hidden lg:flex">
					<!-- Primary Menu Items -->
					<div class="flex space-x-2">
						<div v-for="item in menuItems" :key="item.name" class="relative group">
							<NuxtLink
								v-if="!item.children"
								:to="item.path"
								:class="[
									'block rounded px-2 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700',
									$route.path === item.path ? 'text-custom_blue font-semibold' : 'text-gray-700 dark:text-gray-200',
								]">
								{{ item.name }}
							</NuxtLink>

							<!-- Dropdown for items with children -->
							<div v-else>
								<button
									:class="[
										'block rounded px-2 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center',
										$route.path.startsWith(item.path) ? 'text-custom_blue font-semibold' : 'text-gray-700 dark:text-gray-200',
									]">
									{{ item.name }}
									<svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
											clip-rule="evenodd" />
									</svg>
								</button>

								<!-- Dropdown Menu -->
								<div class="absolute left-0 z-20 hidden group-hover:block bg-white dark:bg-gray-800 rounded shadow-md min-w-max">
									<NuxtLink
										v-for="child in item.children"
										:key="child.name"
										:to="child.path"
										class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
										{{ child.name }}
									</NuxtLink>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- CTA Buttons & Hamburger -->
				<div class="flex items-center space-x-4">
					<NuxtLink
						to="/demo"
						:class="[
							'hidden lg:block transition-all duration-300 bg-red-500 text-white rounded-full hover:bg-red-700',
							isScrolled ? 'text-sm px-10 py-1.5' : 'text-base px-10 py-2',
						]">
						Donate
					</NuxtLink>
					<!-- <NuxtLink
                        v-if="admin_user"
                        to="/admin-panel"
                        :class="[
                            'hidden lg:block transition-all duration-300 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700',
                            isScrolled ? 'text-sm px-10 py-1.5' : 'text-base px-10 py-2',
                        ]">
                        Admin Panel
                    </NuxtLink>
                    <NuxtLink
                        v-else-if="citizen_user"
                        to="/dashboard"
                        :class="[
                            'hidden lg:block transition-all duration-300 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700',
                            isScrolled ? 'text-sm px-10 py-1.5' : 'text-base px-10 py-2',
                        ]">
                        Dashboard
                    </NuxtLink>
                    <NuxtLink
                        v-else
                        to="/login"
                        :class="[
                            'hidden lg:block transition-all duration-300 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700',
                            isScrolled ? 'text-sm px-10 py-1.5' : 'text-base px-10 py-2',
                        ]">
                        Login
                    </NuxtLink> -->

					<!-- Hamburger Menu -->
					<button class="p-2 lg:hidden" @click="toggleMenu" aria-label="Toggle Menu">
						<NuxtImg src="/svg/homepage/menu_hamburger.svg" alt="Menu" class="w-6 h-6 dark:invert" />
					</button>
					<ColorMode />
				</div>
			</div>
		</div>

		<!-- Mobile Menu (Fully Tailwind Animated) -->
		<div
			:class="[
				'fixed lg:hidden md:hidden block inset-y-0 right-0 w-64 bg-white shadow-lg dark:bg-gray-800 transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto',
				isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
			]">
			<div class="flex flex-col p-4">
				<button @click="toggleMenu" class="self-end p-2 mb-4 text-gray-600 dark:text-gray-300" aria-label="Close Menu">✕</button>

				<!-- Mobile menu items -->
				<div v-for="item in menuItems" :key="item.name" class="mb-1">
					<!-- Regular menu item -->
					<NuxtLink
						v-if="!item.children"
						:to="item.path"
						:class="[
							'block py-3 px-4 rounded-lg transition-all duration-300',
							'hover:bg-gray-100 dark:hover:bg-gray-700',
							isScrolled ? 'text-sm' : 'text-base',
							$route.path === item.path ? 'text-custom_blue font-semibold bg-blue-50 dark:bg-blue-900/50' : 'text-gray-700 dark:text-gray-200',
						]"
						@click="toggleMenu">
						{{ item.name }}
					</NuxtLink>

					<!-- Menu item with dropdown -->
					<div v-else class="mb-1">
						<button
							@click="toggleMobileDropdown(item.name)"
							:class="[
								'w-full rounded py-3 px-4 text-left transition-all duration-300 flex items-center justify-between',
								'hover:bg-gray-100 dark:hover:bg-gray-700',
								$route.path.startsWith(item.path) ? 'text-custom_blue font-semibold' : 'text-gray-700 dark:text-gray-200',
							]">
							{{ item.name }}
							<svg
								class="w-4 h-4 transition-transform duration-300"
								:class="{ 'rotate-180': openMobileDropdowns[item.name] }"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
									clip-rule="evenodd" />
							</svg>
						</button>

						<!-- Mobile dropdown content -->
						<div v-if="openMobileDropdowns[item.name]" class="pl-4 mt-1 bg-gray-50 dark:bg-gray-700/50 rounded-lg overflow-hidden">
							<NuxtLink
								v-for="child in item.children"
								:key="child.name"
								:to="child.path"
								class="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
								@click="toggleMenu">
								{{ child.name }}
							</NuxtLink>
						</div>
					</div>
				</div>

				<div class="h-px my-4 bg-gray-200 dark:bg-gray-700"></div>

				<!-- Mobile CTA buttons -->
				<NuxtLink to="/demo" class="block py-3 px-4 mb-2 text-center bg-red-500 text-white rounded-lg hover:bg-red-700" @click="toggleMenu">
					Donate
				</NuxtLink>

				<!-- <NuxtLink
                    v-if="admin_user"
                    to="/admin-panel"
                    class="block py-3 px-4 text-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    @click="toggleMenu">
                    Admin Panel
                </NuxtLink>
                <NuxtLink
                    v-else-if="citizen_user"
                    to="/dashboard"
                    class="block py-3 px-4 text-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    @click="toggleMenu">
                    Dashboard
                </NuxtLink>
                <NuxtLink
                    v-else
                    to="/login"
                    class="block py-3 px-4 text-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    @click="toggleMenu">
                    Login
                </NuxtLink> -->
			</div>
		</div>

		<!-- Mobile Menu Overlay -->
		<div v-if="isMobileMenuOpen" @click="toggleMenu" class="fixed inset-0 transition-opacity duration-300 bg-black bg-opacity-50 lg:hidden"></div>
	</nav>
</template>

<style scoped></style>
