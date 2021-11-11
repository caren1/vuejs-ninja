<template>
  <div class="post-list" >
      <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post" />
      </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'
export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
        // by providing props to setup function we can use them
        // console.log(props.posts);

        // we can also use lifecycle hooks within the setup function
        // however we need to import them from vue - with slight name change
        // 'on' before hook name -> ie. onMounted

        onMounted(() => {
            // will fire something when component is mounted
            console.log('mounted');
        })
        onUnmounted(() => {
            console.log('unmounted');
        })
        onUpdated(() => {
            console.log('updated');
        })
    },
    // mounted(){
    //     console.log('mounted with options api');
    // }
    // [...] we can also use them here, within options api
}
</script>

<style>

</style>