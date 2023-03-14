<template>
  <div class="plan section">
    <h2 class="section__title">Como funcionará o planejamento?</h2>
    <div class="plan__container container grid">
      <div class="plan__content grid">
        <div class="plan__date">
          <h2 class="plan__title">Fase 1</h2>
          <p class="plan__description">Planejamento, aplicações e matrícula</p>
        </div>
        <div class="plan__date plan__date-center">
          <h2 class="plan__title">Fase 2</h2>
          <p class="plan__description">
            Gestão da matrícula, do planejamento e do processo de vistos
          </p>
        </div>
        <div class="plan__date plan__date-end">
          <h2 class="plan__title">Fase 3</h2>
          <p class="plan__description">Preparo de pré embarque</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

@media screen and (min-width: 768px) {
    .plan__date-center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .plan__date-end {
        display: flex;
        flex-direction: column;
        align-items: end;
    }
}
</style>
