<template>
  <div class="taskManager">
    <FilterNav @filterChange="current = $event" 
    :current="current"/>
    <div v-if="tasks.length">
      <div v-for="task in filterTasks" :key="task.id">
        <SingleTask :task="task" @delete="handleDelete"
        @complete="handleComplete"/>
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
import { computed } from 'vue'
export default {
  name: 'Home',
  components: { SingleTask, TasksNavbar, FilterNav},
  data() {
    return {
      tasks: [],
      current: 'all'
    };
  },
  mounted() {
    fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => this.tasks = data)
      .catch(err => console.log(err))
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
    max-width: 600px;
    margin: 0 auto;
    color: #555;
  }
</style>
