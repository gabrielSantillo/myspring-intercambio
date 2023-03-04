<template>
    <div class="pathway__payment section">
        <div class="pathway__payment-description container">
            <h2 class="section__title">Pagamento</h2>
            <p>O pagamento do curso é feito direto para a escola, em boleto, pix ou cartão de crédito. </p>
            <p>O valor pode ser parcela em até 12x no cartão (com juros) pela Flywire.</p>
            <p>O aluno ainda pode usar o app da Wise ou fazer um wire transfer de uma conta internacional.</p>
            <p class="description-bold">Passo a passo para a matrícula:</p>
        </div>

        <div class="pathway__payment-cards container">
            <div class="pathway__payment-card">
                <h3 class="pathway__payment-card-title">Documentos</h3>
                <p class="pathway__payment-card-description">Envio dos dados pessoais para a MySpring Intercâmbio para a criação da matrícula no sistema e do número de estudante para emissão da invoice</p>
            </div>
            <div class="pathway__payment-card">
                <h3 class="pathway__payment-card-title">Pagamento</h3>
                <p class="pathway__payment-card-description">Com a invoice em mãos o aluno vai efetuar o pagamento direto para a escola, nós te ajudamos com o passo a passo é bem simples</p>
            </div>
            <div class="pathway__payment-card">
                <h3 class="pathway__payment-card-title">Nivelamento</h3>
                <p class="pathway__payment-card-description">Após confirmação do pagamento, o aluno receberá  o link para efetuar a prova de nivelamento de inglês do Cambridge</p>
            </div>
            <div class="pathway__payment-card">
                <h3 class="pathway__payment-card-title">Orientação</h3>
                <p class="pathway__payment-card-description">Após o teste o aluno será  convidado para participar de uma orientação pelo Zoom com o time acadêmico da ILAC para tirar dúvidas antes de iniciar as aula</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.description-bold {
    margin-top: 24px;
    margin-bottom: 24px;
    font-weight: bold;
}

.pathway__payment-cards {
    display: grid;
    column-gap: 48px;
    justify-content: center;
    row-gap: 24px;
}

.pathway__payment-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 24px;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px hsla(348, 54%, 18%, .25);
    padding: 1.5rem;
    margin: 0 16px;
    text-align: center;
    height: 180px;
    transition: .3s;
}

.pathway__payment-card:hover {
    box-shadow: 0 2px 4px hsla(184, 54%, 18%, .35);
}
</style>