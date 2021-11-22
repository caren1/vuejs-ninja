<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" name="displayName" id="displayName" required v-model="displayName" placeholder="display name" />
      <input type="email" name="email" id="email" required v-model="email" placeholder="email" />
      <input type="password" name="password" id="password" required v-model="password" placeholder="password" />
      <button>sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
            // refs 
            const displayName = ref('')
            const email = ref('')
            const password = ref('')

            const handleSubmit = () => {
                console.log(displayName.value, email.value, password.value);
                
                displayName.value = ''
                email.value = ''
                password.value = ''
            }

            return { displayName, email, password, handleSubmit }
    }
}
</script>

<style>

</style>