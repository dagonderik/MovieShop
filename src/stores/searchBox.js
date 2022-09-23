import { defineStore } from "pinia";


export const useSearchBox = defineStore("searchBox", {
  state: () => ({
    input: "sonic",
  }),
  getters: {
    getInput(state) {
      return state.input;
    },
  },
  actions: {
    changeInput(text) {
        this.input = text;
        // console.log(this.input);
    },
  },
});
