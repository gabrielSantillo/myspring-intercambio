<template>
  <div class="pathway__form section container">
    <form action="" class="subscribe__form">
      <div>
        <h1 class="form__title"><span>ILAC Pathway</span> Calculadora</h1>
        <p class="form__description">
          Use esta calculadora para entender quantas semanas de English Pathway
          você precisará para atingir o nível exigido por cada college.
        </p>
        <p class="form__description">
          Você também pode ver o preço do English Pathway com base nas semanas
          você precisa.
        </p>
      </div>

      <div class="form__first">
        <div class="form__inputs">
          <div>
            <label for="" class="form__label">Inglês</label>
            <select v-model="level" class="form__select">
              <option value="1">Level 1</option>
              <option value="2">Level 2</option>
              <option value="3">Level 3</option>
              <option value="4">Level 4</option>
              <option value="5">Level 5</option>
              <option value="6">Level 6</option>
              <option value="7">Level 7</option>
              <option value="8">Level 8</option>
              <option value="9">Level 9</option>
              <option value="10">Level 10</option>
              <option value="11">Level 11</option>
              <option value="12">Level 12</option>
              <option value="13">Level 13</option>
              <option value="14">Level 14</option>
              <option value="15">Level 15</option>
              <option value="16">Level 16</option>
            </select>
          </div>

          <div>
            <label for="" class="form__label">Provincia</label>
            <select v-model="province" class="form__select">
              <option value="1">Alberta</option>
              <option value="2">British Columbia</option>
              <option value="3">Manitoba</option>
              <option value="4">New Brunswick</option>
              <option value="5">New Foundland and Labrador</option>
              <option value="6">Nova Scotia</option>
              <option value="7">Ontario</option>
              <option value="8">Prince Edward Island</option>
              <option value="9">Quebec</option>
              <option value="10">Saskatchewan</option>
              <option value="11">Yukon</option>
            </select>
          </div>
        </div>

        <button class="form__button" @click="show_colleges">
          Escolher College
        </button>

        <div v-if="show_college_options" class="form__college">
          <div>
            <label for="" class="form__label">College</label>
            <select v-model="college" class="form__select">
              <option
                v-for="(college, index) in colleges"
                :key="index"
                :value="college"
              >
                {{ college["name"] }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <button
        v-if="show_college_options"
        class="button form__button"
        @click="calculate"
      >
        Calcular
      </button>
    </form>

    <div class="form__price" v-if="show_result">
      <div class="form__price-card">
        <h3 class="form__price-card-title">Orçamento</h3>
        <p class="form__price-card-description">
          Provincia: {{ province_name }}
        </p>
        <p class="form__price-card-description">College: {{ `${college["name"]}` }}</p>
        <p class="form__price-card-description">Semanas: {{ `${weeks}` }}</p>
        <p class="form__price-card-description">
          Total: CAD$ {{ `${tuition}` }}
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5519992137096&text=Olá! Acabei de fazer uma simulção de quantas semanas preciso para atingir o nível de inglês que o college que desejo exige."
          class="button form__button form__button-price"
          target="_blank"
          >Mais Informações</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tuition: 0,
      weeks: 0,
      level: "",
      province_name: undefined,
      college: "",
      colleges: undefined,
      show_college_options: false,
      show_result: false,
    };
  },
  methods: {
    show_colleges() {
      axios
        .request({
          url: `http://127.0.0.1:5000/api/colleges`,
          params: {
            province_id: this.province,
          },
        })
        // in case off success set a cookie with the order id and push the user to the orders page
        .then((response) => {
          response 
          this.colleges = response["data"][0]["colleges"]
          this.province_name = response["data"][0]["province"]
          this.show_college_options = true
        })
        .catch((error) => {
          error
          alert(this.province)
        });
      
    },

    calculate() {
      let num_level = parseInt(this.level);
      let week_fee = 120;
      let reg_fee = 110;
      let material_fee = 10;
      let final_level = 17;

      this.weeks = (final_level - (num_level - 1)) * 2; //each level means 2 weeks of study

      this.tuition =
        this.weeks * week_fee + this.weeks * material_fee + reg_fee;

      this.show_result = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.subscribe__form {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.form__title {
  color: #000;
  font-size: $--h2-font-size;
  margin-bottom: 0.5rem;
}

.form__title span {
  color: red;
}

.form__first {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.form__inputs {
  display: flex;
  column-gap: 2rem;
  align-items: center;
}

.form__label {
  display: block;
  color: $--first-color;
  font-weight: $--font-semi-bold;
  margin-bottom: 0.25rem;
}

.form__button {
  max-width: 160px;
  padding: 14px 1rem;
  border-radius: 6px;
  background: $--first-color;
  color: #fff;
  font-weight: $--font-semi-bold;
  transition: 0.3s;
  cursor: pointer;
}

.form__button:hover {
  box-shadow: 4px 8px 8px hsla(157, 12%, 90%, 1);
}

.form__button-calculate {
  margin-top: 2rem;
}

.form__college {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.form__input-radio {
  display: flex;
  align-items: center;

  column-gap: 0.5rem;
}

.form__price {
  display: grid;
  margin-top: 2rem;
}

.form__price-card {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px hsla(348, 54%, 18%, 0.25);
  padding: 1.5rem 5rem 1.5rem 1.5rem;
  transition: 0.3s;
}

.form__price-card-title {
  margin-bottom: 1rem;
}

.form__button-price {
  margin-top: 1rem;
}

.form__select {
  height: 28px;
  background-color: #fafafa;
  border: none;
  border-radius: 6px;
  box-shadow: 0 1px 6px #ddd;
  margin-top: 0.5rem;
  transition: 0.5s;
}

.form__select:hover {
  box-shadow: 0 1px 6px hsla(157, 54%, 18%, 0.3);
  background-color: #fff;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .pathway__form {
    text-align: center;
  }

  .subscribe__form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form__first {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form__price {
    align-items: center;
  }

  .form__price-card {
    padding: 1.5rem;
    width: 500px;
    justify-self: center;
    align-items: center;
  }
}
</style>
