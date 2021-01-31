<template>
    <nav id="appNav" v-if="user">
        <span class="material-icons openmenu" @click="menuOpen=!menuOpen"
        v-if="!menuOpen">menu</span>
        <span class="material-icons openmenu" @click="menuOpen=!menuOpen"
        v-if="menuOpen">clear</span>
        <div class="router-links router-underline" v-if="menuOpen">
            <router-link to="/">Home</router-link> |
            <router-link to="/tasks">Tasks</router-link> |
            <router-link to="/oops">Calendar</router-link>
        </div>
        <div class="welcome-message" v-if="!menuOpen">
            <p>Hi there, {{user.displayName}}</p>
            <p class="email">Currently logged in as {{user.email}}</p>
        </div>
        <router-link :to="{name: 'Login'}" class="router-underline" v-if="!menuOpen">
            <button @click="handleClick">Logout</button>
        </router-link>
    </nav>
</template>
<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
export default {
    data(){
        return{ menuOpen: false }
    },
    setup() {
        const {logout, error} = useLogout()
        const {user} = getUser()
        const handleClick = async () => {
            await logout()
        }
        return {handleClick, user}
    },
    methods: {
        
    }
}
</script>
<style>
    #appNav{
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 35px;
    }
    #appNav p{
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    #appNav p.email{
        font-size: 14px;
        color: #999;
    }
    #appNav button{
        display: block;
        background: #00ce89;
        color: white;
        padding: 10px;
        border: 0;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
    }
    .router-underline{
        text-decoration: none;
        justify-content: space-between;
    }
    .navbar{
        width: 80%;
        max-width: 1080px;
    }
    .openmenu{
        cursor: pointer;
    }
    @media (max-width: 960px) {
        #appNav{
            width: 95%;
        }
    }
</style>