<script setup>
    import { ref } from "vue";

    let input = ref("");

    
    
</script>

<template>

<header>
    <div>
      <img class="logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/2560px-Blockbuster_logo.svg.png"
      alt="logo">
    </div>
    <input type="text" v-model="input" placeholder="Search movies..." @input=""/>
    <div>
      <img class="navButtons" src="../assets/favorite-svgrepo-com.svg" alt="">
      <img class="navButtons" src="../assets/shopping-cart-outline-svgrepo-com.svg" alt="">
      <span class="badge" id="lblCartCount"> 0 </span>
    </div>
  </header>

</template>

<style scoped>

header {
  /* display: grid; */
  /* max-height: 100vh; */
  text-align: center;
  /* line-height: 1.5; */
  background-color: rgb(54, 54, 54);
}

template {
    background-color: #ff0000;
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