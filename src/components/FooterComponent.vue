<template>
    <div class="footer section">
        <div class="footer__container container grid">
            <div class="footer__content grid">
                <div class="footer__data">
                    <h3 class="footer__title">MySpring Intercâmbio
                    </h3>
                    <p class="footer__description">Nós temos a inspiração <br> e experiência para <br> te guiar nessa jornada.</p>

                    <div class="footer_socials">
                        <a href="" target="_blank" class="footer__social"><i class="ri-whatsapp-fill"></i></a>
                        <a href="" target="_blank" class="footer__social"><i class="ri-instagram-fill"></i></a>
                        <a href="" target="_blank" class="footer__social"><i class="ri-youtube-fill"></i></a>
                        <a href="" target="_blank" class="footer__social"><i class="ri-facebook-circle-fill"></i></a>
                        <a href="" target="_blank" class="footer__social"><i class="ri-linkedin-box-fill"></i></a>
                        <a href="" target="_blank" class="footer__social"><i class="ri-mail-fill"></i></a>
                        
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
                <p class="footer__copy">&#169; 2023 MySpring Intercâmbio. Todos os direitos reservados.</p>
                <div class="footer__terms">
                    <button @click="test" class="footer__terms-link">Terms & Agreements</button>
                    <popup-term></popup-term>
                    <a href="#" class="footer__terms-link">Política de Privacidade</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PopupTerm from './Popup/PopupTerm.vue'
    export default {
  components: { PopupTerm },
        methods: {
            test() {
                this.$root.$emit(`alert`, true)
            }
        },
    }
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


.footer__title, .footer__subtitle {
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
    transition: .4s;
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
    transition: .4s;
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

.footer__copy, .footer__terms-link {
    font-size: $--small-font-size;
    color: $--text-color;
    background-color: #fff;
}

.footer__terms {
    display: flex;
    column-gap: 1.5rem;
    justify-content: center;
}

.footer__terms-link:hover {
    text-decoration: underline;
}

</style>