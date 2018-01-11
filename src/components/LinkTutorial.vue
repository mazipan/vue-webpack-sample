<template>
  <div class="links">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/props-and-events">Learn Props And Events</router-link>
    <router-link to="/learn-api">LearnApi</router-link>
    <router-link to="/learn-vuex">LearnVuex</router-link>
    <!-- <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/data-binding">Learn Data Binding</router-link></li>
      <li><router-link to="/computed-and-watch">Learn Computed And Watch</router-link></li>
      <li><router-link to="/props-and-events">Learn Props And Events</router-link></li>
    </ul> -->
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
