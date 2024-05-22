<template>
  <div>
    <section>
      <div class="container" id="resume">
        <div class="row">
          <h1>Education</h1>
        </div>

        <div class="card-deck" v-if="education">
          <div
            v-for="edu in education"
            :key="edu.place"
            class="card shadow border-0"
            style="width: 18rem"
          >
            <div class="card-bodyy">
              <h5 class="card-title1">{{ edu.place }}</h5>
              <p class="card-text font">{{ edu.information }}</p>
              <p class="card-text font">{{ edu.type }}</p>
              <p class="card-text role">{{ edu.role }}</p>
              <p class="card-text year">{{ edu.year }}</p>
            </div>
          </div>
        </div>
      <h1>Experience</h1>
        <div class="card-deck" v-if="experience">
          <div
            v-for="ex in experience"
            :key="ex.place"
            class="card ex-card shadow border-0"
            style="width: 18rem"
          >
            <div class="card-bodyy">
              <h5 class="card-title1">{{ ex.place }}</h5>
              <p class="card-text font">{{ ex.information }}</p>
              <p class="card-text font">{{ ex.type }}</p>
              <p class="card-text role">{{ ex.role }}</p>
              <p class="card-text year">{{ ex.year }}</p>
            </div>
          </div>
        </div>
      <h1>Badges</h1>
        <div class="card-deck" v-if="badges">
          <div
            v-for="bad in badges"
            :key="bad.name"
            class="card ex-card shadow border-0"
            style="width: 18rem"
          >
            <div class="card-bodyy">
              <h5 class="card-title1">{{ bad.name }}</h5>
              <p class="card-text font">{{ bad.image }}</p>
              <p class="card-text font">{{ bad.place }}</p>
              <p class="card-text role">{{ bad.year }}</p>
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
          <div v-for="skill in skills" :key="skill.title" class="card shadow border-0">
            <img
              :src="skill.image"
              class="card-img-top"
              :alt="`image for ${skill.title}`"
            />
            <div class="card-body skills-body">
              <h5 class="card-title">{{ skill.title }}</h5>
              <p class="card-experience">{{ skill.experience }}</p>
            </div>
          </div>
        </div>
        <div class="card-deck" v-if="softSkills">
          <div v-for="skill in softSkills" :key="skill.title" class="card shadow border-0">
            <img
              :src="skill.image"
              class="card-img-top"
              :alt="`image for ${skill.title}`"
            />
            <div class="card-body skills-body">
              <h5 class="card-title">{{ skill.title }}</h5>
              <p class="card-desc">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <button class="btn">
      <a
        href="https://drive.google.com/file/d/1y0VkOYnjQD-qnH3ZZmWHsrfZ-MNUXjAz/view?usp=drive_link"
        target="_blank"
        class="yes"
        >Download CV</a
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "ResumeView",
  computed: {
    education() {
      return this.$store.state.education;
    },
    experience() {
      return this.$store.state.experience;
    },
    skills() {
      return this.$store.state.skills;
    },
    softSkills() {
      return this.$store.state.softSkills;
    }
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchExperience");
    this.$store.dispatch("fetchSkills");
    this.$store.dispatch("fetchSoftSkills");
  },
};
</script>

<style scoped>
.skills-body {
  padding: 0;
  margin: 20px;
}
.container {
  margin: 20px auto;
}
.yes {
  text-decoration: none;
}
.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
}
.card-desc {
  font-size: 13px;
  padding-left: 5px;
  padding-right: 5px;
}
.card {
  margin: 20px auto;
  height: 230px;
  border-radius: 15px;
  text-align: center;
}
.card-title {
  text-align: center;
  font-weight: bold;
  margin-right: auto;
  margin-left: auto;
  font-size: 16px;
}
.card-title1 {
  text-align: center;
  font-weight: 500;
  margin-right: auto;
  margin-left: auto;
  font-size: 16px;
  padding: 10px;
  font-weight: 700;
}
.card-img-top {
  width: 100px;
  height: auto;
  border-radius: 15px 15px 0 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
}
.card-bodyy {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 200px;
  padding: 20px 0;
}
.card-body {
  flex-wrap: wrap;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 200px;
}
.card:hover {
  background: #1d3557;
  color: #fff;
  box-shadow: #1d3557 5px 5px 5px 5px;
  transition: 0.5s ease-in;
}
.ex-card:hover {
  background: #a8dadc;
  color: #fff;
  transition: 0.5s ease-in;
}
.card-text {
  width: 198.4px;
  margin: 0;
  font-size: 15px;
  /* font-style: italic; */
}
.font {
  font-style: italic;
}
.card-experience {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
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
  transition: 0.4s;
  text-decoration: none;
}
.btn:hover {
  background-color: #1d3557;
  color: #fff;
  transition: 1s;
  padding: 10px;
  font-size: small;
  margin: 10px;
}
.year {
  font-weight: bold;
}
h1 {
  margin-top: 25px;
}
.card-experience {
  font-size: 13px;
}
</style>
