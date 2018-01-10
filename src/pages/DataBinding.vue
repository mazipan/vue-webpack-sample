<template>
  <div class="data-binding">
    <h1>Lets learn about Data Binding</h1>


    <div>One Way Data : {{ oneWayData }}</div>
    <div>Two Way Data : {{ twoWayData }}</div>

    <input type="text" v-model="twoWayData" placeholder="Type text to see data changes"/>

  </div>
</template>

<script>
export default {
  name: 'data-binding',
  data () {
    return {
      oneWayData: 'Hey, I am One Way Data Binding',
      twoWayData: 'Hey, I am Two Way Data Binding'
    }
  }
}
</script>

<style lang="scss" scoped>
.data-binding{
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
