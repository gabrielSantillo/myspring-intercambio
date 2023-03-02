<template>
  <div class="home">
    <home-component></home-component>
    <about-component></about-component>
  </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'

export default {
  components: { HomeComponent, AboutComponent },

}
</script>
