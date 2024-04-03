import { createStore } from 'vuex'
let dataUrl = 'https://keeefles.github.io/vuePortfolioData/data/'

export default createStore({
  // defining the variables.
  state: {
    home: null,
    about: null,
    education: null,
    experience: null,
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
    setExperience(state, value) {
      state.experience = value
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
      try {
      let res =  await fetch(dataUrl)
      let {home} = await res.json()
      context.commit('setHome', home)
      } catch (e) {
      console.error ('Error Fetching Data from .json file', e)
      }
    },
    async fetchAbout(context) {
    try {
      let res =  await fetch(dataUrl)
      let {about} = await res.json()
      context.commit('setAbout', about)
    } catch (e) {
      console.error ('Error Fetching Data from .json file', e)
      }
    },
    async fetchEducation(context) {
      try {
      let res =  await fetch(dataUrl)
      let {education} = await res.json()
      context.commit('setEducation', education)
    } catch (e) {
      console.error ('Error Fetching Data from .json file', e)
      }
    },
    async fetchExperience(context) {
      try {
      let res =  await fetch(dataUrl)
      let {experience} = await res.json()
      context.commit('setExperience', experience)
    } catch (e) {
      console.error ('Error Fetching Data from .json file', e)
      }
    },
    async fetchProjects(context) {
      try {
      let res =  await fetch(dataUrl)
      let {projects} = await res.json()
      context.commit('setProjects', projects)
    } catch (e) {
      console.error ('Error Fetching Data from .json file', e)
      }
    },
    async fetchSkills(context) {
      try {
      let res =  await fetch(dataUrl)
      let {skills} = await res.json()
      context.commit('setSkills', skills)
    } catch (e) {
      console.error ('Error Fetching Data from .json file', e)
      }
    },
    async fetchTestimonials(context) {
      try {
      let res =  await fetch(dataUrl)
      let {testimonials} = await res.json()
      context.commit('setTestimonials', testimonials)
    } catch (e) {
      console.error ('Error Fetching Data from .json file', e)
      }
    }
  },
  modules: {
  }
})