<template>
  <div id="app">
    <div class="component-box">
      <search-input v-model="search"  />
      <get-info :hashtag="this.search"/>
    </div>
  </div>
</template>

<script>
import SearchInput from './components/searchInput.vue'
import getInfo from './components/getInfo.vue'


export default {
  name: 'App',
  components: {
    SearchInput,
    getInfo
  },
  data(){
    return{
      search: '',
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  width: 100%;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.component-box {
  width: 70%;
}
</style>