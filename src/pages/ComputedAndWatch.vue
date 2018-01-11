<template>
  <div class="computed-and-watch">
    <h1>Lets learn about Computed And Watch</h1>
    <input
      type="text"
      v-model="dataA"
      placeholder="Type text to see data changes"/>

    <div>dataA : {{ dataA }}</div>
    <div>dataB : {{ dataB }}</div>
    <div>dataC : {{ dataC }}</div>

  </div>
</template>

<script>
export default {
  name: 'computed-and-watch',
  data () {
    return {
      dataA: 'Data A',
      dataB: 'Data B'
    }
  },
  computed: {
    dataC () {
      return 'I am new data ' + this.dataA.toUpperCase() + ' ' + this.dataB.toUpperCase()
    }
  },
  watch: {
    dataA: (value) => {
      console.log(`dataA has change : ${value}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.computed-and-watch{
  ul{
    padding: 0;
    margin: 0;
  }
  input{
    padding: 1em;
    margin-top: 1em;
    font-size: 14px;
    width: 50%;
  }
}
</style>
