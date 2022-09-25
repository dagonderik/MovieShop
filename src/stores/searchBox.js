import { defineStore } from "pinia";

/**
 * This store is used to hold the value of the input searchbar
 */
export const useSearchBox = defineStore("searchBox", {
  state: () => ({
    /**
     * Holds the value of the input on the searchbar
     * The initial value defines the first set of movies loaded
     */
    input: "a",
  }),
  getters: {
  },
  actions: {
    /**
     * Updates the value on the input state based on the searchbar content
     * @param {string} text - text contains the value on the searchbar
     */
    changeInput(text) {
      this.input = text;
    },
  },
});
