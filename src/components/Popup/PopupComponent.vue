<template>
  <div class="popup" ref="popup">
    <div class="popup-inner container" v-if="show">
      <div class="popup__card">
        <div class="popup__cards">
          <h3 class="popup__title">
            {{ title }}
          </h3>
          <p class="popup__description">
            {{ content }}
          </p>
          
        </div>

        <div class="popup__cards">
          <h3 class="popup__title">
            {{ title_two }}
          </h3>
          <p class="popup__description">
            {{ content_two }}
          </p>
        </div>
      </div>

      <button class="popup__close" @click="close_popup">Fechar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      title: "",
      content: "",
      title_two: "",
      content_two: "",
    };
  },
  methods: {
    open_popup(message) {
      this.$refs.popup.classList.add("popup-dark");
      this.show = true;
      this.title = message["title"];
      this.content = message["content"];
      this.title_two = message["title_two"];
      this.content_two = message["content_two"];
      
    },

    close_popup() {
      this.$refs.popup.classList.remove("popup-dark");
      this.show = false;
    },
  },

  mounted() {
    this.$root.$on("popup", this.open_popup);
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

  max-height: 80vh;
  overflow-y: scroll;
}

.popup__card {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  align-items: center;
}

.popup__cards {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
}

.popup__close {
  width: 100px;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  transition: 0.4s;
  margin-top: 2rem;
}

.popup__close:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
