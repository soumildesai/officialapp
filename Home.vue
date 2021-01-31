<template>
  <div class="home">
    <div class="classes" >
      <div v-if="classes"></div>
      <div class="create-class">
        
      </div>
    </div>
  </div>
</template>

<script>
import SingleClass from '../components/SingleClass.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
export default {
  name: 'Home',
  components: {SingleClass},
  data(){
    return{
      classes: []
    }
  },
  async mounted(){
    const docRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
    let result = await docRef.collection('classes').get();
    result.forEach(doc => {
      this.classes.push(doc.data());
    })
  }
}
</script>
<style>
  .home{
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: 0 auto;
    max-width: 1440px;
    width: 80%;
  }
  .create-class{
    min-width: 100px;
    max-width: 500px;
    width: 25%;
    background: white;
  }
</style>