<template>
  <ul class="menulist">
    <li><router-link tag="li" to="/"><a>Home</a></router-link></li>
    <li><router-link tag="li" to="other"><a>Other</a></router-link></li>
    <li><router-link tag="li" to="listpractices"><a>List Practices</a></router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      msg: 'Menu component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul.menulist {
  margin-bottom:20px;
  background-color:DodgerBlue;
  padding:5px;
}
ul.menulist a {
  color:white;
}
ul.menulist li {
  background-color:#65b3ff;
}
li {
  display: inline-block;
  margin: 0 10px;
  padding:5px;

}
a {
  color: #42b983;
}
</style>
