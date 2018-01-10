<template>
  <div class="child-component">
    <h1>Hey I am Child Component</h1>
    {{ someProps }}

    <button @click="clickMe">Click Me to Fired Parent Method</button>
  </div>
</template>

<script>
export default {
  name: 'child-component',
  props: {
    someProps: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    clickMe () {
      this.$emit('someEvent', 'I pass param ya !!!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.child-component{
  background-color: #ddd;
}
</style>
