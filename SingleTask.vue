<template>
  <div class="task" :class="{complete: task.complete}">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ task.title }}</h3>
      <div class="icons">
        <span @click="deleteTask" class="material-icons trashtask">
            delete</span>
        <router-link :to="{ name: 'EditTask', params: {id: task.id }}">
          <span class="material-icons edit-task">edit</span>
        </router-link>
        <span @click="toggleComplete" class="material-icons tick"
        v-if="!task.complete">done</span>
        <span @click="toggleComplete" class="material-icons tick"
        v-if="task.complete">clear</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ task.details }}</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
export default {
  props: ['task'],
  data() {
    return {
      showDetails: false,
    }
  },
  methods: {
    deleteTask() {
      const docRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
      console.log(this.task.title)
      docRef.collection('tasks').doc(this.task.id).delete()
      this.$emit('delete', this.task.id)
      // fetch(this.uri, { method: 'DELETE' })
      //   .then(() => this.$emit('delete', this.task.id))
      //   .catch(err => console.log(err))
    },
    toggleComplete(){
      const docRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
      docRef.collection('tasks').doc(this.task.id).update({
        complete: !this.task.complete
      })
      this.$emit('complete', this.task.id)
        // fetch(this.uri, { 
        //     method: 'PATCH' ,
        //     headers: {'Content-Type':'application/json'},
        //     body: JSON.stringify({complete: !this.task.complete})
        // }).then(() => {
        //     this.$emit('complete', this.task.id)
        // }).catch((err) => console.log(err))
    }
  }
  
};
</script>

<style scoped>
  .task {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
  }
  h3 {
    cursor: pointer;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icons .material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }
  .icons .material-icons:hover {
    color: #777;
  }
  .task.complete{
      border-left: 4px solid #00ce89;
      opacity: 0.75;
      text-decoration: line-through;
      transition: all 0.3s ease;
  }
  .tick{color: #00ce89}
  .task.complete .tick{color: rgb(220, 0, 20);}
  .trashtask{color: #ff6f47;}
  .edit-task{color: rgb(150, 100, 0);}
</style>
