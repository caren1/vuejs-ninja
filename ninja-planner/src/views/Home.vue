<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <p>{{ project.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      projects: [],
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
    .then((res) => res.json())
    .then((data) => this.projects = data)
    .catch((error) => console.log(error.message))
  }
}
</script>
