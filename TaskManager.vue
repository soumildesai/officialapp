<template>
  <div class="taskManager">
    <FilterNav @filterChange="current = $event" 
    :current="current"/>
    <div class="tasks">
      <div v-if="tasks">
        <div v-for="task in filterTasks" :key="task.id">
          <SingleTask :task="task" @delete="handleDelete"
          @complete="handleComplete"/>
        </div>
      </div>
    </div>
  </div>
  <TasksNavbar/>
  <router-view/>
</template> 
<script>
import TasksNavbar from '../components/TasksNavbar.vue'
import SingleTask from '../components/SingleTask.vue'
import FilterNav from '../components/TaskFilterNav.vue'
import Navbar from '../components/Navbar.vue'
import { computed } from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: 'Home',
  components: { SingleTask, TasksNavbar, FilterNav, Navbar},
  data() {
    return {
      tasks: [],
      current: 'all',
    };
  },
  async mounted(res) {
    var docRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
    // docRef.collection('tasks').get().then((task) => {
    //   this.tasks.push(task.data().json);
    //   console.log(this.tasks)
    // })
    let result = await docRef.collection('tasks').get(); //TODO: add query if needed
    result.forEach(doc => {
      this.tasks.push(doc.data());
    });

    

    // this.tasks = docRef.collection('tasks');
    // console.log(this.tasks)
    // fetch('http://localhost:3000/tasks')
    //   .then(res => res.json())
    //   .then(data => this.tasks = data)
    //   .catch(err => console.log(err))
  },
  methods: {
    handleDelete(id) {
      this.tasks = this.tasks.filter(task => {
        return task.id !== id
      })
    },
    handleComplete(id){
      let p = this.tasks.find(task => {
        return task.id === id
      })
      p.complete = !p.complete
    }
  },
  computed:{
    filterTasks(){
      if(this.current === 'completed'){
        return this.tasks.filter(task => task.complete)
      } 
      if(this.current === 'incomplete'){
        return this.tasks.filter(task => !task.complete)
      }
      return this.tasks
    }
  }
}
</script>
<style>
  body{
    background: #f2f2f2;
  }
  .taskManager{
    margin: 0 auto;
    color: #555;
  }
  .tasks{
    max-width: 600px;
    margin: 0 auto;
  }
</style>
