<template>
    <div class="container">
        <div class="row">
            <h1>Projects</h1>
        </div>

        <div class="card-deck d-flex flex-row flex-wrap justify-content-evenly" v-if="projects">
          <div v-for="project in projects" :key="project.name" class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.github" class="btn btn-primary" target="_blank">Github</a>
            <a :href="project.netlify" class="btn btn-primary" target="_blank">Netlify</a>
          </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    projects(){
      return this.$store.state.projects
    }
  },
  mounted(){
    this.$store.dispatch('fetchProjects')
  }
};
</script>

<style scoped>

</style>