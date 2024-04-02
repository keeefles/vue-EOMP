<template>
    <div class="container">
        <div class="row">
            <h1>Projects</h1>
        </div>

        <div class="card-deck" v-if="projects">
          <div v-for="project in projects" :key="project.name" class="card" style="width: 18rem;">
          <img :src="project.image" class="card-img-top" :alt="`image for ${project.name}`">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.github" class="btn" target="_blank"><i class="bi bi-github"> Github</i></a>
            <a :href="project.netlify" class="btn" target="_blank"><i class="bi bi-cursor-fill"> Netlify</i> </a>
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
.card-text {
  height: 72px;
}
.btn {
  border-radius: 30px;
  color: #000;
  padding: 10px;
  margin: 10px;
  background-color: #a8dadc;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: .4s;
}
.btn:hover{
  background-color: #1d3557;
  color: #fff;
  transition: 1s;
  padding: 10px;
  font-size: small;
  margin: 10px;
}
.card-deck {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 10px;
}
.card{
    margin: 20px auto;
    height: max-content;
    border-radius: 15px;
}
.card:hover {
  border: none;
  box-shadow: 10px 5px 15px 0px #a8dadc;
}
.card-img-top {
  height: 160px;
  display: flex;
  margin: auto;
}
h1 {
  margin-top: 25px;
}
</style>