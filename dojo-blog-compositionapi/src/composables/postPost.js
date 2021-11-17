import { ref } from '@vue/reactivity'
import projectFirestore from '../firebase/config'

const postPost = (newPost) => {
     const error = ref(null);
        const load = async () => {
            try {
                // const data = await 
                // fetch('http://localhost:3000/posts', {
                //     method: 'POST',
                //     headers: {
                //         'Content-type' : 'application/json',
                //     },
                //     body: newPost,
                // });
                // if (!data.ok){
                //    throw Error('No data available.')
                // }

                const response = await projectFirestore.collection('posts').add(newPost);

            } catch(err) {
                error.value = err.message;
                console.log(error.value);
            }
        }

        return { load }
}

export default postPost
