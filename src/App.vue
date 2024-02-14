<template>
  <header >
    <nav class="h-20 w-full bg-slate-200 shadow-md flex items-center justify-between px-6 lg:px-20">
      <div class="flex items-end flex-row">
        <a href="#" class="">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
        <button @click="toggleMenu" class="lg:hidden items-center p-2 absolute top-0 right-0 h-16 w-16">
          <img src="/src/components/icons/menu_hamburger.svg" alt="Botón de hamburguesa" />
        </button>
      </div>
      <ul :class="{ 'active': menuOpen.isVisible, 'flex': menuOpen.isVisible, 'hidden lg:flex items-center space-x-8': !menuOpen.isVisible }">
        <li class="text-center">
          <RouterLink to="/" class="text-gray-700 hover:text-gray-900">Home</RouterLink>
        </li>
        <li class="text-center">
          <RouterLink to="/blog" class="text-gray-700 hover:text-gray-900">Blog</RouterLink>
        </li>
        <li class="text-center">
          <button class=" bg-indigo-600 text-stone-200 w-max py-4 px-12 rounded-full " @click="handleContactButtonClick">Contactanos</button>
        </li>
        <li class="text-center mt-8 lg:hidden">
          <button @click="toggleMenu" class="text-gray-700 hover:text-gray-900">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              </path>
              <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              </path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const menuOpen = ref({ isVisible: false })

const toggleMenu = () => {
  menuOpen.value.isVisible = !menuOpen.value.isVisible
}

const handleContactButtonClick = () => {
  // Aquí puedes agregar la lógica para manejar el clic en el botón "Contactanos"
  console.log('Botón "Contactanos" clickeado')
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
/* Estilos para los enlaces del menú */
ul li a {
  font-size: 1rem;
  font-weight: 600;
}

/* Estilos para los enlaces del menú en dispositivos móviles */
@media (max-width: 767px) {
  nav {
    background-color: rgba(255, 255, 255, 0.95);
  }

  ul {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.95);
    transition: transform 0.3s ease-in-out;
    transform: translateY(-100%);
  }

  ul.active {
    transform: translateY(0);
  }

  /* Estilos para el botón "X" */
  ul li:last-of-type {
    margin-top: 8px;
  }

  ul li:last-of-type button {
    position: absolute;
    top: 20px;
    left: center;
  }


  ul li:last-of-type button svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
}
</style>
