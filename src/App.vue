<template>
  <div id="app">
    <img src="./assets/miika-logo.png">
    <menu-component />

    <router-view/>

  </div>
</template>

<script>

import Vue from 'vue';
import MenuComponent from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    MenuComponent
  },
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

</style>
