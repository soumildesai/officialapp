<template>
  <div id="nav">
    <div class="container navbar"><Navbar /></div>
  </div>
  <router-view/>
</template>
<script>
import Navbar from './components/Navbar.vue'
export default {
    components: {Navbar}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.container{
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: white;
}
.login{
  width: 60%;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
@media (max-width: 800px){
  .login{
    width: 90%;
  }
}
@media (max-width: 1440px){
  .navbar{
    width: 90%;
  }
}
</style>
