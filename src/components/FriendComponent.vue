<template>
  <div>
    Nimi: {{friend | fullName}}
    Ikä: {{friend.age}}
    <button v-on:click="decrementAge(friend)">-</button>
    <button v-on:click="incrementAge(friend)">+</button>
  </div>
</template>

<script>
export default {
  name: 'FriendComponent',
  props: ["friend"],
  filters: {
    fullName(value) {
      return `${value.name}`;
    }
  },
  methods: {
    incrementAge(friend) {
      friend.age = friend.age + 1;
    },
    decrementAge(friend) {
      friend.age = friend.age - 1;
    }
  }
}
</script>
