import {ref} from 'vue'
import {appAuth} from '../firebase/config'
const error = ref(null)
const logout = async () => {
    error.value = null
    try{
        await appAuth.signOut()
    } catch(err){
        console.log(err.message)
        error.value = err.message;
    }
}
const useLogout = () => {
    return {logout, error}
}
export default useLogout