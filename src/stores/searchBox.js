import { defineStore } from "pinia";


export const useSearchBox = defineStore("searchBox", {
  state: () => ({
    input: "barbie",
  }),
  getters: {
    getInput(state) {
      return state.input;
    },
  },
  actions: {
    changeInput(text) {
        this.input = text;
    },
  },
});
