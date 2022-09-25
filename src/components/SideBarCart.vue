<script setup>
import { storeToRefs } from "pinia";
import { useShoppingCart } from "../stores/shoppingCart.js";


const { cart } = storeToRefs(useShoppingCart());

const cartUpdate = useShoppingCart();

const posterPath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

function removeItemFromCart(item) {
    cartUpdate.removeItem(item);
}

function emptyCart() {
    cartUpdate.emptyCart();
}

</script>

<template>
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
            <span id="price">{{'R$ '+ cart.length*9.99}}</span>
        </div>
        <button class="buyButton" @click="$router.push('checkout')">Finalizar compra</button>
    </aside>

</template>

<style scoped>

.sidebar {
    display: grid;
}

aside {
    width: var(--sidebar-size);
    transition: 0.3s ease-out;
    height: 91vh;
    background-color: var(--color-background-mute);
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

@media(max-width: 700px) {
    .sidebar {
        display: flex;
        flex-wrap: wrap;
    }
    .cartItems {
        display: grid;
    }
}

#price{
    margin-top: 3px;
}


</style>