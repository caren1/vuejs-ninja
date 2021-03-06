<template>
  <form @submit.prevent="handleSubmit">
      <h4>Create new playlist</h4>
      <input type="text" name="title" id="title" placeholder="Playlist title" required v-model="title">
      <textarea type="text" name="description" id="description" placeholder="Playlist description" required v-model="description"></textarea>
      <label>Upload playlist cover image</label>
      <input type="file" @change="handleChange">
      <div class="error">{{ fileError }}</div>
      <button v-if="!isPending">Create</button>
      <button v-else disabled>Saving..</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const title = ref('')
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)
        const isPending = ref(false);

        const { url, filePath, uploadImage } = useStorage();
        const { error, addDoc } = useCollection('playlists');
        const { user } = getUser();
        const router = useRouter();

        const handleSubmit = async () => {
            if (file.value){
              isPending.value = true
                console.log(title.value, description.value, file.value);
                await uploadImage(file.value) // -> url.value
                const response = await addDoc({
                  title: title.value,
                  description: description.value,
                  userId: user.value.uid,
                  username: user.value.displayName,
                  coverUrl: url.value,
                  filePath: filePath.value,
                  songs: [],
                  createdAt: timestamp()
                })
                  isPending.value = false
                if (!error.value) {
                  // console.log('playlist added');
                  router.push({ name: 'PlaylistDetails', params: { id: response.id } })
                } 
            }
        }

        const types = ['image/png', 'image/jpeg', 'image/jpg']

        const handleChange = (event) => {
            const selected = event.target.files[0]
            if (selected && types.includes(selected.type)) {
                file.value = selected
                fileError.value = null
            } else {
                file.value = null;
                fileError.value = 'Please select an image files (.png / .jpg)'
            }
        }

        return { title, description, handleSubmit, handleChange, fileError, isPending }
    }
}
</script>

<style>
  form {
    background: white;
  }
  input[type="file"] {
    border: 0;
    padding: 0;
  }
  label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
  }
  button {
    margin-top: 20px;
  }
</style>