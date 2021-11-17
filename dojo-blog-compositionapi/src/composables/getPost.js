import { ref } from '@vue/reactivity'
import projectFirestore from '../firebase/config'

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {
            // const data = await fetch(`http://localhost:3000/posts/${id}`);
            // if (!data.ok){
            //     throw Error('No post available.')
            // }
            // post.value = await data.json();

            const response = await 
            projectFirestore
            .collection('posts')
            .doc(id)
            .get();

            if (!response.exists) {
                throw new Error('Post not found')
            }

            post.value = { ...response.data(), id: response.id }

        } catch(err) {
            error.value = err.message;
            console.log(error.value);
        }
    }
    return { post, error, load }
}

export default getPost
