<template>
  <div class="section container">
    <form action="" class="subscribe__form">
      <div>
        <h1 class="form__title"><span>ILAC Pathway</span> Calculator</h1>
        <p class="form__description">
          Use this calculator to understand how many weeks of English Pathway
          you will need in order to achieve the level of each College requires.
        </p>
        <p class="form__description">
          You can also see the price for the English Pathway based on the weeks
          you need.
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
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="New Foundland and Labrador">New Foundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
              <option value="Yukon">Yukon</option>
            </select>
          </div>
        </div>

        <button class="form__button" @click="show_colleges">Escolher College</button>

        <div v-if="show_college_options" class="form__college">
            <div>
                <label for="" class="form__label">College</label>
                <select v-model="college" class="form__select">
                    <option v-for="(college, index) in colleges" :key="index" :value="college">{{college}}</option>
                </select>
            </div>
        </div>
      </div>

      <button v-if="show_college_options" class="button form__button" @click="calculate">Calcular</button>
    </form>

    <div class="form__price" v-if="show_result">
        <div class="form__price-card">
            <h3 class="form__price-card-title">Orçamento</h3>
            <p class="form__price-card-description">Provincia: {{`${province}`}}</p>
            <p class="form__price-card-description">College: {{`${college}`}}</p>
            <p class="form__price-card-description">Semanas: {{`${weeks}`}}</p>
            <p class="form__price-card-description">Total: CAD$ {{`${tuition}`}}</p>
            <button class="button form__button form__button-price">Mais Informações</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tuition: 0,
            weeks: 0,
            level: '',
            province: '',
            college: '',
            colleges: ['Bow Valley College', 'Concordia University of Edmonton', 'MacEwan University', 'Northern Alberta Institute of Technology', 'Olds College', 'Red Dear Polytechnic', 'Southern Alberta Institute of Technology'],
            provinces: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'New Foundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'],
            show_college_options: false,
            show_result: false,

            ab: ['Bow Valley College', 'Concordia University of Edmonton', 'MacEwan University', 'Northern Alberta Institute of Technology', 'Olds College', 'Red Dear Polytechnic', 'Southern Alberta Institute of Technology'],
            mb: ['Assiniboine Community College', 'International College of Manibota', 'Manibota Institute of Trades and Technology', 'Red River College', 'University of Winnipeg Professional, Applied and Continuing Education']
        }
    },
    methods: {
        show_colleges() {
            this.show_college_options = true;
        },

        calculate() {
            let num_level = parseInt(this.level)
            let week_fee = 120
            let reg_fee = 110
            let material_fee = 10
            let final_level = 17
            
            this.weeks = (final_level - (num_level - 1)) * 2 //each level means 2 weeks of study

            this.tuition = (this.weeks * week_fee) + (this.weeks * material_fee) + reg_fee

            this.show_result = true

        }
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
    
    column-gap: .5rem;
}

.form__price {
    display: grid;
    margin-top: 2rem;
}

.form__price-card {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px hsla(348, 54%, 18%, .25);
    padding: 1.5rem 5rem 1.5rem 1.5rem;
    transition: .3s;
}

.form__price-card-title {
    margin-bottom: 1rem;
}

.form__button-price {
    margin-top: 1rem;
}

.form__select {
  height: 28px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 6px;
  box-shadow: 0 1px 6px #ddd;
  margin-top: .5rem;
}
</style>
