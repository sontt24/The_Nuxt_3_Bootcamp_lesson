<template>
    <div>
        <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
            <a href="#" class="text-3xl font-mono">Cartrader</a>
        </header>
        <!-- CAR PAGE -->
        <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 x-3/5">
            <div class="mt-32 flex">
                <!-- CAR SIDEBAR -->
                <div class="shadow border w-64 mr-10 z-30 h-[190px]">
                    <div class="p-5 fleax justify-between relative cursor-pointer border-b">
                        <h3>Location</h3>
                        <h3 class="text-blue-400 capitalize">Toronto</h3>
                        <div class="absolute border shadow left-56 p-5 top-1 bg-white">
                            <input type="text" class="border p-1 rounded">
                            <button class="bg-blue-400 w-full rounded text-white p-1"> Apply </button>
                        </div>
                    </div>
                    <div class="p-5 fleax justify-between relative cursor-pointer border-b">
                        <h3>Make</h3>
                        <h3 class="text-blue-400 capitalize">Toyota</h3>
                    </div>
                    <div class="p-5 fleax justify-between relative cursor-pointer border-b">
                        <h3>Price</h3>
                        <h3 class="text-blue-400 capitalize">Any</h3>
                    </div>
                </div>
                <!-- CAR SIDEBAR -->
                <!-- CAR DETAIL -->
                <div class="w-full">
                    <!-- CAR CARD -->
                    <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
                        <div class="flex h-full">
                            <img src="https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2023/perfomance/corvette/01-images/nav/2023-corvette-3lt-gkz-driver-front-3quarter-nav.jpg" alt="" class="w-[300px] h-full">
                            <div class="p-4 flex flex-col">
                                <div>
                                    <h1 class="text-2xl text-blue-700">
                                        Volvo xc400
                                    </h1>
                                    <p class="text-gray-700">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, architecto omnis ipsa iusto, vel error perspiciatis, sint expedita adipisci recusandae eligendi qui cumque sunt. Tempora ea maiores explicabo saepe. Voluptatum!
                                    </p>
                                </div>
                                <h1 class="mt-auto text-xl"> $39.555</h1>
                            </div>
                        </div>

                    </div>
                    <!-- CAR CARD -->
                </div>
                <!-- CAR DETAIL -->
            </div>
        </div>
        <!-- CAR  PAGE -->
    </div>
</template>