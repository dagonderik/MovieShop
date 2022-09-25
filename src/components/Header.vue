<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useSearchBox } from "../stores/searchBox.js"
import { useMovieStore } from "../stores/movieList.js"
import { useShoppingCart } from "../stores/shoppingCart.js";
import { useFavoriteList } from "../stores/favoriteList";

/**
 * Sets the variables to access the store content
 */
const { cart } = storeToRefs(useShoppingCart());
const { favorites } = storeToRefs(useFavoriteList());

/**
 * Sets the variables to access the store actions
 */
const store = useSearchBox();
const movieStore = useMovieStore();

/**
 * Holds the input value on the searchbar
 */
let input = ref("");

/**
 * Sets the variables used to manipulate the size of the sidebar to control the 
 * open and close function
 */
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);

/**
 * Update the movies list based on the input on the searchbar
 */
function handleInput() {
    store.changeInput(input);
    if (input.value) {
        movieStore.fetchMovies(input.value);
    }
}

/**
 * Manipulate the size of the cart sidebar to control the open and close function
 */
function handleSidebarCart() {
    if (rootStyles.getPropertyValue('--sidebar-size') === rootStyles.getPropertyValue('--sidebar-min')) {
        root.style.setProperty('--sidebar-size', rootStyles.getPropertyValue('--sidebar-max'));
        root.style.setProperty('--sidebarF-size', rootStyles.getPropertyValue('--sidebarF-min'));
    } else {
        root.style.setProperty('--sidebar-size', rootStyles.getPropertyValue('--sidebar-min'));
    }
}

/**
 * Manipulate the size of the favorites sidebar to control the open and close function
 */
function handleSidebarFavorite() {
    if (rootStyles.getPropertyValue('--sidebarF-size') === rootStyles.getPropertyValue('--sidebarF-min')) {
        root.style.setProperty('--sidebarF-size', rootStyles.getPropertyValue('--sidebarF-max'));
        root.style.setProperty('--sidebar-size', rootStyles.getPropertyValue('--sidebar-min'));
    } else {
        root.style.setProperty('--sidebarF-size', rootStyles.getPropertyValue('--sidebarF-min'));
    }
}

</script>

<template>

    <header>
        <div>
            <router-link to="/">
                <img class="logo"
                    src="http://store-images.s-microsoft.com/image/apps.30553.13530700528390756.c83a6650-e301-453d-86c7-265631b3e9bc.f6548c93-82aa-4962-8942-09cacfabd515"
                    alt="logo">
            </router-link>
        </div>
        <input type="text" v-model="input" placeholder="Search movies..." @input="handleInput" />
        <div>
            <img class="navButtons" src="../assets/favorite-svgrepo-com.svg" alt="" @click="handleSidebarFavorite">
            <span class="badge" id="lblCartCount"> {{favorites.length}} </span>
            <img class="navButtons" src="../assets/shopping-cart-outline-svgrepo-com.svg" alt=""
                @click="handleSidebarCart">
            <span class="badge" id="lblCartCount"> {{cart.length}} </span>
        </div>
    </header>

</template>

<style scoped>
header {
    text-align: center;
    background-color: var(--color-background-mute);
    position: relative;
    top: 0;
    width: auto;
}

.logo {
    width: 100px;
    align-items: center;
}

.navButtons {
    width: 25px;
    height: 25px;
    margin: 0px 6px 0px 0px;
}

.navButtons:hover {
    cursor: pointer;
}

.badge {
    padding-left: 9px;
    padding-right: 9px;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
}

#lblCartCount {
    font-size: 12px;
    background: #ff0000;
    color: #fff;
    padding: 0 5px;
    vertical-align: top;
    margin-left: -10px;
}

input {
    display: block;
    max-width: 350px;
    width: 60vw;
    margin: 20px auto;
    padding: 10px 45px;
    background: white url("../assets/searchButton.svg") no-repeat 15px center;
    background-size: 15px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

@media (min-width: 700px) {
    header {
        display: flex;
        place-items: center;
        justify-content: space-between;
        padding: 0 4rem;
    }
}
</style>