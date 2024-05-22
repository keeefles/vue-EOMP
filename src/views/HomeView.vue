<template>
  <aside>
  <div class="container">
    <div class="row">
      <div class="colHome">
        <h1 class="heading">I am a <span id="titles">{{ title }}</span></h1>
        <img src="https://iili.io/JNxx47S.md.jpg" alt="" class="imgHome">
      <div class="row1" v-if="home">
        <p class="lead" v-for="title in home" :key="title">{{ title }}</p>
      </div>
      <button class="btn"><a href="https://drive.google.com/file/d/1qe_3_ylQE_j-klPO2M5-RbqidhjEYX2J/view?usp=sharing" class="yes" target="_blank">Download CV</a></button>
      <div class="background container-fluid"></div>
      </div>
    </div>
  </div>
  </aside>
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
    },
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

aside{
  height: 80vh;
}
.row {
  margin-bottom: 20px;
}
.background {
  background-color: #1d3557;
  height: 20px;
  width: 50vw;
  margin-bottom: 50px;
}
.yes {
  text-decoration: none;
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
  margin-top: 50px;
}
.lead {
  background-color: #fff;
  color: #1d3557;
}
.row {
  /* display: flex; */
  /* flex-direction: row; */
  justify-content: center;
  /* flex-wrap: wrap; */
  /* height: 80vh; */
}
.colHome{
    flex-basis: 45%;
    margin: 10px;
}
.imgHome{
  width: 150px;
  margin-bottom: 20px;
}
@media all and (max-width: 350px) {
  aside{
  height: 130vh;
  margin-bottom: 20px;
  }
  .colHome {
    width: 250px;
  }
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
p{
  font-size: 16px;
}
</style>