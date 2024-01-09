<template>
  <div class="container">
    <div class="row">
      <div class="colHome">
        <h1 class="heading">I am a <span id="titles">{{ title }}</span></h1>
        <img src="https://i.postimg.cc/bJvVZBhx/2.png" alt="" class="imgHome">
      <div class="row1" v-if="home">
        <p class="lead" v-for="title in home" :key="title">{{ title }}</p>
      </div>
      <div class="background container-fluid"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
     return {
       titles: ["Full Stack Developer", "Software Engineer", "UI / UX Designer", "Software Developer"],
       title: "UI / UX Designer",
       i: 0,
     };
   },
  computed: {
    home(){
      return this.$store.state.home
    }
  },
  mounted(){
    this.$store.dispatch('fetchHome')
    setInterval(() => {
      const titlesElement = document.getElementById('titles');
      if (titlesElement) {
        titlesElement.style.opacity = 0;
        setTimeout(() => {
          this.title = this.titles[this.i];
          this.i = (this.i + 1) % this.titles.length;
          titlesElement.style.opacity = 1;
        }, 1000);
      }
    }, 3000);
  },
};
    
</script>

<style scoped>
.background {
  background-color: #1d3557;
  height: 20px;
  width: 50vw;
  margin-bottom: 50px;
}
#titles {
  transition: opacity 10s ease-in-out;
  background-color: #1d3557;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  color: #fff;
}
h1 {
  font-size: 40px;
  padding-bottom: 30px;
  height: 150px auto;
  width: 300px auto;
  text-align: center;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  height: 80vh;
}
.colHome{
    flex-basis: 45%;
    margin: 10px;
}
.imgHome{
  width: 150px;
}
</style>