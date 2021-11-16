import { ref } from '@vue/reactivity'

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {
            await new Promise(resolve => setTimeout(() => { resolve, 2000 }))
            const data = await fetch(`http://localhost:3000/posts/${id}`);
            if (!data.ok){
                throw Error('No post available.')
            }
            post.value = await data.json();
        } catch(err) {
            error.value = err.message;
            console.log(error.value);
        }
    }
    return { post, error, load }
}

export default getPost
