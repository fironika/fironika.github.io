<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <div class="h-100 w-100 d-flex justify-content-center">
        <img
          class="picture"
          :src="require(`../assets/Pics/${enlargedPicture}.jpeg`)"
          @click="$store.commit('enlargePicture', null)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalPicture",
  computed: {
    enlargedPicture() {
      return this.$store.state.enlargedPicture;
    }
  }
};
</script>

<style lang="scss" scoped>
/* The Modal (background) */
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  height: 80%;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.picture {
  max-height: 90%;
  max-width: 90%;
}
</style>
