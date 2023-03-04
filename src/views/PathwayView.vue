<template>
    <div>
        <pathway-component></pathway-component>
        <pathway-levels></pathway-levels>
        <pathway-payment></pathway-payment>
    </div>
</template>

<script>
import PathwayComponent from '@/components/Pathway/PathwayComponent.vue'
import PathwayLevels from '@/components/Pathway/PathwayLevels.vue'
import PathwayPayment from '@/components/Pathway/PathwayPayment.vue'
    export default {
  components: { PathwayComponent, PathwayLevels, PathwayPayment },
        
    }
</script>

<style lang="scss" scoped>

</style>