<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div id="lipsum">
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci elit, molestie eget scelerisque suscipit, aliquam non odio. Fusce in efficitur orci. Ut justo enim, pulvinar porttitor consectetur vitae, pharetra eu diam. Pellentesque eget sollicitudin nunc. Nunc ut maximus metus. In dapibus mattis scelerisque. Sed sagittis, orci et aliquam vestibulum, mi est auctor justo, non bibendum ipsum neque vel neque. Proin leo orci, egestas vitae commodo vitae, accumsan id ex. Aenean vel metus varius, gravida nunc eu, varius enim. Nullam tristique massa arcu, sit amet malesuada elit ullamcorper a. Pellentesque laoreet est vitae enim dapibus feugiat.
         </p>
         <p>
         Duis laoreet purus eu sodales commodo. Nam fermentum ante felis, tempor varius odio auctor sit amet. Proin sit amet enim lectus. Etiam consectetur lectus vitae quam rhoncus congue. Proin cursus diam quis efficitur ultricies. Fusce ante lectus, sagittis nec efficitur quis, lacinia eu mi. Suspendisse potenti. Aliquam mattis arcu eu nulla sodales dignissim. Proin quis diam porta, molestie leo eu, fermentum quam. Donec eu faucibus diam. Aenean tincidunt ligula velit, vitae dictum mauris porttitor in. Maecenas vestibulum vel odio at suscipit. Donec rutrum vehicula libero. Duis placerat vehicula orci sit amet finibus. Mauris vitae mi ac enim dignissim convallis. Nullam risus arcu, consectetur imperdiet interdum eu, blandit vel nisl.
         </p>
         <p>
         Pellentesque leo ipsum, sagittis ut hendrerit quis, sodales et tellus. Fusce lobortis felis at dui accumsan ornare. Phasellus elit arcu, placerat eu felis nec, dignissim viverra justo. Donec at lacus ac sem maximus hendrerit tincidunt vitae mi. Proin sollicitudin tristique faucibus. Integer a neque eget nibh blandit porttitor. Nam ac euismod est, eget porta dui. Duis vel mattis quam. Quisque vel finibus ex, ut dictum sapien. Nam mauris lorem, consectetur at eros at, tincidunt placerat lectus. Sed placerat risus sollicitudin tempus auctor.
         </p>
         <p>
         Mauris fermentum dapibus urna in pharetra. Cras fermentum in nisi at rhoncus. Ut id neque et enim varius tincidunt at at quam. Fusce hendrerit lobortis neque, eget fermentum eros molestie sed. Nulla facilisis, purus vel maximus porttitor, enim ante feugiat est, at convallis lectus augue quis tellus. Nulla lobortis lorem eget velit convallis, et sagittis neque scelerisque. Ut quis quam enim. Ut scelerisque condimentum erat id iaculis. Aliquam porttitor, orci eget semper pretium, mi tellus facilisis libero, eu tristique erat eros at ex. Morbi nibh massa, tempor pulvinar urna in, pretium interdum lectus. Fusce a tincidunt nisi, at dignissim quam.
         </p>
        </div>
   <counter-buttons subtitle="Alaotsikko" subsubtitle="Ala-alaotsikko" />

  </div>
</template>

<script>
import CounterButtons from '../components/CounterButtons.vue';
export default {
  name: 'Other',
  data () {
    return {
      msg: 'Lorem ipsum'
    }
  },
  components: {
    CounterButtons
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
