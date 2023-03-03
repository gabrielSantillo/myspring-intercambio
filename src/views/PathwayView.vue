<template>
    <div>
        <pathway-component></pathway-component>
        <pathway-levels></pathway-levels>
    </div>
</template>

<script>
import PathwayComponent from '@/components/Pathway/PathwayComponent.vue'
import PathwayLevels from '@/components/Pathway/PathwayLevels.vue'
    export default {
  components: { PathwayComponent, PathwayLevels },
        
    }
</script>

<style lang="scss" scoped>

</style>