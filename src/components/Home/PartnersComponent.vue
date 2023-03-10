<template>
  <div class="partner section">
    <h2 class="container partner__title">Nossos Parceiros</h2>
    <div class="container partner__accordion">
      <div class="partner__accordion-item">
        <div
          class="partner__accordion-header"
          ref="one"
          @click="is_active_one = !is_active_one"
        >
          <i class="bx bxs-shield-x partner__accordion-icon"></i>
          <h3 class="partner__accordion-title">Escolas</h3>
          <div class="partner__accordion-arrow">
            <i class="ri-arrow-down-s-line" v-if="!is_active_one"></i>
            <i class="ri-arrow-up-s-line" v-if="is_active_one"></i>
          </div>
        </div>

        <div class="partner__accordion-content" v-if="is_active_one">
          <img src="@/img/partner-ilac.webp" alt="" class="partner__accordion-img" />
          <img src="@/img/partner-sgic.webp" alt="" class="partner__accordion-img" />
          <img src="@/img/partner-hansa.webp" alt="" class="partner__accordion-img" />
          <img src="@/img/partner-edu-inter.webp" alt="" class="partner__accordion-img" />
        </div>
      </div>

    <div class="partner__accordion-item">
        <div
          class="partner__accordion-header"
          ref="one"
          @click="is_active_one = !is_active_one"
        >
          <i class="bx bxs-shield-x partner__accordion-icon"></i>
          <h3 class="partner__accordion-title">Colleges Privados</h3>
          <div class="partner__accordion-arrow">
            <i class="ri-arrow-down-s-line" v-if="!is_active_one"></i>
            <i class="ri-arrow-up-s-line" v-if="is_active_one"></i>
          </div>
        </div>

        <div class="partner__accordion-content" v-if="is_active_one">
          <img src="@/img/partner-ilac.webp" alt="" class="partner__accordion-img" />
          <img src="@/img/partner-sgic.webp" alt="" class="partner__accordion-img" />
          <img src="@/img/partner-hansa.webp" alt="" class="partner__accordion-img" />
          <img src="@/img/partner-edu-inter.webp" alt="" class="partner__accordion-img" />
        </div>
    </div>

    <div class="partner__accordion-item">
        <div
          class="partner__accordion-header"
          ref="one"
          @click="is_active_one = !is_active_one"
        >
          <i class="bx bxs-shield-x partner__accordion-icon"></i>
          <h3 class="partner__accordion-title">Colleges Públicos</h3>
          <div class="partner__accordion-arrow">
            <i class="ri-arrow-down-s-line" v-if="!is_active_one"></i>
            <i class="ri-arrow-up-s-line" v-if="is_active_one"></i>
          </div>
        </div>

        <div class="partner__accordion-content" v-if="is_active_one">
          <img src="@/img/partner-ilac.webp" alt="" class="partner__accordion-img" />
          <img src="@/img/partner-sgic.webp" alt="" class="partner__accordion-img" />
          <img src="@/img/partner-hansa.webp" alt="" class="partner__accordion-img" />
          <img src="@/img/partner-edu-inter.webp" alt="" class="partner__accordion-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_active_one: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.partner {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.partner__title {
    margin-bottom: 2rem;
}

.partner__accordion {
  display: grid;
  row-gap: 1.5rem;
}

.partner__accordion-item {
  box-shadow: 0 2px 4px hsla(157, 54%, 18%, .25);
  border-radius: 0.5rem;
  padding: 1rem 0.75rem;
  transition: .4s;
  cursor: pointer;
}

.partner__accordion-item:hover {
    box-shadow: 0 2px 4px hsla(157, 54%, 18%, .35);
}

.partner__accordion-header {
    display: flex;
  align-items: center;
  justify-content: space-around;;
}

.partner__accordion-arrow {
  display: inline-flex;
  background-color: $--text-color-light;
  padding: 0.25rem;
  color: $--first-color;
  border-radius: 2px;
  font-size: 20px;
  font-weight: bold;
  margin-left: auto;
  transition: 0.3s;
}

.partner__accordion-img {
    margin-top: 2rem;
}
</style>
