<template>
  <form @submit.prevent="handleEdit">
      <label>Title:</label>
      <input type="text" required v-model="title">
      <label>Details:</label>
      <textarea required v-model="details"></textarea>
      <button>Update Task</button>
  </form>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
export default {
  props: ['id'],
  data(){
    return{
      title: '', 
      details: '',
      uri: firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
    }
  },
  mounted(){
    this.title = this.uri.collection('tasks').doc(this.id).get('title')
    this.details = this.uri.collection('tasks').doc(this.id).get('details')
    // fetch(this.uri)
    // .then(res => res.json())
    // .then(data =>{
    //   this.title = data.title
    //   this.details = data.details
    // })
  },
  methods: {
    handleEdit(){
      let editedTask = {
        title: this.title,
        details: this.details,
      }
      var docRef = this.uri
      docRef.collection('tasks').doc(this.id).set(editedTask)
    this.$router.push('/tasks')
      // fetch(this.uri, {
      //   method: 'PATCH',
      //   headers: {'Content-Type':'application/json'},
      //   body: JSON.stringify(editedTask)
      // }).then(() => {
      //   this.$router.push('/tasks')
      // }).catch((err)=>console.log(err))
    }
  }
}
</script>

<style>
  
</style>