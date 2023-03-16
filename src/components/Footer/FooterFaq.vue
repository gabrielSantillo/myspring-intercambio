<template>
    <div>
        <button @click="popup" class="footer__link">FAQs</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      faq: {
        question_one: "Pergunta",
        answer_one: "Resposta",
        question_two: "Pergunta",
        answer_two: "Resposta",
        question_three: "Pergunta",
        answer_three: "Resposta",
        question_four: "Pergunta",
        answer_four: "Resposta",
        question_five: "Pergunta",
        answer_five: "Resposta",
        question_six: "Pergunta",
        answer_six: "Resposta",
        question_seven: "Pergunta",
        answer_seven: "Resposta",
        question_eight: "Pergunta",
        answer_eight: "Resposta",
        question_nine: "Pergunta",
        answer_nine: "Resposta",
        question_ten: "Pergunta",
        answer_ten: "Resposta",
      }
    };
  },
  methods: {
    popup() {
        this.$root.$emit(`popup-faq`, this.faq);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.footer__link {
  color: $--text-color;
  transition: 0.4s;
  background-color: transparent;
}

.footer__link:hover {
  color: $--first-color;
}

</style>