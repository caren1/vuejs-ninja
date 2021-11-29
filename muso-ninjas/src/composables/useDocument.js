import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

const useDocument = (collection, id) => {
    const error = ref(null)
    const isPending = ref(false)
    let docRef = projectFirestore.collection(collection).doc(id)

    const deleteDoc = async () => {
        isPending.value = true
        error.value = null
        try {
            const response = await docRef.delete();
            isPending.value = false
            return response;
        } catch (err) {
            console.log(err.message);
            isPending.value = false
            error.value = 'Couldnt delete the document'
        }
    }

    const updateDoc = async (updates) => {
        isPending.value = true
        error.value = null
        try {
            const response = await docRef.update(updates);
            isPending.value = false
            return response;
        } catch (err) {
            console.log(err.message);
            isPending.value = false
            error.value = 'Couldnt update the document'
        }
    }

    return { error, isPending, deleteDoc, updateDoc }
}

export default useDocument