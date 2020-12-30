<template>
  <div class="ml-5 mt-4">
    <div
      class="d-flex"
      v-for="n in rows"
      :key="n"
      :style="{ height: `${height[n - 1]}px` }"
    >
      <square v-for="n in columns" :key="n" :width="width[n - 1]" />
    </div>
  </div>
</template>

<script>
import Square from "../components/Square";

export default {
  name: "Home",
  components: {
    Square
  },
  data() {
    return {
      columns: 8,
      rows: 6,
      height: [160, 110, 60, 165, 60, 130],
      width: [160, 90, 280, 160, 270, 100, 190, 170]
    };
  }
};
</script>

<style lang="scss" scoped></style>
