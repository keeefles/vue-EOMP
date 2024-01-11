<template>
    <div class="container">
    <div class="row">
      <h1>This is the resume page</h1>
    </div>
    <div class="row" v-if="resume">
    <p class="lead" v-for="title in resume" :key="title">
      {{ title.year }}{{ title.place }}
    </p>
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    resume(){
      return this.$store.state.resume
    }
  },
  mounted(){
    this.$store.dispatch('fetchResume')
  }
};
</script>

<style scoped>
.container {
  background-image: url('https://i.postimg.cc/t4HNtKyd/eomp-background.png')
}
</style>