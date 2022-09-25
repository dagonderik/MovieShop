<script setup>
import { storeToRefs } from "pinia";
import { useFavoriteList } from "../stores/favoriteList";
import { useShoppingCart } from "../stores/shoppingCart.js";


const { favorites } = storeToRefs(useFavoriteList());

const cart = useShoppingCart();

const favoritesUpdate = useFavoriteList();

const posterPath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

function removeItemFromFavorites(item) {
    favoritesUpdate.removeItem(item);
}

function emptyCart() {
    favoritesUpdate.emptyCart();
}

function addItemToCart(movie) {
    cart.addItem(movie);
}

</script>

<template>
    <div class="sidebarF">
        <div class="sidebarTitleF">
            <h2> Meus Favoritos</h2>
            <p class="emptyCartF" @click="emptyCart">Esvaziar</p>
        </div>
        <div class="cartItemsF" v-for="item in favorites" :key='item.id'>
            <div class="itemInfoF">
                <img class="thumbnailF" :src='posterPath+item.poster_path' :alt="item.original_title">
                <p>{{item.original_title}}</p>
            </div>
            <div>
                <p>R$9,99</p>
            </div>
            <div>
                <img class="trashIconF" src="../assets/shopping-cart-outline-svgrepo-com.svg" alt=""
                    @click="addItemToCart(item)">
                <img class="trashIconF" src="../assets/icons8-trash.svg" alt="" @click="removeItemFromFavorites(item)">
            </div>
        </div>
    </div>

</template>

<style scoped>
.sidebarF {
    width: var(--sidebarF-size);
    transition: 0.3s ease-out;
    height: 91vh;
    background-color: var(--color-background-mute);
    flex: 0 15 auto;
    display: grid;
    border-color: rgb(65, 65, 65);
    border-style: solid;
    overflow: auto;
}

.sidebarTitleF {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    max-height: 50px;
}

.thumbnailF {
    width: 50px;
}

.trashIconF {
    width: 25px;
    align-self: flex-start;
    cursor: pointer;
    margin: 5px;
}

.cartItemsF {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    border-bottom: 1px solid;
    padding: 8px;
    align-self: flex-start;
}

.itemInfoF {
    width: 150px;
}

.emptyCartF {
    margin-top: 5px;
    cursor: pointer;
}

.emptyCartF:hover {
    text-decoration: underline;
}

@media(max-width: 700px) {
    .sidebarF {
        display: flex;
        flex-wrap: wrap;
    }

    .cartItemsF {
        display: grid;
    }
}
</style>