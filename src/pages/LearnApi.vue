<template>
  <div>
    <h1>Hey let's learn API</h1>

    <ul class="films">
      <li v-for="(film, index) in films" :key="film.id">
        {{index+1}} {{ film.title }} ({{ film.release_date }})
      </li>
    </ul>

    <button @click="callApi">CALL API</button>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'LearnApi',
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'films'
      ])
    },
    methods: {
      callApi () {
        this.$store.dispatch('getFilms')
      }
    }
  }
</script>

<style lang="scss" scoped>
.films{
  list-style: none;

  li {
    padding: 1em;
  }
}
</style>
