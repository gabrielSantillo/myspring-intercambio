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
        title: "Envie sua dúvida através do nosso e-mail.",
        content: "contato@myspringintercambio.com"
      }
    };
  },
  methods: {
    popup() {
        this.$root.$emit(`popup`, this.faq);
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