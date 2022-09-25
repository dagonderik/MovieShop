<script setup>
import { storeToRefs } from "pinia";
import { useFavoriteList } from "../stores/favoriteList";
import { useShoppingCart } from "../stores/shoppingCart.js";

/**
 * Sets the variables to access the store content
 */
const { favorites } = storeToRefs(useFavoriteList());

/**
 * Sets the variables to access the store actions
 */
const cart = useShoppingCart();
const favoritesUpdate = useFavoriteList();

/**
 * Sets the url path of the posters
 */
const posterPath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

/**
 * Removes the selected movies from the favorites array
 * @param {object} item Movie that will be removed
 */
function removeItemFromFavorites(item) {
    favoritesUpdate.removeItem(item);
}

/**
 * Removes all the objects inside the favorites array
 */
function emptyCart() {
    favoritesUpdate.emptyCart();
}

/**
 * Adds the selected movie from the favorites array to the cart array
 * @param {object} item Movie that will be added to the cart array
 */
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