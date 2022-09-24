<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBarCart.vue";
import SideBarFav from "./components/SideBarFavorites.vue";

</script>



<template>

  <Header></Header>
  <div class="container">
    <RouterView />
    <SideBar />
    <SideBarFav />
  </div>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: space-evenly;
}

</style>


