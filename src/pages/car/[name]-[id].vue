<template>
    <div>
        <car-detail-hero :car="carDetail" />
        <car-detail-attributes :attribute="carDetail.features" />
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

if (!carDetail.value) {
    throwError(404, `This car with id of ${router.params.id} does not exist`)

}

definePageMeta({
    layout: "custom-detail"
})

</script>