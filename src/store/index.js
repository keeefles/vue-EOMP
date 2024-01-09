import { createStore } from 'vuex'
let dataUrl = 'https://keeefles.github.io/vuePortfolioData/data/'

export default createStore({
  // defining the variables.
  state: {
    home: null,
    about: null,
    resume: null,
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
    setResume(state, value) {
      state.resume = value
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
    },
    async fetchResume(context) {
      let res =  await fetch(dataUrl)
      let {resume} = await res.json()
      context.commit('setResume', resume)
    },
    async fetchProjects(context) {
      let res =  await fetch(dataUrl)
      let {projects} = await res.json()
      context.commit('setProjects', projects)
    },
    async fetchTestimonials(context) {
      let res =  await fetch(dataUrl)
      let {testimonials} = await res.json()
      context.commit('setTestimonials', testimonials)
    }
  },
  modules: {
  }
})