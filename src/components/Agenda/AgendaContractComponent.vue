<template>
  <div class="agenda__content-card">
    <p class="agenda__content-card-title">Consultoria de Intercâmbio</p>
    <p class="agenda__content-card-price">CAD$ 200</p>
    <p class="agenda__content-card-description">
      Consultoria especializada para fins de imigração | Contrato válido para 12
      meses
    </p>
    <button @click="popup" class="agenda__content-card-more">Mais informações</button>
    <div class="line"></div>
    <a
      href="https://agendamentosmyspringintercambio.as.me/?calendarID=4775749"
      target="_blank"
      class="agenda__content-card-button"
      >Agendar</a
    >
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: {
                title: "Descrição da Consultoria de Intercâmbio",
                content: "O serviço de consultoria vai te ajudar a traçar estratégias para conquistar sua carreira internacional e aumentar suas chances de aplicar para um processo futuro de residência permanente. Contrato de 12 meses, taxa de serviço de CAD$ 200 em pagamento único."
            }
        }
    },

    methods: {
        popup() {
            this.$root.$emit(`popup`, this.message);
        }
    },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.agenda__content-card {
  background-color: hsla(157, 16%, 92%, 0.6);
  box-shadow: 0 2px 4px hsla(157, 54%, 18%, 0.25);
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
}

.agenda__content-card-title,
.agenda__content-card-price {
  font-weight: $--font-semi-bold;
  font-size: $--h2-font-size;
}

.agenda__content-card-price {
  margin-bottom: 1rem;
}

.agenda__content-card-more {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: hsl(157, 64%, 18%);
  text-align: start;
  background-color: transparent;
}

.line {
  width: 100%;
  height: 0.025rem;
  background-color: rgb(193, 214, 205);
  margin-bottom: 1.5rem;
}

.agenda__content-card-button {
  background-color: $--first-color;
  color: $--white-color;
  padding: 1rem 2rem;
  font-weight: $--font-semi-bold;
  transition: 0.3s;
  border-radius: 0.5rem;
  width: 120px;
  height: 50px;
  text-align: center;
}

.agenda__content-card-button:hover {
  background-color: hsl(157, 24%, 35%);
}

@media screen and (min-width: 768px) {
  .agenda__content-card {
    align-items: center;
    width: 500px;
    margin: 0 auto;
  }
}
</style>
