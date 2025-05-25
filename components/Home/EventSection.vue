<template>
    <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-4">
        <!-- Upcoming Events Header -->
        <div class="bg-[#020039] text-white text-center py-4 mb-5 rounded">
            <h2 class="text-3xl font-bold tracking-[0.2em]">U p c o m i n g  E v e n t s</h2>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
            <!-- Upcoming Events Cards -->
            <div class="flex-1">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Green Card -->
                    <div class="bg-white rounded-lg shadow-md hover:scale-105 transition up-coming-events-main">
                        <div class="p-5">
                            <NuxtLink to="#" class="block h-full">
                                <p class="text-sm font-medium text-[#333]">April 24, 2020</p>
                                <h2 class="text-xl font-bold mt-2 mb-3 text-[#020039]">CCS Digital Lab:</h2>
                                <p class="text-gray-700">
                                    In Bangladesh, Employment is less than the educated youth. Therefore, it is important to provide alternative employment to
                                    educated youth....
                                </p>
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Red Card -->
                    <div class="bg-white rounded-lg shadow-md hover:scale-105 transition up-coming-events-main-red">
                        <div class="p-5">
                            <NuxtLink to="#" class="block h-full">
                                <p class="text-sm font-medium text-[#333]">April 07, 2020</p>
                                <h2 class="text-xl font-bold mt-2 mb-3 text-[#020039]">Consumer Rights Journalism Award-2020</h2>
                                <p class="text-gray-700">
                                    The role of the media in promoting consumer rights in the country is outstanding. To recognize and encourage the contribution of
                                    journalists...
                                </p>
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Orange Card -->
                    <div class="bg-white rounded-lg shadow-md hover:scale-105 transition up-coming-events-main-orange">
                        <div class="p-5">
                            <NuxtLink to="#" class="block h-full">
                                <p class="text-sm font-medium text-[#333]">March 27, 2020</p>
                                <h2 class="text-xl font-bold mt-2 mb-3 text-[#020039]">National Consumer Convention-2020</h2>
                                <p class="text-gray-700">
                                    CCS is going to organize a national consumer convention with consumer activist from different parts of the country aim to
                                    establish Consumer Rights and empowerment of ...
                                </p>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Online Survey Section -->
            <div class="w-full lg:w-1/4">
                <div class="bg-white rounded-lg shadow-md">
                    <!-- Survey Header -->
                    <div class="bg-[#020039] text-white p-3 flex justify-between items-center rounded-t-lg">
                        <h3 class="text-xl font-bold">Online Survey</h3>
                        <NuxtLink to="#" class="text-white">
                            <i class="pi pi-angle-right text-xl"></i>
                        </NuxtLink>
                    </div>

                    <!-- Survey Content -->
                    <div class="p-4">
                        <div class="mb-5">
                            <p class="text-sm text-[#333] font-bangla">
                                করোনার মধ্যে দ্রব্যমূল স্বাভাবিক রাখতে ব্যবসায়ীদের প্রতি অনুরোধ করেছিলেন প্রধানমন্ত্রী শেখ হাসিনা। ব্যবসায়ীরা তার অনুরোধ রেখেছেন বলে
                                মনে করেন?
                            </p>
                        </div>

                        <!-- Radio Options -->
                        <div class="border border-gray-200 rounded-md p-2 mb-4">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <RadioButton v-model="selected" inputId="option1" name="survey" value="yes" />
                                    <label for="option1" class="ml-2 text-green-600 cursor-pointer">Yes</label>
                                </div>
                                <div class="flex items-center">
                                    <RadioButton v-model="selected" inputId="option2" name="survey" value="no" />
                                    <label for="option2" class="ml-2 text-red-600 cursor-pointer">No</label>
                                </div>
                                <div class="flex items-center">
                                    <RadioButton v-model="selected" inputId="option3" name="survey" value="no-idea" />
                                    <label for="option3" class="ml-2 text-blue-500 cursor-pointer">No Idea</label>
                                </div>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <Button label="Give an Opinion" class="w-full mb-4" style="background-color: #020039; color: white" />

                        <!-- Vote Count -->
                        <div class="text-center text-green-600 mb-3">
                            <p>120 people voted</p>
                        </div>

                        <!-- See Older Results Link -->
                        <div class="text-right">
                            <NuxtLink to="/online_survey.html" class="text-blue-500 hover:underline inline-flex items-center">
                                See Older Results <i class="pi pi-angle-right ml-1"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selected = ref(null);
</script>

<style scoped>
/* Card styles */
.up-coming-events-main {
    border-left: 4px solid #22c55e;
}

.up-coming-events-main-red {
    border-left: 4px solid #ef4444;
}

.up-coming-events-main-orange {
    border-left: 4px solid #f59e42;
}
</style>