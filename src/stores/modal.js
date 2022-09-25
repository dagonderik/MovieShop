import { defineStore } from "pinia";

export const useModal = defineStore("modal", {
  state: () => ({
    visible: false,
  }),
  getters: {
    getVisible(state) {
      return state.visible;
    },
  },
  actions: {
    toggleModal() {
      if (!this.visible) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    },
  },
});
