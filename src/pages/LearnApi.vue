<template>
  <div>
    <h1>Hey let's learn API</h1>

    <h3>List of Studio Ghibli's films</h3>
    <ul class="films">
      <li v-for="(film, index) in films" :key="film.id">

        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {{ film.title }} ({{ film.release_date }})
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              {{ film.description }}
            </div>
          </div>
        </div>
      </li>
    </ul>

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
    mounted () {
      this.callApi()
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

  .content{
    text-align: left;
  }
}
</style>
