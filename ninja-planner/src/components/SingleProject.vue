<template>
  <div class="project">
      <div class="actions" @click="showDetails = !showDetails">
          <h3>{{ project.title }}</h3>
          <div class="icons">
              <span class="material-icons">edit</span>
              <span class="material-icons">delete</span>
              <span class="material-icons">done</span>
          </div>
      </div>
      <div class="details" v-if="showDetails">
          <p>{{ project.details }}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            showDetails: false
        }
    }
}
</script>

<style>
    .project {
        margin: 20px auto;
        background: white;
        padding: 10px 20px;
        border-radius: 4px;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
        border-left: 4px solid #e90074;
    }

    h3 {
        cursor: pointer;
    }

    .actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .material-icons {
        font-size: 24px;
        margin-left: 10px;
        color: #bbb;
        cursor: pointer;
    }
    
    .material-icons:hover {
        color: #777;
        transform: scale(1.1);
        transition: all 0.1s ease-in;
    }
</style>