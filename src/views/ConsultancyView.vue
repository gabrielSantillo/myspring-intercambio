<template>
  <div>
    <consultancy-component></consultancy-component>
    <consultancy-planning-component></consultancy-planning-component>
    <consultancy-time-line-component></consultancy-time-line-component>
    <div class="consultancy-payment">
      <consultancy-bullets-component></consultancy-bullets-component>
      <consultancy-payment></consultancy-payment>
    </div>
  </div>
</template>

<script>
import ConsultancyComponent from "@/components/Consultancy/ConsultancyComponent.vue";
import ConsultancyPlanningComponent from "@/components/Consultancy/ConsultancyPlanComponent.vue";
import ConsultancyTimeLineComponent from "@/components/Consultancy/ConsultancyTimeLineComponent.vue";
import ConsultancyBulletsComponent from "@/components/Consultancy/ConsultancyBulletsComponent.vue";
import ConsultancyPayment from "@/components/Consultancy/ConsultancyPayment.vue";
export default {
  components: {
    ConsultancyComponent,
    ConsultancyPlanningComponent,
    ConsultancyTimeLineComponent,
    ConsultancyBulletsComponent,
    ConsultancyPayment,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

@media screen and (min-width: 1024px) {
    .consultancy-payment {
        display: flex;
    }
}
</style>
