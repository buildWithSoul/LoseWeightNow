<template>
  <div id="app">
    <div id="nav">
      <router-link class="green" to="/">Weight Loss Year</router-link> |
      <router-link class="green" to="/lose-weight-now">Plan Now</router-link> |
      <router-link class="green" to="/about">About</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
.green {
  color: #67c23a;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #67c23a;
    }
  }
}
</style>
