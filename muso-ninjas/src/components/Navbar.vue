<template>
  <div class="navbar">
      <nav>
          <img src="@/assets/ninja.svg" alt="ninja-logo">
          <h1><router-link :to="{ name: 'Home'}">Muso ninjas</router-link></h1>
          <div class="links">
            <div v-if="user">
              <router-link :to="{ name: 'CreatePlaylist' }">Create playlist</router-link>
              <router-link :to="{ name: 'UserPlaylists' }">My playlist</router-link>
              <span>Hi there, {{ user.displayName }}</span>
              <button @click="handleLogout" >Logout</button>
            </div>
            <div v-else>
              <router-link class="btn" :to="{ name: 'Signup' }" v-if="!user">Signup</router-link>
              <router-link class="btn" :to="{ name: 'Login' }" @click="handleLogout" v-if="!user">Log in</router-link>
            </div>
          </div>
      </nav>
  </div>
</template>

<script>
import useLogout from '@/composables/useLogout'
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'

export default {
  setup() {
    const { logout } = useLogout();
    const router = useRouter();
    const { user } = getUser();

    const handleLogout = async () => {
      await logout();
      console.log('user logged out');
      router.push({ name: 'Login' })
    }

    return { handleLogout, user }
  }
}
</script>

<style scoped>
     .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img {
    height: 50px;
    max-height: 80px;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }

  span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid grey;
  }
</style>