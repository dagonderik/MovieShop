<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useShoppingCart } from "../stores/shoppingCart.js";
// import Modal from "../components/Modal.vue";

let input = ref("");

const { cart } = storeToRefs(useShoppingCart());

const cartUpdate = useShoppingCart();

const posterPath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

function removeItemFromCart(item) {
    cartUpdate.removeItem(item);
}

function emptyCart() {
    cartUpdate.emptyCart();
}

function checkout() {

}

console.log("input  "+input);

</script>
        
<template>

    <div class="checkoutContainer">
        <div class="side">
            <h1>Finalizar Compra</h1>
            <form class="form">
                <input class="dataInput" id="Name" placeholder="Nome Completo" type="text">
                <input class="dataInput" id="cpf" placeholder="CPF" type="number">
                <input class="dataInput" v-model="input" id="phone" placeholder="Celular" type="tel">
                <input class="dataInput" id="email" placeholder="E-mail" type="email">
                <input class="dataInput" id="cep" placeholder="CEP" type="number">
                <input class="dataInput" id="address" placeholder="Endereço" type="text">
                <input class="dataInput" id="city" placeholder="Cidade" type="text">
                <input class="dataInput" id="state" placeholder="Estado" type="text">
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
            <button class="buyButton" @click="$router.push('modal')">Finalizar</button>
        </aside>

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
    /* display: grid; */
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
    /* height: 91vh; */
    background-color: var(--color-background-mute);
    margin-top: calc(100vh/2 - 400px);
    flex: 0 15 auto;
    display: grid;
    /* Maybe Change */
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

@media (max-width: 800px) {
    .checkoutContainer {
        display: flex;
        flex-wrap: wrap;
    }

    .sidebar {
        width: 100vw;
    }
    
}
</style>