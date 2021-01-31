import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {appAuth} from './firebase/config'
let app
appAuth.onAuthStateChanged(() => {
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})
