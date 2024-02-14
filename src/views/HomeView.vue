<script setup>
import Hero from "/src/components/hero.vue";
import Descripcion from "/src/components/descripcion.vue";
import Tecnoloigas from "/src/components/tecnologias.vue";
import Informacion from "/src/components/informacion.vue";
import Formulario from "/src/components/formulario.vue"
import Footer from "/src/components/footer.vue"

</script>

<template>
  <main>
    <section class="mt-20">
      <Hero />
    </section>
    <section>
      <Descripcion />
    </section>
    <section>
      <Tecnoloigas />
    </section>
    <section>
      <Informacion />
    </section>
    <section>
      <Formulario />
    </section>
  </main>
  <section class="mt-8">
    <Footer />
  </section>

</template>
