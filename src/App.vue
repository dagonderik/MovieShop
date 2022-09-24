<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";


</script>



<template>

  <Header></Header>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: space-evenly;
}

</style>


