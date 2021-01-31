<template>
  <div class="login container">
      <div v-if="showLogin">
          <LoginForm @login="enterHome"/>
          <p>No account yet? <span id="signupspan"
          @click="showLogin = false">Sign Up</span></p>
      </div>
      <div v-if="!showLogin">
          <SignupForm @signup="enterHome"/>
          <p>Already registered? <span id="loginspan"
          @click="showLogin = true">Login</span></p>
      </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    components:{ SignupForm, LoginForm },
    setup(){
        const showLogin = ref(true)
        const router = useRouter()
        const enterHome = () => {
            router.push({name: 'Tasks'})
        }
        return {showLogin, enterHome}
    }
}
</script>

<style>
    .login{
        text-align: center;
        padding: 20px 0;
    }
    .login form{
        width: 300px;
        margin: 20px auto;
        background: white;
    }
    .login label {
        display: block;
        margin: 20px 0 10px;
    }
    .login input{
        width: 100%;
        padding: 10px;
        border: 1px solid #eee;
        outline: none;
        margin: 10px auto;
    }
    #signupspan{
        font-weight: bold;
        cursor: pointer;
        text-decoration: underline;
    }
    #loginspan{
        font-weight: bold;
        cursor: pointer;
        text-decoration: underline;
    }
</style>