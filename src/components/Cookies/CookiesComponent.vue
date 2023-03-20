<template>
  <div class="cookies">
    <div class="cookies__container">
      <div class="cookies__description">
        <p>
          Usamos cookies em nosso site para analisar sua interação com ele. Ao
          aceitar, você concorda com o uso de cookies.
        </p>
        <a
          href="https://drive.google.com/file/d/14nKWa4l42Yh_SttuuCtjcpXXy3amatg0/view"
          target="_blank"
          >Política de Cookies</a
        >
      </div>
      <div class="cookies__button">
        <div class="buttons">
          <button class="button">Aceitar</button>
          <button class="button">Rejeitar</button>
        </div>
        <div class="close-button">
          <i class="ri-close-fill"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  methods: {
    cookie() {
      alert("testing");
    },
  },
  mounted() {
    if (cookies.get("cookies-privacy") === null) {
      this.$root.$on("cookie", this.cookie);
    }
  },
};
</script>

<style lang="scss" scoped>
.cookies {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: green;
  color: white;
  height: 150px;
  margin: 1rem;
  border-radius: .5rem;
}

.cookies__container {
    padding: 1rem .75rem;
    display: flex;
    column-gap: 1rem;
    justify-content: space-around;
}
</style>
