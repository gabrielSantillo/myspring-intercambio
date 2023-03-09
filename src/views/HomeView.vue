<template>
  <div class="home">
    <home-component></home-component>
    <about-component></about-component>
    <partners-component></partners-component>
  </div>
</template>

<script>
import HomeComponent from '@/components/Home/HomeComponent.vue'
import AboutComponent from '@/components/Home/AboutComponent.vue'
import PartnersComponent from '@/components/Home/PartnersComponent.vue'
export default {
  components: { HomeComponent, AboutComponent, PartnersComponent },
}
</script>
