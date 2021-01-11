<template>
  <div>
    <grid :links="links" />
  </div>
</template>

<script>
import Grid from "../components/Grid";

export default {
  name: "Comics",
  components: {
    Grid
  },
  data() {
    return {
      links: [
        {
          row: 2,
          column: 3,
          text: "Pictures"
        },
        {
          row: 4,
          column: 7,
          text: "Comics"
        }
      ]
    };
  }
};
</script>
