<template>
  <div class="home">
    <FilterNav @filterChange="currentFilter = $event" :currentFilter="currentFilter"/>
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'
export default {
  name: 'Home',
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      currentFilter: 'all'
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
    .then((res) => res.json())
    .then((data) => this.projects = data)
    .catch((error) => console.log(error.message))
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id);
    },
    handleComplete(id) {
      const p = this.projects.find((project) => project.id === id)
      if (p) {
        p.complete = !p.complete
      }
    }
  }
}
</script>
