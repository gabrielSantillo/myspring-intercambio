<template>
  <div class="partner section">
    <h2 class="container partner__title">Nossos Parceiros</h2>
    <div class="container partner__accordion">
      <div class="partner__accordion-item" @click="is_active_one = !is_active_one">
        <div
          class="partner__accordion-header"          
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

    <div class="partner__accordion-item" @click="is_active_two = !is_active_two">
        <div
          class="partner__accordion-header"          
        >
          <i class="bx bxs-shield-x partner__accordion-icon"></i>
          <h3 class="partner__accordion-title">Colleges Privados</h3>
          <div class="partner__accordion-arrow">
            <i class="ri-arrow-down-s-line" v-if="!is_active_two"></i>
            <i class="ri-arrow-up-s-line" v-if="is_active_two"></i>
          </div>
        </div>

        <div class="partner__accordion-content" v-if="is_active_two">
          <img src="@/img/partner-ilac-college.webp" alt="" class="partner__accordion-img" />
          <img src="@/img/partner-ciccc.webp" alt="" class="partner__accordion-img" />
          <img src="@/img/partner-cctb.webp" alt="" class="partner__accordion-img" />
          <img src="@/img/partner-tsom.webp" alt="" class="partner__accordion-img" />
        </div>
    </div>

    <div class="partner__accordion-item" @click="is_active_three = !is_active_three">
        <div
          class="partner__accordion-header"
        >
          <i class="bx bxs-shield-x partner__accordion-icon"></i>
          <h3 class="partner__accordion-title">Colleges Públicos</h3>
          <div class="partner__accordion-arrow">
            <i class="ri-arrow-down-s-line" v-if="!is_active_three"></i>
            <i class="ri-arrow-up-s-line" v-if="is_active_three"></i>
          </div>
        </div>

        <div class="partner__accordion-content" v-if="is_active_three">
            <img src="@/img/partner-alexander.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-bow-valley.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-cdi.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-centennial.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-conestoga.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-douglas.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-fanshawe.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-george-brown.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-georgian.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-humber.webp" alt="" class="partner__accordion-img" />  
            <img src="@/img/partner-lambton.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-langara.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-lasalle.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-lester-b-pearson.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-nbcc.webp" alt="" class="partner__accordion-img" /> 
            <img src="@/img/partner-niagara.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-olds.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-sait.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-sault.webp" alt="" class="partner__accordion-img" />
            <img src="@/img/partner-seneca.webp" alt="" class="partner__accordion-img" />  
            <img src="@/img/partner-ucw.webp" alt="" class="partner__accordion-img" />        
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
      is_active_two: false,
      is_active_three: false
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
  align-items: center;
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
  justify-content: space-around;
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

.partner__accordion-content {
    margin-top: 2rem;
    display: grid;
    place-items: center;
    row-gap: 3rem;
}

@media screen and (min-width: 768px) {
  .partner__accordion-item {
    width: 500px;
    justify-self: center;
  }
}

@media screen and (min-width: 1024px) {
  .partner__accordion {
    display: flex;
    column-gap: 1rem;
  }
}

</style>
