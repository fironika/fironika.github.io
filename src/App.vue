<template>
  <div class="background">
    <div id="app">
      <navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss" scoped>
.background {
  position: relative;
  height: 100vh;
  width: 100%;
}
.background::before {
  content: "";
  background-image: url("./assets/bg.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
