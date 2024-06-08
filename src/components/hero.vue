<template>
    <div
        class="relative flex flex-col lg:flex-row bg-gradient-to-tl from-cyan-100 to-blue-800 bg-cover bg-center shadow-2xl">
        <div class="flex-grow lg:w-1/2 p-6 flex flex-col justify-center items-center text-center font-Georgia">
            <h1 class="italic text-3xl lg:text-4xl xl:text-5xl mb-6 font-bold text-white">
                Análisis de datos, desarrollo web y SEO para impulsar tu negocio
            </h1>
            <p class="text-base lg:text-lg text-white mb-6">
                Desarrollamos tu marca en la web, optimizamos su posicionamiento SEO y analizamos las diferentes claves
                métricas (KPIs) para mejorar el flujo de clientes.
            </p>
            <div class="flex items-center space-x-2">
                <span v-for="i in 5" :key="i" class="animate-bounce w-6 h-6 mt-8 bg-repeat">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-full h-full">
                        <path fill-rule="evenodd"
                            d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                            clip-rule="evenodd" />
                        <path fill-rule="evenodd"
                            d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </div>
        </div>
        <div class="lg:flex lg:w-1/2 p-6">
            <div class="grid grid-cols-2 gap-4">
                <div v-for="(image, index) in images" :key="index"
                    class="p-2 flex justify-center items-center flex-col">
                    <a :href="image.url" class="flex justify-center">
                        <img :src="image.src" :alt="image.alt" class="max-h-72 w-auto object-cover rounded-xl shadow-md rotate-3 transition-transform duration-500 hover:scale-110" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const images = [
    { src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80", alt: "Image 1", url: "url-de-tu-pagina" },
    { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80", alt: "Image 2", url: "url-de-tu-pagina" },
    { src: "https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80", alt: "Image 3", url: "url-de-tu-pagina" },
    { src: "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80", alt: "Image 4", url: "url-de-tu-pagina" },
];
</script>

<style scoped>
.bg-gradient-to-tl {
    border-bottom-right-radius: 15%;
}
</style>
