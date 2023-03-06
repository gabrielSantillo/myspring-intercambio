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
            <select required>
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
            <select>
              <option ref="chosen_province" v-for="(province, index) in provinces" :key="index" :value="province">{{province}}</option>
            </select>
          </div>
        </div>

        <button class="form__button" @click="show_colleges">Escolher College</button>

        <div>
            <label for="" class="form__label">College</label>
            <select >
                <option v-for="(college, index) in ab" :key="index" :value="college">{{college}}</option>
            </select>

            <button class="form__button form__button-calculate" @click="calculate">Calcular</button>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            provinces: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'New Foundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'],
            show_college_options: false,
            ab: ['Bow Valley College', 'Concordia University of Edmonton', 'MacEwan University', 'Northern Alberta Institute of Technology', 'Olds College', 'Red Dear Polytechnic', 'Southern Alberta Institute of Technology']
        }
    },
    methods: {
        show_colleges() {
            this.show_college_options = true;
            let province = this.$refs['chosen_province']['value']
            province
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
</style>
