<template>
    <div class="home">
        <img src="@/img/home1.jpeg" alt="" class="home__img">

        <div class="home__container container grid">
             <div class="home__data">
                <h1 class="home__data-title">Sua melhor <br> experiência de <br>
                intercâmbio <br> começa aqui</h1>
                <a href="#" class="button">Agendar Consulta</a>
             </div>

            <div class="home__social">
                <a href="#" target="_blank"  class="home__social-link"><i class="ri-whatsapp-fill"></i></a>
                <a href="#" target="_blank"  class="home__social-link"><i class="ri-facebook-circle-fill"></i></a>
                <a href="#" target="_blank" class="home__social-link"><i class="ri-instagram-fill"></i></a>
                <a href="#" target="_blank" class="home__social-link"><i class="ri-youtube-fill"></i></a>
            </div>

            <div class="home__info">
                <div>
                    <span class="home__info-title">5 best places to visit</span>
                    <a href="#" class="button button--flex button--link home__info-button">
                        More <i class="ri-arrow-right-line"></i>
                    </a>
                </div>

                <div class="home__info-overlay">
                    <img src="@/img/home2.jpeg" alt="" class="home__info-img">
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

.home__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: 100%;
}

.home__container {
    position: relative;
    height: calc(100vh - $--header-height);
    align-content: center;
    row-gap: 3rem;
}

.home__data-subtitle,
.home__data-title,
.home__social-link,
.home__info {
    color: #fff;
}

.home__data-subtitle {
    display: block;
    font-weight: $--font-semi-bold;
    margin-bottom: $--mb-0-75;
}

.home__data-title {
    font-size: $--biggest-font-size;
    font-weight: $--font-medium;
    margin-bottom: $--mb-2-5;
}

.home__social {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
}

.home__social-link {
    font-size: 1.2rem;
    width: max-content;
    transition: .3s;
}

.home__social-link:hover {
    color: hsl(348, 33%, 50%);
}

.home__info {
    background-color: $--first-color;
    display: flex;
    padding: 1.5rem 1rem;
    align-items: center;
    column-gap: .75rem;
    position: absolute;
    right: 0;
    bottom: 1rem;
    width: 228px;
}

.home__info-title {
    display: block;
    font-size: $--small-font-size;
    font-weight: $--font-semi-bold;
    margin-bottom: $--mb-0-75;
}

.home__info-button {
    font-size: $--smaller-font-size;
}

.home__info-overlay {
    overflow: $--img-hidden;
}

.home__info-img {
    width: 100%;
    height: 100%;
    transition: $--img-transition;
}

.home__info-img:hover {
    transform: $--img-scale;
}

.button {
    display: inline-block;
    background-color: $--first-color;
    color: $--white-color;
    padding: 1rem 2rem;
    font-weight: $--font-semi-bold;
    transition: .3s;
    border-radius: .5rem;
}

.button:hover {
    background-color: $--first-color-alt;
}

.button--flex {
    display: flex;
    align-items: center;
    column-gap: .25rem;
}

.button--link {
    background: none;
    padding: 0;
}

.button--link:hover {
    background: none;
}
</style>