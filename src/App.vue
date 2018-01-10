<template>
  <div id="app">
    <img src="./assets/logo.png" style="height: 50px;">

    <div>
      <a target="_blank" href="https://github.com/mazipan/vue-webpack-sample">
        See Source Code Github
      </a>
    </div>

    <router-view/>
    <LinkTutorial/>
  </div>
</template>

<script>
import LinkTutorial from 'components/LinkTutorial'

export default {
  name: 'app',
  components: { LinkTutorial }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
