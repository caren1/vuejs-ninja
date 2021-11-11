<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div class="job" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
          <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
      <p>Loading jobs..</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // jobs: [
            //     { title: 'UX Designer', id: 1, details: 'lorem'},
            //     { title: 'UI Designer', id: 2, details: 'lorem'},
            //     { title: 'Frontend developer', id: 3, details: 'lorem'},
            //     { title: 'Vue developer', id: 4, details: 'lorem'},
            // ],
            jobs: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs')
        .then((res) => res.json())
        .then((data) => this.jobs = data)
        .catch((err) => console.log(err.message))
    }
}
</script>

<style>
    .job h2 {
        cursor: pointer;
        color: #444;
    }
    .job a {
        text-decoration: none;
    }
</style>