<template>
  <div id="app">
    <div class="movies">

      <h2> Select the movie: </h2> 

      <ul>
        <li> <router-link to='/'>Home</router-link> </li>
        <li> <router-link to='/darkknight'>Dark Knight</router-link> </li>
        <li> <router-link to='/dunkirk'> Dunkirk</router-link> </li>
        <li> <router-link to='/interstellar'>Interstellar</router-link></li>
      </ul>

      <router-view></router-view>   
  </div>
</div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {  
    Home 
  }
}
</script>

