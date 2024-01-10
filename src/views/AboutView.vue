<template>
  <div class="container">
    <div class="row">
      <div class="text-col">
        <h1>About Me</h1>
      </div>
      <div class="row" v-if="about">
          <p class="lead" v-for="title in about" :key="title">{{ title }}</p>
      </div>
      <div class="background container-fluid"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    about(){
      return this.$store.state.about
    }
  },
  mounted(){
    this.$store.dispatch('fetchAbout')
  }
};
</script>

<style scoped>
.container {
  background-image: url('https://i.postimg.cc/t4HNtKyd/eomp-background.png')
}
.background {
  background-color: #1d3557;
  height: 20px;
  width: 50vw;
  margin-bottom: 50px;
}
</style>