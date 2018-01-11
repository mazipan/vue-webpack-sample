<template>
  <div>
    <h1>Lets learn Vuex</h1>
    {{ count }}
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'LeanVuex',
    computed: {
      ...mapGetters([
        'count'
      ])
    },
    methods: {
      handleClick () {
        // this.$store.commit('increment')
        this.$store.dispatch('doIncrement')
      }
    }
  }
</script>
