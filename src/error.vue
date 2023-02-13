<template>
    <div class="flex h-screen justify-center items-center flex-col">
        <h1 class="text-9xl">{{ error.statusCode }}</h1>
        <p class="mt-7 text-4xl">{{ error.message }}</p>
        <a @click="handleBackHome" href="javascript:void(0)" class="rounded mt-7 text-2xl bg-blue-500 px-8 py-2 text-white">Home</a>
    </div>
</template>
<script setup>
const error = useError()

const handleBackHome = () => {
    navigateTo("/")
}
</script>