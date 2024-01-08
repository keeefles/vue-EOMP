import { createStore } from 'vuex'
let dataUrl = 'https://keeefles.github.io/vuePortfolioData/data/'

export default createStore({
  // defining the variables.
  state: {
    home: null,
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
    setHome(state, value) {
      state.home = value
    },
    setAbout(state, value) {
      state.about = value
    },
    setEducation(state, value) {
      state.education = value
    },
    setSkills(state, value) {
      state.skills = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    },
    setProjects(state, value) {
      state.projects = value
    }
  },
  actions: {
    async fetchHome(context) {
      let res =  await fetch(dataUrl)
      let {home} = await res.json()
      context.commit('setHome', home)
    },
    async fetchAbout(context) {
      let res =  await fetch(dataUrl)
      let {about} = await res.json()
      context.commit('setAbout', about)
    }
  },
  modules: {
  }
})