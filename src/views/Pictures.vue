<template>
  <div>
    <grid :pictures="pictures" />
  </div>
</template>

<script>
import Grid from "../components/Grid";

export default {
  name: "Pictures",
  components: {
    Grid
  },
  data() {
    return {
      pictures: 30
    };
  }
};
</script>
