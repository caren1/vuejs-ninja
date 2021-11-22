import { ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
    const documents = ref(null);
    const error = ref(null);

    let collectionRef = projectFirestore
    .collection(collection)
    .orderBy('createdAt');

    const unsub = collectionRef.onSnapshot((snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results;
        error.value = null;
    }, (err) => {
        documents.value = null;
        error.value = 'Couldnt fetch the data.'
    })

    watchEffect((onInvalidate) => {
        // unsub from previous collection when watcher is stopped (component unomunted)
        onInvalidate(() => unsub())
    })
    return { documents, error }
}

export default getCollection;