<template>
    <div class="plan section ">
        <h2 class="section__title">Como  funcionará o planejamento?</h2>
        <div class="plan__container container grid">
            <div class="plan__content  grid">
                <div class="plan__date">
                    <h2 class="plan__title">Fase 1</h2>
                    <p class="plan__description">Planejamento, aplicações e matrícula</p>
                </div>
                <div class="plan__date">
                    <h2 class="plan__title">Fase 2</h2>
                    <p class="plan__description">Gestão da matrícula, do planejamento e do processo de vistos</p>
                </div>
                <div class="plan__date">
                    <h2 class="plan__title">Fase 3</h2>
                    <p class="plan__description">Preparo de pré embarque</p>
                </div>
            </div>
        </div>

        <consultancy-time-line-component></consultancy-time-line-component>
        
    </div>
</template>

<script>
import ConsultancyTimeLineComponent from './ConsultancyTimeLineComponent.vue'
    export default {
  components: { ConsultancyTimeLineComponent },
        
    }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';



</style>