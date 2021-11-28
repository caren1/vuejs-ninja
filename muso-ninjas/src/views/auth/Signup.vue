<template>
  <form @submit.prevent="handleSubmit">
      <h3>Sign up</h3>
      <input type="text" name="displayName" id="displayName" v-model="displayName" placeholder="Display name">
      <input type="email" name="email" id="email" v-model="email" placeholder="Email">
      <input type="password" name="password" id="password" v-model="password" placeholder="password">
      <div class="error" v-if="error">{{ error }}</div>
      <button v-if="!isPending">Sign up</button>
      <button v-else disabled>Loading..</button>
  </form>
</template>

<script>
import useSignup from '@/composables/useSignup'
import { ref } from '@vue/reactivity'

export default {
    setup() {
        const { error, signup, isPending } = useSignup();

        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            const response = await signup(email.value, password.value, displayName.value);
            if (!error.value) {
                console.log('user registered');
            }
        }
        return { displayName, email, password, handleSubmit, isPending, error }
    }
}
</script>

<style>

</style>