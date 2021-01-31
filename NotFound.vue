<template>
  <img src="https://cdn.pixabay.com/photo/2016/06/03/08/18/oops-1432954_1280.png" alt="oops" class="oops-pic">
  <h1 class="errornumfour">404</h1>
  <h3>Sorry, this page was not found.</h3>
  <p>Not to worry though, click <router-link to="/">here</router-link> go to the home page</p>
</template>

<script>
export default {
    name: 'not-found'
}
</script>

<style>
    body{
        margin: 0;
    }
    .errornumfour{
        font-size: 150px;
    }
    .oops-pic{
        max-height: 300px;
    }
</style>