<template>
  <div class="popup popup-dark" ref="popup">
    <div class="popup-inner container" v-if="show">
      <p class="popup__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
        nostrum quos non voluptatum dolore nobis itaque distinctio harum?
        Doloribus tempore repudiandae recusandae aliquid tempora quis saepe eos
        adipisci necessitatibus autem.
      </p>
      <button class="popup__close" @click="hide_term">Fechar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      message: ""
    };
  },
  methods: {
    show_term() {
      this.$refs.popup.classList.add("popup-dark");
      this.show = true;
    },

    hide_term() {
      this.$refs.popup.classList.remove("popup-dark");
      this.show = false;
    },
  },

  mounted() {
    this.$root.$on("alert", this.show_term);
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.popup-dark {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-inner {
  padding: 32px;
  background-color: #fff;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  align-items: center;
}

.popup__close {
    width: 100px;
    padding: .5rem .5rem;
    border-radius: .25rem;
    transition: .4s;
}

.popup__close:hover {
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
