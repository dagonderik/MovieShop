import { defineStore } from "pinia";


export const useSearchBox = defineStore("searchBox", {
  state: () => ({
    input: "marvel",
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
