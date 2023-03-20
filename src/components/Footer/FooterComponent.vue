<template>
  <div class="footer section">
    <div class="footer__container container grid">
      <div class="footer__content grid">
        <div class="footer__data">
          <h3 class="footer__title">MySpring Intercâmbio</h3>
          <p class="footer__description">
            Nós temos a inspiração <br />
            e experiência para <br />
            te guiar nessa jornada.
          </p>

          <div class="footer_socials">
            <a
              href="https://api.whatsapp.com/message/YXZXOPXHRFMSB1?autoload=1&app_absent=0"
              target="_blank"
              class="footer__social"
              ><i class="ri-whatsapp-fill"></i
            ></a>
            <a
              href="https://www.instagram.com/myspringintercambio/"
              target="_blank"
              class="footer__social"
              ><i class="ri-instagram-fill"></i
            ></a>
            <a
              href="https://www.youtube.com/c/MySpringIntercambio"
              target="_blank"
              class="footer__social"
              ><i class="ri-youtube-fill"></i
            ></a>
            <a
              href="https://www.facebook.com/myspringintercambiopage"
              target="_blank"
              class="footer__social"
              ><i class="ri-facebook-circle-fill"></i
            ></a>
            <a
              href="https://www.linkedin.com/company/myspring-intercambio/"
              target="_blank"
              class="footer__social"
              ><i class="ri-linkedin-box-fill"></i
            ></a>
            <a
              href="mailto:contato@myspringintercambio.com"
              target="_blank"
              class="footer__social"
              ><i class="ri-mail-fill"></i
            ></a>
          </div>
        </div>

        <div class="footer__data">
          <h3 class="footer__subtitle">Sobre</h3>

          <ul>
            <li class="footer__item">
              <button
                name="about-us"
                @click="popup($event)"
                class="footer__link"
              >
                Sobre Nós
              </button>
            </li>

            <li class="footer__item">
              <router-link to="/consultoria" class="footer__link"
                >Consultoria</router-link
              >
            </li>

            <li class="footer__item">
              <router-link to="/pathway" class="footer__link"
                >Pathway</router-link
              >
            </li>
          </ul>
        </div>

        <div class="footer__data">
          <h3 class="footer__subtitle">Empresa</h3>

          <ul>
            <li class="footer__item">
              <button name="team" @click="popup($event)" class="footer__link">
                Time
              </button>
            </li>

            <li class="footer__item">
              <a
                href="https://api.whatsapp.com/send?phone=5519992137096&text=Olá! Gostaria de um orçamento."
                target="_blank"
                class="footer__link"
                >Orçamento</a
              >
            </li>

            <li class="footer__item">
              <router-link to="/agenda" class="footer__link"
                >Agenda</router-link
              >
            </li>
          </ul>
        </div>

        <div class="footer__data">
          <h3 class="footer__subtitle">Suporte</h3>

          <ul>
            <li class="footer__item">
              <footer-faq></footer-faq>
            </li>

            <li class="footer__item">
              <a
                href="https://api.whatsapp.com/message/YXZXOPXHRFMSB1?autoload=1&app_absent=0"
                target="_blank"
                class="footer__link"
                >WhatssApp</a
              >
            </li>

            <li class="footer__item">
              <a
                href="mailto:contato@myspringintercambio.com"
                class="footer__link"
                >Contato</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__rights">
        <p class="footer__copy">
          &#169; 2023 MySpring Intercâmbio. Todos os direitos reservados.
        </p>
        <div class="footer__terms">
          <button name="privacy" @click="popup($event)" class="footer__terms-link">
            Política de Privacidade
          </button>
          <popup-component></popup-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopupComponent from "../Popup/PopupComponent.vue";
import FooterFaq from "./FooterFaq.vue";
export default {
  data() {
    return {
      about_us: {
        title: "Sobre Nós",
        content:
          "A MySpring Intercâmbio surgiu como uma agência digital dentro de um nicho muito específico que é o intercâmbio para fins de imigração. Países como o Canadá e a Alemanha promovem programas de facilitação imigratória através do estudo e do trabalho, em busca de profissionais capacitados com interesse em estabelecerem-se no país. É justamente nesse cenário que surge a necessidade de uma prestação de serviço mais voltada para o planejamento de estudo e carreiras nesse tipo de viagem. Atuando há mais de 5 anos nesse mercado de intercâmbio para fins de imigração, a consultora Natália Fernandes desenvolveu uma metodologia para atender centenas de clientes que precisam de auxílio na análise do perfil profissional, e na escolha do curso certo na cidade certa. Pensando em como beneficiar a carreira desse cliente no exterior, e em como facilitar seu processo de imigração futuro, foi desenvolvido o serviço de consultoria educacional, que acompanha o cliente em todas as fases do processo até o embarque e início das aulas. A experiência de estudos no exterior, ou mesmo o plano de viver definitivamente fora do Brasil é algo muito grandioso e gera muita ansiedade nas pessoas. Eu já passei por todas as etapas, sei exatamente como ajudar o cliente a lidar com esses sentimentos ao longo do processo mostrando o caminho mais seguro. Tenho muita alegria em poder contribuir com minhas experiências e conhecimentos, e uma imensa gratidão em poder cuidar do projeto de cada cliente que confia no meu trabalho. Cada planejamento é único.",
        about_us: true,
      },
      team: {
        name: "Natalia Fernandes",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam voluptatibus ab quibusdam reprehenderit nulla impedit exercitationem eaque tempore sequi quis consectetur ratione, ea incidunt culpa deserunt? Corporis accusantium labore quo?",
        name_two: "Gabriel Santillo",
        description_two:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam voluptatibus ab quibusdam reprehenderit nulla impedit exercitationem eaque tempore sequi quis consectetur ratione, ea incidunt culpa deserunt? Corporis accusantium labore quo?",
        team: true,
      },
    };
  },
  components: { PopupComponent, FooterFaq },
  methods: {
    popup(event) {
      if (event.currentTarget["name"] === "about-us") {
        this.$root.$emit(`popup`, this.about_us);
      } else if (event.currentTarget["name"] === "team") {
        this.$root.$emit(`popup`, this.team);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";
.footer__container {
  row-gap: 5rem;
}

.footer__content {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  row-gap: 2rem;
}

.footer__title,
.footer__subtitle {
  font-size: $--h3-font-size;
}

.footer__title {
  margin-bottom: $--mb-0-5;
}

.footer__description {
  margin-bottom: $--mb-2;
}

.footer_socials {
  display: flex;
  flex-direction: row;
  column-gap: 1.25rem;
}

.footer__social {
  font-size: 1.25rem;
  color: $--title-color;
  transition: 0.4s;
}

.footer__social:hover {
  color: $--first-color;
}

.footer__subtitle {
  margin-bottom: $--mb-1;
}

.footer__item {
  margin-bottom: $--mb-0-75;
}

.footer__link {
  color: $--text-color;
  transition: 0.4s;
  background-color: transparent;
}

.footer__link:hover {
  color: $--first-color;
}

.footer__rights {
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  text-align: center;
}

.footer__copy,
.footer__terms-link {
  font-size: $--small-font-size;
  color: $--text-color;
  background-color: #fff;
}

.footer__terms-link:hover {
  text-decoration: underline;
}

@media screen and (min-width: 768px) {
  .footer__rights {
    flex-direction: row;
    justify-content: space-between;
  }
}

@media screen and (min-width: 1112px) {
  .footer__content {
    justify-items: center;
  }
}
</style>
