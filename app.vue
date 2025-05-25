<script setup>
    const isLoading = ref(true);

    

    
</script>

<template>
    <ClientOnly fallbackTag="div">
        <NuxtLayout v-if="isLoading">
            <NuxtPage />
        </NuxtLayout>
        <div v-else class="flex items-center justify-center w-screen h-screen dark:bg-gray-100 dark:bg-gray-900">
            <div class="flex justify-center card">
                <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
                    animationDuration=".5s" aria-label="Custom ProgressSpinner" />
            </div>
        </div>
        <template #fallback>
            <div class="flex items-center justify-center w-screen h-screen dark:bg-gray-100 dark:bg-gray-900">
                <div class="flex justify-center card">
                    <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
                        animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                </div>
            </div>
        </template>
    </ClientOnly>
</template>