import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    enlargedPicture: null
  },
  mutations: {
    enlargePicture(state, pictureNumber) {
      state.enlargedPicture = pictureNumber;
    }
  },
  actions: {},
  modules: {}
});
