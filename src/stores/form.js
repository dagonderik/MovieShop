import { defineStore } from "pinia";


export const useForm = defineStore("form", {
  state: () => ({
    name: "",
    cpf: "",
    phone: "",
    email: "",
    cep: "",
    address: "",
    city: "",
    state: "",
  }),
  getters: {
  },
  actions: {
    changePhone(value) {
      this.phone = value;
      console.log(this.phone);
    },
    changeEmail(value) {
      this.email = value;
      console.log(this.email);
    },
    changeCep(value) {
      this.cep = value;
      console.log(this.cep);
    },
    changeCpf(value) {
      this.cpf = value;
      console.log(this.cpf);
    },
    changeName(value) {
      this.name = value;
      console.log(this.name);
    },
    changeAddress(value) {
      this.address = value;
      console.log(this.address);
    },
    changeCity(value) {
      this.city = value;
      console.log(this.city);
    },
    changeState(value) {
      this.state = value;
      console.log(this.state);
    },
  },
});
