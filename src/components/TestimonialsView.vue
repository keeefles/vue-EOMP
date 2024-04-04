<template>
    <div class="container" id="testimonials">
        <div class="row">
            <h1>References</h1>
        </div>

        <div class="card-deck" v-if="testimonials">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="card">
            <div class="card-body">
                <h5 class="card-title" >{{ testimonial.name }} {{ testimonial.surname }}</h5>
                <p class="card-text">{{ testimonial.title }}</p>
                <p class="card-quote" >{{ testimonial.quotes }}</p>
                <img :src="testimonial.profile" class="card-image" :alt="BRUH">
          </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestimonialsView',
  computed: {
    testimonials(){
      return this.$store.state.testimonials
    }
  },
  mounted(){
    this.$store.dispatch('fetchTestimonials')
  }
};
</script>
<style scoped>
@media (max-width:351px){
    .card {
        padding-right: 0px;
        padding-bottom: 0px;
        width: 10px;
        font-size: 15px;
        height: auto;
    }
    .card-image {
        height: 200px;
        display: inline-block;
    }
    .card-deck {
        width: 280px; 
    }
    .card-quote {
      height: 260px;
      padding: 10px;
    }
}                                                   
.card {
    display: flex;
    justify-content: space-evenly;
}
.card-deck {
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.card-quote {
    height: 260px;
    padding: 15px;
}
.card-text {
    height: 25px;
}
.card{
    width: 20em;
    padding: 10px 10px 10px 10px;
    border-radius: 15px;
    box-shadow: 10px 10px 15px 0px #a8dadc;
    margin: 20px auto;
}
.card-deck {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
}
.card:hover {
  border: none;
  box-shadow: 10px 5px 15px 0px #a8dadc;
}
.card-image {
  display: flex;
  margin: auto;
  height: 200px;
}
h1 {
  margin-top: 25px;
}
.card:hover{
    box-shadow: 0px 2px 10px 5px #1d3557;
    color: #a8dadc;
    background-color: #1d3557;
    border: dashed #fff;
    transition: .5s ease-in;
}
</style>