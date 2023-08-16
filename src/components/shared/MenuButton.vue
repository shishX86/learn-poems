<script lang="ts" setup>
    const emit = defineEmits<{
        (e: 'btn-clicked'): void
    }>()
</script>

<template>
    <div class="mainbtn">
        <button 
            class="mainbtn__btn" 
            type="button" 
            @click="emit('btn-clicked')">
            
            <slot/>
        </button>
    </div>
</template>