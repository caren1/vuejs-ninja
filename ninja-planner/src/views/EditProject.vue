<template>
  <form @submit.prevent="">
      <label for="title">Title</label>
      <input type="text" required v-model="title"/>
      <label for="details">details</label>
      <textarea name="details" id="details" required v-model="details"></textarea>
        <button>Edit project</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
      uri: `http://localhost:3000/projects/${this.id}`
    }
  },
  mounted() {
    fetch(this.uri)
    .then((response) => response.json())
    .then((data) => {
      this.title = data.title;
      this.details = data.details;
    })
  }
}
</script>

<style>

</style>