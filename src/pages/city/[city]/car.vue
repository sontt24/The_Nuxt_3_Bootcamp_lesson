<template>
    <div>
        <div class="mt-32 flex">
            <NuxtErrorBoundary>
                <car-side-bar />
                <NuxtPage />
                <template #error="{ error }">
                    <div class="text-center mx-auto flex flex-col">
                        <h1 class="text-5xl text-red-600 mb-4"> Sorry, something went wrong</h1>
                        <code>{{ error }}</code>
                        <button @click="error.value = null" class="text-white bg-blue-500 px-3 rounded mt-4 p-3 w-1/4 mx-auto">Go Back</button>
                    </div>
                </template>
            </NuxtErrorBoundary>
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