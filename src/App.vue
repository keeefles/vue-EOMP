<template>
  <NavBar></NavBar>
    <router-view/>
    <About/>
    <Resume/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Spinner/>
  <Footer></Footer>
</template>

<script>
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Spinner from './components/Spinner.vue';
import About from './components/AboutView.vue';
import Contact from './components/ContactView.vue';
import Resume from './components/ResumeView.vue';
import Projects from './components/ProjectsView.vue';
import Testimonials from './components/TestimonialsView.vue';

  export default {
    components: {
      NavBar,
      Footer,
      Spinner,
      About,
      Resume,
      Projects,
      Testimonials,
      Contact,
    },
    data(){
      return {
        isloading: false,
      };
    },
  }
</script>

<style src="@/assets/css/style.css"></style>