<template>
  <form @submit.prevent="handleSubmit">
      <h4>Create new playlist</h4>
      <input type="text" name="title" id="title" placeholder="Playlist title" required v-model="title">
      <textarea type="text" name="description" id="description" placeholder="Playlist description" required v-model="description"></textarea>
      <label>Upload playlist cover image</label>
      <input type="file" @change="handleChange">
      <div class="error">{{ fileError }}</div>
      <button>Create</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useStorage from '@/composables/useStorage'

export default {
    setup() {
        const title = ref('')
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)
        const { url, filePath, uploadImage } = useStorage();

        const handleSubmit = async () => {
            if (file.value){
                console.log(title.value, description.value, file.value);
                await uploadImage(file.value)
                
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

        return { title, description, handleSubmit, handleChange, fileError }
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