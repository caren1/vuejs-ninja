import { ref } from '@vue/reactivity'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const login = async (email, password) => {
    error.value = null;
    try {
        const response = await projectAuth.signInWithEmailAndPassword(email, password)
        if (!response){
            throw new Error('Could not log in..')
        }
        
        // console.log(response.user);
        error.value = null;
        return response;
    } catch (err) {
        console.log(err.message);
        error.value = err.message;
    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin;