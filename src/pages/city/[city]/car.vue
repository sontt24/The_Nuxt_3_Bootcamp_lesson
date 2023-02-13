<template>
    <div>
        <div class="mt-32 flex">
            <car-side-bar />
            <NuxtPage />
        </div>
    </div>
</template>
<script setup>
const router = useRoute()
const { toTitleCase } = useUtilities()
useHead({
    title: `${router.params.make ? toTitleCase(router.params.make) : 'Cars'} in ${toTitleCase(router.params.city)}`
})

definePageMeta({
    layout: "custom"
})

</script>