<template>
    <div>
        <div
            class="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center"
        >
            <div class="parent-div">
                <div class="text-5xl text-center">
                    ¡Oops!
                </div>
                <div class="text-1xl text-center">
                    no encontramos la página que estás buscando.
                </div>
                <div class="text-1xl text-center mt-5">
                    <router-link
                        to="/"
                        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition duration-300"
                    >
                        Volver al inicio
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        gsap.from(".parent-div", {
            opacity: 0,
            y: 200,
            duration: 2,
            ease: "elastic"
        });
    }
};
</script>
