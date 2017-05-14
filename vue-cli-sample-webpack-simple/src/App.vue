<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <h2>asdf</h2>
    <ul>
      <li v-for="user in users">
        <User :data="user" />
      </li>
    </ul>
    <search-form />
  </div>
</template>

<script>
import SearchForm  from './SearchForm.vue'
import User from './User.vue'
import * as userService from './user.service'

export default {
  name: 'app',
  data () {
    return {
      msg: 'User list',
      users: []
    }
  },
  created () {
    this.users  = userService.get()
  },
  components: {
    SearchForm,
    User
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
