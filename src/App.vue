<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
