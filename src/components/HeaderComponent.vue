<template>
    <div class="header" ref="header">
        <nav class="nav container">
        <router-link to="/" class="nav__logo">
        <img src="@/img/logo.png" alt="">
        </router-link>

        <div class="nav__menu" ref="menu">
            <ul class="nav__list">
                <li class="nav__item">
                    <router-link to="/" class="nav__link" @click.native="close_menu">Home</router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/consultoria" class="nav__link" @click.native="close_menu">Consultoria</router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/pathway" class="nav__link" @click.native="close_menu">Pathway</router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/agenda" class="nav__link" @click.native="close_menu">Agenda</router-link>
                </li>
            </ul>

            <i class="ri-close-fill nav__close" @click="close_menu"></i>

            <img src="@/img/whatsapp-icon.png" alt="" class="nav__wpp">

            <img src="@/img/logo-escrito.png" class="nav__company-name">
        </div>

        <div class="nav__toggle">
            <i class="ri-function-line" @click="show_menu"></i>
        </div>
        </nav>
    </div>
</template>

<script>
import debounce from "lodash/debounce";

    export default {
        methods: {
            show_menu() {
                this.$refs.menu.classList.add('show-menu')
            },

            close_menu() {
                this.$refs.menu.classList.remove('show-menu')
            },

            handleScroll() {
                if (window.scrollY >= 100) {
                    this.$refs.header.classList.add("scroll-header");
                } else {
                    this.$refs.header.classList.remove("scroll-header");
                }
            },
        },

        beforeDestroy() {
            // I switched the example from `destroyed` to `beforeDestroy`
            // to exercise your mind a bit. This lifecycle method works too.
            window.removeEventListener("scroll", this.handleDebouncedScroll);
        },

        mounted () {
            this.handleDebouncedScroll = debounce(this.handleScroll, 100);
            window.addEventListener("scroll", this.handleDebouncedScroll);
        },
    }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: $--z-fixed;
    background-color: transparent;
}

.nav {
    height: $--header-height;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav__logo, .nav__toggle {
    color: $--white-color;
}

.nav__logo img {
    width: 1.8rem;
}

.nav__toggle {
    font-size: 1.6rem;
    cursor: pointer;
}

.nav__menu {
    position: relative;
}

.nav__company-name {
    position: absolute;
    margin-top: 100%;
    width: 50%;
}

.show-menu {
    right: 0;
}

@media screen and (max-width: 767px) {
    .nav__menu {
        position: fixed;
        background-color: $--body-color;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100%;
        box-shadow: -1px 0 4px hsla(157, 64%, 15%, .15);
        padding: 3rem;
        transition: .4s;
    }

    .show-menu {
    right: 0;
    }
}

.nav__list {
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
}

.nav__link {
    color: $--text-color-light;
    font-weight: $--font-semi-bold;
    text-transform: uppercase;
    transition: .3s;

    &.router-link-exact-active {
     border-bottom: .150rem solid $--first-color;
   }
}

.nav__link:hover {
    color: $--first-color;
}

.nav__close {
    position: absolute;
    top: .75rem;
    right: 1rem;
    font-size: 1.5rem;
    color: $--first-color;
    cursor: pointer;
}

.nav__wpp {
    position: absolute;
    bottom: 1.5rem;
    right: 2rem;
    font-size: 1.5rem;
    color: $--first-color;
    cursor: pointer;
}

.scroll-header {
    background-color: $--body-color;
    box-shadow: 0 0 4px hsla(157, 64%, 15%, .15);
}

.scroll-header .nav__toggle {
    color: $--first-color;
}


</style>