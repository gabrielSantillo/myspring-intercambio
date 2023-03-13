<template>
  <div class="agenda__content-card">
    <p class="agenda__content-card-title">Consulta 50 minutos</p>
    <p class="agenda__content-card-price">CAD$ 50</p>
    <p class="agenda__content-card-description">
      Tire suas dúvidas sobre intercâmbio no Canadá: valores, linha do tempo...
    </p>
    <a href="#" class="agenda__content-card-more">Mais informações</a>
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
export default {};
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
</style>
