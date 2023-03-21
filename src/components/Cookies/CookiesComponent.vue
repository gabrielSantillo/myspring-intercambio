<template>
  <div class="cookies" v-if="cookie_accepted">
    <div class="cookies__container">
      <div class="close-button">
        <i class="ri-close-fill" @click="closeCookie"></i>
      </div>
      <div class="cookies__container-content">
        <div class="cookies__description">
          <p>
            Usamos cookies em nosso site para analisar sua interação com ele. Ao
            aceitar, você concorda com o uso de cookies.
            <a
              class="cookies-privacy"
              href="https://drive.google.com/file/d/14nKWa4l42Yh_SttuuCtjcpXXy3amatg0/view"
              target="_blank"
              >Política de Cookies</a
            >
          </p>
        </div>
        <div class="cookies__button">
          <button class="button button-accept" @click="acceptCookie">
            Aceitar
          </button>
          <button class="button button-reject" @click="rejectCookie">
            Rejeitar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  data() {
    return {
      cookie_accepted: false,
    };
  },

  methods: {
    acceptCookie() {
      cookies.set("cookie-policy", "accepted");
      this.cookie_accepted = false;
    },
    rejectCookie() {
      cookies.set("cookie-policy", "rejected");
      this.cookie_accepted = false;
    },
    closeCookie() {
      this.cookie_accepted = false;
    },
  },

  mounted() {
    if (!cookies.get("cookie-policy")) {
      this.cookie_accepted = true;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.cookies {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $--text-color;
  color: white;
  height: 260px;
  margin: 1rem;
  border-radius: 0.5rem;
}

.cookies__container {
  padding: 1.25rem 0.75rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  position: relative;
}

.cookies-privacy {
  color: #fff;
  text-decoration: underline;
  display: block;
}

.close-button {
  display: flex;
  justify-content: end;
  font-size: 20px;

  > i {
    transition: 0.4s;
    border-radius: 0.25rem;
  }

  > i:hover {
    background-color: #fff;
    color: $--text-color;
    cursor: pointer;
  }
}

.cookies__container-content {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.cookies__button {
  display: grid;
  row-gap: 1rem;
}

.button {
  padding: 0.25rem;
  border-radius: 0.25rem;
  color: white;
  background-color: transparent;
  border: 1px solid #fff;
}

.button-accept {
  color: $--text-color;
  background-color: #fff;
  transition: 0.4s;
}

.button-reject {
    transition: .4s;
}

.button-accept:hover {
  color: #fff;
  background-color: $--text-color;
}

.button-reject:hover {
  color: $--text-color;
  background-color: #fff;
}

@media screen and (min-width: 1200px) {
  .cookies {
    height: 130px;
  }
  .cookies__container-content {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .cookies__button {
    grid-auto-flow: column;
    column-gap: 2rem;
  }

  .button {
    padding: 0.5rem .75rem;
  }
}
</style>
