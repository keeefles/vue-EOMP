<template>
  <NavBar></NavBar>
    <router-view/>
    <Spinner/>
  <Footer></Footer>
</template>

<script>
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Spinner from './components/Spinner.vue';

  export default {
    components: {
      NavBar,
      Footer,
      Spinner,
    },
    data(){
      return {
        isloading: false,
      };
    },
  }
</script>

<style src="@/assets/css/style.css"></style>