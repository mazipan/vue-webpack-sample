<template>
  <div class="links">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/data-binding">Learn Data Binding</router-link></li>
      <li><router-link to="/computed-and-watch">Learn Computed And Watch</router-link></li>
      <li><router-link to="/props-and-events">Learn Props And Events</router-link></li>
      <li><router-link to="/learn-api-no-vuex">Learn Api</router-link></li>
      <li><router-link to="/learn-vuex">LearnVuex</router-link></li>
      <li><router-link to="/learn-api-vuex">Learn Api Vuex</router-link></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'links',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.links{
  ul{
    padding: 0;
    margin: 0;
  }
}
</style>
