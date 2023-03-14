<template>
  <div class="agenda section">
    <div class="agenda__content container">
      <div class="agenda__content-description">
        <h2 class="agenda__content-title">
          Atendimento gratuito pelo WhatsApp
        </h2>
        <h3 class="agenda__content-subtitle">
          Segunda a Sexta das 12:00 as 19:00 (horário de brasília)
        </h3>
        <p>
          Entre em contato pelo WhatsApp para dúvidas gerais relacionadas aos:
        </p>
        <ul class="agenda__content-list">
          <li class="agenda__content-list-item">
            Programas de Online ENGLISH - ILAC
          </li>
          <li class="agenda__content-list-item">
            Nivelamento e estimativas de número
          </li>
          <li class="agenda__content-list-item">
            Dúvidas sobre nossos serviços de consultoria
          </li>
          <li class="agenda__content-list-item">
            Orçamentos dos programas presenciais de idiomas
          </li>
          <li class="agenda__content-list-item">
            Orçamentos dos programas de College Privado
          </li>
          <li class="agenda__content-list-item"></li>
        </ul>
        <p>
          Para demais assuntos relacionados a planejamento de intercâmbio,
          agende um horário com o consultor educacional pelo links a seguir.
        </p>
      </div>

      <h2 class="agenda__content-title">Agendamentos</h2>

      <div class="agenda__content-cards">
        <agenda-twenty-component></agenda-twenty-component>

        <agenda-fifty-component></agenda-fifty-component>

        <agenda-contract-component></agenda-contract-component>
      </div>
    </div>
  </div>
</template>

<script>
import AgendaContractComponent from "./AgendaContractComponent.vue";
import AgendaFiftyComponent from "./AgendaFiftyComponent.vue";
import AgendaTwentyComponent from "./AgendaTwentyComponent.vue";
export default {
  components: {
    AgendaTwentyComponent,
    AgendaFiftyComponent,
    AgendaContractComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.agenda__content {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.agenda__content-description {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.agenda__content-title {
  text-align: center;
  margin-bottom: 0.5rem;
}

.agenda__content-cards {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.agenda__content-card {
  background-color: hsla(157, 16%, 92%, 0.6);
  box-shadow: 0 2px 4px hsla(157, 54%, 18%, 0.25);
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 768px) {
  .agenda__content-description {
    align-items: center;
    text-align: center;
  }
}

</style>
