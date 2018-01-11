<template>
  <div class="props-and-event">
    <h1>Lets learn about Props and Events</h1>

    <div>{{ dataParent }}</div>

    <input type="text" v-model="dataParent" placeholder="Type text to see data changes"/>

    <ChildComponent
        :someProps="dataParent"
        @clickMe="someMethod">
    </ChildComponent>
  </div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent'

export default {
  name: 'data-binding',
  components: { ChildComponent },
  data () {
    return {
      dataParent: 'Hey I am parent data'
    }
  },
  methods: {
    someMethod (param) {
      alert(`${param}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.props-and-event{
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
