<template>
    <div class="mt-5 border-b pg-5">
        <div class="flex text-lg mt-1 mb-4" v-for="(att, index) in attribute" :key="index">
            <p class="rounded text-lime-80 mr-3"> ✔️ </p>
            <p> {{ att }} </p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    attribute: Array
})
</script>