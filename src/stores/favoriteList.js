import { defineStore } from "pinia";


export const useFavoriteList = defineStore("favoriteList", {
  state: () => ({
    favorites: [],
  }),
  getters: {
    getInput(state) {
      return state.favorites;
    },
  },
  actions: {
    addItem(item) {
        this.favorites.push(item);
        console.log(this.favorites);
    },
  },
});