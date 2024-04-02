<template>
    <div class="container">
        <div class="row">
            <h1>Testimonials</h1>
        </div>

        <div id="testes" class="card-deck" v-if="testimonials">
          <div v-for="testimonial in testimonials" :key="testimonial.name" id="card" class="card">
            <div id="card-body" class="card-body">
                <h5 class="card-title" >{{ testimonial.name }} {{ testimonial.surname }}</h5>
                <p class="card-text">{{ testimonial.title }}</p>
                <p class="testes" >{{ testimonial.quotes }}</p>
                <img :src="testimonial.profile" class="card-img-top" :alt="BRUH">
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
@media all and (max-width:351px){
    #card-body{
        margin-left: auto;
        margin-right: auto;
        padding-right: 0px;
    }
    .testes{
        padding-right: 0px;
        padding-bottom: 100px;
        font-size: 15px;
    }
    .card-img-top {
        width: 150px;
        padding-right: 20px;
    }
}
#card{
    width: 22em;
}
#card-body{
    margin-left: auto;
    margin-right: auto;
}
#testes{
    display: flex;
    justify-content: space-evenly;
}
.card-deck {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.card-body {
    /* margin: 10px;
    padding: 10px;
    width: 200px; */
    height: max-content;
    justify-content: space-between;
}
.card{
    padding: 10px 10px 10px 10px;
    margin: 20px;
    height: auto;
    border-radius: 15px;
    box-shadow: 10px 10px 15px 0px #a8dadc;
}
.card:hover{
    box-shadow: 0px 2px 10px 5px #1d3557;
    color: #a8dadc;
    margin: 10px;
    padding: 10px;
    background-color: #1d3557;
    border: dashed #fff;
    transition: .5s ease-in;

}
.card-img-top {
    width: 200px;
}
.testes{
    height: 200px;
    width: 250px;
    /* padding-right: 2cap; */
    margin-left: auto;
    margin-right: auto;
}
h1 {
    margin-top: 25px;
}
</style>