<template>
    <div class="about">
        <div class="about__container container grid">
            <div class="about__data">
                <h2 class="section__title about__title">
                    MySpring Intercâmbio <br>
                    Sobre Nós
                </h2>
                <p class="about__description">
                    A MySpring Intercâmbio surgiu como uma agência digital dentro de um nicho muito específico que é o intercâmbio para fins de imigração. Países como o Canadá e a Alemanha promovem programas de facilitação imigratória através do estudo e do trabalho, em busca de profissionais capacitados com interesse em estabelecerem-se no país. É justamente nesse cenário que surge a necessidade de uma prestação de serviço mais voltada para o planejamento de estudo e carreiras nesse tipo de viagem.
                </p>
                <p class="about__description">
                    Atuando há mais de 5 anos nesse mercado de intercâmbio para fins de imigração, a consultora Natália Fernandes desenvolveu uma metodologia para atender centenas de clientes que precisam de auxílio na análise do perfil profissional, e na escolha do curso certo na cidade certa. Pensando em como beneficiar a carreira desse cliente  no exterior, e em como facilitar seu processo de imigração futuro, foi desenvolvido o serviço de consultoria educacional, que acompanha o cliente em todas as fases do processo até o embarque e início das aulas.
                </p>
                <p class="about__description">
                    "A experiência de estudos no exterior, ou mesmo o plano de viver definitivamente fora do Brasil é algo muito grandioso e gera muita ansiedade nas pessoas. Eu já passei por todas as etapas, sei exatamente como ajudar o cliente a lidar com esses sentimentos ao longo do processo mostrando o caminho mais seguro. Tenho muita alegria em poder contribuir com minhas experiências e conhecimentos, e uma imensa gratidão em poder cuidar do projeto de cada cliente que confia no meu trabalho. Cada planejamento é único".
                </p>
            </div>

            <div class="about__img">
                <div class="about__img-overlay">
                    <img src="@/img/about1.jpeg" alt="" class="about__img-one">
                </div>

                <div class="about__img-overlay">
                    <img src="@/img/about2.jpeg" alt="" class="about__img-two">
                </div>
            </div>

            <div class="about__data-items">
                <div class="about__data-item-one">
                    <h2 class="about__data-title">
                    Visão
                </h2>
                <p class="about__description">
                    Mudar destinos
                </p>
                </div>

                <div class="about__data-item-two">
                    <h2 class="about__data-title">
                        Missão
                    </h2>
                    <p class="about__description">
                        Inspirar pessoas a serem protagonistas de suas vidas através da experiência de intercâmbio
                    </p>
                </div>

                <div class="about__data-item">
                    <h2 class="about__data-title">
                        Valores
                    </h2>
                    <p class="about__description">
                        Doar-se genuinamente ao planejamento do aluno
                    </p>
                    <p class="about__description">
                        Cultivar a honestidade e a transparência nas relações
                    </p>
                    <p class="about__description">
                        Sempre andar a "extra mile" por cada cliente, internos ou externos
                    </p>
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

.about__data, .about__data-items {
    text-align: center;
}

.about__container {
    row-gap: 2.5rem;
}

.about__description {
    margin-bottom: $--mb-2;
    line-height: 1.5rem;
}

.about__img {
    display: flex;
    column-gap: 1rem;
    align-items: center;
    justify-content: center;
}

.about__data-title {
    margin-bottom: .5rem;
}

.about__img-overlay {
    overflow: $--img-hidden;
}

.about__img-one {
    width: 130px;
    border-radius: .5rem;
}

.about__img-two {
    width: 180px;
    border-radius: .5rem;
}

.about__img-one, .about__img-two {
    transition: $--img-transition;
}

.about__img-one:hover, .about__img-two:hover {
    transform: $--img-scale;
}

@media screen and (min-width: 768px) { 
    .about__data-items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1rem;
    }

    .about__data-item-one {
        display: flex;
        flex-direction: column;
        justify-content: end;
    }

    .about__data-item-two {
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
}

</style>