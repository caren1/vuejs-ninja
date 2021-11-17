<template>
    <div class="home">
        <h1>Home</h1>
        <!-- <PostList :posts="posts" v-if="showPosts"/> -->
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="posts.length" class="layout">
            <PostList :posts="posts"/>
            <TagCloud :posts="posts" />
        </div>
        <div v-else>
            <Spinner />
        </div>
        
        
        <!-- <button @click="showPosts = !showPosts">toggle posts</button>
        <button @click="posts.pop()">remove post</button> -->
    
    </div>
</template>

<script>
import PostList from '../components/PostList.vue'
// import { ref } from '@vue/reactivity'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'
export default {
    name: 'Home',
    components: { PostList, Spinner, TagCloud },
    setup() {
        // how we can use props in setup function?
        // const posts = ref([]);
        // const error = ref(null);
        // const showPosts = ref(true);

        // externalizing the function for further use -> composables/getPosts
        // composables 
        // const load = async () => {
        //     try {
        //         const data = await fetch('http://localhost:3000/posts');
        //         if (!data.ok){
        //            throw Error('No data available.')
        //         }
        //         posts.value = await data.json();
        //     } catch(err) {
        //         error.value = err.message;
        //         console.log(error.value);
        //     }
        // }

        // load();
        const { posts, error, load } = getPosts();
        load();

        return { posts, error }
    },
}
</script>

<style>
    .home{
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
    }

    .layout {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 20px;
    }
</style>