<template>
  <div>
    <div>
      <div @click="toggleExpand">Menu</div>
      <div v-if="!expanded">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      expanded: false
    };
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="scss" scoped></style>
