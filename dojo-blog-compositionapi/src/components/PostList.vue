<template>
  <div class="post-list" >
      <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post" />
      </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
        // by providing props to setup function we can use them
        // console.log(props.posts);
    }
}
</script>

<style>

</style>