<template>
    <div class="header">
        <nav class="nav container">
        <router-link to="/" class="nav__logo">
        MySpring Intercâmbio
        </router-link>

        <div class="nav__menu">
            <ul class="nav__list">
                <li class="nav__item">
                    <router-link to="/" class="nav__link">Home</router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/" class="nav__link">Sobre Nós</router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/" class="nav__link">Pathway</router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/" class="nav__link">Agenda</router-link>
                </li>
            </ul>

            <i class="ri-close-fill" nav__close></i>
        </div>

        <div class="nav__toggle">
            <i class="ri-menu-line"></i>
        </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>