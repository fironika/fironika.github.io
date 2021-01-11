<template>
  <div :style="{ width: `${width}px` }">
    <b-button
      v-if="type === 'Links'"
      variant="transparent"
      class="link d-flex justify-content-center align-items-center"
      :disabled="!link"
      :class="{ 'square-with-link': link }"
      :to="`/${lowerCaseLink}`"
      >{{ link }}</b-button
    >
    <img
      v-else-if="picture"
      class="image"
      :src="require(`../assets/Pics/${picture}.jpeg`)"
    />
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
    link: {
      type: String,
      required: false
    },
    picture: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: true
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
.link {
  font-size: 26px;
  transition: 0.5s;
  color: transparent;
  width: 100%;
  height: 100%;
}
.square-with-link {
  &:hover {
    background-color: black;
    color: white;
    opacity: 0.8;
  }
}
.image {
  max-width: 90%;
  max-height: 90%;
}
</style>
