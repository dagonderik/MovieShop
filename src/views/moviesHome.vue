<script setup>
import { storeToRefs } from "pinia";
import { useMovieStore } from "../stores/movieList.js";
import { onMounted } from "vue";
import { useSearchBox } from "../stores/searchBox.js";
import { useShoppingCart } from "../stores/shoppingCart.js";
import { useFavoriteList } from "../stores/favoriteList.js";
import SideBar from "../components/SideBarCart.vue";
import SideBarFav from "../components/SideBarFavorites.vue";

/**
 * Sets the variables to access the store content
 */
const { input } = storeToRefs(useSearchBox());
const { movies } = storeToRefs(useMovieStore());

/**
 * Sets the variables to access the store actions
 */
const cart = useShoppingCart();
const storeMovies = useMovieStore();
const favorites = useFavoriteList();


/**
 * Request the API the first list of the movies shown
 */
onMounted(() => {
    storeMovies.fetchMovies(input.value);
})

/**
 * Adds the selected movie to the cart
 * @param {object} movie - Holds the information of the selected movie 
 */
function addItemToCart(movie) {
    cart.addItem(movie);
}

/**
 * Adds the selected movie to the favorites list
 * @param {object} movie - Holds the information of the selected movie
 */
function addItemToFavorites(movie) {
    favorites.addItem(movie);
}

const posterPath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

</script>
        
<template>

    <div class="searchResults">
        <div class="Card" v-for='movie in movies.results' :key='movie.id'>
            <div class="CardContent">
                <img class="Poster" :src='posterPath+movie.poster_path' :alt="movie.original_title">
                <img class="likeButton" @click="addItemToFavorites(movie)" src="../assets/favorite-svgrepo-com.svg"
                    alt="">
                <div>
                    <h4 class="MovieTitle">{{movie.original_title}}</h4>
                </div>
                <div class="movieSpecs">
                    <img class="navButtons" src="../assets/star.svg" alt="">
                    <span class="badge" id="rating"> {{movie.vote_average}} </span>
                </div>
                <button class="addButton" @click="addItemToCart(movie)">Adicionar</button>
            </div>
        </div>
    </div>
    <SideBar />
    <SideBarFav />

</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.Card {
    display: flex;
    width: 150px;
    height: 390px;
    margin: 1rem 2rem;
    background-color: var(--color-background-mute);
}

.foote {
    min-width: 100vw;
}

.searchResults {
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    flex: 0 20 auto;
}

.Poster {
    width: 150px;
    height: 250px;
}

.MovieTitle {
    text-overflow: ellipsis;
}

.CardContent {
    display: grid;
}

h4 {
    padding-left: 5px;
}

.addButton {
    width: 150px;
    align-self: flex-end;
    cursor: pointer;
    border-radius: 10px;
}

body {
    padding: 20px;
    min-height: 100vh;
    background-color: rgb(234, 242, 255);
}

.badge {
    padding-left: 9px;
    padding-right: 9px;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
    vertical-align: super;
}

#rating {
    font-size: 12px;
    background: #4d4d4d;
    color: #fff;
    padding: 0 5px;
}

.movieSpecs {
    align-self: flex-end;
    justify-self: center;
}

#genre {
    align-self: end;
    text-align: center;
}

.navButtons {
    filter: invert(83%) sepia(66%) saturate(1286%) hue-rotate(334deg) brightness(86%) contrast(100%);
}

.likeButton {
    position: absolute;
    top: 3px;
    right: 3px;
    height: 25px;
}

@media(max-width: 700px) {
    .searchResults {
        flex: 0 100 auto;
    }
}
</style>