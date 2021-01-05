<template>
  <nav class="tasks-main-nav">
      <router-link :to="{ name: 'Tasks'}">Tasks</router-link>
      <router-link :to="{ name: 'AddTask' }">Add New Task</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
    .tasks-main-nav{
        text-align: center;
        margin: 40px auto;
    }
    .tasks-main-nav a{
        display: inline-block;
        text-decoration: none;
        margin: 0 10px;
        color: #999;
        font-size: 18px;
    }
    .tasks-main-nav a.router-link-active{
        border-bottom: 2px solid #00ce89;
        padding: 4px;
    }
</style>