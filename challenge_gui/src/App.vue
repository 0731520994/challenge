<template>
  <div>
    <NavComp />
    <main class="container-fluid">
      <router-view/>
    </main>
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavComp from './components/NavComp.vue'

export default {
  name: 'App',
  components: {
    NavComp,
    FooterComp
  }
}
</script>