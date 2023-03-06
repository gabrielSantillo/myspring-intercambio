<template>
    <div>
        <pathway-component></pathway-component>
        <pathway-levels></pathway-levels>
        <pathway-payment></pathway-payment>
        <pathway-form></pathway-form>
    </div>
</template>

<script>
import PathwayComponent from '@/components/Pathway/PathwayComponent.vue'
import PathwayLevels from '@/components/Pathway/PathwayLevels.vue'
import PathwayPayment from '@/components/Pathway/PathwayPayment.vue'
import PathwayForm from '@/components/Pathway/PathwayForm.vue'
    export default {
  components: { PathwayComponent, PathwayLevels, PathwayPayment, PathwayForm },
        
    }
</script>

<style lang="scss" scoped>

</style>