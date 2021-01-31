import {ref} from 'vue'
import {appAuth} from '../firebase/config'
const user = ref(appAuth.currentUser)
appAuth.onAuthStateChanged(_user => {
    user.value = _user
})
const getUser = () => {
    return {user}
}
export default getUser