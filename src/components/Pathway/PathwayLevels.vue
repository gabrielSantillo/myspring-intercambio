<template>
  <div class="pathway__level section">
    <div class="pathway__level-leveling container">
      <h2 class="section__title">Como funciona o nivelamento das turmas?</h2>
      <div class="pathway__level-leveling-description container">
        <p>
          Todos os alunos fazem um teste antes de iniciar suas aulas, e o
          resultado serve para nivelar esse estudante em uma turma de acordo com
          seu nível acadêmico. Os alunos de nível básico e intermediário iniciam
          obrigatoriamente nas turmas de General English, e quando atingem o
          nível avançado (Level 10), podem optar pelo Academic English ou o
          Preparatório de IELTS
        </p>
        <div class="topics">
          <p>GENERAL ENGLISH: nível básico ao proficiente (Level 1 a 17)</p>
          <p>
            ACADEMIC ENGLISH: nível básico ao proficiente (Level 10 a 17 = Pw1 a
            Pw3)
          </p>
          <p>PREPARATÓRIO IELTS: nível básico ao proficiente (Level 10 a 17)</p>
        </div>
      </div>
    </div>

    <div class="pathway__level-img container">
      <img src="@/img/levels.webp" alt="" />
    </div>

    <div class="pathway__level-duration container">
      <h2 class="section__title">Quanto tempo dura cada nível do curso?</h2>
      <div class="pathway__level-duration-description">
        <p>
          Cada English Band tem duração mínima de 4 semanas. Ao final da quarta
          semana o aluno faz uma avaliação para testar sua evolução, obtendo a
          nota exigida ele automaticamente passa para o próximo nível. Caso não
          atingir a nota necessária o aluno pode permanecer no mesmo English
          Band por mais 2 ou 4 semanas até que consiga a evolução necessária
          para seguir em frente.
        </p>
        <p>
          Uma dúvida que muitos alunos tem é sobre o número de semanas, para ter
          uma estimativa personalizada usamos a tabela acima como referência e
          os objetivos do aluno para indicar o número de semanas compatível.
        </p>
        <p>
          Entre em contato conosco pelo WhatsApp que vamos te ajudar a
          identificar seu nível e quantas semanas você vai precisar
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5519992137096&text=Olá! Gostaria de fazer o teste da ILAC para saber em qual nível de inglês estou.
"
          target="_blank"
          class="button"
          >Saber meu nível</a
        >
      </div>
    </div>

    <div class="pathway__level-academic container">
      <h2 class="section__title">
        Como funciona o Academic English para entrar direto no college?
      </h2>
      <div class="pathway__level-academic-description">
        <p>
          Uma das grandes vantagens do programa de pathway é que o aluno tem
          acesso a mais de 80 instituições que aceitam o certificado final da
          ILAC no lugar de um exame de proficiência como o IELTS ou Toefl ou
          Duolingo.
        </p>
        <p>
          Além disso, quando o aluno inicia suas aulas no programa de inglês,
          mesmo que do nível básico, já é possível reservar uma vaga no college
          ou universidade, o que chamamos de Matrícula Condicional.
        </p>
        <p>
          Dentro da consultoria de intercâmbio, conseguimos ajudar com o
          processo de matrícula do pathway, e em paralelo com o processo de
          reserva da vaga no college enquanto você ainda estuda o inglês.
        </p>
        <p class="pathway__level-academic-description-bold">
          Agende uma consulta para entender como podemos organizar seu plano de
          estudo do programa de pathway com college em paralelo.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.pathway__level {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}

.pathway__level-duration-description {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.topics {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.button {
  background-color: $--first-color;
  color: $--white-color;
  padding: 1rem 2rem;
  font-weight: $--font-semi-bold;
  transition: 0.3s;
  border-radius: 0.5rem;
  margin-top: 32px;
}

.button:hover {
  box-shadow: 4px 8px 8px hsla(157, 12%, 90%, 1);
}

.pathway__level-academic-description-bold {
  font-weight: bold;
}
</style>
