<template>
  <div class="background">
    <div id="app">
      <navigation />
      <router-view />
      <modal-picture v-if="$store.state.enlargedPicture" />
    </div>
  </div>
</template>

<script>
import ModalPicture from "./components/ModalPicture";
import Navigation from "./components/Navigation";

export default {
  components: {
    ModalPicture,
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
