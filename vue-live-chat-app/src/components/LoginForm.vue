<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" name="email" id="email" required v-model="email" placeholder="email" />
      <input type="password" name="password" id="password" required v-model="password" placeholder="password" />
      <div class="error">{{ error }}</div>
      <button>log in</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'
export default {
    setup() {
            const { error, login } = useLogin();
            // refs 
            const email = ref('')
            const password = ref('')

            const handleSubmit = async () => {
                // console.log(email.value, password.value);
                await login(email.value, password.value);
                if (!error.value) {
                    console.log('user logged in');
                    email.value = ''
                    password.value = ''
                }
            }
            return { email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>