<template>
  <div class="container p-3" id="about">
    <h1 id="heading">About Me</h1>
    <div class="row shadow rounded-4">
      <div class="img-col">
        <img src="https://iili.io/JXS2e0x.jpg" alt="image" class="center aboutImg" align-items="center">
      </div>
        <div class="text-col" v-if="about">
          <p class="lead" v-for="title in about" :key="title">{{ title }}</p>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AboutView',
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
.row {
  background-color: #a8dadc;
  color: #fff;
}
p {
  font-size: 15px;
  margin-top: 15px;
  opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
}
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 3;
    }
  }
.p-3{
    margin-left: auto;
    margin-right: auto;
}
.aboutImg {
  width: 300px;
  align-items: center;
  display: flex;
  justify-content: center;
  /* padding: 15px; */
  margin-left: auto;
  margin-right: auto;
}
.row {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
}
.text-col {
  flex-basis: 65%;
}
.img-col {
  flex-basis: 35%;
  margin: 0 auto 20 auto;
  height: max-content;
}
.center {
  width: 250px;
}
@media (max-width: 351px) {
  .text-col {
    width: 250px;
    margin: auto;
  }
  .aboutImg {
    margin: 0;
    padding-bottom: 20px;
    width: 200px;
  }
  .lead {
    width: 210px;
    margin-left: auto;
    margin-right: auto;
  }
}
h1 {
  margin-top: 20px;
}
</style>