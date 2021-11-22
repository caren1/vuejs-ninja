<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" name="displayName" id="displayName" required v-model="displayName" placeholder="display name" />
      <input type="email" name="email" id="email" required v-model="email" placeholder="email" />
      <input type="password" name="password" id="password" required v-model="password" placeholder="password" />
      <div class="error">
          {{ error }}
      </div>
      <button>sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'
export default {
    setup(props, context) {
        const { error, signup } = useSignup()
            // refs 
            const displayName = ref('')
            const email = ref('')
            const password = ref('')

            const handleSubmit = async () => {
                // console.log(displayName.value, email.value, password.value);
                await signup(email.value, password.value, displayName.value)
                // console.log('user signed up');
                if (!error.value) {
                    context.emit('signup')
                }
                displayName.value = ''
                email.value = ''
                password.value = ''
            }

            return { displayName, email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>