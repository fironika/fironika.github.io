<template>
  <div class="background">
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  position: relative;
  height: 100vh;
  width: 100%;
}
.background::before {
  content: "";
  background-image: url("./assets/backgroundMid.png");
  background-size: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.75;
}
#app {
  position: relative;
}
</style>
