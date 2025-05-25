<template>
    <div>
        <!-- This is Homepage Layout  -->
        <AppHeaderGuest/>
        <div :class="['pt-20 transition-all duration-100 ']">
            <slot/>
        </div>
        
        <AppFooterGuest/>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>