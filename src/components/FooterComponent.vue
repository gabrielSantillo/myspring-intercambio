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
            <a href="https://api.whatsapp.com/message/YXZXOPXHRFMSB1?autoload=1&app_absent=0" target="_blank" class="footer__social"
              ><i class="ri-whatsapp-fill"></i
            ></a>
            <a href="https://www.instagram.com/myspringintercambio/" target="_blank" class="footer__social"
              ><i class="ri-instagram-fill"></i
            ></a>
            <a href="https://www.youtube.com/c/MySpringIntercambio" target="_blank" class="footer__social"
              ><i class="ri-youtube-fill"></i
            ></a>
            <a href="https://www.facebook.com/myspringintercambiopage" target="_blank" class="footer__social"
              ><i class="ri-facebook-circle-fill"></i
            ></a>
            <a href="https://www.linkedin.com/company/myspring-intercambio/" target="_blank" class="footer__social"
              ><i class="ri-linkedin-box-fill"></i
            ></a>
            <a href="mailto:contato@myspringintercambio.com" target="_blank" class="footer__social"
              ><i class="ri-mail-fill"></i
            ></a>
          </div>
        </div>

        <div class="footer__data">
          <h3 class="footer__subtitle">Sobre</h3>

          <ul>
            <li class="footer__item">
              <a href="#" class="footer__link">Sobre Nós</a>
            </li>

            <li class="footer__item">
              <a href="#" class="footer__link">Consultoria</a>
            </li>

            <li class="footer__item">
              <a href="#" class="footer__link">Pathway</a>
            </li>
          </ul>
        </div>

        <div class="footer__data">
          <h3 class="footer__subtitle">Empresa</h3>

          <ul>
            <li class="footer__item">
              <a href="#" class="footer__link">Time</a>
            </li>

            <li class="footer__item">
              <a href="#" class="footer__link">Orçamento</a>
            </li>

            <li class="footer__item">
              <a href="#" class="footer__link">Agenda</a>
            </li>
          </ul>
        </div>

        <div class="footer__data">
          <h3 class="footer__subtitle">Suporte</h3>

          <ul>
            <li class="footer__item">
              <a href="#" class="footer__link">FAQs</a>
            </li>

            <li class="footer__item">
              <a href="#" class="footer__link">Support Center</a>
            </li>

            <li class="footer__item">
              <a href="#" class="footer__link">Contato</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__rights">
        <p class="footer__copy">
          &#169; 2023 MySpring Intercâmbio. Todos os direitos reservados.
        </p>
        <div class="footer__terms">
          <button @click="popup" class="footer__terms-link">
            Política de Privacidade
          </button>
          <popup-component></popup-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopupComponent from "./Popup/PopupComponent.vue";
export default {
  data() {
    return {
      message: "This is the message for the Privacy Policy",
    };
  },
  components: { PopupComponent },
  methods: {
    popup() {
      this.$root.$emit(`popup`, this.message);
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
