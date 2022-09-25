import { defineStore } from "pinia";

/**
 * This store is used to control the modal visibility
 */
export const useModal = defineStore("modal", {
  state: () => ({
    /**
     * Variable that defines if the modal is visible or not
     */
    visible: false,
  }),
  getters: {
  },
  actions: {
    /**
     * Toggle the visibility of the modal changing the value of the variable visible between true and false
     */
    toggleModal() {
      if (!this.visible) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    },
  },
});
