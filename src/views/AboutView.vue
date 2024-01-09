<template>
  <div class="container">
    <div class="row">
      <h1>This is the about page</h1>
    </div>
    <div class="row" v-if="about">
    <p class="lead" v-for="title in about" :key="title">
      {{ title }}
    </p>
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