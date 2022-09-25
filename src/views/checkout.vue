<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useShoppingCart } from "../stores/shoppingCart.js";
import { useModal } from "../stores/modal.js";
import { useForm } from "../stores/form.js";

/**
 * Sets the variables to hold the input values from the form
 */
let fullName = ref("");
let phone = ref("");
let cpf = ref("");
let email = ref("");
let cep = ref("");
let address = ref("");
let city = ref("");
let state = ref("");

/**
 * Sets the variables to access the store content
 */
const { cart } = storeToRefs(useShoppingCart());
const { visible } = storeToRefs(useModal());
const { name } = storeToRefs(useForm());

/**
 * Sets the variables to access the store actions
 */
const updateForm = useForm();
const modalUpdate = useModal();
const cartUpdate = useShoppingCart();

/**
 * Sets the url path of the posters
 */
const posterPath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

/**
 * Calls the action on useShoppingCart store to remove the movie from the cart
 * @param {number} item - index of the item that will be removed
 */
function removeItemFromCart(item) {
    cartUpdate.removeItem(item);
}

/**
 * Calls the action on useShoppingCart store to empty the cart
 */
function emptyCart() {
    cartUpdate.emptyCart();
}

/**
 * Masks the phone number to fit the pattern (xx)xxxxx-xxxx before passing it to the 
 * useForm store 
 * @param {string} phone - Holds the typed user phone number
 */
function maskPhone(phone) {
    const part1 = phone.slice(0, 2);
    const part2 = phone.slice(2, 7);
    const part3 = phone.slice(7, 11);
    let newPhone = `(${part1})${part2}-${part3}`;
    updateForm.changePhone(newPhone);
}

/**
 * Masks the email to fit the pattern x***@xxx.cxx before passing it to the useForm store
 * @param {string} email - Holds the typed user email
 */
function maskEmail(email) {
    let maskedEmail = email.replace(/([^@\.])/g, "*").split('');
    let previous = "";
    for (let i = 0; i < maskedEmail.length; i++) {
        if (i <= 1 || previous == "." || previous == "@") {
            maskedEmail[i] = email[i];
        }
        previous = email[i];
    }
    console.log(maskedEmail.join(''));
}

/**
 * Masks the CEP to fit the pattern xxxxx-xxx before passing it to the useForm store
 * @param {string} cep - Holds the typed user CEP
 */
function maskCep(cep) {
    const part1 = cep.slice(0, 5);
    const part2 = cep.slice(5, 8);
    let newPhone = `${part1}-${part2}`;
    updateForm.changeCep(newPhone);
}

/**
 * Masks the CPF to fit the pattern xxx.xxx.xxx-xx before passing it to the useForm store
 * @param {string} cpf - Holds the typed user CPF
 */
function maskCpf(cpf) {
    const part1 = cpf.slice(0, 3);
    const part2 = cpf.slice(3, 6);
    const part3 = cpf.slice(6, 9);
    const part4 = cpf.slice(9, 11);
    let newPhone = `${part1}.${part2}.${part3}-${part4}`;
    updateForm.changeCpf(newPhone);
}

/**
 * Stores the user name in the useForm store
 * @param {string} fullName - Holds the typed user name
 */
function updateName(fullName) {
    updateForm.changeName(fullName);
}

/**
 * Stores the user address in the useForm store
 * @param {strin} address - Holds the typed user address
 */
function updateAddress(address) {
    updateForm.changeAddress(address);
}

/**
 * Stores the user city information in the useForm store
 * @param {string} city - Holds the typed user city information
 */
function updateCity(city) {
    updateForm.changeCity(city);
}

/**
 * Stores the user state information in the useForm store
 * @param {string} state - Holds the typed user state information
 */
function updateState(state) {
    updateForm.changeState(state);
}

function finishCheckout() {
    modalUpdate.toggleModal();
    cartUpdate.emptyCart();
}

</script>
        
<template>

    <div class="checkoutContainer">
        <div class="side">
            <h1>Finalizar Compra</h1>
            <form class="form" @submit="checkForm">
                <input class="dataInput" v-model="fullName" id="Name" @input="updateName(fullName)"
                    placeholder="Nome Completo" type="text">
                <input class="dataInput" v-model="cpf" id="cpf" @input="maskCpf(cpf)" minlength="11" maxlength="11"
                    placeholder="CPF" type="text">
                <input class="dataInput" v-model="phone" id="phone" @input="maskPhone(phone)" placeholder="Celular"
                    minlength="10" maxlength="11" type="text">
                <input class="dataInput" v-model="email" id="email" @input="maskEmail(email)" placeholder="E-mail"
                    type="email">
                <input class="dataInput" v-model="cep" id="cep" @input="maskCep(cep)" placeholder="CEP" minlength="8"
                    maxlength="8" type="text">
                <input class="dataInput" v-model="address" id="address" @input="updateAddress(address)"
                    placeholder="Endereço" type="text">
                <input class="dataInput" v-model="city" id="city" @input="updateCity(city)" placeholder="Cidade"
                    type="text">
                <input class="dataInput" v-model="state" id="state" @input="updateState(state)" placeholder="Estado"
                    type="text">
            </form>
        </div>
        <aside class="sidebar">
            <div class="sidebarTitle">
                <h2> Meu Carrinho</h2>
                <p class="emptyCart" @click="emptyCart">Esvaziar</p>
            </div>
            <div class="cartItems" v-for="item in cart" :key='item.id'>
                <div class="itemInfo">
                    <img class="thumbnail" :src='posterPath+item.poster_path' :alt="item.original_title">
                    <p>{{item.original_title}}</p>
                </div>
                <div>
                    <p>R$9,99</p>
                </div>
                <img class="trashIcon" src="../assets/icons8-trash.svg" alt="" @click="removeItemFromCart(item)">
            </div>
            <div class="totalPrice">
                <h3>Total:</h3>
                <span>{{'R$ '+ cart.length*9.99}}</span>
            </div>
            <button class="buyButton" @click="modalUpdate.toggleModal">Finalizar</button>
        </aside>

        <!-- Modal Code -->
        <template v-if="visible">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">

                        <div class="modal-header">
                            <h1 name="header">
                                Obrigado {{name}}!
                            </h1>
                        </div>

                        <div class="modal-body">
                            <h2 name="body">
                                Sua compra foi finalizada com sucesso!
                            </h2>
                        </div>

                        <div class="modal-footer">
                            <slot name="footer">
                                <button class="modal-default-button" @click="finishCheckout">Ir para
                                    loja</button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>

</template>


<style scoped>
.arcor {
    width: 100vh;
}

.checkoutContainer {
    padding-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vh;
    align-self: center;
}

#app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 4rem;
}

.side {
    margin-top: calc(100vh/2 - 400px);
}

.form {
    display: flex;
    flex-wrap: wrap;
}

.dataInput {
    margin: 10px;
}

#name {
    width: 100px;
    flex: 0 10 auto;
}

input {
    max-width: 350px;
    width: 60vw;
    margin: 20px auto;
    padding: 10px;
    background-size: 15px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

#cpf {
    width: 175px;
}

#phone {
    width: 155px;
}

#cep {
    width: 120px;
}

#city {
    width: 120px;
}

#state {
    width: 175px;
}

h1 {
    text-align: center;
}

#sidebar {
    display: grid;
}

aside {
    background-color: var(--color-background-mute);
    margin-top: calc(100vh/2 - 400px);
    flex: 0 15 auto;
    display: grid;
    border-color: rgb(65, 65, 65);
    border-style: solid;
    overflow: auto;
}

.sidebarTitle {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    max-height: 50px;
}

.totalPrice {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    max-height: 50px;
    align-self: flex-end;
}

.thumbnail {
    width: 50px;
}

.trashIcon {
    width: 25px;
    align-self: flex-start;
    cursor: pointer;
}

.cartItems {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    border-bottom: 1px solid;
    padding: 8px;
    align-self: flex-start;
}

.itemInfo {
    width: 150px;
}

.emptyCart {
    margin-top: 5px;
    cursor: pointer;
}

.emptyCart:hover {
    text-decoration: underline;
}

.buyButton {
    height: 50px;
    margin: 20px;
    border-radius: 10px;
    align-self: flex-end;
}

/* Modal  */
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 40vw;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: var(--color-background);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
}

.modal-body {
    margin: 20px 0;
    text-align: center;
}

.modal-footer {
    display: grid;
}

.modal-default-button {
    height: 50px;
    border-radius: 10px;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

@media (max-width: 800px) {
    .checkoutContainer {
        display: flex;
        flex-wrap: wrap;
    }

    .sidebar {
        width: 100vw;
    }

    .modal-container {
        width: 70vw;

    }
}
</style>