<template>
  <div class="container p-3">
    <div class="row">
      <div class="img-col">
        <img src="" alt="image" class="rounded-circle center" align-items="center">
      </div>
      <div class="text-col">
        <h1 class="heading">I am a <span id="titles">{{ title }}</span></h1>
          <p class="col-content center"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      titles: ["Full Stack Developer", "Software Engineer", "UI / UX Designer", "Software Developer"],
      title: "UI / UX Designer",
      i: 0,
    };
  },
  mounted() {
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
#titles {
  transition: opacity 10s ease-in-out;
  background-color: #1d3557;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  color: #fff;
}
h1 {
  font-size: 40px;
  padding-bottom: 30px;
  height: 150px;
  width: 300px auto;
  text-align: center;
}
</style>