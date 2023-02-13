<template>
    <div class="mt-10">
        <img src="https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2023/perfomance/corvette/01-images/nav/2023-corvette-3lt-gkz-driver-front-3quarter-nav.jpg?imwidth=960" alt="" class="w-full">
        <h1 class="mt-10 text-4xl"> Volvo 3xt </h1>
        <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
            <div class="flexf">
                <p class="mr-2"> 5 seats </p>
                <p class="mr-2"> | </p>
                <p class="mr-2"> 67,4444 miles </p>
            </div>
            <div>
                <p class="font-bold text-2xl"> $25,555 </p>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    car: Object
})
</script>