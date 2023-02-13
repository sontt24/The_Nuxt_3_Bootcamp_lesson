<template>
    <div v-if="carDetail">
        <car-detail :car="carDetail" />
        <car-detail-attributes :attribute="carDetail.attribute" />
        <car-detail-description :description="carDetail.description" />
        <car-detail-contact />
    </div>
</template>
<script setup>
const router = useRoute()
const { toTitleCase } = useUtilities()
const { cars } = userCars()

useHead({
    title: `${toTitleCase(router.params.name)}`
})

const carDetail = computed(() => {
    return cars.find((c) => {
        return c.id === parseInt(router.params.id)
    })
})
definePageMeta({
    layout: "custom-detail"
})

</script>