<template>
  <div>
    <h1>{{ msg }}</h1>

    <input type="button" v-on:click="addRandom()" value="Add random numbers to list" />
    <input type="button" v-on:click="removeLast()" value="Remove last from list" />
    <ul id="example-1">
      <li v-if="items.length > 0" v-for="item in items">
        {{ item.message }}
      </li>
      <li v-if="items.length == 0">
        Lista on tyhjä
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Another',
  data () {
    return {
      msg: 'Vuen lista harjoitteita',
      items: [
      ]
    }
  },
  methods: {
    addRandom: function(event) {
      var randomInt = getRandomInt(1,2000);
      this.items.push({message:randomInt});
    },
    removeLast: function(event) {
      this.items.splice(this.items.length-1, 1);
    }
  }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
