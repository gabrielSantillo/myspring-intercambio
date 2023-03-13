<template>
  <div class="section">
    <h2 class="section__title">Pagamento</h2>
    <div class="plan__container container">
        <p class="plan__description">
        Serviço de consultoria <br>
        Contrato 12 meses
        </p>
        <p class="plan__description">
        CAD$ 200.00 <br>
        (PayPal, Wise ou Pix)
        </p>
        <p class="plan__description">
        Solicite sua invoice por email <br>
        Assinatura do contrato de prestação de serviçoes via Autentique
        </p>
        <a href="mailto:natalia@myspringintercambio.com" class="button">Solicitar invoice</a>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.plan__container {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    row-gap: 1rem;
}

.button {
    display: inline-block;
    background-color: $--first-color;
    color: $--white-color;
    padding: 1rem 2rem;
    font-weight: $--font-semi-bold;
    transition: .3s;
    border-radius: .5rem;
    width: 180px;
    margin: auto;
    margin-top: 1rem;
}

.button:hover {
    box-shadow: 4px 8px 8px hsla(157, 12%, 90%, 1);
}
</style>