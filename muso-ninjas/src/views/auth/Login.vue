<template>
  <form @submit.prevent="handleSubmit">
      <h3>Login</h3>
      <input type="email" name="email" id="email" v-model="email" placeholder="Email">
      <input type="password" name="password" id="password" v-model="password" placeholder="password">
      <div class="error" v-if="error">{{ error }}</div>
      <button >log in</button>
  </form>
</template>

<script>
import useLogin from '../../composables/useLogin'
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const { error, login } = useLogin();
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            const response = await login(email.value, password.value);
            if (!error.value) {
                console.log('user logged in');
            }
        }
        return { email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>