import { defineStore } from "pinia";


export const useShoppingCart = defineStore("shoppingCart", {
  state: () => ({
    cart: [],
  }),
  getters: {
    getInput(state) {
      return state.cart;
    },
  },
  actions: {
    addItem(item) {
        this.cart.push(item);
        console.log(this.cart);
    },
  },
});
