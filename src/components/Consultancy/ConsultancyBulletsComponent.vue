<template>
  <div class="section">
    <h2 class="section__title">O que está incluso no serviço?</h2>
    <div class="plan__container container">
        <ul class="plan__list">
            <li class="plan__item">Contrato de até 12 meses de assessoria</li>
            <li class="plan__item">Planejamento Educaional com foco em Residência Permanente</li>
            <li class="plan__item">Suporte para cumprir os requerimentos do inglês e ser aceito pelo College ou Universidade</li>
            <li class="plan__item">Reuniões periódicas por vídeo chamada, acompanhamento por email e whattsapp</li>
            <li class="plan__item">Processo de aplicação, matrícula e gerenciamento dos prazos com a escola</li>
            <li class="plan__item">Indicação dos melhores cursos baseados no perfil profissional do aluno</li>
            <li class="plan__item">Suporte para eventuais trocas de data ou mesmo cancelamento do projeto</li>
            <li class="plan__item">Preparo do aluno para o dia do embarque, lista de documentos e dúvidas</li>
        </ul>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.plan__list {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}

@media screen and (min-width: 768px) {
  .plan__list {
    text-align-last: center;
  }
}
</style>