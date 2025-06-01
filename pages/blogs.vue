<template>
	<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-8">
		<div class="animate-fade-in-up text-center">
			<h4 class="text-lg font-medium mb-2">
				<span class="bg-gradient-to-r from-[#059dff] via-[#6549d5] via-[#e33fa1] to-[#fb5343] bg-clip-text text-transparent"> Blog Posts</span>
			</h4>
		</div>

		<div class="animate-fade-in-up text-center">
			<h2 class="text-4xl font-semibold mb-6"><span class="text-gray-800 text-orange-400">Latest</span> Articles</h2>
		</div>

		<!-- Divider -->
		<div class="flex items-center justify-center mb-6">
			<div class="h-px bg-gray-300 flex-1 max-w-52"></div>
			<i class="pi pi-comments text-gray-500 text-2xl"></i>
			<div class="h-px bg-gray-300 flex-1 max-w-52"></div>
		</div>

		<!-- Blog Posts Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
			<!-- Article 1 -->
			<div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
				<!-- Featured Image -->
				<NuxtLink to="/blog/how-to-be-good-freelancer" class="block">
					<img
						src="https://i.postimg.cc/HkKLfYH5/blog-post-small-1.jpg"
						alt="How to be a good freelancer"
						class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
				</NuxtLink>

				<!-- Post Date Badge -->
				<div class="absolute top-4 right-4 bg-blue-600 text-white rounded-lg px-3 py-2 text-center shadow-lg">
					<div class="font-bold text-lg">18</div>
					<div class="text-xs uppercase">AUG</div>
				</div>

				<!-- Article Content -->
				<div class="p-6">
					<h4 class="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
						<NuxtLink to="/blog/how-to-be-good-freelancer"> How to be a good freelancer? </NuxtLink>
					</h4>
					<p class="text-gray-600 leading-relaxed">incididunt ut labore et dolore magna aliqua. Ut enim aminim veniam, quis nostrud...</p>
				</div>
			</div>

			<!-- Article 2 -->
			<div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
				<!-- Featured Image -->
				<NuxtLink to="/blog/collaboration-with-envato" class="block">
					<img
						src="https://i.postimg.cc/QN0h28Jt/blog-post-small-2.jpg"
						alt="Collaboration with Envato"
						class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
				</NuxtLink>

				<!-- Post Date Badge -->
				<div class="absolute top-4 right-4 bg-blue-600 text-white rounded-lg px-3 py-2 text-center shadow-lg">
					<div class="font-bold text-lg">23</div>
					<div class="text-xs uppercase">JUN</div>
				</div>

				<!-- Article Content -->
				<div class="p-6">
					<h4 class="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
						<NuxtLink to="/blog/collaboration-with-envato"> Collaboration with Envato </NuxtLink>
					</h4>
					<p class="text-gray-600 leading-relaxed">incididunt ut labore et dolore magna aliqua. Ut enim aminim veniam, quis nostrud...</p>
				</div>
			</div>

			<!-- Article 3 -->
			<div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
				<!-- Featured Image -->
				<NuxtLink to="/blog/why-themeforest-is-best" class="block">
					<img
						src="https://i.postimg.cc/ZY7zffJv/blog-post-small-3.jpg"
						alt="Why ThemeForest is best"
						class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
				</NuxtLink>

				<!-- Post Date Badge -->
				<div class="absolute top-4 right-4 bg-blue-600 text-white rounded-lg px-3 py-2 text-center shadow-lg">
					<div class="font-bold text-lg">01</div>
					<div class="text-xs uppercase">JAN</div>
				</div>

				<!-- Article Content -->
				<div class="p-6">
					<h4 class="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
						<NuxtLink to="/blog/why-themeforest-is-best"> Why ThemeForest is best? </NuxtLink>
					</h4>
					<p class="text-gray-600 leading-relaxed">incididunt ut labore et dolore magna aliqua. Ut enim aminim veniam, quis nostrud...</p>
				</div>
			</div>
		</div>

		<!-- See All Posts Button -->
		<div class="text-center">
			<Button
				label="See all Posts"
				class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
				@click="navigateTo('/blog')" />
		</div>
	</div>
</template>

<script setup>
	// Navigation method
	const navigateTo = (path) => {
		$router.push(path);
	};

	// Meta for SEO
	useHead({
		title: "Latest Blog Posts",
		meta: [
			{
				name: "description",
				content: "Discover our latest articles and insights on freelancing, collaboration, and web development.",
			},
		],
	});
</script>

<style scoped>
	/* Additional custom styles if needed */
	.container {
		max-width: 1200px;
	}

	/* Hover effects for images */
	img {
		transition: transform 0.3s ease;
	}

	/* Custom button styling to match original design */
	.p-button {
		border: none;
		outline: none;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.p-button:focus {
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.container {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}
</style>
