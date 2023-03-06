<template>
  <div class="section container">
    <form action="" class="subscribe__form">
      <div>
        <h1 class="form__title"><span>ILAC Pathway</span> Calculator</h1>
        <p class="form__description">Use this calculator to understand how many weeks of English Pathway you will need in order to achieve the level of each College requires.</p><p class="form__description">You can also see the price for the English Pathway based on the weeks you need.</p>
      </div>

      <div>
        <div class="form__inputs">
          <div>
            <label for="" class="form__label">English Level</label>
            <input
              type="text"
              required
              placeholder="Enter your first name"
              class="form__input"
              ref="first_name"
            />
          </div>

          <div>
            <label for="" class="form__label">Last Name</label>
            <input
              type="text"
              required
              placeholder="Enter your last name"
              class="form__input"
              ref="last_name"
            />
          </div>

          <div>
            <label for="" class="form__label">Email</label>
            <input
              type="email"
              required
              placeholder="Enter Your email address"
              class="form__input"
              ref="email"
            />
          </div>

          <div>
            <label for="" class="form__label">Phone number</label>
            <input
              type="number"
              required
              placeholder="Enter your phone number"
              class="form__input"
              ref="phone_number"
            />
          </div>

          <div>
            <label for="" class="form__label">Budget</label>
            <input
              type="number"
              required
              placeholder="Enter your budget"
              class="form__input"
              ref="budget"
            />
          </div>
          <div>
            <p class="form__label">Preferable City</p>
            <div class="form__radio">
              <div>
                <input
                  type="radio"
                  ref="calgary"
                  name="city"
                  value="1"
                  checked
                />
                <label for="calgary">Calgary</label>
              </div>

              <div>
                <input type="radio" ref="vancouver" name="city" value="2" />
                <label for="vancouver">Vancouver</label>
              </div>

              <div>
                <input type="radio" ref="toronto" name="city" value="3" />
                <label for="toronto">Toronto</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="form__buttons" v-scroll-reveal.reset="{ delay: 850 }">
        <button class="form__button" @click="subscribe">Subscribe</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.form {
  background: linear-gradient(170deg, hsl(0, 0%, 22%) 0%, hsl(0, 0%, 6%) 30%);
}

.form__content,
.subscribe__form,
.form__inputs {
  display: grid;
}

.form__content {
  position: relative;
  align-items: center;
}

.form__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.subscribe__form {
  position: relative;
  margin-inline: 1.5rem;
  row-gap: 1.25rem;
  border-radius: 1rem;
}

.form__title {
  color: #000;
  font-size: $--h2-font-size;
  margin-bottom: 0.5rem;
}

.form__title span {
  color: red;
}

.form__description {
  font-size: $--small-font-size;
}

.form__inputs {
  row-gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.form__label {
  display: block;
  color: $--first-color;
  font-size: $--small-font-size;
  font-weight: $--font-semi-bold;
  margin-bottom: 0.25rem;
}

.form__input {
  width: 100%;
  padding: 10px 8px;
  border-radius: 4px;
  border: 2px solid $--first-color;
  color: #000;
  font-size: $--smaller-font-size;
  font-weight: $--font-medium;
  transition: border 0.4s;
}

.form__input:focus,
.form__input:valid {
  border: 2px solid $--first-color;
}

.form__radio {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;

  > div {
    display: grid;
    grid-auto-flow: column;

    > input {
      margin-right: 2px;
    }
  }
}

.form__button {
  display: grid;
}

.form__button {
  padding: 14px 1rem;
  border-radius: 6px;
  background: linear-gradient(76deg, $--first-color, $--first-color-alt);
  color: #fff;
  font-size: $--small-font-size;
  font-weight: $--font-semi-bold;
  box-shadow: 0 6px 24px hsla(157, 66%, 53%, 0.5);
  transition: 0.3s;
  cursor: pointer;
}

.form__button:hover {
  box-shadow: 0 6px 24px hsla(157, 66%, 53%, 0.8);
}

</style>
