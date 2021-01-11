<template>
  <div>
    <b-dd id="dropdown-1" text="Menu" class="m-md-2">
      <b-dd-item to="/">Home</b-dd-item>
      <b-dd-item to="/pictures">Pictures</b-dd-item>
      <b-dd-item to="/comics">Comics</b-dd-item>
    </b-dd>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style lang="scss" scoped></style>
