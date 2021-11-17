<template>
    <div class="error" v-if="error">
        <h2>{{ error }}</h2>
    </div>
  <div class="tag" v-if="postsWithTag.length">
      <PostList :posts="postsWithTag"/>
  </div>
  <div v-else>
      <Spinner />
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import getPosts from '../composables/getPosts';
import PostList from '../components/PostList'
import Spinner from '../components/Spinner'

export default {
    components: { PostList, Spinner },
    setup() {
        const route = useRoute();
        const routeTag = route.params.tag;
        const { posts, error, load } = getPosts();
        load();

        const postsWithTag = computed(() =>  posts.value.filter((post) => post.tags.includes((routeTag))))
        
        return { posts, error, postsWithTag }
    }
}
</script>

<style>
    .error {
        color: darkred;
    }
</style>