import { defineStore } from "pinia";
import { reactive, computed } from "vue";

/**
 * This store is used to hold and manage the information passed by the checkout form
 */
export const useForm = defineStore("form", {
  state: () => ({
    /**
     * Holds the user full name
     */
    name: "",
    /**
     * Holds the user CPF
     */
    cpf: "",
    /**
     * Holds the user phone number
     */
    phone: "",
    /**
     * Holds the user email
     */
    email: "",
    /**
     * Holds the user cep
     */
    cep: "",
    /**
     * Holds the user address
     */
    address: "",
    /**
     * Holds the user city information
     */
    city: "",
    /**
     * Holds the user state information
     */
    state: "",
  }),
  getters: {},
  actions: {
    /**
     * Stores the value of the user phone from the input 
     * @param {string} value - User phone number
     */
    changePhone(value) {
      this.phone = value;
      console.log(this.phone);
    },
    /**
     * Stores the value of the user email from the input
     * @param {string} value - User email
     */
    changeEmail(value) {
      this.email = value;
      console.log(this.email);
    },
    /**
     * Stores the value of the user CEP from the input
     * @param {string} value - User CEP information
     */
    changeCep(value) {
      this.cep = value;
      console.log(this.cep);
    },
    /**
     * Stores the value of the user CPF from the input
     * @param {string} value - User CPF
     */
    changeCpf(value) {
      this.cpf = value;
      console.log(this.cpf);
    },
    /**
     * Stores the value of the user full name
     * @param {string} value - User full name
     */
    changeName(value) {
      this.name = value;
      console.log(this.name);
    },
    /**
     * Stores the value of the user address information
     * @param {string} value - User address information
     */
    changeAddress(value) {
      this.address = value;
      console.log(this.address);
    },
    /**
     * Stores the value of the user city information
     * @param {string} value - User city information
     */
    changeCity(value) {
      this.city = value;
      console.log(this.city);
    },
    /**
     * Stores the value of the user state information
     * @param {string} value - User state information
     */
    changeState(value) {
      this.state = value;
      console.log(this.state);
    },
  },
});
