import { ref } from "vue"
import { appAuth } from '../firebase/config'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const error = ref(null)
const signup = async (email, password, name) => {
    error.value = null
    try{
        const res = await appAuth.createUserWithEmailAndPassword(email, password)
        if(!res){
            throw new Error('Could not complete the signup')
        }
        await res.user.updateProfile({displayName: name})
        const docRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
        docRef.set({
            name: res.user.displayName,
        })
        error.value = null
        console.log(firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid))
    }catch(err){
        console.log(err.message)
        error.value = err.message
    }
}
const useSignup = () => {
    return { error, signup }
}
export default useSignup