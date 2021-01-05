<template>
  <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input type="text" required v-model="title">
      <label>Details:</label>
      <textarea required v-model="details"></textarea>
      <button>Add Task</button>
  </form>
  <TasksNavbar/>
  <router-view/>
</template>

<script>
import TasksNavbar from '../components/TasksNavbar.vue'
export default {
  components:{TasksNavbar},
    data(){
        return{
            title: '',
            details: ''
        }
    },
    methods:{
      handleSubmit(){
        let task = {
            title: this.title,
            details: this.details,
            complete: false
        }
        fetch('http://localhost:3000/tasks',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(task)
        }).then(() => {
            this.$router.push('/tasks')
        }).catch((err) => console.log(err))
      }
    }
}
</script>

<style>
  body{
      background: #ddd;
  }
  form {
    background: #ddd;
    padding: 20px;
    border-radius: 10px;
  }
  label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0
  }
  input {
    padding: 10px;
    border: 0;
    border: 1px solid #ddd;
    width: 80%; 
    box-sizing: border-box;
  }
  textarea {
    border: 1px solid #ddd;
    padding: 10px;
    width: 80%;
    box-sizing: border-box;
    height: 100px;
  }
  form button {
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
  }
</style>