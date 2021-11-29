<template>
  <form @submit.prevent="handleSubmit">
      <h3>Login</h3>
      <input type="email" name="email" id="email" v-model="email" placeholder="Email">
      <input type="password" name="password" id="password" v-model="password" placeholder="password">
      <div class="error" v-if="error">{{ error }}</div>
      <button v-if="!isPending">log in</button>
      <button v-else disabled>Loading..</button>
  </form>
</template>

<script>
import useLogin from '../../composables/useLogin'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const { error, login, isPending } = useLogin();
        const email = ref('')
        const password = ref('')
        const router = useRouter();

        const handleSubmit = async () => {
            const response = await login(email.value, password.value);
            if (!error.value) {
                console.log('user logged in');
                router.push({ name: 'UserPlaylists' })
            }
        }
        return { email, password, handleSubmit, isPending, error }
    }
}
</script>

<style>

</style>