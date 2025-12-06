<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <div class=" bg-blue-600 p-5 m-auto rounded-md mt-5 text-center justify-between">
    <RouterLink :to="{name: 'home'}" class ="text-white text-xl ">Home</RouterLink>
    <RouterLink :to="{name: 'about'}" class ="text-white text-xl ml-4">About</RouterLink>
    <RouterLink :to="{name: 'book'}" class ="text-white text-xl ml-4">Book</RouterLink>
    <RouterLink :to="{name: 'search'}" class ="text-white text-xl ml-4">Search</RouterLink>
  </div>
  <div>
    <RouterView/>
  </div>
</template>
 