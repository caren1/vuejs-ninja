import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

const useCollection = (collection) => {

  const error = ref(null)
  const isPending = ref(false)

  // add a new document
  const addDoc = async (doc) => {
    error.value = null
    isPending.value = true;

    try {
      await projectFirestore.collection(collection).add(doc)
      isPending.value = false
    }
    catch(err) {
      // console.log(err.message)
      isPending.value = false
      error.value = 'could not send the message'
    }
  }

  return { error, addDoc, isPending }

}

export default useCollection