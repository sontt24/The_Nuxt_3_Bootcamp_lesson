<template>
    <div class="shadow border w-full overflow-hidden mb-5 p-3 cursor-pointer h-[210px]" @click="navigateTo(`/car/${car.name}-${car.id}`)">
        <div class="flex h-full">

            <img :src="car.url" :alt="car.name" class="w-[300px] h-full pb-2">
            <div class="p-4 flex flex-col">
                <div>
                    <h1 class="text-2xl text-blue-700">
                        {{ car.name }}
                    </h1>
                    <p class="text-gray-700">
                        {{ car.description }}
                    </p>
                </div>
                <h1 class="mt-auto text-xl"> {{ car.price }} </h1>
            </div>
        </div>

    </div>
</template>
<script setup>
const props = defineProps({
    car: Object
})
</script>