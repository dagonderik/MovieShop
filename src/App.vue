<script setup>
import { storeToRefs } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { useMovieStore } from "./stores/movieList";
import { ref, onMounted, onBeforeMount, computed } from "vue";


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

let input = ref("");

onMounted(() => {
  store.fetchMovies();
})

</script>



<template>
  <header>
    <div>
      <img class="logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/2560px-Blockbuster_logo.svg.png"
      alt="logo">
    </div>
    <input type="text" v-model="input" placeholder="Search movies..." />
    <div>
      <img class="navButtons" src="./assets/favorite-svgrepo-com.svg" alt="">
      <img class="navButtons" src="./assets/shopping-cart-outline-svgrepo-com.svg" alt="">
      <span class="badge" id="lblCartCount"> 0 </span>
    </div>
  </header>

  <!-- <RouterView /> -->

  <div>
    <div class="searchResult" v-for='user in movies.results' :key='user.id'>
      <div class="Card">
        <img class="Poster" 
          :src='posterPath+user.poster_path' 
          :alt="user.original_title">
          <h1>hello</h1>
      </div>
    </div>
  </div>

</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

header {
  display: grid;
  text-align: center;
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  width: 100px;
  
}

.Card {
  width: 150px;
  height: 350px;
  margin: 1rem 2rem;
}

.Poster {
  width: 150px;
  height: 250px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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

.searchResults {
  display: grid;
}

#lblCartCount {
  font-size: 12px;
  background: #ff0000;
  color: #fff;
  padding: 0 5px;
  vertical-align: top;
  margin-left: -10px;
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

@media (max-width: 370px) {

  .logo {
    align-items: center;
  }

}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("assets/searchButton.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>


