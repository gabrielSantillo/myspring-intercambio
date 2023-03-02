<template>
  <div class="home">
    <home-component></home-component>
    <test-com></test-com>
  </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import TestCom from '@/components/AboutComponent.vue'

export default {
  components: { HomeComponent, TestCom },

}
</script>
