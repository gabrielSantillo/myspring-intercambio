<template>
  <div class="section">
    <h2 class="section__title">Linha do Tempo</h2>
    <div class="plan__container container">
      <p class="plan__description">
        Checklist personalizado das atividades necessárias em cada fase do
        planejamento, organizado de forma clara objetiva.
      </p>
      <img src="@/img/checklist.webp" alt="" class="plan__img">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.plan__container {
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
}

@media screen and (min-width: 768px) {
  .plan__container {
    text-align: center;
  }
}
</style>
