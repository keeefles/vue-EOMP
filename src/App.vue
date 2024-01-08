<template>
  <NavBar></NavBar>
    <router-view/>
  <Footer></Footer>
</template>

<script>
import Footer from './components/Footer';
import NavBar from './components/NavBar';

  export default {
    components: {
      NavBar,
      Footer,
    }
  }
</script>

<style src="@/assets/css/style.css"></style>