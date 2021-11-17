<template>
<div class="tag">
    <div class="error" v-if="error">
        <h2>{{ error }}</h2>
    </div>
  <div class="layout" v-if="postsWithTag.length">
      <PostList :posts="postsWithTag"/>
      <TagCloud :posts="postsWithTag" />
  </div>
  <div v-else>
      <Spinner />
  </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import getPosts from '../composables/getPosts';
import PostList from '../components/PostList'
import Spinner from '../components/Spinner'
import TagCloud from '../components/TagCloud'

export default {
    components: { PostList, Spinner, TagCloud },
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

    .tag {
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
    }
</style>