<template>
  <b-button
    class="square d-flex justify-content-center align-items-center"
    variant="transparent"
    :disabled="!link"
    :class="{ 'square-with-link': link }"
    :style="{ width: `${width}px` }"
    :to="`/${lowerCaseLink}`"
    >{{ link }}</b-button
  >
</template>

<script>
export default {
  name: "Square",
  props: {
    width: {
      type: Number,
      required: true
    },
    link: {
      type: String,
      required: false
    }
  },
  computed: {
    lowerCaseLink() {
      return this.link?.toLowerCase();
    }
  }
};
</script>

<style lang="scss" scoped>
.square {
  border: 5px solid lime;
  transition: 0.5s;
  font-size: 26px;
  color: transparent;
}
.square-with-link {
  &:hover {
    background-color: black;
    color: white;
    opacity: 0.8;
  }
}
</style>
