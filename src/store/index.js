import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const URL = 'https://ghibliapi.herokuapp.com/films'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    films: []
  },
  mutations: {
    increment (state) {
      state.count++
    },
    changeFilms (state, value) {
      state.films = value
    }
  },
  getters: {
    count: (state) => {
      return state.count
    },
    films: (state) => {
      return state.films
    }
  },
  actions: {
    doAlert: () => {
      alert('Hey you call me')
    },
    doIncrement: ({commit, dispatch}) => {
      commit('increment')
      dispatch('doAlert')
    },
    getFilms: ({commit}) => {
      alert('You call vuex action')
      axios.get(URL)
        .then(response => {
          commit('changeFilms', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})

export default store
