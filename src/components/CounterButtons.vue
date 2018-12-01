<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <h3> {{subtitle}} </h3>
    <h4 v-if="subsubtitle != ''"> {{subsubtitle}}</h4>
    <div class="center">
      <table>
        <tr>
          <td>
              <button-counter></button-counter>
          </td>  <td>
                <button-counter></button-counter>
            </td>  <td>
                  <button-counter></button-counter>
              </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'CounterButtons',
  data () {
    return {
      msg: 'Counter buttons'
    }
  },
  props: {
    subtitle:'',
    subsubtitle:''
  }
}

// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
</script>

<style scoped>
.center {
    margin: auto;
    width: 50%;
    padding: 10px;
}
</style>
