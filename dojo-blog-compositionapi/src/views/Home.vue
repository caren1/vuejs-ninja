<template>
    <div class="home">
        <h1>Home</h1>
        <!-- <PostList :posts="posts" v-if="showPosts"/> -->
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="posts.length">
            <PostList :posts="posts"/>
        </div>
        <div v-else>
            Loading..
        </div>
        
        
        <!-- <button @click="showPosts = !showPosts">toggle posts</button>
        <button @click="posts.pop()">remove post</button> -->
    
    </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from '@vue/reactivity'
export default {
    name: 'Home',
    components: { PostList },
    setup() {
        // how we can use props in setup function?
        const posts = ref([]);
        const error = ref(null);
        // const showPosts = ref(true);
        const load = async () => {
            try {
                const data = await fetch('http://localhost:3000/posts');
                if (!data.ok){
                   throw Error('No data available.')
                }
                posts.value = await data.json();
            } catch(err) {
                error.value = err.message;
                console.log(error.value);
            }
        }

        load();
        return { posts, error }
    },
}
</script>