<script setup>
    const props = defineProps({
        width: {
            type: String,
            default: "100%"
        },
        height: {
            type: String,
            default: "100%"
        }
    });
</script>
<template>
    <div>
        <img src="/images/logo.png" alt=""
            :style ="{ width: props.width, height: props.height }"
            class="fill-current" />
        
            
    </div>
</template>