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
export default {
  props: ['id'],
  data(){
    return{
      title: '',
      details: '',
      uri: 'http://localhost:3000/tasks/'+ this.id
    }
  },
  mounted(){
    fetch(this.uri)
    .then(res => res.json())
    .then(data =>{
      this.title = data.title
      this.details = data.details
    })
  },
  methods: {
    handleEdit(){
      let editedTask = {
        title: this.title,
        details: this.details,
      }
      fetch(this.uri, {
        method: 'PATCH',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(editedTask)
      }).then(() => {
        this.$router.push('/tasks')
      }).catch((err)=>console.log(err))
    }
  }
}
</script>

<style>

</style>