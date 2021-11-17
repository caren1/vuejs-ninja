<template>
  <h1>Real time data</h1>
  <div v-for="post in posts" :key="post.id">
      <div>{{ post.title }}</div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'
export default {
    setup() {
        const posts = ref([])

        projectFirestore.collection('posts')
            .orederBy('createdAt', 'desc')
            .onSnapshot((snap) => {
            // ^ setting up real time listener to firestore collection, 
            // runs callback function everytime we get snapshot from firebase collection
            // when conencting to collection for 1st time method gets called and takes initial snapshot
            
                let docs = snap.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
                posts.value = docs;
            })
        return { posts }
    }
}
</script>

<style>

</style>