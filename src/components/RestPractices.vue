<template>
  <div>
    <h2>{{msg}}</h2>
    <friends-component />
  </div>
</template>

<script>
import FriendsComponent from '../components/FriendsComponent.vue';

export default {
  name: 'RestPractices',
  components: {
    FriendsComponent
  },
  data () {
    return {
      msg: 'Vuen Rest harjoitteita'
    }
  }
}

</script>
