<template>
    <div>
        <consultancy-component></consultancy-component>
        <consultancy-planning-component></consultancy-planning-component>
    </div>
</template>

<script>
import ConsultancyComponent from '@/components/ConsultancyComponent.vue'
import ConsultancyPlanningComponent from '@/components/ConsultancyPlanComponent.vue'
    export default {
  components: { ConsultancyComponent, ConsultancyPlanningComponent },
        
    }
</script>

<style lang="scss" scoped>

</style>