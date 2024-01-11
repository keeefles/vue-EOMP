<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <h1>Experience</h1>
        </div>

        <div class="card-deck" v-if="resume">
          <div v-for="res in resume" :key="res.place" class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{ res.place }}</h5>
              <p class="card-text">{{ res.information }}</p>
              <p class="card-text">{{ res.type }}</p>
              <p class="card-text">{{ res.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <h1>Skills</h1>
        </div>

        <div class="card-deck" v-if="skills">
          <div v-for="skill in skills" :key="skill.title" class="card">
            <img :src="skill.image" class="card-img-top" :alt="`image for ${skill.title}`" />
            <div class="card-body">
              <h5 class="card-title">{{ skill.title }}</h5>
              <p class="card-experience">{{ skill.experience }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    resume() {
      return this.$store.state.resume;
    },
    skills() {
      return this.$store.state.skills;
    }
  },
  mounted() {
    this.$store.dispatch('fetchResume');
    this.$store.dispatch('fetchSkills');
  }
};
</script>

<style scoped>
.container {
  margin: 20px auto;
}

.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
}
.card {
  margin: 20px auto;
  height: 200px;
  border-radius: 15px;
  text-align: center;
}

.card-body {
  width: 200px;
}
.card-title {
  text-align: center;
  font-weight: 500;
  margin-right: auto;
  margin-left: auto;
  font-size: 20px;
}
.card-img-top {
  width: 100px;
  height: auto;
  border-radius: 15px 15px 0 0;
  margin-left: auto;
  margin-right: auto;
}
.card-body {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}
</style>
