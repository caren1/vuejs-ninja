<template>
  <div class="home">
    <p>Homepage</p>
    <div class="error" v-if="error">{{ error }}</div>
    <div v-if="documents">
      <div class="playlists" v-for="playlist in documents" :key="playlist.id">
        <p>{{ playlist.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
export default {
  name: 'Home',
  setup() {
    const { documents, error } = getCollection('playlists');
    return { documents, error }
  }
}
</script>
