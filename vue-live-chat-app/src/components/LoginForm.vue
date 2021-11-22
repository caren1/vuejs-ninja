<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" name="email" id="email" required v-model="email" placeholder="email" />
      <input type="password" name="password" id="password" required v-model="password" placeholder="password" />
      <button>log in</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
            // refs 
            const email = ref('')
            const password = ref('')

            const handleSubmit = () => {
                console.log(email.value, password.value);
                
                email.value = ''
                password.value = ''
            }

            return { email, password, handleSubmit }
    }
}
</script>

<style>

</style>