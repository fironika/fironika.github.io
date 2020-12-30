<template>
  <div class="square" :style="{ width: `${width}px` }"></div>
</template>

<script>
export default {
  name: "Square",
  props: {
    width: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.square {
  border: 5px solid lime;
}
</style>
