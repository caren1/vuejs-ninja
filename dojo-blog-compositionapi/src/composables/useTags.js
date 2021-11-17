import { ref } from '@vue/reactivity'

const useTags = (posts) => {
    const tags = ref([]);
    const tagSet = new Set();
    // only allows for unique values

    posts.forEach((post) => {
        post.tags.forEach((tag) => tagSet.add(tag))
    })

    tags.value = [...tagSet];
    return { tags }
}

export default useTags
