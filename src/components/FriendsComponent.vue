<template>
  <div>
    <h3>Lähetä kavereita Rest-rajapintaan</h3>
    <p>Tällähetkellä käytössä on höpöhöpörajapinta mikä tyhjää kokoajan tietonsa</p>
    <b>Nimi:</b> <input type="text" v-model="friendObject.name" />
    <b>Ikä:</b> <input type="number" v-model="friendObject.age" />
    <button v-on:click="sendFriend()">Send new friend</button>

    <div class="loadingMsg" v-if="loading">
      Lataa... {{loadingMsg}}
    </div>

    <div class="errorMsg" v-if="errors">
        Virhe: {{errorMsg}}
    </div>

    <div id="friendsContainer">
      <h3>Kaverit</h3>
      <div v-if="friends.length > 0">
        <friend-component v-for="item in friends" v-bind:friend="item" />
      </div>
      <div v-if="friends.length <= 0">
        Ei vielä kavereita
      </div>
    </div>
  </div>
</template>

<script>
import FriendComponent from '../components/FriendComponent.vue';
const MY_REST_KEY="vue-292342";
export default {

  name: 'FriendsComponent',
  components: {
    FriendComponent
  },
  data () {
    return {
      loading: false,
      loadingMsg: "",
      errors: false,
      errorMsg: "",
      friends: [],
      friendObject: {name:"", age:0},
    }
  },
  mounted() {
    //do after mounting vue instance
    this.getFriends();
  },
  methods : {
    getFriends() {
      //Get Friends
      fetch("http://rest.learncode.academy/api/"+MY_REST_KEY+"/friends")
      .then(response => response.json())
      .then(this.loading=true, this.loadingMsg="Hakee rajapinnasta")
      .then((data) => {
        //set friends-json to friends data object
        this.friends = data;
        this.loading = false;
        console.log("Got friends data");
      });
    },
    sendFriend() {
      //Send friend
      fetch("http://rest.learncode.academy/api/"+MY_REST_KEY+"/friends", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: this.friendObject.name, age:this.friendObject.age}),
      })
      .then(this.loading=true, this.loadingMsg="Lähettää rajapintaan")
      .then(response => response.json()) // response.json() returns a promise
      .then((response) => {
        console.log("You saved this item", response); //returns the new item along with its ID
        this.loading = false;
        //get friends again to update view
        this.getFriends();
      })
      .catch(error=>console.error(), this.errorMsg=console.error());

    }
  }
}
</script>

<style scoped>

</style>
