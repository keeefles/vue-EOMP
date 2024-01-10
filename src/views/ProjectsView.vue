<template>
    <div class="container">
        <div class="row">
            <h1>Projects</h1>
        </div>

        <div class="card-deck d-flex flex-row flex-wrap justify-content-evenly" v-if="projects">
          <div v-for="project in projects" :key="project.name" class="card" style="width: 18rem;">
          <img :src="project.image" class="card-img-top" :alt="`image for ${project.name}`">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.github" class="btn" target="_blank">Github</a>
            <a :href="project.netlify" class="btn" target="_blank">Netlify</a>
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
.btn {
  border-radius: 30px;
  color: #fff;
  padding: 10px;
  margin: 10px;
  background-color: #1d3557;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: .4s;
}
</style>