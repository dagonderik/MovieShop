import { defineStore } from "pinia";

/**
 * This store is used to hold the list of movies added to the shopping cart
 */
export const useShoppingCart = defineStore("shoppingCart", {
  state: () => ({
    /**
     * Array that holds the objects containing the data from the movies 
     * added to the shopping cart
     */
    cart: [],
  }),
  getters: {
  },
  actions: {
    /**
     * Adds the selected movie to the shopping cart
     * @param {object} item - item contains the movie information
     */
    addItem(item) {
      this.cart.push(item);
      console.log(this.cart);
    },
    /**
     * Removes a selected movie from the cart array
     * @param {number} item - represents the index of the movie in the array
     */
    removeItem(item) {
      this.cart.splice(item, 1);
    },
    /**
     * Removes all movies from the cart array
     */
    emptyCart() {
      this.cart = [];
    },
  },
});
