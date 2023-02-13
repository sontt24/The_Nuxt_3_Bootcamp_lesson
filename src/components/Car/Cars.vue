<template>
    <div class="w-full">
        <car v-for="car in cars " :key="car.id" :car="car" />
    </div>
</template>
<script setup>
const { cars } = userCars()
</script>