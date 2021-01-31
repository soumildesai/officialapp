<template>
  <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input type="text" required v-model="title">
      <label>Details:</label>
      <textarea required v-model="details"></textarea>
      <button>Add Task</button>
      <p class="warningAddTask">*DO NOT use the same name as an existing task, the initial task will be overwritten</p>
  </form>
  <TasksNavbar/>
  <router-view/>
</template>

<script>
import TasksNavbar from '../components/TasksNavbar.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
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
          complete: false,
          id: this.title
        }
        var db = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
        try{
          let addedTask = db.collection('tasks').doc();
          task.id = addedTask.id;
          addedTask.set(task)
        } catch(err){
          console.log(err.message)
        }
        this.$router.push('/tasks')
        // fetch('http://localhost:3000/tasks',{
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(task)
        // }).then(() => {
        //     this.$router.push('/tasks')
        // }).catch((err) => console.log(err))
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
    width: 425px; 
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
    cursor: pointer;
  }
  .warningAddTask{
    color: red;
    opacity: 0.75;
  }
</style>