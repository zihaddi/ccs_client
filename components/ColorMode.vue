<script setup>
    const colorMode = useColorMode()
</script>
<template>
    <div class="px-2 color_mode">
        <div v-if="colorMode.preference == 'system'" title="System">
            <Icon name="eva:monitor-outline" class="w-5 h-5 text-black dark:text-white cursor-pointer" @click="$colorMode.preference = 'light'" />
        </div>
        <div v-else-if="colorMode.preference == 'light'" title="Light">
            <Icon name="quill:sun" class="w-5 h-5 cursor-pointer" @click="$colorMode.preference = 'dark'" />
        </div>
        <div v-else-if="colorMode.preference == 'dark'" title="Dark">
            <Icon name="quill:moon" class="w-5 h-5 text-white cursor-pointer" @click="$colorMode.preference = 'sepia'" />
        </div>
        <div v-else-if="colorMode.preference == 'sepia'" title="Sepia">
            <Icon name="uiw:coffee" class="w-5 h-5 cursor-pointer" @click="$colorMode.preference = 'system'" />
        </div>
    </div>
</template>