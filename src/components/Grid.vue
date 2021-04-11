<template>
  <div class="position-absolute grid">
    <div
      class="d-flex justify-content-center"
      v-for="m in rows.length"
      :key="m"
      :style="{ height: `${rows[m - 1]}px` }"
    >
      <square
        v-for="n in columns.length"
        :key="`${m}${n}`"
        :width="columns[n - 1]"
        :link="link(m, n)"
        :picture="picture(m, n)"
        :type="type"
      />
    </div>
  </div>
</template>

<script>
import Square from "../components/Square";

export default {
  name: "Grid",
  components: {
    Square
  },
  props: {
    links: {
      type: Array,
      required: false
    },
    pictures: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      rows: [150, 100, 60, 165, 60, 120],
      columns: [100, 50, 190, 105, 175, 60, 120, 125]
    };
  },
  computed: {
    type() {
      return this.links ? "Links" : "Pictures";
    }
  },
  methods: {
    link(row, column) {
      return this.links?.find(
        link => link.row === row && link.column === column
      )?.text;
    },
    picture(row, column) {
      const pictureNumber = (row - 1) * 8 + column;
      return row <= 3 ? pictureNumber.toString() : undefined;
    }
  }
};
</script>

<style lang="scss" scoped>
.grid {
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
