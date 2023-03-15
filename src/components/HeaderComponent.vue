<template>
  <div class="header" ref="header">
    <nav class="nav">
      <router-link to="/" class="nav__logo">
        <img src="@/img/logo.png" alt="" />
      </router-link>

      <router-link to="/" class="nav__logo-written">
        <img src="@/img/logo-escrito.png" alt="" />
      </router-link>

      <div class="nav__menu" ref="menu">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link to="/" class="nav__link" @click.native="close_menu"
              >Home</router-link
            >
          </li>
          <li class="nav__item">
            <router-link
              to="/consultoria"
              class="nav__link"
              @click.native="close_menu"
              >Consultoria</router-link
            >
          </li>
          <li class="nav__item">
            <router-link
              to="/pathway"
              class="nav__link"
              @click.native="close_menu"
              >Pathway</router-link
            >
          </li>
          <li class="nav__item">
            <router-link
              to="/agenda"
              class="nav__link"
              @click.native="close_menu"
              >Agenda</router-link
            >
          </li>
        </ul>

        <i class="ri-close-fill nav__close" @click="close_menu"></i>

        <a
          href="https://api.whatsapp.com/message/YXZXOPXHRFMSB1?autoload=1&app_absent=0"
          target="_blank"
          ><img src="@/img/whatsapp-icon.png" alt="" class="nav__wpp"
        /></a>

        <img src="@/img/logo-escrito.png" class="nav__company-name" />
      </div>

      <div class="nav__toggle">
        <i class="ri-function-line" @click="show_menu"></i>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    show_menu() {
      this.$refs.menu.classList.add("show-menu");
    },
    close_menu() {
      this.$refs.menu.classList.remove("show-menu");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: $--z-fixed;
  background-color: white;
  background-color: $--body-color;
  box-shadow: 0 0 4px hsla(157, 64%, 15%, 0.15);
}

.nav {
  height: $--header-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
}

.nav__toggle {
  color: $--first-color;
}

.nav__logo img {
  width: 1.8rem;
}

.nav__logo-written {
  display: none;
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
    box-shadow: -1px 0 4px hsla(157, 64%, 15%, 0.15);
    padding: 3rem;
    transition: 0.4s;
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
  transition: 0.3s;

  &.router-link-exact-active {
    border-bottom: 0.15rem solid $--first-color;
  }
}

.nav__link:hover {
  color: $--first-color;
}

.nav__close {
  position: absolute;
  top: 0.75rem;
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
  box-shadow: 0 0 4px hsla(157, 64%, 15%, 0.15);
}

.scroll-header .nav__toggle {
  color: $--first-color;
}

@media screen and (min-width: 768px) {
  .nav {
    height: calc($--header-height + 1.5rem);
  }

  .nav__link {
    text-transform: initial;
  }

  .nav__menu {
    display: flex;
    column-gap: 1rem;
  }

  .nav__wpp,
  .nav__company-name,
  .nav__close,
  .nav__toggle {
    display: none;
  }

  .nav__list {
    flex-direction: row;
    column-gap: 2rem;
  }

  .nav__logo {
    display: none;
  }

  .nav__logo-written {
    display: flex;
    width: 8rem;
  }
}
</style>
