<template>
  <div class="pathway section">
    <h2 class="section__title">Pathway Online</h2>
    <p class="section__description container">
      Programa de inglês online direcionado para pessoas que precisam atingir a
      fluência do idioma ainda no Brasil.
    </p>
    <div class="pathway__images container">
      <img src="@/img/logo-ilac.png" alt="" class="pathway__img" />
      <img src="@/img/logo-ilac-kiss.png" alt="" class="pathway__img" />
    </div>

    <div class="pathway__content container">
      <div class="pathway__content-school">
        <h2 class="section__title">A escola</h2>
        <p class="pathway__content-school-description">
          A ILAC é uma das escolas de inglês mais premiadas do mundo, com sede
          em Toronto e Vancouver. Reconhecida por sua excelência no ensino de
          inglês e pela metodologia incomparável, se tornou referência ao longo
          do anos para alunos do mundo inteiro que sonham com a fluência do
          inglês. Durante a pandemia, a ILAC criou o programa Online ILAC Kiss e
          foi um sucesso absoluto, tanto que virou um produto definitivo no
          portfólio da instituição e isso mudou a vida de muito estudantes nos
          últimos dois anos. Agora é possível ter acesso a educação
          internacional ainda do Brasil, ter acesso a professores nativos e
          alunos do mundo todo.
        </p>
      </div>

      <div class="pathway__content-program">
        <h2 class="section__title">O curso</h2>
        <div class="pathway__content-program-description">
          <p>
            Atualmente, no formato online, a ILAC oferece três tipos de
            programas:
          </p>

          <p>
            <b>GENERAL ENGLISH:</b> direcionado a quem precisa do inglês para
            mercado de trabalho, e para quem tem nível básico ou intermediário
          </p>

          <p>
            <b>ACADEMIC ENGLISH:</b> direcionado para alunos do nível avançado
            que tem o objetivo de ingressar em um college ou universidade fora
            do Brasil
          </p>

          <p>
            <b>PREPARATÓRIO DE IELTS:</b> direcionado para alunos do nível
            avançado que tem o objetivo de prestar o exame de proficiência do
            IELTS General ou Academic
          </p>
        </div>
      </div>

      <div class="pathway__content-cards">
        <div class="pathway__content-card left">
          <h3 class="pathway__content-card-title">Aulas ao vivo</h3>
          <p class="pathway__content-card-description">
            Professores nativos, em tempo real pela plataforma Zoom
          </p>
        </div>
        <div class="pathway__content-card right">
          <h3 class="pathway__content-card-title">3 Horas por dia</h3>
          <p class="pathway__content-card-description">
            Aulas de segunda a sexta deira, total de 15 horas por semana
          </p>
        </div>
        <div class="pathway__content-card left">
          <h3 class="pathway__content-card-title">Turmas pequenas</h3>
          <p class="pathway__content-card-description">
            Classe de 15 a20 alunos, com estudantes do mundo todo
          </p>
        </div>
        <div class="pathway__content-card right">
          <h3 class="pathway__content-card-title">Portal Digital</h3>
          <p class="pathway__content-card-description">
            Plataforma de ensino digital com atividades e livros didáticos
          </p>
        </div>
      </div>
    </div>

    <div class="pathway__video container">
      <iframe
        src="https://www.youtube.com/embed/UcfNBgJxLGM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.section__description {
  margin-bottom: $--mb-2;
}

.pathway__content {
  margin-top: 2rem;
}

.pathway__content-school {
  margin-bottom: 2rem;
}

.pathway__images {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.pathway__img {
  width: 100px;
}

.pathway__content-program {
  margin-bottom: 2rem;
}

.pathway__content-program-description {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.pathway__content-cards {
  display: grid;
  column-gap: 48px;
  justify-content: center;
  row-gap: 24px;
}

.pathway__content-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 24px;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px hsla(348, 54%, 18%, 0.25);
  padding: 1.5rem;
  margin: 0 16px;
  text-align: center;
  height: 180px;
  transition: 0.3s;
  background-color: hsla(157, 16%, 92%, 0.6);
}

.pathway__content-card:hover {
  box-shadow: 0 2px 4px hsla(184, 54%, 18%, 0.35);
}

.pathway__video {
  display: flex;
  justify-content: center;
  margin-top: 32px;

  iframe {
    width: 315px;
    height: 200px;
  }
}

@media screen and (min-width: 768px) {
    .pathway {
        text-align: center;
    }

  .pathway__video {
    margin-top: 64px;

    > iframe {
      width: 500px;
      height: 300px;
    }
  }
}

@media screen and (min-width: 1024px) { 
  .pathway__img {
    width: 150px;
  }

  .pathway__content-cards {
    justify-content: normal;
    padding-right: 7rem;
    padding-left: 7rem;
  }

  .left {
    justify-self: start;
  }

  .right {
    justify-self: end;
  }

  .pathway__video {
    >   iframe {
          width: 700px;
      height: 400px;
  }
  }


}
</style>
