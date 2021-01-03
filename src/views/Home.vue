<template>
  <div>
    <div
      class="d-flex justify-content-center"
      v-for="n in rows.length"
      :key="n"
      :style="{ height: `${rows[n - 1]}px` }"
    >
      <square
        v-for="n in columns.length"
        :key="n"
        :width="columns[n - 1]"
        :text="n % 2 === 0 ? 'test' : null"
      />
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
      rows: [150, 100, 60, 165, 60, 120],
      columns: [100, 50, 190, 105, 175, 60, 120, 125]
    };
  }
};
</script>

<style lang="scss" scoped></style>
