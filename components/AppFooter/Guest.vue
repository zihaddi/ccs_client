<template>
	<footer class="bg-gray-900 text-white ">
		<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-8 py-8">
			<!-- Main Footer Content -->
			<div class="text-left">
				<div class="grid grid-cols-2 md:grid-cols-6 gap-6 lg:gap-8">
					<!-- About Us Section -->
					<div class="col-span-2 md:col-span-1">
						<h3 class="text-xl font-semibold text-gray-100 mb-3">About US</h3>
						<hr class="border-white border-t mb-3" />
						<nav class="flex flex-col space-y-2">
							<NuxtLink to="/the-context" class="text-gray-300 hover:text-white transition-colors"> The Context </NuxtLink>
							<NuxtLink to="/about-us" class="text-gray-300 hover:text-white transition-colors"> About CCS </NuxtLink>
							<NuxtLink to="/mission" class="text-gray-300 hover:text-white transition-colors"> Mission </NuxtLink>
							<NuxtLink to="/advisory-body" class="text-gray-300 hover:text-white transition-colors"> Advisor Body </NuxtLink>
							<NuxtLink to="/executive-body" class="text-gray-300 hover:text-white transition-colors"> Executive Body </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Member of CCS </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Administration </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Branch </NuxtLink>
							<NuxtLink to="/information-center" class="text-gray-300 hover:text-white transition-colors"> Information Center </NuxtLink>
						</nav>
					</div>

					<!-- Our Service Section -->
					<div class="col-span-2 md:col-span-1">
						<h3 class="text-xl font-semibold text-gray-100 mb-3">Our Service</h3>
						<hr class="border-white border-t mb-3" />
						<nav class="flex flex-col space-y-2">
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Awareness </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Campaign </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Advocacy </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Research </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Survey </NuxtLink>
							<hr class="border-gray-600 border-t my-3" />
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Empowerment </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Legal Initiative </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Legal Aid </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Technical Support </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> International Participation </NuxtLink>
						</nav>
					</div>

					<!-- Get Involve Section -->
					<div class="col-span-2 md:col-span-1">
						<h3 class="text-xl font-semibold text-gray-100 mb-3">Get Involve</h3>
						<hr class="border-white border-t mb-3" />
						<nav class="flex flex-col space-y-2">
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Vacancy </NuxtLink>
							<NuxtLink to="/internship" class="text-gray-300 hover:text-white transition-colors"> Internship </NuxtLink>
							<NuxtLink to="/fellowship" class="text-gray-300 hover:text-white transition-colors"> Fellowship </NuxtLink>
							<NuxtLink to="/membership" class="text-gray-300 hover:text-white transition-colors"> Membership </NuxtLink>
							<NuxtLink to="/partnership" class="text-gray-300 hover:text-white transition-colors"> Partnership </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Sponsorship </NuxtLink>
							<NuxtLink to="/advisorship" class="text-gray-300 hover:text-white transition-colors"> Advisorship </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Donorship </NuxtLink>
						</nav>
					</div>

					<!-- Impact Section -->
					<div class="col-span-2 md:col-span-1">
						<h3 class="text-xl font-semibold text-gray-100 mb-3">Impact</h3>
						<hr class="border-white border-t mb-3" />
						<nav class="flex flex-col space-y-2">
							<NuxtLink to="/blog" class="text-gray-300 hover:text-white transition-colors"> Blog </NuxtLink>
						</nav>
					</div>

					<!-- Resources Section -->
					<div class="col-span-2 md:col-span-1">
						<h3 class="text-xl font-semibold text-gray-100 mb-3">Resources</h3>
						<hr class="border-white border-t mb-3" />
						<nav class="flex flex-col space-y-2">
							<NuxtLink to="/media-releases" class="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
								<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 576 512">
									<path
										d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z" />
								</svg>
								Press Release
							</NuxtLink>
							<NuxtLink to="/tv-coverage" class="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
								<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 576 512">
									<path
										d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z" />
								</svg>
								TV Coverage
							</NuxtLink>
							<NuxtLink to="/news-paper-coverage" class="text-gray-300 hover:text-white transition-colors"> News Paper Coverage </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Online Coverage </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Magazine Coverage </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Photo Archive </NuxtLink>
							<NuxtLink to="/coming-soon" class="text-gray-300 hover:text-white transition-colors"> Video Archive </NuxtLink>
						</nav>
					</div>

					<!-- FAQ Section -->
					<div class="col-span-2 md:col-span-1">
						<h3 class="text-xl font-semibold text-gray-100 mb-3">FAQ</h3>
						<hr class="border-white border-t mb-3" />
					</div>
				</div>
			</div>

			<!-- Divider -->
			<hr class="border-white border-t my-8" />

			<!-- Mobile Apps Section -->
			<div class="text-center">
				<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
					<span class="text-blue-100 text-lg">Download mobile apps</span>
					<div class="flex gap-3">
						<img
							src="https://i.postimg.cc/CK80pD3N/play-Store-51588f3.png"
							alt="Google Play Store"
							class="h-10 w-auto hover:scale-105 transition-transform cursor-pointer" />
						<img
							src="https://i.postimg.cc/L65rMLf1/apple-Store-befcc42.png"
							alt="Apple App Store"
							class="h-10 w-auto hover:scale-105 transition-transform cursor-pointer" />
					</div>
				</div>
			</div>
		</div>

		<section class="relative ">
			<!-- Background with overlay -->
			<div class="bg-cover bg-center bg-no-repeat" style="background-image: url('/images/footer-bg-high-2.png')">
				<div class="bg-blue-900 bg-opacity-50">
					<!-- Location Section -->
					<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-8 py-8" id="location">
						<!-- Section Title -->
						<div class="flex items-center justify-center mb-8">
							<img src="/images/location.gif" alt="Location" class="mr-3 w-10 h-10">
							<h2 class="text-2xl font-bold text-white">Our Locations</h2>
						</div>

						<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
							<!-- Map Section -->
							<div class="lg:col-span-5">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6141.462486737845!2d90.38973915181847!3d23.756811782420073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a3fb6a7759%3A0x2513dd85907a1e15!2s106%2FA%20Green%20Rd%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1585685448629!5m2!1sen!2sbd"
									class="w-full h-56 border-0 rounded-lg shadow-lg"
									allowfullscreen
									loading="lazy"
									referrerpolicy="no-referrer-when-downgrade">
								</iframe>
							</div>

							<!-- Office Information -->
							<div class="lg:col-span-7 lg:mt-8">
								<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
									<!-- Working Office -->
									<div class="text-white border-r-0 md:border-r border-blue-800 pr-0 md:pr-6">
										<h3 class="text-xl font-bold mb-4">Working Office</h3>
										<div class="space-y-3 text-base leading-relaxed">
											<p>106/A, Green Road, Farmgate<br />Dhaka, Bangladesh</p>

											<div class="flex items-center space-x-3">
												<div class="p-1 border border-white rounded-full">
													<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 320 512">
														<path
															d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
													</svg>
												</div>
												<span>+88 01977 453 653</span>
											</div>

											<div class="flex items-center space-x-3">
												<div class="p-1 border border-white rounded-full">
													<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 512 512">
														<path
															d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
													</svg>
												</div>
												<span>info@ccsbd.net</span>
											</div>
										</div>
									</div>

									<!-- Registered Office -->
									<div class="text-white border-l-0 md:border-l border-blue-800 pl-0 md:pl-6">
										<h3 class="text-xl font-bold mb-4">Registered Office</h3>
										<div class="space-y-3 text-base leading-relaxed">
											<p>Lorna Office Complex (2nd Floor)<br />95, New Eskaton Road<br />Dhaka - 1205, Bangladesh</p>

											<div class="flex items-center space-x-3">
												<div class="p-1 border border-white rounded-full">
													<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 320 512">
														<path
															d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 312z" />
													</svg>
												</div>
												<span>+88 01977 453 653</span>
											</div>

											<div class="flex items-center space-x-3">
												<div class="p-1 border border-white rounded-full">
													<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 512 512">
														<path
															d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
													</svg>
												</div>
												<span>info@ccsbd.net</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Social Media Section -->
					<div class="bg-gradient-to-t from-gray-800 via-black to-transparent py-16">
						<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-8 py-8">
							<div class="bg-white px-4 py-8 rounded-lg shadow-xl">
								<h2 class="text-2xl font-bold text-black text-center mb-8">Join the CCS Social Community</h2>

								<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
									<!-- Facebook -->
									<a
										href="https://www.facebook.com/ConsumerYouthBD"
										class="bg-blue-600 hover:bg-blue-700 text-white p-4 text-center rounded-lg transition-colors group">
										<div class="flex flex-col items-center space-y-2">
											<svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 320 512">
												<path
													d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
											</svg>
											<span class="text-sm font-medium">Like Us</span>
										</div>
									</a>

									<!-- Instagram -->
									<div class="bg-pink-500 hover:bg-pink-600 text-white p-4 text-center rounded-lg transition-colors cursor-pointer group">
										<div class="flex flex-col items-center space-y-2">
											<svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 448 512">
												<path
													d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
											</svg>
											<span class="text-sm font-medium">Instagram</span>
										</div>
									</div>

									<!-- Twitter -->
									<div class="bg-blue-400 hover:bg-blue-500 text-white p-4 text-center rounded-lg transition-colors cursor-pointer group">
										<div class="flex flex-col items-center space-y-2">
											<svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 512 512">
												<path
													d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
											</svg>
											<span class="text-sm font-medium">Follow Us</span>
										</div>
									</div>

									<!-- LinkedIn -->
									<div class="bg-blue-700 hover:bg-blue-800 text-white p-4 text-center rounded-lg transition-colors cursor-pointer group">
										<div class="flex flex-col items-center space-y-2">
											<svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 448 512">
												<path
													d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
											</svg>
											<span class="text-sm font-medium">Join Us</span>
										</div>
									</div>

									<!-- Google Plus -->
									<div class="bg-red-600 hover:bg-red-700 text-white p-4 text-center rounded-lg transition-colors cursor-pointer group">
										<div class="flex flex-col items-center space-y-2">
											<svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 640 512">
												<path
													d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" />
											</svg>
											<span class="text-sm font-medium">Circle Us</span>
										</div>
									</div>

									<!-- RSS -->
									<div class="bg-red-800 hover:bg-red-900 text-white p-4 text-center rounded-lg transition-colors cursor-pointer group">
										<div class="flex flex-col items-center space-y-2">
											<svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 448 512">
												<path
													d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z" />
											</svg>
											<span class="text-sm font-medium">Subscribe Us</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Copyright Section -->
					<div class="bg-black py-3">
						<div class="container mx-auto px-4">
							<p class="text-white text-sm text-center">Design and Developed by © CCS 2022</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</footer>
</template>

<script setup>
	
</script>

<style scoped>
	
</style>
