<template>
  <div
    class="square d-flex justify-content-center align-items-center"
    :class="{ 'square-with-text': text }"
    :style="{ width: `${width}px` }"
  >
    <span v-if="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "Square",
  props: {
    width: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.square {
  border: 5px solid rgb(55, 0, 255);
  transition: 0.5s;
  color: transparent;
}
.square-with-text {
  &:hover {
    background-color: black;
    color: white;
    opacity: 0.8;
  }
}
</style>
