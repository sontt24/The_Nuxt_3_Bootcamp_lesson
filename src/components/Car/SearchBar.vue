<template>
    <div class="font-serif w-[90%] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
        <input type="text" v-model="city" placeholder="Search by city..." class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" :class="errorCity ? 'border-red-500 border' : ''">
        <button @click="handleSearch" class="bg-sky-500 px-10 text-white"> Search </button>
    </div>
</template>
<script setup>
const city = ref("")
const errorCity = ref(false)

const handleSearch = () => {
    if (!city.value) {
        return errorCity.value = true
    }
    navigateTo(`/city/${city.value}/car`)
}
</script>