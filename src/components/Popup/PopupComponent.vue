<template>
  <div class="popup" ref="popup">
    <div class="popup-inner container" v-if="show">
      <h3 class="popup__title">
        {{title}}
      </h3>
      <p class="popup__description">
        {{content}}
      </p>
      <button class="popup__close" @click="close_popup">Fechar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      content: "",
      title: ""
    };
  },
  methods: {
    open_popup(message) {
      this.$refs.popup.classList.add("popup-dark");
      this.show = true;
      this.content = message['content']
      this.title = message['title']
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

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
}

.popup__close {
    width: 100px;
    padding: .5rem .5rem;
    border-radius: .25rem;
    transition: .4s;
    margin-top: 1rem;
}

.popup__close:hover {
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
