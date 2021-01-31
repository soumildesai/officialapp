<template>
  <form @submit.prevent="handleSubmit">
      <h2>Sign Up</h2>
      <input type="text" required placeholder="Name" 
      v-model="name"/>
      <input type="email" required placeholder="Email"
       v-model="email">
       <input type="password" required placeholder="password"
       v-model="password">
       <div class="error">{{error}}</div>
       <button type="submit">Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
export default {
    setup(props, context){
        const {error, signup} = useSignup()
        //refs
        const name = ref('')
        const email = ref('')
        const password = ref('')
        
        const handleSubmit = async () => {
            await signup(email.value, password.value, name.value)
            if (!error.value){
                context.emit('signup')
            }
        }

        return{ name, email, password, handleSubmit, error}
    },
}
</script>

<style>
    .error{
        color: #ff3f80;
        font-size: 14px;
    }
</style>