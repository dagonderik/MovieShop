<script setup>
import { storeToRefs } from "pinia";
import { useMovieStore } from "../stores/movieList.js";
import { ref, onMounted, computed } from "vue";


const store = useMovieStore();
const msg = ref("Welcome to my Vuex Store");

const getMovies = computed(() => {
    return store.getMovies;
})

const movie = computed(() => {
    return store.users;
})

const { movies } = storeToRefs(useMovieStore());

const posterPath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

onMounted(() => {
    store.fetchMovies();
})


</script>
        
<template>

    <div class="searchResults">
        <div class="Card" v-for='movie in movies.results' :key='movie.id'>
            <div class="CardContent">
                <img class="Poster" :src='posterPath+movie.poster_path' :alt="movie.original_title">
                <img class="likeButton" src="../assets/favorite-svgrepo-com.svg" alt="">
                <div>
                    <h4 class="MovieTitle">{{movie.original_title}}</h4>
                </div>
                <div class="movieSpecs">
                    <img class="navButtons" src="../assets/star.svg" alt="">
                    <span class="badge" id="rating"> {{movie.vote_average}} </span>
                    <!-- <span id="genre">genre</span>       {{movie.genre_ids[0]}} -->
                </div>
                <p id="genre">genre</p>
                <button class="addButton">Adicionar</button>
            </div>
        </div>
    </div>

</template>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
    
    .Card {
      display: flex;
      width: 150px;
      height: 390px;
      margin: 1rem 2rem;
      background-color: rgb(32, 32, 32);
    }
    
    .searchResults {
      padding-top: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .Poster {
      width: 150px;
      height: 250px;
    }
    
    .MovieTitle {
      text-overflow: ellipsis;
    }
    
    /* nav {
      width: 100%;
      font-size: 12px;
      text-align: center;
      margin-top: 2rem;
    }
    
    nav a.router-link-exact-active {
      color: var(--color-text);
    }
    
    nav a.router-link-exact-active:hover {
      background-color: transparent;
    }
    
    nav a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 1px solid var(--color-border);
    }
    
    nav a:first-of-type {
      border: 0;
    }
    
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: "Montserrat", sans-serif;
    } */
    
    .CardContent {
      display: grid;
    }
    
    h4 {
      padding-left: 5px;
    }
    
    .addButton {
      width: 150px;
      align-self: end;
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
    }
    
    #rating {
      font-size: 12px;
      background: #4d4d4d;
      color: #fff;
      padding: 0 5px;
      vertical-align: top;
      margin-left: -10px;
    }
    
    .movieSpecs {
      align-self: flex-end;
    }
    
    #genre {
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
      filter: invert(20%) sepia(99%) saturate(6705%) hue-rotate(4deg) brightness(113%) contrast(127%);
    }
    </style>