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

      <div class="popup__card" name="faq">
        <div class="popup__cards">
          <h3 class="popup__title">
            {{ question_one }}
          </h3>
          <p class="popup__description">
            {{ answer_one }}
          </p>
        </div>

        <div class="popup__cards">
          <h3 class="popup__title">
            {{ question_two }}
          </h3>
          <p class="popup__description">
            {{ answer_two }}
          </p>
        </div>

        <div class="popup__cards">
          <h3 class="popup__title">
            {{ question_three }}
          </h3>
          <p class="popup__description">
            {{ answer_three }}
          </p>
        </div>

        <div class="popup__cards">
          <h3 class="popup__title">
            {{ question_four }}
          </h3>
          <p class="popup__description">
            {{ answer_four }}
          </p>
        </div>

        <div class="popup__cards">
          <h3 class="popup__title">
            {{ question_five }}
          </h3>
          <p class="popup__description">
            {{ answer_five }}
          </p>
        </div>

        <div class="popup__cards">
          <h3 class="popup__title">
            {{ question_six }}
          </h3>
          <p class="popup__description">
            {{ answer_six }}
          </p>
        </div>

        <div class="popup__cards">
          <h3 class="popup__title">
            {{ question_seven }}
          </h3>
          <p class="popup__description">
            {{ answer_seven }}
          </p>
        </div>

        <div class="popup__cards">
          <h3 class="popup__title">
            {{ question_eight }}
          </h3>
          <p class="popup__description">
            {{ answer_eight }}
          </p>
        </div>

        <div class="popup__cards">
          <h3 class="popup__title">
            {{ question_nine }}
          </h3>
          <p class="popup__description">
            {{ answer_nine }}
          </p>
        </div>

        <div class="popup__cards">
          <h3 class="popup__title">
            {{ question_ten }}
          </h3>
          <p class="popup__description">
            {{ answer_ten }}
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
      question_one: "",
      answer_one: "",
      question_two: "",
      answer_two: "",
      question_three: "",
      answer_three: "",
      question_four: "",
      answer_four: "",
      question_five: "",
      answer_five: "",
      question_six: "",
      answer_six: "",
      question_seven: "",
      answer_seven: "",
      question_eight: "",
      answer_eight: "",
      question_nine: "",
      answer_nine: "",
      question_ten: "",
      answer_ten: "",
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

      this.question_one = message["question_one"];
      this.answer_one = message["answer_one"];
      this.question_two = message["question_two"];
      this.answer_two = message["answer_two"];
      this.question_three = message["question_three"];
      this.answer_three = message["answer_three"];
      this.question_four = message["question_four"];
      this.answer_four = message["answer_four"];
      this.question_five = message["question_five"];
      this.answer_five = message["answer_five"];
      this.question_six = message["question_six"];
      this.answer_six = message["answer_six"];
      this.question_seven = message["question_seven"];
      this.answer_seven = message["answer_seven"];
      this.question_eight = message["question_eight"];
      this.answer_eight = message["answer_eight"];
      this.question_nine = message["question_nine"];
      this.answer_nine = message["answer_nine"];
      this.question_ten = message["question_ten"];
      this.answer_ten = message["answer_ten"];
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
