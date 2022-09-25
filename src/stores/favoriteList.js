import { defineStore } from "pinia";

/**
 * This store is used to hold and manage the list of movies added as favorites
 */
export const useFavoriteList = defineStore("favoriteList", {
  state: () => ({
    /**
     * Array that holds the objects containing the favorited movies specifications
     */
    favorites: [],
  }),
  getters: {
  },
  actions: {
    /**
     * Adds the selected movie to the array of favorites
     * @param {object} item - item contains the movie that will be added
     */
    addItem(item) {
      this.favorites.push(item);
      console.log(this.favorites);
    },
    /**
     * Removes a selected movie from the favorites array
     * @param {number} item - represents the index of the movie in the array
     */
    removeItem(item) {
      this.favorites.splice(item, 1);
    },
    /**
     * Removes all movies from the favorites array
     */
    emptyCart() {
      this.favorites = [];
    },
  },
});
