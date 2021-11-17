import { ref } from '@vue/reactivity'
import projectFirestore from '../firebase/config'

const getPosts = () => {
    const posts = ref([]);
     const error = ref(null);

        const load = async () => {
            try {
                // const data = await fetch('http://localhost:3000/posts');
                // if (!data.ok){
                //    throw Error('No data available.')
                // }
                // posts.value = await data.json();

                const response = await projectFirestore
                .collection('posts')
                .orderBy('createdAt', 'desc')
                .get();
                posts.value = response.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });
            } catch(err) {
                error.value = err.message;
                console.log(error.value);
            }
        }

        return { posts, error, load }
}

export default getPosts
