<template>
  <div id="app">
    <header-component></header-component>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
export default {
  components: { HeaderComponent },
  
}
</script>

<style lang="scss">
@import '@/scss/variables.scss';
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  scroll-behavior: smooth;
}
body {
  margin: $--header-height 0 0 0;
  font-family: $--body-font;
  font-size: $--normal-font-size;
  background-color: $--body-color;
  color: $--text-color;
}
h1, h2, h3 {
  color: $--title-color;
  font-weight: $--font-semi-bold;
  font-family: $--title-font;
}
p {
  line-height: 1.5rem;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
img, video {
  max-width: 100%;
  height: auto;
}
button, input {
  border: none;
  font-family: $--body-font;
  font-size: $--normal-font-size;
}
button {
  cursor: pointer;
}
input {
  outline: none;
}
/* Reusable classes */
.section {
  padding: 4.5rem 0 2.5rem;
}
.section__title {
  font-size: $--h2-font-size;
  color: $--title-color;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: $--mb-2;
}
.container {
  max-width: 968px;
  margin-left: $--mb-1;
  margin-right: $--mb-1;
}
.grid {
  display: grid;
  gap: 1.5rem;
}
@media screen and (min-width: 968px) {
  :root {
    --biggest-font-size: 4rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.75rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --smaller-font-size: .813rem;
  }
}
</style>
