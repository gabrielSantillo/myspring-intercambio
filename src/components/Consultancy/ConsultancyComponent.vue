<template>
    <div class="consultancy section">
        <h2 class="section__title">
            Planejamento de intercâmbio <br> para fins de imigração
        </h2>
        <p class="section__description container">
            O serviço de consultoria vai te ajudar a traçar estratégias para conquistar sua carreira internacional e aumentar suas chances de aplicar para um processo futuro de residência permanente.
        </p>

        <div class="consultancy__container container">
            <h2 class="section__title container__title">Início</h2>
            <div>
                <div class="consultancy__card">
                    <img src="@/img/discover.jpeg" alt="" class="consultancy__img">
                    <div class="consultancy__data">
                        <h2 class="consultancy__title">INGLÊS</h2>
                        <span class="consultancy__description">Qual nível de inglês a ser atingido</span>
                    </div>
                </div>
                <div class="consultancy__card">
                    <img src="@/img/discover2.jpeg" alt="" class="consultancy__img">
                    <div class="consultancy__data">
                        <h2 class="consultancy__title">ORÇAMENTO</h2>
                        <span class="consultancy__description">Orçamento necessário para o projeto</span>
                    </div>
                </div>
                <div class="consultancy__card">
                    <img src="@/img/discover3.jpeg" alt="" class="consultancy__img">
                    <div class="consultancy__data">
                        <h2 class="consultancy__title">FORMAÇÃO</h2>
                        <span class="consultancy__description">Recolocação profissional após a formatura</span>
                    </div>
                </div>
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

.consultancy__card {
    position: relative;
    width: 200px;
    overflow: $--img-hidden;
    margin: auto;
    margin-bottom: $--mb-2;
}

.consultancy__data {
    position: absolute;
    bottom: 1.5rem;
    left: 1rem;
}

.consultancy__title, .consultancy__description {
    color: $--white-color;
}

.consultancy__title {
    font-size: $--h3-font-size;
    margin-bottom: $--mb-0-25;
}

.discover__description {
    display: block;
    font-size: $--smaller-font-size;
}

.consultancy__img {
    transition: $--img-transition;
    filter: brightness(70%);
    border-radius: .5rem;
}

.consultancy__img:hover {
    transform: $--img-scale;
}
</style>