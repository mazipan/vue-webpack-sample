<template>
  <div>
    <h1>Hey let's learn API</h1>

    <h3>List of Studio Ghibli's films</h3>
    <ul class="films">
      <li v-for="film in films" :key="film.id">

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
  import axios from 'axios'
  const URL = 'https://ghibliapi.herokuapp.com/films'

  export default {
    name: 'LearnApi',
    data () {
      return {
        films: []
      }
    },
    mounted () {
      this.callApi()
    },
    methods: {
      callApi () {
        axios.get(URL)
        .then(response => {
          thi.films = response.data
        })
        .catch(error => {
          console.log(error)
        })
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
